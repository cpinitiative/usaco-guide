import {
  ExecutionVerdict,
  ProblemSubmissionResult,
  ProblemSubmissionTestCaseResult,
} from '../models/groups/problem';

/**
 * The online judge used by the USACO Guide IDE.
 * https://github.com/cpinitiative/online-judge-modal
 */
export const ONLINE_JUDGE_URL =
  'https://thecodingwizard--usaco-judge-fastapi-app.modal.run';

export type OnlineJudgeLanguage = 'cpp' | 'java' | 'py';

// Match USACO's flags (https://usaco.org/index.php?page=instructions)
const COMPILER_OPTIONS: Record<OnlineJudgeLanguage, string> = {
  cpp: '-std=c++17 -O2',
  java: '',
  py: '',
};

const JUDGE_LANGUAGE: Record<OnlineJudgeLanguage, string> = {
  cpp: 'cpp',
  java: 'java21',
  py: 'py12',
};

const JUDGE_VERDICT_TO_VERDICT: Record<string, ExecutionVerdict> = {
  accepted: 'AC',
  wrong_answer: 'WA',
  time_limit_exceeded: 'TLE',
  memory_limit_exceeded: 'MLE',
  runtime_error: 'RTE',
};

/** Converts the judge's "m:ss.xx" wall time to seconds, e.g. "0.12". */
function wallTimeToSeconds(wallTime: string | undefined): string {
  if (!wallTime) return '';
  const parts = wallTime.split(':').map(Number);
  if (parts.some(isNaN)) return wallTime;
  const seconds = parts.reduce((acc, cur) => acc * 60 + cur, 0);
  return seconds.toFixed(2);
}

function parseTestCaseResult(data: any): ProblemSubmissionTestCaseResult {
  return {
    verdict:
      'internal_error' in data
        ? 'IE'
        : (JUDGE_VERDICT_TO_VERDICT[data.verdict] ?? 'IE'),
    time: wallTimeToSeconds(data.wall_time),
    memory: data.memory_usage ?? '',
    // The judge doesn't send test data back
    input: '',
    expectedOutput: '',
    stdout: data.file_output ?? data.stdout ?? '',
    stderr: data.stderr ?? data.internal_error ?? '',
  };
}

/** Parses a text/event-stream body, calling onEvent for each event. */
async function readEventStream(
  body: ReadableStream<Uint8Array>,
  onEvent: (event: string, data: string) => void
) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  const flush = (chunk: string) => {
    let event = 'message';
    const dataLines: string[] = [];
    for (const line of chunk.split('\n')) {
      if (line.startsWith('event:')) event = line.slice(6).trim();
      else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim());
    }
    if (dataLines.length > 0) onEvent(event, dataLines.join('\n'));
  };
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, '\n');
    let separator;
    while ((separator = buffer.indexOf('\n\n')) !== -1) {
      flush(buffer.slice(0, separator));
      buffer = buffer.slice(separator + 2);
    }
  }
  if (buffer.trim()) flush(buffer);
}

/**
 * Submits code to the online judge and streams back results. onUpdate is
 * called with the latest result every time a test case finishes; the final
 * result (status "done") is also returned.
 *
 * problemID is a USACO Guide problem ID, e.g. "usaco-1251" or "cses-1164".
 */
export async function judgeSubmission({
  submissionID,
  problemID,
  language,
  sourceCode,
  onUpdate,
}: {
  submissionID: string;
  problemID: string;
  language: OnlineJudgeLanguage;
  sourceCode: string;
  onUpdate: (result: ProblemSubmissionResult) => void;
}): Promise<ProblemSubmissionResult> {
  let result: ProblemSubmissionResult = {
    timestamp: Date.now(),
    submissionID,
    status: 'compiling',
    testCases: [],
    problemID,
    language,
    filename: '',
    sourceCode,
  };
  const update = (changes: Partial<ProblemSubmissionResult>) => {
    result = { ...result, ...changes };
    onUpdate(result);
  };
  const finish = (
    verdict: ExecutionVerdict,
    changes: Partial<ProblemSubmissionResult> = {}
  ) => {
    update({ status: 'done', verdict, ...changes });
    return result;
  };
  onUpdate(result);

  let response: Response;
  try {
    response = await fetch(`${ONLINE_JUDGE_URL}/judge`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        problem_id: problemID,
        source_code: sourceCode,
        compiler_options: COMPILER_OPTIONS[language],
        language: JUDGE_LANGUAGE[language],
      }),
    });
  } catch (e) {
    return finish('IE', {
      message: 'Could not reach the online judge.',
      debugData: String(e),
    });
  }

  if (!response.ok || !response.body) {
    let message = `The online judge returned status ${response.status}.`;
    try {
      const data = await response.json();
      if (typeof data?.detail === 'string') message = data.detail;
    } catch {
      // not JSON; keep the default message
    }
    return finish('IE', { message, debugData: '' });
  }

  let compileError: string | null = null;
  let judgeError: string | null = null;
  await readEventStream(response.body, (event, data) => {
    if (event === 'compile') {
      const compileOutput = JSON.parse(data);
      // The judge sends compile_output, which has a non-zero exit code if
      // compilation failed.
      if (compileOutput?.exit_code !== 0 && compileOutput?.exit_code != null) {
        compileError = [compileOutput.stdout, compileOutput.stderr]
          .filter(Boolean)
          .join('\n');
      } else {
        update({ status: 'executing' });
      }
    } else if (event === 'execute') {
      const testCase = JSON.parse(data);
      const testCases = [...result.testCases];
      while (testCases.length < testCase.total_test_cases) testCases.push(null);
      testCases[testCase.test_case] = parseTestCaseResult(testCase);
      update({ status: 'executing', testCases });
    } else if (event === 'error') {
      judgeError = data;
    }
  });

  if (compileError !== null) return finish('CE', { message: compileError });
  if (judgeError !== null || result.testCases.length === 0) {
    return finish('IE', {
      message: 'An unknown internal error occurred.',
      debugData: judgeError ?? '',
    });
  }
  if (result.testCases.some(tc => tc === null)) {
    return finish('IE', {
      message: 'The online judge stopped before grading every test case.',
      debugData: '',
    });
  }
  return finish(
    result.testCases.find(tc => tc!.verdict !== 'AC')?.verdict ?? 'AC'
  );
}

/** Fraction of test cases passed, used as the submission's score. */
export function getSubmissionScore(result: ProblemSubmissionResult): number {
  if (result.testCases.length === 0) return 0;
  return (
    result.testCases.filter(tc => tc?.verdict === 'AC').length /
    result.testCases.length
  );
}
