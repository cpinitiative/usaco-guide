import React, { createContext, ReactElement, useContext, useMemo } from 'react';
import { Router } from '@reach/router';
import NotFoundPage from './404';
import Groups from '../mobx/GroupsStore';
import GroupSelectPage from '../components/Groups/GroupSelectPage';
import GroupsStore from '../mobx/GroupsStore';
import GroupPage from '../components/Groups/GroupPage/GroupPage';
import PostPage from '../components/Groups/PostPage/PostPage';
import useFirebase from '../hooks/useFirebase';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import ProblemPage from '../components/Groups/ProblemPage/ProblemPage';
import { runInAction } from 'mobx';
import EditPostPage from '../components/Groups/EditPostPage/EditPostPage';
import EditProblemPage from '../components/Groups/EditProblemPage/EditProblemPage';

export const GroupsContext = createContext<Groups>(null);

// wrapper because reach router types are bad.
const NotFoundPageWrapper = (props: any): ReactElement => {
  return <NotFoundPage {...props} />;
};

const GroupPageWrapper = (props: any): ReactElement => {
  const { Component, ...propsExceptComponent } = props;
  const store = useContext(GroupsContext);

  React.useEffect(() => {
    runInAction(() => {
      store.activeGroupId = props.groupId;
    });
  }, [props.groupId]);

  return <Component {...propsExceptComponent} />;
};

export default function GroupsRouter() {
  const firebase = useFirebase();
  const groupsStore = useMemo(() => {
    if (firebase) {
      return new GroupsStore(firebase);
    } else {
      return null;
    }
  }, [firebase]);

  // still loading?
  if (!groupsStore) return null;

  return (
    <GroupsContext.Provider value={groupsStore}>
      <Router basepath="/groups">
        <GroupPageWrapper
          Component={EditProblemPage}
          path="/:groupId/post/:postId/problems/:problemId/edit"
        />
        <GroupPageWrapper
          Component={ProblemPage}
          path="/:groupId/post/:postId/problems/:problemId"
        />
        <GroupPageWrapper
          Component={EditPostPage}
          path="/:groupId/post/:postId/edit"
        />
        <GroupPageWrapper Component={PostPage} path="/:groupId/post/:postId" />
        <GroupPageWrapper Component={GroupPage} path="/:groupId" />
        <GroupSelectPage path="/" />
        <NotFoundPageWrapper default />
      </Router>
    </GroupsContext.Provider>
  );
}
