import { Problem } from '../models/problem';
import * as React from 'react';
import useFirebase from './useFirebase';
import {
  UserSolutionForProblem,
  userSolutionForProblemConverter,
} from '../models/userSolutionForProblem';

export default function useUserSolutionsForProblem(problem: Problem) {
  const [solutions, setSolutions] = React.useState<UserSolutionForProblem[]>(
    null
  );

  useFirebase(
    firebase => {
      const id = problem?.uniqueID;
      if (id) {
        return firebase
          .firestore()
          .collection('userProblemSolutions')
          .where('isPublic', '==', true)
          .where('problemID', '==', id)
          .withConverter(userSolutionForProblemConverter)
          .onSnapshot(snap => {
            setSolutions(snap.docs.map(doc => doc.data()));
          });
      }
    },
    [problem?.uniqueID]
  );

  return solutions;
}
