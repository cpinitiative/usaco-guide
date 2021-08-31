import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { useUserPermissions } from '../../context/UserDataContext/UserPermissionsContext';
import { GroupData } from '../../models/groups/groups';
import { useFirebaseApp } from '../useFirebase';

const UserGroupsContext = React.createContext<{
  isLoading: boolean;
  isSuccess: boolean;
  data: null | GroupData[];
  /**
   * Call when you want to re-fetch groups
   */
  invalidateData: () => void;
}>(null);

const UserGroupsProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const { firebaseUser } = React.useContext(UserDataContext);
  const [isLoading, setIsLoading] = React.useState(!!firebaseUser?.uid);
  const [groups, setGroups] = React.useState<null | GroupData[]>(null);
  const [updateCtr, setUpdateCtr] = React.useState(0);
  const { isAdmin } = useUserPermissions();

  useFirebaseApp(
    firebaseApp => {
      if (!firebaseUser?.uid) {
        setIsLoading(false);
        setGroups(null);
        return;
      }
      setIsLoading(true);

      const queries = {
        ownerIds: null,
        memberIds: null,
        adminIds: null,
      };

      Object.keys(queries).forEach(key => {
        const docQuery = !isAdmin
          ? getDocs<GroupData>(
              query(
                collection(getFirestore(firebaseApp), 'groups'),
                // queries gruops that the current user is in
                where(key, 'array-contains', firebaseUser?.uid)
              )
            )
          : getDocs<GroupData>(collection(getFirestore(firebaseApp), 'groups'));

        docQuery.then(snap => {
          // with the resulting collection snapshot
          queries[key] = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          // if all queries are done
          if (Object.keys(queries).every(x => queries[x] !== null)) {
            setGroups(Object.values(queries).flat());
            console.log(Object.values(queries).flat());
            setIsLoading(false);
          }
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
