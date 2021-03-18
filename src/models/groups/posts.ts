import moment from 'moment';
import firebase from 'firebase';
import firebaseType from 'firebase';

export type PostData = {
  id?: string;
  name: string;
  timestamp: firebase.firestore.Timestamp;
  dueTimestamp: firebase.firestore.Timestamp | null;
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

export const postConverter = {
  toFirestore(post: PostData): firebaseType.firestore.DocumentData {
    return {
      name: post.name,
      timestamp: post.timestamp,
      dueTimestamp: post.dueTimestamp,
      body: post.body,
      isPinned: post.isPinned,
      isPublished: post.isPublished,
      problems: post.problems,
    };
  },

  fromFirestore(
    snapshot: firebaseType.firestore.QueryDocumentSnapshot,
    options: firebaseType.firestore.SnapshotOptions
  ): PostData {
    return {
      ...snapshot.data(options),
      id: snapshot.id,
    } as PostData;
  },
};

export const submissionConverter = {
  toFirestore(
    submission: Omit<Submission, 'id'> & Partial<Pick<Submission, 'id'>>
  ): firebaseType.firestore.DocumentData {
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

export const isPostAnnouncement = (post: PostData) =>
  Object.keys(post.problems).length === 0;
export const isPostAssignment = (post: PostData) =>
  Object.keys(post.problems).length !== 0;
/**
 * Returns the due date as a string if the post is an assignment with a due date
 * Otherwise returns the posting time as a human-readable string
 */
export const getPostTimestampString = (post: PostData) => {
  if (isPostAssignment(post) && post.dueTimestamp) {
    return 'Due on ' + getPostDueDateString(post);
  } else {
    return 'Posted on ' + getPostDateString(post);
  }
};
export const getPostDateString = (post: PostData) =>
  moment(post.timestamp.toDate()).format('MMMM Do, YYYY, h:mm:ss a');
export const getPostDueDateString = (post: PostData) =>
  moment(post.dueTimestamp?.toDate()).format('MMMM Do YYYY, h:mm:ss a');
export const getPostTotalPoints = (post: PostData) =>
  Object.keys(post.problems).reduce(
    (acc, cur) => acc + post.problems[cur].points,
    0
  );
export const getSubmissionTimestampString = (submission: Submission) =>
  moment(submission?.timestamp?.toDate()).format('MMMM Do YYYY, h:mm:ss a');
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
