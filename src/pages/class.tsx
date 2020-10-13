import React, { ReactElement, useContext } from 'react';
import { Router } from '@reach/router';
import ClassPage from '../components/Classes/ClassPage';
import Layout from '../components/layout';
import ClassSelectPage from '../components/Classes/ClassSelectPage';
import NotFoundPage from './404';
import AnnouncementPage from '../components/Classes/AnnouncementPage';
import ClassContext, { ClassProvider } from '../context/ClassContext';
import ClassJoinPage from '../components/Classes/ClassJoinPage';

// wrapper because reach router types are bad.
const NotFoundPageWrapper = (props: any): ReactElement => {
  return <NotFoundPage {...props} />;
};
const ClassPageWrapper = (props: {
  Component: ReactElement;
  classId: string;
}): ReactElement => {
  const { Component, ...propsExceptComponent } = props;
  const { setClassId } = useContext(ClassContext);
  React.useEffect(() => {
    if (!setClassId) return;
    setClassId(props.classId);
  }, [setClassId === null]);
  return <Component {...propsExceptComponent} />;
};

export default function ClassRouter() {
  return (
    <Layout>
      <ClassProvider>
        <Router basepath="/class">
          <ClassPageWrapper Component={ClassPage} path="/:classId" />
          <ClassPageWrapper Component={ClassJoinPage} path="/:classId/join" />
          {/*<AssignmentPage path="/:classId/assignments/:assignmentId" />*/}
          <ClassPageWrapper
            Component={AnnouncementPage}
            path="/:classId/announcements/:announcementId"
          />

          <ClassSelectPage path="/" />
          <NotFoundPageWrapper default />
        </Router>
      </ClassProvider>
    </Layout>
  );
}
