import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import { ProblemInfo } from '../models/problem';
import {
  UserSolutionForProblem,
  userSolutionForProblemConverter,
} from '../models/userSolutionForProblem';
import useFirebase from './useFirebase';

export default function useUserSolutionsForProblem(problem: ProblemInfo) {
  const [solutions, setSolutions] = React.useState<UserSolutionForProblem[]>(
    null
  );
  const [currentUserSolutions, setCurrentUserSolutions] = React.useState<
    UserSolutionForProblem[]
  >(null);
  const { firebaseUser } = useContext(UserDataContext);

  useFirebase(
    firebase => {
      const id = problem?.uniqueId;
      if (id) {
        setSolutions(null);
        setCurrentUserSolutions(null);
        const unsubscribe1 = firebase
          .firestore()
          .collection('userProblemSolutions')
          .where('isPublic', '==', true)
          .where('problemID', '==', id)
          .withConverter(userSolutionForProblemConverter)
          .onSnapshot(snap => {
            setSolutions(snap.docs.map(doc => doc.data()));
          });
        const unsubscribe2 = firebaseUser
          ? firebase
              .firestore()
              .collection('userProblemSolutions')
              .where('problemID', '==', id)
              .where('userID', '==', firebaseUser.uid)
              .withConverter(userSolutionForProblemConverter)
              .onSnapshot(snap => {
                setCurrentUserSolutions(snap.docs.map(doc => doc.data()));
              })
          : () => {};
        return () => {
          unsubscribe1();
          unsubscribe2();
        };
      }
    },
    [problem?.uniqueId, firebaseUser?.uid]
  );

  return {
    solutions,
    currentUserSolutions,
  };
}
