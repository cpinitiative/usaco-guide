import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DashboardProgress from '../components/Dashboard/DashboardProgress';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import WelcomeBackBanner from '../components/Dashboard/WelcomeBackBanner';
import {
  moduleIDToSectionMap,
  moduleIDToURLMap,
  SECTION_LABELS,
} from '../../content/ordering';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import ActiveItems, { ActiveItem } from '../components/Dashboard/ActiveItems';
import getProgressInfo from '../utils/getProgressInfo';
import Announcements from '../components/Dashboard/Announcements';
import {
  AnnouncementInfo,
  graphqlToAnnouncementInfo,
} from '../models/announcement';
import AnnouncementBanner from '../components/Dashboard/AnnouncementBanner';

export default function ProblemsPage(props: PageProps) {
  // const { modules } = props.data as any;
  // const problemIDMap = modules.edges.reduce((acc, cur) => {
  //   cur.node.problems.forEach(problem => {
  //     acc[problem.uniqueID] = {
  //       label: `${problem.source}: ${problem.name}`,
  //       url: `${moduleIDToURLMap[cur.node.frontmatter.id]}/#problem-${
  //         problem.uniqueID
  //       }`,
  //       starred: problem.starred,
  //     };
  //   });
  //   return acc;
  // }, {});
  // const { userProgressOnProblems, firebaseUser } = React.useContext(
  //   UserDataContext
  // );

  return (
    <Layout>
      <SEO title="All Problems" />

      <div className="min-h-screen bg-gray-100">
        <TopNavigationBar />

        <h1 className="text-center text-3xl-font-bold my-6">Coming Soon!</h1>
        {/*{JSON.stringify(problemIDMap)}*/}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    modules: allMdx(filter: { fileAbsolutePath: { regex: "/content/" } }) {
      edges {
        node {
          problems {
            source
            name
            id
            difficulty
            starred
            tags
            sol
            solQuality
          }
        }
      }
    }
  }
`;
