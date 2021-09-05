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
  submissionType: SubmissionType;
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

export enum SubmissionType {
  SELF_GRADED = 'Self Graded',
  ONLINE_JUDGE = 'Online Judge',
}

export type Submission = {
  id: string;
  problemId: string;
  userId: string;
  code: string;
  language: 'cpp' | 'java' | 'py';
  timestamp: Timestamp;
  result: number;
  status: ExecutionStatus;
} & (
  | {
      type: SubmissionType.SELF_GRADED;
    }
  | ({
      type: SubmissionType.ONLINE_JUDGE;
      errorMessage?: string;
      judgeProblemId: string;
      gradingStatus: 'waiting' | 'in_progress' | 'done' | 'error';
    } & (
      | {
          compilationError: false;
          testCases?: TestCaseResult[];
        }
      | {
          compilationError: true;
          compilationErrorMessage: string;
        }
      // NOTE: while gradingStatus is waiting compilationError is undefined, not false or true
      // but I can't get the typescript working >:-(
    ))
);

export enum ExecutionStatus {
  AC = 'AC',
  WA = 'WA',
  TLE = 'TLE',
  MLE = 'MLE',
  RTE = 'RTE',
  CE = 'CE',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  PENDING = 'Pending',
}

export enum TestResultError {
  COMPILE_TIMEOUT = 'compile_timeout',
  COMPILE_ERROR = 'compile_error',
  RUNTIME_ERROR = 'runtime_error',
  TIME_LIMIT_EXCEEDED = 'time_limit_exceeded',
  EMPTY_MISSING_OUTPUT = 'empty_missing_output',
  WRONG_ANSWER = 'wrong_answer',
  INTERNAL_ERROR = 'internal_error',
}
export type TestCaseResult = { caseId: number } & (
  | {
      pass: false;
      error: TestResultError;
    }
  | {
      pass: true;

      // in milliseconds:
      time: number;
      wallTime: number;

      // in kb?
      memory: number;
    }
);

export const getTestCaseSymbol = (testCase: TestCaseResult): string => {
  if (testCase.pass === true) {
    return '*';
  }
  switch (testCase.error) {
    case TestResultError.COMPILE_TIMEOUT:
    case TestResultError.COMPILE_ERROR:
      return 'c';
    case TestResultError.RUNTIME_ERROR:
      return '!';
    case TestResultError.TIME_LIMIT_EXCEEDED:
      return 't';
    case TestResultError.EMPTY_MISSING_OUTPUT:
      return 'e';
    case TestResultError.WRONG_ANSWER:
      return 'x';
    case TestResultError.INTERNAL_ERROR:
      return '?';
  }
};

export const submissionTextColor: { [key in ExecutionStatus]: string } = {
  AC: 'text-green-800 dark:text-green-200',
  WA: 'text-red-800 dark:text-red-200',
  TLE: 'text-red-800 dark:text-red-200',
  MLE: 'text-red-800 dark:text-red-200',
  RTE: 'text-red-800 dark:text-red-200',
  CE: 'text-red-800 dark:text-red-200',
  INTERNAL_ERROR: 'text-red-800 dark:text-red-200',
  Pending: 'text-gray-800 dark:text-gray-200',
};

export const submissionCircleColor: { [key in ExecutionStatus]: string } = {
  AC: 'bg-green-400 dark:bg-green-500',
  WA: 'bg-red-400 dark:bg-red-500',
  TLE: 'bg-red-400 dark:bg-red-500',
  MLE: 'bg-red-400 dark:bg-red-500',
  RTE: 'bg-red-400 dark:bg-red-500',
  CE: 'bg-red-400 dark:bg-red-500',
  INTERNAL_ERROR: 'bg-red-400 dark:bg-red-500',
  Pending: 'bg-gray-400 dark:bg-gray-500',
};

export const submissionCircleBorderColor: {
  [key in ExecutionStatus]: string;
} = {
  AC: 'bg-green-100 dark:bg-green-800',
  WA: 'bg-red-100 dark:bg-red-800',
  TLE: 'bg-red-100 dark:bg-red-800',
  MLE: 'bg-red-100 dark:bg-red-800',
  RTE: 'bg-red-100 dark:bg-red-800',
  CE: 'bg-red-100 dark:bg-red-800',
  INTERNAL_ERROR: 'bg-red-100 dark:bg-red-800',
  Pending: 'bg-gray-100 dark:bg-gray-800',
};

export const getSubmissionTimestampString = (submission: Submission) =>
  submission?.timestamp?.toDate().toString().substr(0, 24);
export const getSubmissionStatus = (submission: Submission) => {
  return submission.status;
};
export const getSubmissionEarnedPoints = (
  submission: Submission,
  problem: ProblemData
) => {
  return parseFloat((submission.result * problem.points).toFixed(1));
};
export const getEarnedPointsForProblem = (
  problem: ProblemData,
  submissions: Submission[]
) => {
  return submissions.reduce(
    (oldScore, submission) =>
      getSubmissionStatus(submission) !== 'Pending'
        ? Math.max(oldScore, getSubmissionEarnedPoints(submission, problem))
        : oldScore,
    0
  );
};
