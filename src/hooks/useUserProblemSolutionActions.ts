import {
  UserSolutionForProblem,
  userSolutionForProblemConverter,
} from '../models/userSolutionForProblem';
import useFirebase from './useFirebase';
import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';

export default function useUserProblemSolutionActions() {
  const firebase = useFirebase();
  const { firebaseUser } = useContext(UserDataContext);

  return {
    submitSolution: async (
      solution: Omit<UserSolutionForProblem, 'userID' | 'userName' | 'id'>
    ) => {
      await firebase
        .firestore()
        .collection('userProblemSolutions')
        .withConverter(userSolutionForProblemConverter)
        .add({
          ...solution,
          userID: firebaseUser.uid,
          userName: firebaseUser.displayName,
        });
    },
    deleteSolution: async (solutionID: string) => {
      await firebase
        .firestore()
        .collection('userProblemSolutions')
        .doc(solutionID)
        .delete();
    },
  };
}
