import type { CollectionReference } from 'firebase/firestore';
import {
  collection,
  doc,
  DocumentReference,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import * as React from 'react';
import { ReactNode, useContext } from 'react';
import toast from 'react-hot-toast';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { GroupData, isUserAdminOfGroup } from '../../models/groups/groups';
import { PostData } from '../../models/groups/posts';
import { useFirebaseApp } from '../useFirebase';

const ActiveGroupContext = React.createContext<{
  activeGroupId?: string;
  setActiveGroupId: React.Dispatch<React.SetStateAction<string | undefined>>;
  groupData?: GroupData;
  posts: PostData[];
  isLoading: boolean;
  showAdminView: boolean;
  setInStudentView: (inStudentView: boolean) => void;
  /**
   * Who to view the group as. Usually it's just firebaseUser.uid, but sometimes
   * (ie if parent wants to view child's progress, or if owner views member's progress)
   * it could be different
   */
  activeUserId: string;
  setActiveUserId: (id?: string) => void;
} | null>(null);

export function ActiveGroupProvider({ children }: { children: ReactNode }) {
  const { firebaseUser, isLoaded: isUserLoaded } = useContext(UserDataContext);
  const [activeGroupId, setActiveGroupId] = React.useState<string>();
  const [posts, setPosts] = React.useState<PostData[]>([]);
  const [inStudentView, setInStudentView] = React.useState(false);
  const [activeUserId, setActiveUserId] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [groupData, setGroupData] = React.useState<GroupData>();

  useFirebaseApp(
    firebaseApp => {
      //reset all Group states
      setGroupData(undefined);
      setPosts([]);
      setInStudentView(false);
      setActiveUserId(undefined);

      setIsLoading(true);
      if (!activeGroupId || !isUserLoaded) {
        //still loading/waiting...
        return;
      }
      if (!firebaseUser?.uid) {
        setIsLoading(false);
        return;
      }

      let loadedPosts = false,
        loadedGroup = false;
      const unsubscribePosts = onSnapshot(
        query(
          collection(
            getFirestore(firebaseApp),
            'groups',
            activeGroupId,
            'posts'
          ) as CollectionReference<PostData>,
          where('isDeleted', '==', false)
        ),
        snap => {
          loadedPosts = true;
          setPosts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
          if (loadedGroup && loadedPosts) setIsLoading(false);
        },
        error => {
          if (error.code === 'permission-denied') {
            setIsLoading(false);
            setPosts([]);
          } else {
            toast.error(error.message);
          }
        }
      );
      const unsubscribeGroup = onSnapshot(
        doc(
          getFirestore(firebaseApp),
          'groups',
          activeGroupId
        ) as DocumentReference<GroupData>,
        doc => {
          loadedGroup = true;
          setGroupData(doc.data());
          if (loadedGroup && loadedPosts) setIsLoading(false);
        },
        error => {
          if (error.code === 'permission-denied') {
            setIsLoading(false);
            setGroupData(undefined);
          } else {
            toast.error(error.message);
          }
        }
      );
      return () => {
        unsubscribeGroup();
        unsubscribePosts();
      };
    },
    [activeGroupId, firebaseUser?.uid, isUserLoaded]
  );

  const isUserAdmin = isUserAdminOfGroup(
    groupData,
    activeUserId ?? firebaseUser?.uid
  );
  return (
    <ActiveGroupContext.Provider
      value={{
        activeGroupId,
        setActiveGroupId,
        groupData,
        posts,
        isLoading,
        showAdminView: isUserAdmin && !inStudentView,
        setInStudentView: newVal => {
          setInStudentView(newVal);
          if (!newVal) setActiveUserId(undefined);
        },
        activeUserId: activeUserId ?? firebaseUser?.uid,
        setActiveUserId,
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
