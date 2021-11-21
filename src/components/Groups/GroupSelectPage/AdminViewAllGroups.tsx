import {
  collection,
  CollectionReference,
  getDocs,
  getFirestore,
} from '@firebase/firestore';
import React, { useContext, useState } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { useFirebaseApp } from '../../../hooks/useFirebase';
import { GroupData } from '../../../models/groups/groups';
import { GroupCard } from './GroupCard';

export default function AdminViewAllGroups(): JSX.Element {
  const { firebaseUser } = useContext(UserDataContext);
  const [groups, setGroups] = useState<GroupData[] | null>(null);

  useFirebaseApp(
    firebaseApp => {
      if (!firebaseUser?.uid) {
        setGroups(null);
        return;
      }

      getDocs(
        collection(
          getFirestore(firebaseApp),
          'groups'
        ) as CollectionReference<GroupData>
      ).then(result => {
        setGroups(result.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
    },
    [firebaseUser?.uid]
  );

  return (
    <>
      {!groups ? (
        <div>
          <p className="font-medium text-2xl">Loading...</p>
        </div>
      ) : (
        groups.map(group => <GroupCard key={group.id} group={group} />)
      )}
    </>
  );
}
