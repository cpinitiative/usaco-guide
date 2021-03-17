import useFirebase from '../useFirebase';
import {
  groupConverter,
  GroupData,
  isUserAdminOfGroup,
} from '../../models/groups/groups';
import { useUserGroups } from './useUserGroups';
import * as React from 'react';
import firebase from 'firebase';
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

  const userGroups = useUserGroups();
  const cachedGroupData = userGroups.data?.find(
    group => group.id === activeGroupId
  );

  const [groupData, setGroupData] = React.useState<GroupData>(cachedGroupData);
  const groupNotFound = !userGroups.isLoading && userGroups.data && !groupData;

  const notifications = useNotificationSystem();

  useFirebase(
    firebase => {
      if (activeGroupId === null) {
        setPosts(null);
        setInStudentView(false);
        return;
      }
      setPosts(null);
      setInStudentView(false);
      const unsubscribePosts = firebase
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
            notifications.showErrorNotification(error);
          }
        );
      const unsubscribeGroup = firebase
        .firestore()
        .collection('groups')
        .doc(activeGroupId)
        .withConverter(groupConverter)
        .onSnapshot(
          doc => {
            setGroupData(doc.data());
          },
          error => {
            notifications.showErrorNotification(error);
          }
        );
      return () => {
        unsubscribeGroup();
        unsubscribePosts();
      };
    },
    [activeGroupId]
  );

  const isUserAdmin = isUserAdminOfGroup(groupData, firebaseUser?.uid);
  return (
    <ActiveGroupContext.Provider
      value={{
        activeGroupId,
        setActiveGroupId,
        groupData,
        posts,
        isLoading: groupNotFound ? false : !groupData || !posts,
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
