import firebase from 'firebase';
import firebaseType from 'firebase';

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
  /**
   * Lower = appears first in problem list. Ties broken by name.
   */
  order: number;
}
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
  COMPCS_API = 'CompCS API',
}

export type Submission = {
  id: string;
  problemId: string;
  userId: string;
  code: string;
  language: 'cpp' | 'java' | 'py';
  timestamp: firebase.firestore.Timestamp;
} & (
  | {
      type: SubmissionType.SELF_GRADED;
      result: number;
      status: ExecutionStatus;
    }
  | {
      type: SubmissionType.COMPCS_API;
      result: TestCaseResult[];
    }
);

export enum ExecutionStatus {
  AC = 'AC',
  WA = 'WA',
  TLE = 'TLE',
  MLE = 'MLE',
  RTE = 'RTE',
  PENDING = 'Pending',
}

export type TestCaseResult = {
  status: ExecutionStatus;
  /**
   * Execution time in milliseconds
   */
  executionTime: number;
};

export const problemConverter = {
  toFirestore(problem: ProblemData): firebaseType.firestore.DocumentData {
    const { id, ...data } = problem;
    return data;
  },

  fromFirestore(
    snapshot: firebaseType.firestore.QueryDocumentSnapshot,
    options: firebaseType.firestore.SnapshotOptions
  ): ProblemData {
    return {
      ...snapshot.data(options),
      id: snapshot.id,
    } as ProblemData;
  },
};

export const submissionConverter = {
  toFirestore(submission: Submission): firebaseType.firestore.DocumentData {
    const { id, ...data } = submission;
    return data;
  },

  fromFirestore(
    snapshot: firebaseType.firestore.QueryDocumentSnapshot,
    options: firebaseType.firestore.SnapshotOptions
  ): Submission {
    return {
      ...snapshot.data(options),
      id: snapshot.id,
    } as Submission;
  },
};

export const submissionTextColor: { [key in ExecutionStatus]: string } = {
  AC: 'text-green-800 dark:text-green-200',
  WA: 'text-red-800 dark:text-red-200',
  TLE: 'text-red-800 dark:text-red-200',
  MLE: 'text-red-800 dark:text-red-200',
  RTE: 'text-red-800 dark:text-red-200',
  Pending: 'text-gray-800 dark:text-gray-200',
};

export const submissionCircleColor: { [key in ExecutionStatus]: string } = {
  AC: 'bg-green-400 dark:bg-green-500',
  WA: 'bg-red-400 dark:bg-red-500',
  TLE: 'bg-red-400 dark:bg-red-500',
  MLE: 'bg-red-400 dark:bg-red-500',
  RTE: 'bg-red-400 dark:bg-red-500',
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
  Pending: 'bg-gray-100 dark:bg-gray-800',
};

export const getSubmissionTimestampString = (submission: Submission) =>
  submission?.timestamp?.toDate().toString().substr(0, 24);
export const getSubmissionStatus = (submission: Submission) => {
  if (submission.type === SubmissionType.SELF_GRADED) {
    return submission.status;
  }
  // todo actually implement
  return ExecutionStatus.AC;
};
export const getSubmissionEarnedPoints = (
  submission: Submission,
  problem: ProblemData
) => {
  if (submission.type === SubmissionType.SELF_GRADED) {
    return parseFloat((submission.result * problem.points).toFixed(1));
  }
  // todo actually implement
  return problem.points;
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
