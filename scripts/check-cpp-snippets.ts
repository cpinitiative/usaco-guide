import { execFileSync } from 'child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'fs';
import { readFile } from 'fs/promises';
import { tmpdir } from 'os';
import path, { join, relative } from 'path';
import { fileURLToPath } from 'url';

/**
 * Syntax-checks the C++ snippets in .mdx files with g++.
 *
 * Only snippets that look like a whole program are checked: a ```cpp block
 * has to contain both an #include and an int main(. Fragments that illustrate
 * one function, and snippets that include a local header such as grader.h,
 * are skipped — neither is meant to compile on its own.
 *
 * Pass the files to check, or nothing to check the ones this branch changed
 * (against origin/master, or BASE_REF when set).
 */

const STANDARD = process.env.CXX_STANDARD ?? 'c++17';

/**
 * Compilers to try, best first. Homebrew installs GCC as g++-15 and leaves
 * g++ pointing at Apple clang, which has no <bits/stdc++.h>, so a bare g++
 * is not necessarily the one that can check these snippets.
 */
const CANDIDATES = process.env.CXX
  ? [process.env.CXX]
  : ['g++', 'g++-15', 'g++-14', 'g++-13', 'g++-12'];

type Snippet = {
  file: string;
  /** 1-indexed line in the .mdx where the snippet's code starts */
  line: number;
  code: string;
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

async function main() {
  const files = process.argv.slice(2).length
    ? process.argv.slice(2)
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
    console.log(`No C++ snippets to check in ${mdx.length} changed file(s).`);
    return;
  }

  const dir = mkdtempSync(join(tmpdir(), 'cpp-snippets-'));
  const failures: { snippet: Snippet; error: string }[] = [];
  try {
    const cxx = pickCompiler(dir);
    console.log(
      `Checking ${snippets.length} C++ snippet${snippets.length === 1 ? '' : 's'} ` +
        `in ${mdx.length} file${mdx.length === 1 ? '' : 's'} with ${cxx} -std=${STANDARD}...`
    );

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

    for (const [i, snippet] of snippets.entries()) {
      const source = join(dir, `snippet${i}.cpp`);
      writeFileSync(source, snippet.code);
      try {
        execFileSync(cxx, [`-std=${STANDARD}`, '-fsyntax-only', source], {
          stdio: 'pipe',
        });
      } catch (err) {
        failures.push({
          snippet,
          error: rewritePaths(
            String((err as { stderr?: Buffer }).stderr ?? err),
            source,
            snippet
          ),
        });
      }
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }

  if (failures.length === 0) {
    console.log('All snippets compile.');
    return;
  }

  for (const { snippet, error } of failures) {
    console.error(
      `\n${snippet.file}:${snippet.line} — snippet does not compile\n`
    );
    console.error(error.trimEnd());
  }
  console.error(
    `\n${failures.length} of ${snippets.length} snippets failed to compile.`
  );
  process.exit(1);
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
    if (lines[i].trim() !== '```cpp') continue;
    const start = i + 1;
    let end = start;
    while (end < lines.length && lines[end].trim() !== '```') end++;
    const code = lines.slice(start, end).join('\n');
    i = end;

    // A whole program, not a fragment illustrating one function.
    if (!code.includes('#include') || !code.includes('int main(')) continue;
    // Needs a header that ships with the problem, e.g. grader.h.
    if (/^\s*#include\s*"/m.test(code)) continue;

    snippets.push({
      file: relative(process.cwd(), file),
      line: start + 1,
      code,
    });
  }
  return snippets;
}

/** Point compiler diagnostics back at the .mdx line the snippet came from. */
function rewritePaths(
  stderr: string,
  source: string,
  snippet: Snippet
): string {
  const name = path.basename(source);
  return stderr.replace(
    new RegExp(`(?:${escape(source)}|${escape(name)}):(\\d+)`, 'g'),
    (_, line: string) => `${snippet.file}:${snippet.line + Number(line) - 1}`
  );
}

function escape(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
