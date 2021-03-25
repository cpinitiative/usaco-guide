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
import {
  getProblemsProgressInfo,
  getModulesProgressInfo,
} from '../utils/getProgressInfo';
import Announcements from '../components/Dashboard/Announcements';
import {
  AnnouncementInfo,
  graphqlToAnnouncementInfo,
} from '../models/announcement';
import AnnouncementBanner from '../components/Dashboard/AnnouncementBanner';
import DailyStreak from '../components/Dashboard/DailyStreak';
import Card from '../components/Dashboard/DashboardCard';
import Activity from '../components/Dashboard/Activity';

export default function DashboardPage(props: PageProps) {
  const { modules, announcements } = props.data as any;
  const userSettings = React.useContext(UserDataContext);
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
    onlineUsers,
    signIn,
  } = React.useContext(UserDataContext);

  let showIgnored = userSettings.showIgnored;

  const lastViewedModuleURL = moduleIDToURLMap[lastViewedModuleID];
  const activeModules: ActiveItem[] = React.useMemo(() => {
    return Object.keys(userProgressOnModules)
      .filter(
        x =>
          (userProgressOnModules[x] === 'Reading' ||
            userProgressOnModules[x] === 'Practicing' ||
            userProgressOnModules[x] === 'Skipped' ||
            (showIgnored && userProgressOnModules[x] === 'Ignored')) &&
          moduleIDToSectionMap.hasOwnProperty(x)
      )
      .map(x => ({
        label: `${SECTION_LABELS[moduleIDToSectionMap[x]]}: ${
          moduleIDToName[x]
        }`,
        url: moduleIDToURLMap[x],
        status: userProgressOnModules[x] as
          | 'Skipped'
          | 'Reading'
          | 'Practicing'
          | 'Ignored',
      }));
  }, [userProgressOnModules, showIgnored]);
  const activeProblems: ActiveItem[] = React.useMemo(() => {
    return Object.keys(userProgressOnProblems)
      .filter(
        x =>
          (userProgressOnProblems[x] === 'Reviewing' ||
            userProgressOnProblems[x] === 'Solving' ||
            userProgressOnProblems[x] === 'Skipped' ||
            (showIgnored && userProgressOnProblems[x] === 'Ignored')) &&
          problemIDMap.hasOwnProperty(x)
      )
      .map(x => ({
        ...problemIDMap[x],
        status: userProgressOnProblems[x] as
          | 'Reviewing'
          | 'Solving'
          | 'Skipped'
          | 'Ignored',
      }));
  }, [userProgressOnProblems, showIgnored]);

  const lastViewedSection =
    moduleIDToSectionMap[lastViewedModuleID] || 'general';
  const moduleProgressIDs = Object.keys(moduleIDToName).filter(
    x => moduleIDToSectionMap[x] === lastViewedSection
  );
  // console.log(Object.keys(moduleIDToName).filter(
  //   x => moduleIDToSectionMap[x] == null
  // )); shouldn't be any ...
  let allModulesProgressInfo = getModulesProgressInfo(moduleProgressIDs);

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
  const allProblemsProgressInfo = getProblemsProgressInfo(problemStatisticsIDs);
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

      <div className="min-h-screen bg-gray-100 dark:bg-dark-surface">
        <TopNavigationBar linkLogoToIndex={true} />

        <main className="pb-12">
          <div className="max-w-7xl mx-auto mb-4">
            <div className="lg:px-8 pt-4 pb-6">
              <div className="flex flex-wrap mb-4">
                <div className="w-full text-center">
                  {firebaseUser ? (
                    <>
                      Signed in as <i>{firebaseUser.email}</i>.
                    </>
                  ) : (
                    <span>
                      Not signed in.{' '}
                      <a
                        href="#"
                        onClick={e => {
                          e.preventDefault();
                          signIn();
                        }}
                        className="text-blue-600 dark:text-blue-300 underline"
                      >
                        Sign in now!
                      </a>{' '}
                    </span>
                  )}
                </div>
                {/*<div className="w-full md:w-1/2 text-center">*/}
                {/*  {onlineUsers ? (*/}
                {/*    <>*/}
                {/*      {onlineUsers} user{onlineUsers == 1 ? '' : 's'} online.*/}
                {/*    </>*/}
                {/*  ) : null}*/}
                {/*</div>*/}
              </div>
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
              <div className="mb-8">
                <ActiveItems type="problems" items={activeProblems} />
              </div>
            )}
            {activeModules.length > 0 && (
              <div className="mb-8">
                <ActiveItems type="modules" items={activeModules} />
              </div>
            )}
          </div>
          <header id="announcements">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-dark-high-emphasis">
                Announcements
              </h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto mb-8">
            <Announcements announcements={parsedAnnouncements} />
          </div>
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-dark-high-emphasis">
                Activity
              </h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto mb-8">
            <Activity />
          </div>
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-dark-high-emphasis">
                Statistics
              </h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto">
            <div className="sm:px-6 lg:px-8 py-4 lg:grid lg:grid-cols-2 lg:gap-8 space-y-8 lg:space-y-0">
              <div className="space-y-8">
                <Card>
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">
                      Modules Progress - {SECTION_LABELS[lastViewedSection]}
                    </h3>
                    <div className="mt-6">
                      <DashboardProgress
                        {...allModulesProgressInfo}
                        total={moduleProgressIDs.length}
                      />
                    </div>
                  </div>
                </Card>
                {/*<div className="bg-white shadow sm:rounded-lg">*/}
                {/*  <div className="px-4 py-5 sm:p-6">*/}
                {/*    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">*/}
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
                <Card>
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">
                      Problems Progress - {SECTION_LABELS[lastViewedSection]}
                    </h3>
                    <div className="mt-6">
                      <DashboardProgress
                        {...allProblemsProgressInfo}
                        total={Object.keys(problemStatisticsIDs).length}
                      />
                    </div>
                  </div>
                </Card>
                {/*<div className="bg-white shadow sm:rounded-lg">*/}
                {/*  <div className="px-4 py-5 sm:p-6">*/}
                {/*    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">*/}
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

      {parsedAnnouncements[0].id !== lastReadAnnouncement &&
        userSettings.numPageviews > 12 && (
          <div className="h-12">
            <AnnouncementBanner
              announcement={parsedAnnouncements[0]}
              onDismiss={() =>
                setLastReadAnnouncement(parsedAnnouncements[0].id)
              }
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
