import type { CollectionReference } from 'firebase/firestore';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { useFirebaseUser } from '../../context/UserDataContext/UserDataContext';
import { GroupData } from '../../models/groups/groups';
import { useFirebaseApp } from '../useFirebase';

const UserGroupsContext = React.createContext<{
  isLoading: boolean;
  isSuccess: boolean;
  data: null | (GroupData | null)[];
  /**
   * Call when you want to re-fetch groups
   */
  invalidateData: () => void;
} | null>(null);

const UserGroupsProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const firebaseUser = useFirebaseUser();
  const [isLoading, setIsLoading] = React.useState(!!firebaseUser?.uid);
  const [groups, setGroups] = React.useState<null | (GroupData | null)[]>(null);
  const [updateCtr, setUpdateCtr] = React.useState(0);

  useFirebaseApp(
    firebaseApp => {
      if (!firebaseUser?.uid) {
        setIsLoading(false);
        setGroups(null);
        return;
      }
      setIsLoading(true);

      const queries: { [key: string]: null | GroupData[] } = {
        ownerIds: null,
        memberIds: null,
        adminIds: null,
      };

      const queryKeys = Object.keys(queries);
      let settled = 0;
      let hasError = false;

      queryKeys.forEach(key => {
        getDocs(
          query(
            collection(
              getFirestore(firebaseApp),
              'groups'
            ) as CollectionReference<GroupData>,
            where(key, 'array-contains', firebaseUser?.uid)
          )
        ).then(snap => {
          if (hasError) return;
          queries[key] = snap.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));
          settled++;

          if (settled === queryKeys.length) {
            // F-26: deduplicate groups — a user who is both owner AND admin of a
            // group would appear twice in the flat array without this step.
            const allGroups = Object.values(queries).flat() as GroupData[];
            const uniqueGroups = Array.from(
              new Map(allGroups.map(g => [g.id, g])).values()
            );
            setGroups(uniqueGroups);
            setIsLoading(false);
          }
        }).catch(() => {
          if (hasError) return;
          hasError = true;
          // Surface the failure state rather than leaving isLoading stuck at true
          setGroups(null);
          setIsLoading(false);
        });
      });
    },
    [firebaseUser?.uid, updateCtr]
  );

  return (
    <UserGroupsContext.Provider
      value={{
        isLoading,
        isSuccess: groups !== null,
        data: groups,
        invalidateData: () => {
          setIsLoading(true);
          setUpdateCtr(updateCtr + 1);
        },
      }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};

const useUserGroups = () => {
  const userGroups = React.useContext(UserGroupsContext);
  if (userGroups === null) {
    throw 'useUserGroups must be used within a UserGroupsProvider';
  }
  return userGroups;
};

export { UserGroupsProvider, useUserGroups };
