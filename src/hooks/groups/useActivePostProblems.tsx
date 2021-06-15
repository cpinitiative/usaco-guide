import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { useNotificationSystem } from '../../context/NotificationSystemContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { GroupProblemData } from '../../models/groups/problem';
import { useFirebaseApp } from '../useFirebase';
import { useActiveGroup } from './useActiveGroup';

const ActivePostProblemsContext = React.createContext<{
  activePostId: string;
  setActivePostId: React.Dispatch<React.SetStateAction<string>>;
  problems: GroupProblemData[];
  isLoading: boolean;
}>(null);

export function ActivePostProblemsProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const activeGroup = useActiveGroup();
  const { firebaseUser } = React.useContext(UserDataContext);
  const [activePostId, setActivePostId] = React.useState<string>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [problems, setProblems] = React.useState<GroupProblemData[]>();

  const notifications = useNotificationSystem();

  useFirebaseApp(
    firebaseApp => {
      setProblems(null);
      setIsLoading(true);
      if (activePostId === null || !firebaseUser?.uid) {
        return;
      }
      if (!activeGroup.activeGroupId) {
        throw new Error(
          'Cannot get post problems without being in an active group'
        );
      }

      const q = query(
        collection(
          getFirestore(firebaseApp),
          'groups',
          activeGroup.activeGroupId,
          'posts',
          activePostId,
          'problems'
        ),
        where('isDeleted', '==', false)
      );
      onSnapshot<GroupProblemData>(q, {
        next: snap => {
          setProblems(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
          setIsLoading(false);
        },
        error: error => {
          notifications.showErrorNotification(error);
        },
      });
    },
    [firebaseUser?.uid, activePostId, activeGroup.activeGroupId]
  );

  return (
    <ActivePostProblemsContext.Provider
      value={{
        activePostId,
        setActivePostId,
        problems,
        isLoading,
      }}
    >
      {children}
    </ActivePostProblemsContext.Provider>
  );
}

export function useActivePostProblems(): {
  activePostId: string;
  setActivePostId: (string) => void;
  problems: GroupProblemData[];
  isLoading: boolean;
} {
  const context = React.useContext(ActivePostProblemsContext);
  if (context === null) {
    throw 'useActiveGroup must be used within a ActivePostProblemsProvider';
  }
  return context;
}
