import useFirebase from '../useFirebase';
import {
  groupConverter,
  GroupData,
  isUserAdminOfGroup,
} from '../../models/groups/groups';
import * as React from 'react';
import { ReactNode, useContext } from 'react';
import { postConverter, PostData } from '../../models/groups/posts';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { useNotificationSystem } from '../../context/NotificationSystemContext';

const ActiveGroupContext = React.createContext<{
  activeGroupId: string;
  setActiveGroupId: React.Dispatch<React.SetStateAction<string>>;
  groupData: GroupData;
  posts: PostData[];
  isLoading: boolean;
  showAdminView: boolean;
  setInStudentView: (inStudentView: boolean) => void;
}>(null);

export function ActiveGroupProvider({ children }: { children: ReactNode }) {
  const { firebaseUser } = useContext(UserDataContext);
  const [activeGroupId, setActiveGroupId] = React.useState<string>(null);
  const [posts, setPosts] = React.useState<PostData[]>(null);
  const [inStudentView, setInStudentView] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [groupData, setGroupData] = React.useState<GroupData>();

  const notifications = useNotificationSystem();

  useFirebase(
    firebase => {
      setGroupData(null);
      setPosts(null);
      setInStudentView(false);
      if (activeGroupId === null) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      if (!firebaseUser?.uid) return;

      let loadedPosts = false,
        loadedGroup = false;
      const unsubscribePosts = firebase
        .firestore()
        .collection('groups')
        .doc(activeGroupId)
        .collection('posts')
        .withConverter(postConverter)
        .onSnapshot(
          snap => {
            loadedPosts = true;
            setPosts(snap.docs.map(doc => doc.data()));
          },
          error => {
            if (error.code === 'permission-denied') {
              setIsLoading(false);
              setGroupData(null);
              if (loadedGroup && loadedPosts) setIsLoading(false);
            } else {
              notifications.showErrorNotification(error);
            }
          }
        );
      const unsubscribeGroup = firebase
        .firestore()
        .collection('groups')
        .doc(activeGroupId)
        .withConverter(groupConverter)
        .onSnapshot(
          doc => {
            loadedGroup = true;
            setGroupData(doc.data());
            if (loadedGroup && loadedPosts) setIsLoading(false);
          },
          error => {
            if (error.code === 'permission-denied') {
              setIsLoading(false);
              setGroupData(null);
            } else {
              notifications.showErrorNotification(error);
            }
          }
        );
      return () => {
        unsubscribeGroup();
        unsubscribePosts();
      };
    },
    [activeGroupId, firebaseUser?.uid]
  );

  const isUserAdmin = isUserAdminOfGroup(groupData, firebaseUser?.uid);
  return (
    <ActiveGroupContext.Provider
      value={{
        activeGroupId,
        setActiveGroupId,
        groupData,
        posts,
        isLoading,
        showAdminView: isUserAdmin && !inStudentView,
        setInStudentView: setInStudentView,
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
