import dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';
import { Leaderboard } from './leaderboard';
import {
  ExecutionStatus,
  ProblemData,
  Submission,
  SubmissionType,
} from './problem';

export type PostData = {
  id?: string;
  name: string;
  timestamp: Timestamp;
  /**
   * Markdown string of the post content
   */
  body: string;
  /**
   * no longer needed since posts can be more easily reordered (?)
   * @deprecated
   */
  isPinned: boolean;
  isPublished: boolean;
  isDeleted: boolean;
  // oops typescript is hard -- pointsPerProblem and problemOrdering should be type assignment only...
  pointsPerProblem: {
    [key: string]: number;
  };
  // array of problem IDs
  problemOrdering: string[] | null;
} & (
  | {
      type: 'announcement';
    }
  | {
      type: 'assignment';
      dueTimestamp: Timestamp | null;
    }
);

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
    ? dayjs(post.timestamp.toDate()).format('MMMM DD h:mma')
    : null;
export const getPostDueDateString = (post: PostData) =>
  post.type === 'assignment' && post.dueTimestamp
    ? dayjs(post.dueTimestamp.toDate()).format('MMMM DD h:mma')
    : null;
export const getTotalPointsFromProblems = (problems: ProblemData[]) =>
  problems.reduce((acc, cur) => acc + cur.points, 0);
export const getSubmissionTimestampString = (submission: Submission) =>
  dayjs(submission?.timestamp?.toDate()).format('MMMM DD h:mma');
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
export const getTotalPointsOfPost = (post: PostData): number => {
  return Object.keys(post.pointsPerProblem || {}).reduce(
    (acc, cur) => acc + post.pointsPerProblem[cur],
    0
  );
};
export const sortPostsComparator = (a: PostData, b: PostData): number => {
  if (a.isPinned !== b.isPinned) {
    return (a.isPinned ? 1 : 0) - (b.isPinned ? 1 : 0);
  }

  return (a.timestamp?.toMillis() || 0) - (b.timestamp?.toMillis() || 0);
};
