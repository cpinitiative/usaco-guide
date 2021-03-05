import useFirebase from '../useFirebase';
import firebaseType from 'firebase';
import { groupConverter, GroupData } from '../../models/groups/groups';
import { useUserGroups } from './useUserGroups';
import * as React from 'react';
import { Post } from '../../mobx/Post';
import firebase from 'firebase';
import { ReactNode, useContext } from 'react';
import { postConverter, PostData } from '../../models/groups/posts';
import { runInAction } from 'mobx';

const ActiveGroupContext = React.createContext<{
  activeGroupId: string;
  setActiveGroupId: React.Dispatch<React.SetStateAction<string>>;
  groupData: GroupData;
  posts: PostData[];
  isLoading: boolean;
  error: null | firebase.firestore.FirestoreError;
}>(null);

export function ActiveGroupProvider({ children }: { children: ReactNode }) {
  const [activeGroupId, setActiveGroupId] = React.useState<string>(null);
  const [posts, setPosts] = React.useState<PostData[]>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [
    error,
    setError,
  ] = React.useState<null | firebase.firestore.FirestoreError>(null);

  const userGroups = useUserGroups();
  const groupData = userGroups.data?.find(group => group.id === activeGroupId);

  useFirebase(
    firebase => {
      if (activeGroupId === null) {
        setIsLoading(false);
        setError(null);
        setPosts(null);
        return;
      }
      setIsLoading(true);
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
            setIsLoading(false);
            setPosts(snap.docs.map(doc => doc.data()));
          },
          error => {
            setIsLoading(false);
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
        isLoading,
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
