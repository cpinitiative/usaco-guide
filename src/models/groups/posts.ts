import { default as firebase, default as firebaseType } from 'firebase/compat';
import moment from 'moment';
import {
  ExecutionStatus,
  ProblemData,
  Submission,
  SubmissionType,
} from './problem';

export type PostData = {
  id?: string;
  name: string;
  timestamp: firebase.firestore.Timestamp;
  /**
   * Markdown string of the post content
   */
  body: string;
  isPinned: boolean;
  isPublished: boolean;
  isDeleted: boolean;
} & (
  | {
      type: 'announcement';
    }
  | {
      type: 'assignment';
      dueTimestamp: firebase.firestore.Timestamp | null;
    }
);

export const postConverter = {
  toFirestore(post: PostData): firebaseType.firestore.DocumentData {
    const { id, ...data } = post;
    return data;
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

/**
 * Returns the due date as a string if the post is an assignment with a due date
 * Otherwise returns the posting time as a human-readable string
 */
export const getPostTimestampString = (post: PostData) => {
  if (post.type === 'assignment' && post.dueTimestamp) {
    return 'Due on ' + getPostDueDateString(post);
  } else {
    return 'Posted on ' + getPostDateString(post);
  }
};
export const getPostDateString = (post: PostData) =>
  post.timestamp
    ? moment(post.timestamp.toDate()).format('MMMM Do h:mma')
    : null;
export const getPostDueDateString = (post: PostData) =>
  post.type === 'assignment' && post.dueTimestamp
    ? moment(post.dueTimestamp.toDate()).format('MMMM Do h:mma')
    : null;
export const getTotalPointsFromProblems = (problems: ProblemData[]) =>
  problems.reduce((acc, cur) => acc + cur.points, 0);
export const getSubmissionTimestampString = (submission: Submission) =>
  moment(submission?.timestamp?.toDate()).format('MMMM Do h:mma');
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
    return Math.round(submission.result * problem.points);
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
