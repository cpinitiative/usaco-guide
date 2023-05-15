import type { CollectionReference } from 'firebase/firestore';
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import toast from 'react-hot-toast';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { GroupProblemData } from '../../models/groups/problem';
import { useFirebaseApp } from '../useFirebase';
import { useActiveGroup } from './useActiveGroup';
type ActivePostProblemsContext = {
  activePostId?: string;
  setActivePostId: React.Dispatch<React.SetStateAction<string | undefined>>;
  problems: GroupProblemData[];
  isLoading: boolean;
} | null;

const ActivePostProblemsContext =
  React.createContext<ActivePostProblemsContext>(null);

export function ActivePostProblemsProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const activeGroup = useActiveGroup();
  const { firebaseUser } = React.useContext(UserDataContext);
  const [activePostId, setActivePostId] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [problems, setProblems] = React.useState<GroupProblemData[]>([]);

  useFirebaseApp(
    firebaseApp => {
      setIsLoading(true);
      setProblems([]);
      if (!activePostId || !firebaseUser?.uid) {
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
        ) as CollectionReference<GroupProblemData>,
        where('isDeleted', '==', false)
      );
      onSnapshot(q, {
        next: snap => {
          setProblems(
            snap.docs.map(doc => ({ doc_id: doc.id, ...doc.data() }))
          );
          setIsLoading(false);
        },
        error: error => {
          toast.error(error.message);
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

export function useActivePostProblems() {
  const context = React.useContext(ActivePostProblemsContext);
  if (context === null) {
    throw 'useActiveGroup must be used within a ActivePostProblemsProvider';
  }
  return context;
}
