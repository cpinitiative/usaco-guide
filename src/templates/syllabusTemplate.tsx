import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import MODULE_ORDERING, {
  moduleIDToSectionMap,
  SECTION_LABELS,
  SECTION_SEO_DESCRIPTION,
  SECTION_SEO_TITLES,
  SectionID,
} from '../../content/ordering';
import { getModule } from '../utils/utils';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import DashboardProgress, {
  DashboardProgressSmall,
} from '../components/Dashboard/DashboardProgress';
// import UserDataContext from '../context/UserDataContext/UserDataContext';
import {
  getProblemsProgressInfo,
  getModulesProgressInfo,
} from '../utils/getProgressInfo';
import ModuleLink from '../components/Dashboard/ModuleLink';
import { ModuleLinkInfo } from '../models/module';
import styled from 'styled-components';
import tw from 'twin.macro';

const DottedLineContainer = styled.div`
  ${tw`space-y-6 relative`}

  @media (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      width: 2px;
      display: block;
      left: calc(50% - 1px);
      top: 0;
      bottom: 0;
      border-right: 2px dashed;
      ${tw`border-gray-100`}
    }
    .mode-dark &::before {
      ${tw`border-gray-700`}
    }
  }
`;

const SectionContainer = styled.div`
  ${tw`flex flex-col md:flex-row`}

  &:hover h2 {
    ${tw`text-gray-600`}
  }
  .mode-dark &:hover h2 {
    ${tw`text-gray-300`}
  }
  &:hover h2 + p {
    ${tw`text-gray-500`}
  }
`;

const HeroBGColor: { [key in SectionID]: string } = {
  general: 'bg-blue-600 dark:bg-blue-900',
  bronze: 'bg-orange-600 dark:bg-orange-900',
  silver: 'bg-teal-600 dark:bg-teal-900',
  gold: 'bg-yellow-600 dark:bg-yellow-900',
  plat: 'bg-purple-600 dark:bg-purple-900',
  adv: 'bg-green-600 dark:bg-green-900',
};

const HeroTextColor: { [key in SectionID]: string } = {
  general: 'text-teal-200',
  bronze: 'text-orange-100',
  silver: 'text-teal-100',
  gold: 'text-yellow-100',
  plat: 'text-purple-100',
  adv: 'text-green-100',
};

const topicsWarning = (
  <>
    The topics below are not exhaustive for this division.
    <br />
    Contest problems may contain topics not covered in the guide, or topics
    listed under different divisions!
  </>
);
const SECTION_DESCRIPTION: { [key in SectionID]: React.ReactNode } = {
  general: (
    <>
      You don't have to complete all the modules in this section before moving
      on to Bronze.
      <br />
      Feel free to mark some as "skipped" and revisit them at a later time!
    </>
  ),
  bronze: topicsWarning,
  silver: topicsWarning,
  gold: topicsWarning,
  plat: (
    <>
      {topicsWarning}
      <br />
      Some lower-frequency topics are included in "Advanced."
    </>
  ),
  adv: (
    <>
      Some these topics have not appeared in Platinum and probably never will
      (ex. Matroid Intersection).
      <br />
      Others have appeared in Old Gold or Platinum very infrequently (ex. BCC,
      Suffix Array).
    </>
  ),
};

export default function Template(props) {
  const data = props.data;

  const allModules = data.modules.edges.reduce((acc, cur) => {
    acc[cur.node.frontmatter.id] = cur.node;
    return acc;
  }, {});

  const { division } = props.pageContext;

  const section = getModule(allModules, division);
  // console.log("SECTION",section)

  // const { userProgressOnModules, userProgressOnProblems } = React.useContext(
  //   UserDataContext
  // );

  const moduleIDs = section.reduce(
    (acc, cur) => [...acc, ...cur.items.map(x => x.frontmatter.id)],
    []
  );
  let moduleProgressInfo = getModulesProgressInfo(moduleIDs);
  let problemIDs = [];
  for (let chapter of MODULE_ORDERING[division]) {
    for (let moduleID of chapter.items) {
      // console.log("HA",moduleID)
      for (let problem of allModules[moduleID].problems) {
        problemIDs.push(problem.uniqueID);
      }
    }
  }
  const problemsProgressInfo = getProblemsProgressInfo(problemIDs);

  const progressBarForCategory = category => {
    // console.log("WHOOPS",category.name,category.items)
    let problemIDs = [];
    for (let chapter of MODULE_ORDERING[division])
      if (chapter.name == category.name) {
        for (let moduleID of chapter.items) {
          for (let problem of allModules[moduleID].problems) {
            problemIDs.push(problem.uniqueID);
          }
        }
      }
    const problemsProgressInfo = getProblemsProgressInfo(problemIDs);
    return (
      problemIDs.length > 1 && (
        <DashboardProgressSmall
          {...problemsProgressInfo}
          total={problemIDs.length}
        />
      )
    );
  };

  return (
    <Layout>
      <SEO
        title={SECTION_SEO_TITLES[division]}
        description={SECTION_SEO_DESCRIPTION[division]}
      />
      <div className="min-h-screen">
        <TopNavigationBar currentSection={division} />

        <main>
          <div className={`${HeroBGColor[division]} py-12 sm:py-16`}>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <h1 className="mb-6 text-white text-5xl tracking-tight leading-10 font-black text-white sm:leading-none md:text-6xl text-center">
                {SECTION_LABELS[division]}
              </h1>
              <p
                className={`${HeroTextColor[division]} text-center mb-8 sm:mb-12 px-4`}
              >
                {SECTION_DESCRIPTION[division]}
              </p>
              <div className="grid max-w-2xl mx-auto lg:max-w-full lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">
                      Modules Progress
                    </h3>
                    <div className="mt-6">
                      <DashboardProgress
                        {...moduleProgressInfo}
                        total={moduleIDs.length}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">
                      Problems Progress
                    </h3>
                    <div className="mt-6">
                      <DashboardProgress
                        {...problemsProgressInfo}
                        total={problemIDs.length}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DottedLineContainer className="py-12 px-4 max-w-screen-xl mx-auto">
            {section.map(category => (
              <SectionContainer key={category.name}>
                <div className="flex-1 md:text-right pr-12 group">
                  <h2 className="text-2xl font-semibold leading-6 py-3 text-gray-500 dark:text-dark-med-emphasis group-hover:text-gray-800 dark-group-hover:text-dark-high-emphasis transition duration-150 ease-in-out">
                    {category.name}
                  </h2>
                  <div className="leading-6 py-3 text-gray-500 dark:text-dark-med-emphasis group-hover:text-gray-800 dark-group-hover:text-dark-high-emphasis transition duration-150 ease-in-out">
                    {progressBarForCategory(category)}
                  </div>
                  <p className="md:max-w-sm md:ml-auto text-gray-400 dark:text-gray-500 dark-group-hover:text-dark-med-emphasis group-hover:text-gray-600 transition duration-150 ease-in-out">
                    {category.description}
                  </p>
                </div>
                <div className="flex-1 pl-12">
                  {category.items.map(item => (
                    <ModuleLink
                      key={item.frontmatter.id}
                      link={
                        new ModuleLinkInfo(
                          item.frontmatter.id,
                          moduleIDToSectionMap[item.frontmatter.id],
                          item.frontmatter.title,
                          item.frontmatter.description,
                          item.frontmatter.frequency,
                          item.isIncomplete
                        )
                      }
                    />
                  ))}
                </div>
              </SectionContainer>
            ))}
          </DottedLineContainer>
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
          id
          frontmatter {
            title
            id
            description
            frequency
          }
          problems {
            uniqueID
          }
          isIncomplete
        }
      }
    }
  }
`;
