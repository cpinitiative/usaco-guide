import type { CollectionReference } from 'firebase/firestore';
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import * as React from 'react';
import toast from 'react-hot-toast';
import { Submission } from '../../models/groups/problem';
import { useFirebaseApp } from '../useFirebase';
import { useActiveGroup } from './useActiveGroup';

export default function useUserProblemSubmissions(
  postId: string,
  problemId: string
) {
  const [submissions, setSubmissions] = React.useState<Submission[]>(null);
  const activeGroup = useActiveGroup();

  useFirebaseApp(
    firebaseApp => {
      if (problemId && activeGroup.activeUserId && activeGroup?.activeGroupId) {
        return onSnapshot(
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
            ) as CollectionReference<Submission>,
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
              toast.error(error.message);
            },
          }
        );
      }
    },
    [activeGroup.activeUserId, postId, problemId, activeGroup?.activeGroupId]
  );

  return submissions;
}
