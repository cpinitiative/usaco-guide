import { execFile, execFileSync, spawnSync } from 'child_process';
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from 'fs';
import { readFile } from 'fs/promises';
import { availableParallelism, tmpdir } from 'os';
import path, { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

/**
 * Checks the code snippets in .mdx files: C++ is compiled with g++
 * -fsyntax-only, Python is parsed.
 *
 * Only C++ snippets that look like a whole program are compiled — the block
 * has to contain both an #include and a main (see MAIN). Fragments illustrating one
 * function, and snippets including a header that ships with the problem such
 * as grader.h, are skipped; neither is meant to compile alone. Python is
 * parsed rather than run, so fragments are fine as long as they stand on their
 * own, and blocks that open mid-indentation are skipped.
 *
 * Pass the files to check, --all to sweep every .mdx under content/ and
 * solutions/, or nothing to check the ones this branch changed (against
 * origin/master, or BASE_REF when set).
 *
 * Snippets are checked JOBS at a time, defaulting to one per core.
 */

const execFileAsync = promisify(execFile);

const STANDARD = process.env.CXX_STANDARD ?? 'c++20';

/**
 * Diagnostics promoted to errors. Deliberately a short list: g++ has plenty
 * more to say about this corpus, but almost all of it is noise here. Of the 76
 * warnings the wider set produced, 46 were not defects -- every -Wparentheses
 * hit was code that already means what it looks like (`1 << j - 1` really is
 * `1 << (j-1)`), every -Wreorder hit initialised from a constructor parameter
 * rather than another member, and -Wshift-count-overflow fired on the module
 * that exists to demonstrate that `1 << 32` overflows.
 *
 * These two are not like that:
 *
 *   -Wvla          Adding_Solution.mdx bans variable-length arrays outright,
 *                  and reviewers were still catching them by hand.
 *   -Wreturn-type  Falling off the end of a non-void function is undefined
 *                  behaviour, whatever the caller does with the result.
 *
 * Both were clean at zero remaining occurrences when this was introduced, so a
 * new hit is a new defect. The checker only compiles snippets that contain both
 * an #include and a main, which is why the deliberate VLA in Intro_DS.mdx -- a
 * bare fragment, shown precisely to say not to write one -- needs no opt-out.
 */
const ERRORS = ['-Werror=vla', '-Werror=return-type'];
/** Each check is its own process, so the pool can be as wide as the machine. */
const JOBS = Number(process.env.JOBS) || availableParallelism();
const PYTHON = process.env.PYTHON ?? 'python3';

/** Reports a syntax error as `file:line:col: message`, without a traceback. */
const PARSE_PYTHON = `
import ast, sys
path = sys.argv[1]
try:
    ast.parse(open(path).read(), path)
except SyntaxError as err:
    print(f'{path}:{err.lineno}:{err.offset}: {err.msg}', file=sys.stderr)
    if err.text:
        print('    ' + err.text.rstrip(), file=sys.stderr)
    sys.exit(1)
`;

/**
 * Compilers to try, best first. Homebrew installs GCC as g++-15 and leaves
 * g++ pointing at Apple clang, which has no <bits/stdc++.h>, so a bare g++
 * is not necessarily the one that can check these snippets.
 */
const CANDIDATES = process.env.CXX
  ? [process.env.CXX]
  : ['g++', 'g++-15', 'g++-14', 'g++-13', 'g++-12'];

/**
 * Precompiling <bits/stdc++.h> takes a compile from ~0.7s to ~0.15s, but costs
 * ~1.8s to build, so it only pays off past a handful of snippets. A pull
 * request usually touches one or two files; a sweep over the whole guide is
 * where it matters, taking the compiling from around eleven minutes to three.
 */
const PCH_WORTH_IT_ABOVE = 8;

/** Snippets that only build on x86, for the intrinsics or the target pragma. */
const X86_ONLY = /immintrin\.h|target\s*\(\s*"[^"]*(avx|sse|bmi|popcnt)/i;

/**
 * How a C++ snippet's entry point may be spelled. The return type is optional
 * and may run to several words, so this takes any run of type keywords: plain
 * `int main()`, the `signed main()` that `#define int long long` forces,
 * `long long main()`, a fixed-width `int32_t main()`, and a bare `main()`.
 *
 * A bare `main()` is not valid C++ -- implicit int is long gone -- which is a
 * reason to compile the snippet and say so, not to quietly skip it.
 */
const MAIN =
  /^\s*(?:(?:signed|unsigned|int|long|short|void|auto|int32_t|int64_t)\s+)+main\s*\(|^\s*main\s*\([^;)]*\)\s*\{/m;

type Lang = 'cpp' | 'py';

type Snippet = {
  file: string;
  /** 1-indexed line in the .mdx where the snippet's code starts */
  line: number;
  code: string;
  lang: Lang;
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

async function main() {
  const args = process.argv.slice(2);
  const files = args.includes('--all')
    ? allMdxFiles()
    : args.length
      ? args
      : changedMdxFiles();

  const mdx = files.filter(f => f.endsWith('.mdx'));
  if (mdx.length === 0) {
    console.log('No .mdx files to check.');
    return;
  }

  let snippets: Snippet[] = [];
  for (const file of mdx) {
    snippets.push(...extractSnippets(file, await readFile(file, 'utf8')));
  }

  if (snippets.length === 0) {
    console.log(`No snippets to check in ${mdx.length} file(s).`);
    return;
  }

  const dir = mkdtempSync(join(tmpdir(), 'code-snippets-'));
  const failures: { snippet: Snippet; error: string }[] = [];
  try {
    const cxx = pickCompiler(dir);

    // Without GCC's catch-all header the snippets using it fail for a reason
    // that says nothing about the snippet, so leave those to CI.
    if (!hasBitsStdcxx(cxx, dir)) {
      const before = snippets.length;
      snippets = snippets.filter(s => !s.code.includes('bits/stdc++.h'));
      const skipped = before - snippets.length;
      if (skipped > 0) {
        console.warn(
          `${cxx} has no <bits/stdc++.h>, so ${skipped} snippet${skipped === 1 ? '' : 's'} ` +
            `using it ${skipped === 1 ? 'was' : 'were'} skipped. Install GCC to check ` +
            `${skipped === 1 ? 'it' : 'them'} locally.`
        );
      }
    }

    // Nothing to learn from compiling x86 intrinsics on Apple Silicon; CI runs
    // on x86 and judges them there.
    if (process.arch !== 'x64' && process.arch !== 'ia32') {
      const before = snippets.length;
      snippets = snippets.filter(s => !X86_ONLY.test(s.code));
      const skipped = before - snippets.length;
      if (skipped > 0) {
        console.warn(
          `Skipped ${skipped} x86-only snippet${skipped === 1 ? '' : 's'} on ${process.arch}.`
        );
      }
    }

    const cpp = snippets.filter(s => s.lang === 'cpp').length;
    const py = snippets.length - cpp;
    console.log(
      `Checking ${cpp} C++ snippet${cpp === 1 ? '' : 's'} with ${cxx} -std=${STANDARD} ` +
        `and ${py} Python snippet${py === 1 ? '' : 's'} with ${PYTHON}, ` +
        `in ${mdx.length} file${mdx.length === 1 ? '' : 's'}, ` +
        `${Math.min(JOBS, snippets.length)} at a time...`
    );

    const include = precompileStdcxx(cxx, dir, snippets);

    const jobs = snippets.map((snippet, i) => {
      const source = join(dir, `snippet${i}.${snippet.lang}`);
      writeFileSync(source, snippet.code);
      return { snippet, source };
    });

    // Compiling is what costs, and each snippet is independent, so run a pool
    // of them. Failures come back out of order, so they carry their index and
    // are sorted afterwards to keep the report stable across runs.
    const found: { at: number; snippet: Snippet; error: string }[] = [];
    let next = 0;
    await Promise.all(
      Array.from({ length: Math.min(JOBS, jobs.length) }, async () => {
        for (let at = next++; at < jobs.length; at = next++) {
          const { snippet, source } = jobs[at];
          const [command, args] =
            snippet.lang === 'cpp'
              ? [
                  cxx,
                  [
                    `-std=${STANDARD}`,
                    ...include,
                    ...ERRORS,
                    '-fsyntax-only',
                    source,
                  ],
                ]
              : [PYTHON, ['-c', PARSE_PYTHON, source]];
          try {
            await execFileAsync(command, args, { maxBuffer: 32 << 20 });
          } catch (err) {
            const { stderr } = err as { stderr?: string | Buffer };
            found.push({
              at,
              snippet,
              error: rewritePaths(String(stderr ?? err), source, snippet),
            });
          }
        }
      })
    );
    found.sort((a, b) => a.at - b.at);
    failures.push(...found.map(({ snippet, error }) => ({ snippet, error })));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }

  if (failures.length === 0) {
    console.log('All snippets check out.');
    return;
  }

  for (const { snippet, error } of failures) {
    console.error(
      `\n${snippet.file}:${snippet.line} — snippet does not build\n`
    );
    console.error(error.trimEnd());
  }
  console.error(`\n${failures.length} of ${snippets.length} snippets failed.`);
  process.exit(1);
}

/** Every .mdx under content/ and solutions/, tracked by git. */
function allMdxFiles(): string[] {
  const out = execFileSync(
    'git',
    ['ls-files', '-z', 'content/**/*.mdx', 'solutions/**/*.mdx'],
    { encoding: 'utf8', maxBuffer: 32 << 20 }
  );
  return out.split('\0').filter(Boolean);
}

/** .mdx files under content/ and solutions/ that differ from the base branch. */
function changedMdxFiles(): string[] {
  const base = process.env.BASE_REF ?? 'origin/master';
  const out = execFileSync(
    'git',
    ['diff', '--name-only', '--diff-filter=d', `${base}...HEAD`],
    { encoding: 'utf8' }
  );
  return out
    .split('\n')
    .map(f => f.trim())
    .filter(f => f.endsWith('.mdx'))
    .filter(f => f.startsWith('content/') || f.startsWith('solutions/'));
}

export function extractSnippets(file: string, source: string): Snippet[] {
  const snippets: Snippet[] = [];
  const lines = source.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const fence = lines[i].trim();
    if (fence !== '```cpp' && fence !== '```py') continue;
    const lang: Lang = fence === '```cpp' ? 'cpp' : 'py';
    const start = i + 1;
    let end = start;
    while (end < lines.length && lines[end].trim() !== '```') end++;
    const code = lines.slice(start, end).join('\n');
    i = end;

    if (lang === 'cpp') {
      // A whole program, not a fragment illustrating one function. See MAIN
      // for the entry-point spellings that count.
      if (!code.includes('#include') || !MAIN.test(code)) continue;
      // Needs a header that ships with the problem, e.g. grader.h. Quoting
      // the GCC catch-all is just a style, not a missing header -- seven whole
      // programs were being skipped over that.
      if (/^\s*#include\s*"(?!bits\/stdc\+\+\.h")/m.test(code)) continue;
    } else {
      // An excerpt lifted out of a function, which will not parse alone.
      const first = code.split('\n').find(l => l.trim() !== '');
      if (first === undefined || /^\s/.test(first)) continue;
    }

    snippets.push({
      file: relative(process.cwd(), file),
      line: start + 1,
      code,
      lang,
    });
  }
  return snippets;
}

/** The first candidate that exists, preferring one with <bits/stdc++.h>. */
function pickCompiler(dir: string): string {
  const installed = CANDIDATES.filter(cxx => {
    try {
      execFileSync(cxx, ['--version'], { stdio: 'pipe' });
      return true;
    } catch {
      return false;
    }
  });
  if (installed.length === 0) {
    throw new Error(`No C++ compiler found (tried ${CANDIDATES.join(', ')}).`);
  }
  return installed.find(cxx => hasBitsStdcxx(cxx, dir)) ?? installed[0];
}

/**
 * Builds a precompiled <bits/stdc++.h> when enough snippets need it, and
 * returns the flags to compile against it. Best effort: on any failure the
 * snippets are compiled the slow way instead, and a stale or mismatched .gch
 * is ignored by GCC rather than trusted, so this cannot change a verdict.
 */
function precompileStdcxx(
  cxx: string,
  dir: string,
  snippets: Snippet[]
): string[] {
  const needed = snippets.filter(s => s.code.includes('bits/stdc++.h')).length;
  if (needed <= PCH_WORTH_IT_ABOVE) return [];

  try {
    const header = locateStdcxxHeader(cxx);
    if (header === null) return [];

    const pchDir = join(dir, 'pch');
    const copy = join(pchDir, 'bits', 'stdc++.h');
    mkdirSync(join(pchDir, 'bits'), { recursive: true });
    copyFileSync(header, copy);

    // Same compiler and same -std as the snippets, or GCC ignores the result.
    execFileSync(
      cxx,
      [`-std=${STANDARD}`, '-x', 'c++-header', copy, '-o', `${copy}.gch`],
      {
        stdio: 'pipe',
      }
    );
    console.log(`Precompiled <bits/stdc++.h> for ${needed} snippets.`);
    return ['-I', pchDir];
  } catch {
    // An optimization; compiling the slow way is always correct.
    return [];
  }
}

/** The path to the compiler's own <bits/stdc++.h>, or null if it has none. */
function locateStdcxxHeader(cxx: string): string | null {
  // -H traces every header it opens to stderr, the outermost one first.
  const trace = spawnSync(
    cxx,
    [`-std=${STANDARD}`, '-E', '-H', '-x', 'c++', '-'],
    {
      input: '#include <bits/stdc++.h>\n',
      encoding: 'utf8',
    }
  );
  const line = (trace.stderr ?? '')
    .split('\n')
    .find(l => /^\.+ .*[/\\]bits[/\\]stdc\+\+\.h$/.test(l));
  return line === undefined ? null : line.replace(/^\.+ /, '');
}

/** Whether this compiler ships the GCC catch-all header the snippets use. */
function hasBitsStdcxx(cxx: string, dir: string): boolean {
  const probe = join(dir, 'probe.cpp');
  writeFileSync(probe, '#include <bits/stdc++.h>\nint main() {}\n');
  try {
    execFileSync(cxx, [`-std=${STANDARD}`, '-fsyntax-only', probe], {
      stdio: 'pipe',
    });
    return true;
  } catch {
    return false;
  }
}

/** Point diagnostics back at the .mdx line the snippet came from. */
function rewritePaths(
  stderr: string,
  source: string,
  snippet: Snippet
): string {
  const name = path.basename(source);
  const at = `${escape(source)}|${escape(name)}`;
  return stderr
    .replace(
      new RegExp(`(?:${at}):(\\d+)`, 'g'),
      (_, line: string) => `${snippet.file}:${snippet.line + Number(line) - 1}`
    )
    .replace(
      new RegExp(`File "(?:${at})", line (\\d+)`, 'g'),
      (_, line: string) =>
        `File "${snippet.file}", line ${snippet.line + Number(line) - 1}`
    );
}

function escape(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
