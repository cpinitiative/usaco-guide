import firebaseType from 'firebase';

export type UserSolutionForProblem = {
  id: string;
  userID: string;
  userName: string;
  problemID: string;
  isPublic: boolean;
  solutionCode: string;
  language: 'cpp' | 'java' | 'py' | 'unknown';
};

export const userSolutionForProblemConverter = {
  toFirestore(
    solution: UserSolutionForProblem
  ): firebaseType.firestore.DocumentData {
    const { id, ...data } = solution;
    return data;
  },

  fromFirestore(
    snapshot: firebaseType.firestore.QueryDocumentSnapshot,
    options: firebaseType.firestore.SnapshotOptions
  ): UserSolutionForProblem {
    return {
      ...snapshot.data(options),
      id: snapshot.id,
    } as UserSolutionForProblem;
  },
};
