import {
  UserSolutionForProblem,
  userSolutionForProblemConverter,
} from '../models/userSolutionForProblem';
import useFirebase from './useFirebase';
import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';

export default function useSubmitUserSolutionForProblemAction() {
  const firebase = useFirebase();
  const { firebaseUser } = useContext(UserDataContext);

  return async (
    solution: Omit<UserSolutionForProblem, 'userID' | 'userName'>
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
  };
}
