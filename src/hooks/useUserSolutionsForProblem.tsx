import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import * as React from 'react';
import { useContext } from 'react';
import { useNotificationSystem } from '../context/NotificationSystemContext';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import { ProblemInfo } from '../models/problem';
import { UserSolutionForProblem } from '../models/userSolutionForProblem';
import { useFirebaseApp } from './useFirebase';

export default function useUserSolutionsForProblem(problem: ProblemInfo) {
  const [solutions, setSolutions] = React.useState<UserSolutionForProblem[]>(
    null
  );
  const [currentUserSolutions, setCurrentUserSolutions] = React.useState<
    UserSolutionForProblem[]
  >(null);
  const { firebaseUser } = useContext(UserDataContext);
  const notifications = useNotificationSystem();

  useFirebaseApp(
    firebaseApp => {
      const id = problem?.uniqueId;
      if (id) {
        setSolutions(null);
        setCurrentUserSolutions(null);
        const firestore = getFirestore(firebaseApp);
        const unsubscribe1 = onSnapshot<UserSolutionForProblem>(
          query(
            collection(firestore, 'userProblemSolutions'),
            where('isPublic', '==', true),
            where('problemID', '==', id)
          ),
          {
            next: snap => {
              setSolutions(
                snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
              );
            },
            error: error => {
              notifications.showErrorNotification(error);
            },
          }
        );
        const unsubscribe2 = firebaseUser
          ? onSnapshot<UserSolutionForProblem>(
              query(
                collection(firestore, 'userProblemSolutions'),
                where('problemID', '==', id),
                where('userID', '==', firebaseUser.uid)
              ),
              {
                next: snap => {
                  setSolutions(
                    snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                  );
                },
                error: error => {
                  notifications.showErrorNotification(error);
                },
              }
            )
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
