import React, { createContext, ReactElement, useMemo } from 'react';
import { Router } from '@reach/router';
import NotFoundPage from './404';
import Groups from '../mobx/GroupsStore';
import GroupSelectPage from '../components/Groups/GroupSelectPage';
import GroupsStore from '../mobx/GroupsStore';
import GroupPage from '../components/Groups/GroupPage/GroupPage';
import PostPage from '../components/Groups/PostPage';

export const GroupsContext = createContext<Groups>(null);

// wrapper because reach router types are bad.
const NotFoundPageWrapper = (props: any): ReactElement => {
  return <NotFoundPage {...props} />;
};

export default function GroupsRouter() {
  const groupsStore = useMemo(() => new GroupsStore(), []);
  return (
    <GroupsContext.Provider value={groupsStore}>
      <Router basepath="/groups">
        {/*<ClassPageWrapper Component={ClassPage} path="/:classId" />*/}
        {/*<ClassPageWrapper Component={ClassJoinPage} path="/:classId/join" />*/}
        {/*<ClassPageWrapper*/}
        {/*  Component={PostPage}*/}
        {/*  type={'assignment'}*/}
        {/*  path="/:classId/assignments/:assignmentId"*/}
        {/*/>*/}
        {/*<ClassPageWrapper*/}
        {/*  Component={PostPage}*/}
        {/*  type={'announcement'}*/}
        {/*  path="/:classId/announcements/:announcementId"*/}
        {/*/>*/}
        {/*<ClassPageWrapper*/}
        {/*  Component={StudentProgressPage}*/}
        {/*  path="/:classId/student-progress"*/}
        {/*/>*/}
        <PostPage path="/:groupId/post/:postId" />
        <GroupPage path="/:groupId" />
        <GroupSelectPage path="/" />
        <NotFoundPageWrapper default />
      </Router>
    </GroupsContext.Provider>
  );
}
