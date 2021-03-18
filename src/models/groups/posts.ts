import firebase from 'firebase';
import firebaseType from 'firebase';
import { ProblemData } from './problem';

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
  post.timestamp.toDate().toString().substr(0, 15);
export const getPostDueDateString = (post: PostData) =>
  post.dueTimestamp?.toDate().toString().substr(0, 15);
export const getTotalPointsFromProblems = (problems: ProblemData[]) =>
  problems.reduce((acc, cur) => acc + cur.points, 0);
