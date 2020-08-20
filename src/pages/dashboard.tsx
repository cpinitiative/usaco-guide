import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DashboardProgress from '../components/Dashboard/DashboardProgress';
import UserDataContext from '../context/UserDataContext';
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
import DailyStreak from '../components/Dashboard/DailyStreak';

export default function DashboardPage(props: PageProps) {
  const { modules, announcements } = props.data as any;
  const moduleIDToName = modules.edges.reduce((acc, cur) => {
    acc[cur.node.frontmatter.id] = cur.node.frontmatter.title;
    return acc;
  }, {});
  const problemIDMap = modules.edges.reduce((acc, cur) => {
    cur.node.problems.forEach(problem => {
      acc[problem.uniqueID] = {
        label: `${problem.source}: ${problem.name}`,
        url: `${moduleIDToURLMap[cur.node.frontmatter.id]}/#problem-${
          problem.uniqueID
        }`,
        starred: problem.starred,
      };
    });
    return acc;
  }, {});
  const {
    lastViewedModule: lastViewedModuleID,
    userProgressOnModules,
    userProgressOnProblems,
    lastReadAnnouncement,
    setLastReadAnnouncement,
    firebaseUser,
    consecutiveVisits,
  } = React.useContext(UserDataContext);

  const lastViewedModuleURL = moduleIDToURLMap[lastViewedModuleID];
  const activeModules: ActiveItem[] = React.useMemo(() => {
    return Object.keys(userProgressOnModules)
      .filter(
        x =>
          (userProgressOnModules[x] === 'Reading' ||
            userProgressOnModules[x] === 'Practicing' ||
            userProgressOnModules[x] === 'Skipped') &&
          moduleIDToSectionMap.hasOwnProperty(x)
      )
      .map(x => ({
        label: `${SECTION_LABELS[moduleIDToSectionMap[x]]}: ${
          moduleIDToName[x]
        }`,
        url: moduleIDToURLMap[x],
        status:
          userProgressOnModules[x] === 'Skipped' ? 'Skipped' : 'In Progress',
      }));
  }, [userProgressOnModules]);
  const activeProblems: ActiveItem[] = React.useMemo(() => {
    return Object.keys(userProgressOnProblems)
      .filter(
        x =>
          (userProgressOnProblems[x] === 'Solving' ||
            userProgressOnProblems[x] === 'Skipped') &&
          problemIDMap.hasOwnProperty(x)
      )
      .map(x => ({
        ...problemIDMap[x],
        status: userProgressOnProblems[x] as 'Solving' | 'Skipped',
      }));
  }, [userProgressOnProblems]);

  const lastViewedSection = moduleIDToSectionMap[lastViewedModuleID] || 'intro';
  const moduleProgressIDs = Object.keys(moduleIDToName).filter(
    x => moduleIDToSectionMap[x] === lastViewedSection
  );
  let allModulesProgressInfo = getProgressInfo(
    moduleProgressIDs,
    userProgressOnModules,
    ['Complete'],
    ['Reading', 'Practicing'],
    ['Skipped'],
    ['Not Started']
  );

  const problemStatisticsIDs = moduleProgressIDs.reduce((acc, cur) => {
    return [
      ...acc,
      ...modules.edges
        .find(x => x.node.frontmatter.id === cur)
        .node.problems.map(x => x.uniqueID),
    ];
  }, []);
  // const allStarredProblemIDs = problemStatisticsIDs.filter(
  //   x => problemIDMap[x].starred
  // );
  const allProblemsProgressInfo = getProgressInfo(
    problemStatisticsIDs,
    userProgressOnProblems,
    ['Solved'],
    ['Solving'],
    ['Skipped'],
    ['Not Attempted']
  );
  // const allStarredProblemsProgressInfo = getProgressInfo(
  //   allStarredProblemIDs,
  //   userProgressOnProblems,
  //   ['Solved'],
  //   ['Solving'],
  //   ['Skipped'],
  //   ['Not Attempted']
  // );

  const parsedAnnouncements: AnnouncementInfo[] = React.useMemo(() => {
    return announcements.edges.map(node =>
      graphqlToAnnouncementInfo(node.node)
    );
  }, []);

  return (
    <Layout>
      <SEO title="Dashboard" />

      <div className="min-h-screen bg-gray-100">
        <TopNavigationBar />

        <main className="pb-12">
          <div className="max-w-7xl mx-auto mb-4">
            <div className="lg:px-8 pt-4 pb-6">
              <p className="mb-4 text-center">
                {firebaseUser
                  ? `Signed in as ${firebaseUser.email}.`
                  : `Not signed in.`}
              </p>
              <div className="flex overflow-x-auto">
                <WelcomeBackBanner
                  lastViewedModuleURL={lastViewedModuleURL}
                  lastViewedModuleLabel={moduleIDToName[lastViewedModuleID]}
                />
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8">
            {activeProblems.length > 0 && (
              <div>
                <ActiveItems type="problems" items={activeProblems} />
              </div>
            )}
            {activeModules.length > 0 && (
              <div>
                <ActiveItems type="modules" items={activeModules} />
              </div>
            )}
          </div>
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Announcements
              </h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto mb-8">
            <Announcements announcements={parsedAnnouncements} />
          </div>
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Statistics
              </h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto">
            <div className="sm:px-6 lg:px-8 py-4 lg:grid lg:grid-cols-2 lg:gap-8 space-y-8 lg:space-y-0">
              <div className="space-y-8">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {SECTION_LABELS[lastViewedSection]} Modules Progress
                    </h3>
                    <div className="mt-6">
                      <DashboardProgress
                        {...allModulesProgressInfo}
                        total={moduleProgressIDs.length}
                      />
                    </div>
                  </div>
                </div>
                {/*<div className="bg-white shadow sm:rounded-lg">*/}
                {/*  <div className="px-4 py-5 sm:p-6">*/}
                {/*    <h3 className="text-lg leading-6 font-medium text-gray-900">*/}
                {/*      All Starred Problems*/}
                {/*    </h3>*/}
                {/*    <div className="mt-6">*/}
                {/*      <DashboardProgress*/}
                {/*        {...allStarredProblemsProgressInfo}*/}
                {/*        total={Object.keys(allStarredProblemIDs).length}*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
              <div className="space-y-8">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {SECTION_LABELS[lastViewedSection]} Problems Progress
                    </h3>
                    <div className="mt-6">
                      <DashboardProgress
                        {...allProblemsProgressInfo}
                        total={Object.keys(problemStatisticsIDs).length}
                      />
                    </div>
                  </div>
                </div>
                {/*<div className="bg-white shadow sm:rounded-lg overflow-hidden row-span-2 flex flex-col">*/}
                {/*  <div className="px-4 pt-5 sm:px-6 sm:pt-6 pb-4">*/}
                {/*    <h3 className="text-lg leading-6 font-medium text-gray-900">*/}
                {/*      🔥 6 Day Streak: Keep it up!*/}
                {/*    </h3>*/}
                {/*    <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">*/}
                {/*      <p>*/}
                {/*        You've visited this guide for 6 consecutive days. Enjoy*/}
                {/*        this cute cow photo as a reward!*/}
                {/*      </p>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <img*/}
                {/*    className="h-64 w-full object-cover"*/}
                {/*    src="https://66.media.tumblr.com/709acf5805b63bf412dd5cf8d6e34803/tumblr_oplgjdcYJl1sgqqono1_500.jpg"*/}
                {/*    alt="Cow"*/}
                {/*  />*/}
                {/*</div>*/}
                {/*<div className="bg-white shadow sm:rounded-lg">*/}
                {/*  <div className="px-4 py-5 sm:p-6">*/}
                {/*    <h3 className="text-lg leading-6 font-medium text-gray-900">*/}
                {/*      Section Breakdown*/}
                {/*    </h3>*/}
                {/*    <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">*/}
                {/*      <p>Below is your progress on modules for each section.</p>*/}
                {/*    </div>*/}
                {/*    <div className="mt-4">*/}
                {/*      <SectionProgressBar title="Intro" />*/}
                {/*      <SectionProgressBar title="Bronze" />*/}
                {/*      <SectionProgressBar title="Silver" />*/}
                {/*      <SectionProgressBar title="Gold" />*/}
                {/*      <SectionProgressBar title="Plat" />*/}
                {/*      <SectionProgressBar title="Advanced" />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
              <DailyStreak streak={consecutiveVisits} />
            </div>
          </div>
        </main>
      </div>

      {parsedAnnouncements[0].id !== lastReadAnnouncement && (
        <div className="h-12">
          <AnnouncementBanner
            announcement={parsedAnnouncements[0]}
            onDismiss={() => setLastReadAnnouncement(parsedAnnouncements[0].id)}
          />
        </div>
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    modules: allMdx(filter: { fileAbsolutePath: { regex: "/content/" } }) {
      edges {
        node {
          frontmatter {
            title
            id
          }
          problems {
            uniqueID
            source
            name
            starred
          }
        }
      }
    }
    announcements: allMdx(
      filter: { fileAbsolutePath: { regex: "/announcements/" } }
      sort: { order: DESC, fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            title
            id
            date
          }
          body
        }
      }
    }
  }
`;
