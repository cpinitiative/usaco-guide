import useFirebase from '../useFirebase';
import * as React from 'react';
import { ReactNode, useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { useNotificationSystem } from '../../context/NotificationSystemContext';
import { problemConverter, ProblemData } from '../../models/groups/problem';
import { useActiveGroup } from './useActiveGroup';

const ActivePostProblemsContext = React.createContext<{
  activePostId: string;
  setActivePostId: React.Dispatch<React.SetStateAction<string>>;
  problems: ProblemData[];
  isLoading: boolean;
}>(null);

export function ActivePostProblemsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const activeGroup = useActiveGroup();
  const { firebaseUser } = React.useContext(UserDataContext);
  const [activePostId, setActivePostId] = React.useState<string>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [problems, setProblems] = React.useState<ProblemData[]>();

  const notifications = useNotificationSystem();

  useFirebase(
    firebase => {
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

      return firebase
        .firestore()
        .collection('groups')
        .doc(activeGroup.activeGroupId)
        .collection('posts')
        .doc(activePostId)
        .collection('problems')
        .where('isDeleted', '==', false)
        .withConverter(problemConverter)
        .onSnapshot(
          snap => {
            setProblems(
              snap.docs
                .map(doc => doc.data())
                .sort((a, b) => {
                  if (a.order === b.order) return a.name < b.name ? -1 : 1;
                  return a.order < b.order ? -1 : 1;
                })
            );
            setIsLoading(false);
          },
          error => {
            notifications.showErrorNotification(error);
          }
        );
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
