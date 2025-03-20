import { graphql } from 'gatsby';
import * as React from 'react';
import {
  SECTION_LABELS,
  SECTION_SEO_DESCRIPTION,
  SECTION_SEO_TITLES,
  SectionID,
  moduleIDToSectionMap,
} from '../../content/ordering';
import DashboardProgress, {
  DashboardProgressSmall,
} from '../components/Dashboard/DashboardProgress';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ModuleLink from '../components/syllabus/ModuleLink';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import { ModuleFrequency, ModuleLinkInfo } from '../models/module';
// import UserDataContext from '../context/UserDataContext/UserDataContext';
import {
  useModulesProgressInfo,
  useProblemsProgressInfo,
} from '../utils/getProgressInfo';
import { getModulesForDivision } from '../utils/utils';

const HeroBGColor: { [key in SectionID]: string } = {
  general: 'bg-blue-700 dark:bg-blue-900',
  bronze: 'bg-orange-800 dark:bg-orange-900',
  silver: 'bg-teal-700 dark:bg-teal-900',
  gold: 'bg-yellow-700 dark:bg-yellow-900',
  plat: 'bg-purple-700 dark:bg-purple-900',
  adv: 'bg-green-700 dark:bg-green-900',
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
  bronze: (
    <>
      {topicsWarning}
      <br />
      If you prefer videos instead of text, check out CPI's free{' '}
      <a
        href="https://joincpi.org/video-classes"
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        self-study Bronze course.
      </a>
    </>
  ),
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
      Some of these topics have not appeared in Platinum and probably never will
      (ex. Matroid Intersection).
      <br />
      Others have appeared in Old Gold or Platinum very infrequently (ex. BCC,
      Suffix Array).
    </>
  ),
};

export default function Template(props) {
  const data: Queries.SyllabusQuery = props.data;
  const allModules = data.modules.nodes.reduce((acc, cur) => {
    acc[cur.frontmatter.id] = cur;
    return acc;
  }, {} as { [key: string]: (typeof data.modules.nodes)[0] });

  const { division } = props.pageContext;

  const section = getModulesForDivision(allModules, division);

  const moduleIDs = section.reduce(
    (acc, cur) => [...acc, ...cur.items.map(x => x.frontmatter.id)],
    [] as string[]
  );
  const moduleProgressInfo = useModulesProgressInfo(moduleIDs);
  const problemIDs = [
    ...new Set(data.problems.nodes.map(x => x.uniqueId) as string[]),
  ];
  const problemsProgressInfo = useProblemsProgressInfo(problemIDs);

  const useProgressBarForCategory = (category: (typeof section)[0]) => {
    const categoryModuleIDs = category.items.map(
      module => module.frontmatter.id
    );
    const categoryProblemIDs = data.problems.nodes
      .filter(x => categoryModuleIDs.includes(x.module?.frontmatter.id ?? ''))
      .map(x => x.uniqueId);
    const problemsProgressInfo = useProblemsProgressInfo(categoryProblemIDs);
    return (
      categoryProblemIDs.length > 1 && (
        <DashboardProgressSmall
          {...problemsProgressInfo}
          total={categoryProblemIDs.length}
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
              <h1 className="mb-6 text-5xl tracking-tight leading-10 font-black text-white sm:leading-none md:text-6xl text-center">
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
          <div className="py-12 px-4 max-w-screen-xl mx-auto space-y-6 syllabus-dotted-line-container">
            {section.map(category => (
              <div
                key={category.name}
                className="group/category flex flex-col md:flex-row"
              >
                <div className="flex-1 md:text-right pr-12">
                  <h2 className="text-2xl font-semibold leading-6 py-3 text-gray-500 dark:text-dark-med-emphasis group-hover/category:text-gray-800 dark:group-hover/category:text-dark-high-emphasis transition">
                    {category.name}
                  </h2>
                  <div className="leading-6 py-3 text-gray-500 dark:text-dark-med-emphasis group-hover/category:text-gray-800 dark:group-hover/category:text-dark-high-emphasis transition">
                    {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                    {useProgressBarForCategory(category)}
                  </div>
                  <p className="md:max-w-sm md:ml-auto text-gray-400 dark:text-gray-500 dark:group-hover/category:text-dark-med-emphasis group-hover/category:text-gray-600 transition">
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
                          item.frontmatter.frequency as ModuleFrequency,
                          item.isIncomplete,
                          item.cppOc,
                          item.javaOc,
                          item.pyOc,
                          [],
                          item.fields?.gitAuthorTime
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query Syllabus($division: String!) {
    modules: allXdm(
      filter: {
        fileAbsolutePath: { regex: "/content/" }
        fields: { division: { eq: $division } }
      }
    ) {
      nodes {
        id
        frontmatter {
          title
          id
          description
          frequency
        }
        isIncomplete
        cppOc
        javaOc
        pyOc
        fields {
          gitAuthorTime
        }
      }
    }
    problems: allProblemInfo(
      filter: { module: { fields: { division: { eq: $division } } } }
    ) {
      nodes {
        uniqueId
        name
        module {
          frontmatter {
            id
          }
        }
      }
    }
  }
`;
