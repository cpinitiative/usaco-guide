import type { CollectionReference } from 'firebase/firestore';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import * as React from 'react';
import { JoinGroupLink } from '../../models/groups/groups';
import { useFirebaseApp } from '../useFirebase';

export default function useGroupJoinLinks(groupId: string) {
  const [links, setLinks] = React.useState<JoinGroupLink[] | null>(null);

  useFirebaseApp(
    firebaseApp => {
      setLinks(null);
      if (!groupId) return;

      return onSnapshot(
        collection(
          getFirestore(firebaseApp),
          'groups',
          groupId,
          'joinLinks'
        ) as CollectionReference<JoinGroupLink>,
        {
          next: snap => {
            setLinks(snap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
          },
        }
      );
    },
    [groupId]
  );

  return links;
}
