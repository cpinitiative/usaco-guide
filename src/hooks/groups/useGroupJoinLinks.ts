import type { CollectionReference } from 'firebase/firestore';
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import * as React from 'react';
import { JoinGroupLink } from '../../models/groups/groups';
import { useFirebaseApp } from '../useFirebase';

export default function useGroupJoinLinks(groupId: string) {
  const [links, setLinks] = React.useState<JoinGroupLink[]>(null);

  useFirebaseApp(
    firebaseApp => {
      setLinks(null);
      if (!groupId) return;

      return onSnapshot(
        query(
          collection(
            getFirestore(firebaseApp),
            'group-join-links'
          ) as CollectionReference<JoinGroupLink>,
          where('groupId', '==', groupId)
        ),
        {
          next: snap => {
            setLinks(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
          },
        }
      );
    },
    [groupId]
  );

  return links;
}
