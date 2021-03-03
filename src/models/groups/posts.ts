import firebase from 'firebase';

export type PostData = {
  id?: string;
  name: string;
  timestamp: firebase.firestore.Timestamp;
  dueTimestamp: firebase.firestore.Timestamp;
  /**
   * Markdown string of the post content
   */
  body: string;
  isPinned: boolean;
  isPublished: boolean;
  /**
   * Map of problem ID to ProblemData
   */
  problems: { [key: string]: ProblemData };
};

export type ProblemData = {
  id: string;
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
};

export type ProblemHint = {
  /**
   * How many points you lose for activating the hint
   */
  penalty: number;
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
  type: SubmissionType;
  /**
   * If type is SELF_GRADED, this is a numerical number 0-100
   * Otherwise, it's an array of test case results
   *
   * (Is there a better way to type this?)
   */
  result: number | TestCaseResult[];
};

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
