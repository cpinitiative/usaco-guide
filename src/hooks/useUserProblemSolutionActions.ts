import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { useFirebaseUser } from '../context/UserDataContext/UserDataContext';
import { UserSolutionForProblem } from '../models/userSolutionForProblem';
import { useFirebaseApp } from './useFirebase';

export default function useUserProblemSolutionActions() {
  const firebaseApp = useFirebaseApp();
  const firebaseUser = useFirebaseUser();

  return {
    submitSolution: async (
      solution: Omit<
        UserSolutionForProblem,
        'userID' | 'userName' | 'id' | 'upvotes' | 'timestamp'
      >
    ) => {
      // F-03: guard against submitting when not authenticated — prevents
      // documents with undefined userID from being created in Firestore
      if (!firebaseUser?.uid) {
        throw new Error('You must be signed in to submit a solution.');
      }
      await addDoc(
        collection(getFirestore(firebaseApp), 'userProblemSolutions'),
        {
          ...solution,
          userID: firebaseUser.uid,
          userName: firebaseUser.displayName ?? '',
          upvotes: [],
          timestamp: Timestamp.now(),
        }
      );
    },

    deleteSolution: async (solutionID: string) => {
      // F-03: verify ownership client-side before issuing the delete.
      // Firestore security rules are the authoritative enforcement layer, but
      // this check provides an early, user-friendly rejection and prevents
      // unintentional deletes caused by bugs or UI glitches.
      if (!firebaseUser?.uid) {
        throw new Error('You must be signed in to delete a solution.');
      }
      const ref = doc(getFirestore(firebaseApp), 'userProblemSolutions', solutionID);
      const snap = await getDoc(ref);
      if (snap.exists() && snap.data()?.userID !== firebaseUser.uid) {
        throw new Error('You do not have permission to delete this solution.');
      }
      await deleteDoc(ref);
    },

    mutateSolution: async (
      solutionID: string,
      updates: Partial<UserSolutionForProblem>
    ) => {
      // F-03: same ownership guard for mutations
      if (!firebaseUser?.uid) {
        throw new Error('You must be signed in to edit a solution.');
      }
      const ref = doc(getFirestore(firebaseApp), 'userProblemSolutions', solutionID);
      const snap = await getDoc(ref);
      if (snap.exists() && snap.data()?.userID !== firebaseUser.uid) {
        throw new Error('You do not have permission to edit this solution.');
      }
      await updateDoc(ref, updates);
    },

    upvoteSolution: async (solutionID: string) => {
      await updateDoc(
        doc(getFirestore(firebaseApp), 'userProblemSolutions', solutionID),
        {
          upvotes: arrayUnion(firebaseUser?.uid),
        }
      );
    },

    undoUpvoteSolution: async (solutionID: string) => {
      await updateDoc(
        doc(getFirestore(firebaseApp), 'userProblemSolutions', solutionID),
        {
          upvotes: arrayRemove(firebaseUser?.uid),
        }
      );
    },
  };
}
