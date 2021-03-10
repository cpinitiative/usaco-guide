import useFirebase from '../useFirebase';
import { GroupData, isUserAdminOfGroup } from '../../models/groups/groups';
import { useUserGroups } from './useUserGroups';
import * as React from 'react';
import firebase from 'firebase';
import { ReactNode, useContext } from 'react';
import { postConverter, PostData } from '../../models/groups/posts';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

const ActiveGroupContext = React.createContext<{
  activeGroupId: string;
  setActiveGroupId: React.Dispatch<React.SetStateAction<string>>;
  groupData: GroupData;
  posts: PostData[];
  isLoading: boolean;
  isUserAdmin: boolean;
  error: null | firebase.firestore.FirestoreError;
}>(null);

export function ActiveGroupProvider({ children }: { children: ReactNode }) {
  const { firebaseUser } = useContext(UserDataContext);
  const [activeGroupId, setActiveGroupId] = React.useState<string>(null);
  const [posts, setPosts] = React.useState<PostData[]>(null);
  const [
    error,
    setError,
  ] = React.useState<null | firebase.firestore.FirestoreError>(null);

  const userGroups = useUserGroups();
  const groupData = userGroups.data?.find(group => group.id === activeGroupId);

  useFirebase(
    firebase => {
      if (activeGroupId === null) {
        setError(null);
        setPosts(null);
        return;
      }
      setError(null);
      setPosts(null);
      return firebase
        .firestore()
        .collection('groups')
        .doc(activeGroupId)
        .collection('posts')
        .withConverter(postConverter)
        .onSnapshot(
          snap => {
            setPosts(snap.docs.map(doc => doc.data()));
          },
          error => {
            setError(error);
          }
        );
    },
    [activeGroupId]
  );

  return (
    <ActiveGroupContext.Provider
      value={{
        activeGroupId,
        setActiveGroupId,
        groupData,
        posts,
        isLoading: !groupData || !posts,
        isUserAdmin: isUserAdminOfGroup(groupData, firebaseUser?.uid),
        error,
      }}
    >
      {children}
    </ActiveGroupContext.Provider>
  );
}

export function useActiveGroup() {
  const context = React.useContext(ActiveGroupContext);
  if (context === null) {
    throw 'useActiveGroup must be used within a ActiveGroupProvider';
  }
  return context;
}
