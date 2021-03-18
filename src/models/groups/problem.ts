import firebase from 'firebase';
import firebaseType from 'firebase';

export type ProblemData = {
  id: string;
  postId: string;
  name: string;
  body: string;
  source: string;
  points: number;
  difficulty: string;
  hints: ProblemHint[];
  solution:
    | {
        type: 'URL';
        url: string;
      }
    | {
        type: 'MARKDOWN';
        body: string;
      };
  submissionType: SubmissionType;
  /**
   * Lower = appears first in problem list. Ties broken by name.
   */
  order: number;
};
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
    return Math.round((submission.result / 100) * problem.points);
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
      Math.max(oldScore, getSubmissionEarnedPoints(submission, problem)),
    0
  );
};
