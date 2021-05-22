import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import {
  moduleIDToSectionMap,
  moduleIDToURLMap,
  SECTION_LABELS,
} from '../../content/ordering';
import ActiveItems, { ActiveItem } from '../components/Dashboard/ActiveItems';
import Activity from '../components/Dashboard/Activity';
import AnnouncementBanner from '../components/Dashboard/AnnouncementBanner';
import Announcements from '../components/Dashboard/Announcements';
import DailyStreak from '../components/Dashboard/DailyStreak';
import Card from '../components/Dashboard/DashboardCard';
import DashboardProgress from '../components/Dashboard/DashboardProgress';
import WelcomeBackBanner from '../components/Dashboard/WelcomeBackBanner';
import Layout from '../components/layout';
import divToProbs from '../components/markdown/ProblemsList/DivisionList/div_to_probs';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import { SignInContext } from '../context/SignInContext';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import {
  AnnouncementInfo,
  graphqlToAnnouncementInfo,
} from '../models/announcement';
import {
  getModulesProgressInfo,
  getProblemsProgressInfo,
} from '../utils/getProgressInfo';

export default function DashboardPage(props: PageProps) {
  const { modules, announcements, problems } = props.data as any;
  const userSettings = React.useContext(UserDataContext);
  const moduleIDToName = modules.edges.reduce((acc, cur) => {
    acc[cur.node.frontmatter.id] = cur.node.frontmatter.title;
    return acc;
  }, {});
  const problemIDMap = React.useMemo(() => {
    // 1. problems in modules
    const res = problems.edges.reduce((acc, cur) => {
      const problem = cur.node;
      // ignore problems that don't have an associated module (extraProblems.json)
      if (problem.module) {
        acc[problem.uniqueId] = {
          label: `${problem.source}: ${problem.name}`,
          url: `${moduleIDToURLMap[problem.module.frontmatter.id]}/#problem-${
            problem.uniqueId
          }`,
          moduleId: problem.module.frontmatter.id,
        };
      }
      return acc;
    }, {});

    // 2. problems in USACO monthly table
    const divisions = ['Bronze', 'Silver', 'Gold', 'Platinum'];
    for (const division of divisions) {
      for (const probInfo of divToProbs[division]) {
        const id = `usaco-${probInfo[0]}`;
        if (!(id in res)) {
          res[id] = {
            label: `${division}: ${probInfo[2]}`,
            url: `/general/usaco-monthlies/#problem-${id}`,
          };
        }
      }
    }
    return res;
  }, [problems]);
  const {
    lastViewedModule: lastViewedModuleID,
    userProgressOnModules,
    userProgressOnProblems,
    lastReadAnnouncement,
    setLastReadAnnouncement,
    firebaseUser,
    consecutiveVisits,
  } = React.useContext(UserDataContext);
  const { signIn } = React.useContext(SignInContext);

  const showIgnored = userSettings.showIgnored;

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
  const allModulesProgressInfo = getModulesProgressInfo(moduleProgressIDs);

  const problemStatisticsIDs = React.useMemo(() => {
    return Object.keys(problemIDMap).filter(
      problemID =>
        moduleIDToSectionMap[problemIDMap[problemID].moduleId] ===
        lastViewedSection
    );
  }, [problemIDMap, lastViewedSection]);
  const allProblemsProgressInfo = getProblemsProgressInfo(problemStatisticsIDs);

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
    modules: allXdm(filter: { fileAbsolutePath: { regex: "/content/" } }) {
      edges {
        node {
          frontmatter {
            title
            id
          }
        }
      }
    }
    problems: allProblemInfo {
      edges {
        node {
          uniqueId
          name
          source
          module {
            frontmatter {
              id
            }
          }
        }
      }
    }
    announcements: allXdm(
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
