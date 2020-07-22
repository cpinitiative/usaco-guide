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
import TopNavigationBar from '../components/TopNavigationBar';
import ActiveItems, { ActiveItem } from '../components/Dashboard/ActiveItems';
import getProgressInfo from '../utils/getProgressInfo';

export default function DashboardPage(props: PageProps) {
  const { modules } = props.data as any;
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
  } = React.useContext(UserDataContext);
  const lastViewedModuleURL = moduleIDToURLMap[lastViewedModuleID];
  const activeModules: ActiveItem[] = React.useMemo(() => {
    return Object.keys(userProgressOnModules)
      .filter(
        x =>
          userProgressOnModules[x] === 'Reading' ||
          userProgressOnModules[x] === 'Practicing' ||
          userProgressOnModules[x] === 'Skipped'
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
          userProgressOnProblems[x] === 'Solving' ||
          userProgressOnProblems[x] === 'Skipped'
      )
      .map(x => ({
        ...problemIDMap[x],
        status: userProgressOnProblems[x] as 'Solving' | 'Skipped',
      }));
  }, [userProgressOnProblems]);

  let allModulesProgressInfo = getProgressInfo(
    Object.keys(moduleIDToName),
    userProgressOnModules,
    ['Complete'],
    ['Reading', 'Practicing'],
    ['Skipped'],
    ['Not Started']
  );

  const allProblemIDs = Object.keys(problemIDMap);
  // const allStarredProblemIDs = allProblemIDs.filter(
  //   x => problemIDMap[x].starred
  // );
  const allProblemsProgressInfo = getProgressInfo(
    allProblemIDs,
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

  return (
    <Layout>
      <SEO title="Dashboard" />

      <div className="min-h-screen bg-gray-100">
        <TopNavigationBar />

        <main className="pb-12">
          <div className="max-w-7xl mx-auto mb-4">
            <div className="flex overflow-x-auto lg:px-8 lg:pt-10 pb-6">
              <WelcomeBackBanner
                lastViewedModuleURL={lastViewedModuleURL}
                lastViewedModuleLabel={moduleIDToName[lastViewedModuleID]}
              />
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
          {/*<header>*/}
          {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
          {/*    <h1 className="text-3xl font-bold leading-tight text-gray-900">*/}
          {/*      Announcements*/}
          {/*    </h1>*/}
          {/*  </div>*/}
          {/*</header>*/}
          {/*<div className="max-w-7xl mx-auto mb-8">*/}
          {/*  <div className="flex overflow-x-auto sm:px-6 lg:px-8 py-4 lg:grid lg:grid-cols-2 lg:gap-8">*/}
          {/*    <div className="bg-white shadow hover:shadow-lg transition duration-150 ease-in-out sm:rounded-lg">*/}
          {/*      <div className="px-4 py-5 sm:p-6 cursor-pointer">*/}
          {/*        <p className="text-sm leading-5 text-gray-500">*/}
          {/*          <time dateTime="2020-07-18">July 18, 2020</time>*/}
          {/*        </p>*/}
          {/*        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">*/}
          {/*          Looking for Contributors!*/}
          {/*        </h3>*/}
          {/*        <p className="mt-3 text-base leading-6 text-gray-500">*/}
          {/*          Welcome to the USACO Guide! We're still in pre-release mode,*/}
          {/*          so things may be a bit rough around the edges. Learn more*/}
          {/*          about what this means, and how you can help contribute!*/}
          {/*        </p>*/}
          {/*        <div className="mt-3">*/}
          {/*          <span className="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">*/}
          {/*            Continue Reading*/}
          {/*          </span>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
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
                      All Modules
                    </h3>
                    <div className="mt-6">
                      <DashboardProgress
                        {...allModulesProgressInfo}
                        total={Object.keys(moduleIDToName).length}
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
                <div className="bg-white shadow sm:rounded-lg order-6">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      All Problems
                    </h3>
                    <div className="mt-6">
                      <DashboardProgress
                        {...allProblemsProgressInfo}
                        total={Object.keys(allProblemIDs).length}
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
            </div>
          </div>
        </main>
      </div>
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
  }
`;
