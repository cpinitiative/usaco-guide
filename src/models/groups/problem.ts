import { Timestamp } from 'firebase/firestore';

export interface ProblemData {
  id: string;
  postId: string;
  name: string;
  body: string;
  source: string;
  points: number;
  difficulty: string;
  hints: ProblemHint[];
  solution: string | null;
  isDeleted: boolean;
}
export type GroupProblemData = ProblemData &
  (
    | {
        usacoGuideId: string;
        solutionReleaseMode: 'due-date' | 'now' | 'never';
      }
    | {
        usacoGuideId: string;
        solutionReleaseMode: 'custom';
        solutionReleaseTimestamp: Timestamp;
      }
  );

export type ProblemHint = {
  // /**
  //  * How many points you lose for activating the hint
  //  */
  // penalty: number;
  /**
   * Unique ID for the hint
   */
  id: string;
  /**
   * Publicly visible hint name, optional
   */
  name?: string;
  /**
   * Hint content, markdown format
   */
  body: string;
};

// Temporarily taken from online-judge repo
export interface ProblemSubmissionResult {
  timestamp: number;
  submissionID: string;
  status: 'compiling' | 'executing' | 'done';
  verdict?: ExecutionVerdict;
  testCases: (ProblemSubmissionTestCaseResult | null)[];

  problemID: string;
  language: string;
  filename: string;
  sourceCode: string; // gzipped in dynamodb
  message?: string; // gzipped in dynamodb. used either for compiling or internal error.
  debugData?: string; // gzipped in dynamodb. optionally provided for internal_error
}

export interface ProblemSubmissionTestCaseResult {
  verdict: ExecutionVerdict;
  time: string;
  memory: string;

  // each of these is truncated to 4kb then gzipped in dynamodb
  input: string;
  expectedOutput: string;
  stdout: string;
  stderr: string;
}

export type ExecutionVerdict =
  | 'AC'
  | 'WA'
  | 'RTE'
  | 'MLE'
  | 'TLE'
  | 'CE'
  | 'IE'; // IE is internal error

export interface FirebaseSubmission {
  language: string;
  problemID: string;
  score: number;
  submissionID: string;
  userID: string;
  type: string;
  verdict: string;
  timestamp: any; // milliseconds
}

export const verdictToSymbol: { [key in ExecutionVerdict]: string } = {
  AC: '*',
  WA: 'x',
  RTE: '!',
  MLE: 'm',
  TLE: 't',
  CE: 'c',
  IE: '?',
};

export const submissionTextColor: {
  [key in ExecutionVerdict | 'Pending']: string;
} = {
  AC: 'text-green-800 dark:text-green-200',
  WA: 'text-red-800 dark:text-red-200',
  TLE: 'text-red-800 dark:text-red-200',
  MLE: 'text-red-800 dark:text-red-200',
  RTE: 'text-red-800 dark:text-red-200',
  CE: 'text-red-800 dark:text-red-200',
  IE: 'text-red-800 dark:text-red-200',
  Pending: 'text-gray-800 dark:text-gray-200',
};

export const submissionCircleColor: {
  [key in ExecutionVerdict | 'Pending']: string;
} = {
  AC: 'bg-green-400 dark:bg-green-500',
  WA: 'bg-red-400 dark:bg-red-500',
  TLE: 'bg-red-400 dark:bg-red-500',
  MLE: 'bg-red-400 dark:bg-red-500',
  RTE: 'bg-red-400 dark:bg-red-500',
  CE: 'bg-red-400 dark:bg-red-500',
  IE: 'bg-red-400 dark:bg-red-500',
  Pending: 'bg-gray-400 dark:bg-gray-500',
};

export const submissionCircleBorderColor: {
  [key in ExecutionVerdict | 'Pending']: string;
} = {
  AC: 'bg-green-100 dark:bg-green-800',
  WA: 'bg-red-100 dark:bg-red-800',
  TLE: 'bg-red-100 dark:bg-red-800',
  MLE: 'bg-red-100 dark:bg-red-800',
  RTE: 'bg-red-100 dark:bg-red-800',
  CE: 'bg-red-100 dark:bg-red-800',
  IE: 'bg-red-100 dark:bg-red-800',
  Pending: 'bg-gray-100 dark:bg-gray-800',
};

export const getSubmissionTimestampString = (submission: FirebaseSubmission) =>
  new Date(submission?.timestamp).toString().substr(0, 24);
export const getSubmissionStatus = (submission: FirebaseSubmission) => {
  return submission.verdict;
};
export const getSubmissionEarnedPoints = (
  submission: FirebaseSubmission,
  problem: ProblemData
) => {
  return parseFloat((submission.score * problem.points).toFixed(1));
};
export const getEarnedPointsForProblem = (
  problem: ProblemData,
  submissions: FirebaseSubmission[]
) => {
  return submissions.reduce(
    (oldScore, submission) =>
      getSubmissionStatus(submission) !== 'Pending'
        ? Math.max(oldScore, getSubmissionEarnedPoints(submission, problem))
        : oldScore,
    0
  );
};
