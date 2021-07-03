import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import * as React from 'react';
import { useNotificationSystem } from '../../context/NotificationSystemContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { Submission } from '../../models/groups/problem';
import { useFirebaseApp } from '../useFirebase';
import { useActiveGroup } from './useActiveGroup';

export default function useUserProblemSubmissions(
  postId: string,
  problemId: string
) {
  const [submissions, setSubmissions] = React.useState<Submission[]>(null);
  const activeGroup = useActiveGroup();
  const notifications = useNotificationSystem();

  useFirebaseApp(
    firebaseApp => {
      if (problemId && activeGroup.activeUserId && activeGroup?.activeGroupId) {
        return onSnapshot<Submission>(
          query(
            collection(
              getFirestore(firebaseApp),
              'groups',
              activeGroup.activeGroupId,
              'posts',
              postId,
              'problems',
              problemId,
              'submissions'
            ),
            where('userId', '==', activeGroup.activeUserId)
          ),
          {
            next: snap => {
              setSubmissions(
                snap.docs
                  .map(doc => ({ id: doc.id, ...doc.data() }))
                  .sort(
                    (a, b) => b.timestamp?.toMillis() - a.timestamp?.toMillis()
                  )
              );
            },
            error: error => {
              notifications.showErrorNotification(error);
            },
          }
        );
      }
    },
    [activeGroup.activeUserId, postId, problemId, activeGroup?.activeGroupId]
  );

  return submissions;
}
