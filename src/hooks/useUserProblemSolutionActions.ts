import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import { UserSolutionForProblem } from '../models/userSolutionForProblem';
import { useFirebaseApp } from './useFirebase';

export default function useUserProblemSolutionActions() {
  const firebaseApp = useFirebaseApp();
  const { firebaseUser } = useContext(UserDataContext);

  return {
    submitSolution: async (
      solution: Omit<
        UserSolutionForProblem,
        'userID' | 'userName' | 'id' | 'upvotes' | 'timestamp'
      >
    ) => {
      await addDoc(
        collection(getFirestore(firebaseApp), 'userProblemSolutions'),
        {
          ...solution,
          userID: firebaseUser.uid,
          userName: firebaseUser.displayName,
          upvotes: [],
          timestamp: Timestamp.now(),
        }
      );
    },
    deleteSolution: async (solutionID: string) => {
      await deleteDoc(
        doc(getFirestore(firebaseApp), 'userProblemSolutions', solutionID)
      );
    },
    mutateSolution: async (
      solutionID: string,
      updates: Partial<UserSolutionForProblem>
    ) => {
      await updateDoc(
        doc(getFirestore(firebaseApp), 'userProblemSolutions', solutionID),
        updates
      );
    },
    upvoteSolution: async (solutionID: string) => {
      await updateDoc(
        doc(getFirestore(firebaseApp), 'userProblemSolutions', solutionID),
        {
          upvotes: arrayUnion(firebaseUser.uid),
        }
      );
    },
    undoUpvoteSolution: async (solutionID: string) => {
      await updateDoc(
        doc(getFirestore(firebaseApp), 'userProblemSolutions', solutionID),
        {
          upvotes: arrayRemove(firebaseUser.uid),
        }
      );
    },
  };
}
