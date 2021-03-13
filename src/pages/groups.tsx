import React, { ReactElement } from 'react';
import { Router } from '@reach/router';
import NotFoundPage from './404';
import GroupSelectPage from '../components/Groups/GroupSelectPage';
import GroupPage from '../components/Groups/GroupPage/GroupPage';
import PostPage from '../components/Groups/PostPage/PostPage';
import ProblemPage from '../components/Groups/ProblemPage/ProblemPage';
import EditPostPage from '../components/Groups/EditPostPage/EditPostPage';
import EditProblemPage from '../components/Groups/EditProblemPage/EditProblemPage';
import { UserGroupsProvider } from '../hooks/groups/useUserGroups';
import {
  ActiveGroupProvider,
  useActiveGroup,
} from '../hooks/groups/useActiveGroup';
import { ProblemSubmissionPopupProvider } from '../components/Groups/ProblemSubmissionPopup';
import JoinGroupPage from '../components/Groups/JoinGroupPage';
import EditGroupPage from '../components/Groups/EditGroupPage/EditGroupPage';
import Layout from '../components/layout';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import { Link } from 'gatsby';

// wrapper because reach router types are bad.
const NotFoundPageWrapper = (props: any): ReactElement => {
  return <NotFoundPage {...props} />;
};

const GroupPageWrapper = (props: any): ReactElement => {
  const { Component, ...propsExceptComponent } = props;
  const { setActiveGroupId, isLoading, groupData } = useActiveGroup();

  console.log('RERENDERED WRAPPER', isLoading);

  React.useEffect(() => {
    setActiveGroupId(props.groupId);
  }, [props.groupId]);

  if (isLoading || (groupData && groupData.id !== props.groupId)) {
    return (
      <Layout>
        <TopNavigationBar />
        <main className="text-center py-10">
          <p className="font-medium text-2xl">Loading...</p>
        </main>
      </Layout>
    );
  }
  if (!groupData) {
    return (
      <Layout>
        <TopNavigationBar />
        <main className="text-center py-10">
          <p className="font-medium text-2xl">
            Group not found.{' '}
            <Link
              to="/groups"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Return Home.
            </Link>
          </p>
        </main>
      </Layout>
    );
  }

  return <Component {...propsExceptComponent} />;
};

export default function GroupsRouter() {
  return (
    <UserGroupsProvider>
      <ActiveGroupProvider>
        <ProblemSubmissionPopupProvider>
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
            <GroupPageWrapper
              Component={PostPage}
              path="/:groupId/post/:postId"
            />
            <GroupPageWrapper Component={EditGroupPage} path="/:groupId/edit" />
            <GroupPageWrapper Component={GroupPage} path="/:groupId" />
            <GroupSelectPage path="/" />
            <JoinGroupPage path="/join" />
            <NotFoundPageWrapper default />
          </Router>
        </ProblemSubmissionPopupProvider>
      </ActiveGroupProvider>
    </UserGroupsProvider>
  );
}
