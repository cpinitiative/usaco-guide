import React, { ReactElement } from 'react';
import { Router } from '@reach/router';
import ClassPage from '../components/Classes/ClassPage';
import Layout from '../components/layout';
import ClassSelectPage from '../components/Classes/ClassSelectPage';
import NotFoundPage from './404';

// wrapper because reach router types are bad.
const NotFoundPageWrapper = (props: any): ReactElement => {
  return <NotFoundPage {...props} />;
};

export default function ClassRouter() {
  return (
    <Layout>
      <Router basepath="/class">
        <ClassPage path="/:classId" />
        {/*<AssignmentPage path="/:classId/assignments/:assignmentId" />*/}
        {/*<AnnouncementPage path="/:classId/announcements/:assignmentId" />*/}

        <ClassSelectPage path="/" />
        <NotFoundPageWrapper default />
      </Router>
    </Layout>
  );
}
