import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import {
  moduleIDToSectionMap,
  moduleIDToURLMap,
  SECTION_LABELS,
} from '../../content/ordering';
import ActiveItems, { ActiveItem } from '../components/Dashboard/ActiveItems';
import Activity from '../components/Dashboard/Activity';
import DailyStreak from '../components/Dashboard/DailyStreak';
import Card from '../components/Dashboard/DashboardCard';
import DashboardProgress from '../components/Dashboard/DashboardProgress';
import WelcomeBackBanner from '../components/Dashboard/WelcomeBackBanner';
import Layout from '../components/layout';
import divToProbs from '../components/markdown/ProblemsList/DivisionList/div_to_probs.json';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import { useSignIn } from '../context/SignInContext';
import { useLastVisitInfo } from '../context/UserDataContext/properties/lastVisit';
import {
  useLastViewedModule,
  useShowIgnoredSetting,
} from '../context/UserDataContext/properties/simpleProperties';
import {
  useUserProgressOnModules,
  useUserProgressOnProblems,
} from '../context/UserDataContext/properties/userProgress';
import { useFirebaseUser } from '../context/UserDataContext/UserDataContext';
import {
  useModulesProgressInfo,
  useProblemsProgressInfo,
} from '../utils/getProgressInfo';

export default function DashboardPage(props: PageProps) {
  const { modules, problems } = props.data as any;
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
        if (!(problem.uniqueId in acc)) {
          acc[problem.uniqueId] = {
            label: `${problem.source}: ${problem.name}`,
            modules: [],
          };
        }
        acc[problem.uniqueId].modules.push({
          url: `${moduleIDToURLMap[problem.module.frontmatter.id]}/#problem-${
            problem.uniqueId
          }`,
          moduleId: problem.module.frontmatter.id,
        });
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
            modules: [
              {
                url: `/general/usaco-monthlies/#problem-${id}`,
              },
            ],
          };
        }
      }
    }
    return res;
  }, [problems]);
  const lastViewedModuleID = useLastViewedModule();
  const userProgressOnModules = useUserProgressOnModules();
  const userProgressOnProblems = useUserProgressOnProblems();
  const firebaseUser = useFirebaseUser();
  const { consecutiveVisits } = useLastVisitInfo();
  const showIgnored = useShowIgnoredSetting();
  const { signIn } = useSignIn();

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
        label: problemIDMap[x].label,
        url: problemIDMap[x].modules[0].url,
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
  const allModulesProgressInfo = useModulesProgressInfo(moduleProgressIDs);

  const problemStatisticsIDs = React.useMemo(() => {
    return Object.keys(problemIDMap).filter(problemID =>
      problemIDMap[problemID].modules.some(
        (module: { url: string; moduleId: string }) =>
          moduleIDToSectionMap[module.moduleId] === lastViewedSection
      )
    );
  }, [problemIDMap, lastViewedSection]);
  const allProblemsProgressInfo = useProblemsProgressInfo(problemStatisticsIDs);

  const [finishedRendering, setFinishedRendering] = React.useState(false);
  React.useEffect(() => {
    setFinishedRendering(true);
  }, []);

  return (
    <Layout>
      <SEO title="Dashboard" image={null} pathname={props.path} />

      <div className="dark:bg-dark-surface min-h-screen bg-gray-100">
        <TopNavigationBar linkLogoToIndex={true} redirectToDashboard={false} />

        {finishedRendering && (
          <main className="pb-12">
            <div className="mx-auto mb-4 max-w-7xl">
              <div className="pt-4 pb-6 lg:px-8">
                <div className="mb-4 flex flex-wrap">
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
                          className="text-blue-600 underline dark:text-blue-300"
                        >
                          Sign in now!
                        </a>{' '}
                      </span>
                    )}
                  </div>
                </div>
                <WelcomeBackBanner
                  lastViewedModuleURL={lastViewedModuleURL}
                  lastViewedModuleLabel={moduleIDToName[lastViewedModuleID]}
                />
              </div>
            </div>
            <div className="mx-auto max-w-7xl sm:px-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:px-8">
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
            <header>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="dark:text-dark-high-emphasis text-3xl leading-tight font-bold text-gray-900">
                  Activity
                </h1>
              </div>
            </header>
            <div className="mx-auto mb-8 max-w-7xl">
              <Activity />
            </div>
            <header>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="dark:text-dark-high-emphasis text-3xl leading-tight font-bold text-gray-900">
                  Statistics
                </h1>
              </div>
            </header>
            <div className="mx-auto max-w-7xl">
              <div className="space-y-8 py-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 lg:px-8">
                <div className="space-y-8">
                  <Card>
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="dark:text-dark-high-emphasis text-lg leading-6 font-medium text-gray-900">
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
                      <h3 className="dark:text-dark-high-emphasis text-lg leading-6 font-medium text-gray-900">
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
                </div>
                <DailyStreak streak={consecutiveVisits} />
              </div>
            </div>
          </main>
        )}
      </div>
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
  }
`;
