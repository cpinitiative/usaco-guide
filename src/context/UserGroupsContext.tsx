import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { groupConverter, GroupData } from '../models/groups/groups';
import UserDataContext from './UserDataContext/UserDataContext';
import useFirebase from '../hooks/useFirebase';
import firebase from 'firebase';

const UserGroupsContext = React.createContext<{
  isLoading: boolean;
  isSuccess: boolean;
  error: null | firebase.firestore.FirestoreError;
  data: null | GroupData[];
}>(null);

const UserGroupsProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const { firebaseUser } = React.useContext(UserDataContext);
  const [isLoading, setIsLoading] = React.useState(!!firebaseUser?.uid);
  const [
    error,
    setError,
  ] = React.useState<null | firebase.firestore.FirestoreError>(null);
  const [groups, setGroups] = React.useState<null | GroupData[]>(null);

  useFirebase(
    firebase => {
      if (!firebaseUser?.uid) {
        setIsLoading(false);
        setGroups(null);
        return;
      }
      setIsLoading(true);
      setError(null);

      let queries = {
        ownerIds: null,
        memberIds: null,
        adminIds: null,
      };

      const unsubscribeSnapshots = Object.keys(queries).map(key =>
        firebase
          .firestore()
          .collection('groups')
          .where(key, 'array-contains', firebaseUser?.uid)
          .withConverter(groupConverter)
          .onSnapshot(
            snap => {
              queries[key] = snap.docs.map(doc => doc.data());

              if (Object.keys(queries).every(x => queries[x] !== null)) {
                setGroups(Object.values(queries).flat());
                setIsLoading(false);
              }
            },
            error => {
              setIsLoading(false);
              setError(error);
            }
          )
      );

      return () => unsubscribeSnapshots.forEach(unsubscribe => unsubscribe());
    },
    [firebaseUser?.uid]
  );

  return (
    <UserGroupsContext.Provider
      value={{
        isLoading,
        isSuccess: groups !== null && error === null,
        error,
        data: groups,
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
