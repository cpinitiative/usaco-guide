import firebaseType from 'firebase';

export type UserSolutionForProblem = {
  userID: string;
  userName: string;
  problemID: string;
  isPublic: boolean;
  solutionCode: string;
  language: 'cpp' | 'java' | 'py' | 'unknown';
};

export const userSolutionForProblemConverter = {
  toFirestore(
    data: UserSolutionForProblem
  ): firebaseType.firestore.DocumentData {
    return data;
  },

  fromFirestore(
    snapshot: firebaseType.firestore.QueryDocumentSnapshot,
    options: firebaseType.firestore.SnapshotOptions
  ): UserSolutionForProblem {
    return snapshot.data(options) as UserSolutionForProblem;
  },
};
