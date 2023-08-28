import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import {
  connectHits,
  connectRefinementList,
  connectSearchBox,
  HitsPerPage,
  InstantSearch,
  Pagination,
  PoweredBy,
} from 'react-instantsearch-dom';
import Layout from '../components/layout';
import Difficulty from '../components/ProblemsPage/Difficulty';
import Modules from '../components/ProblemsPage/Module';
import ProblemHits from '../components/ProblemsPage/ProblemHits';
import RefinementList from '../components/ProblemsPage/RefinementList';
import SearchBox from '../components/ProblemsPage/SearchBox';
import Section from '../components/ProblemsPage/Section';
import Source from '../components/ProblemsPage/Source';
import Starred from '../components/ProblemsPage/Starred';
import Status from '../components/ProblemsPage/Status';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import { searchClient } from '../utils/algoliaSearchClient';

const indexName =
  process.env.NODE_ENV === 'production' ? 'prod_problems' : 'dev_problems';

const CustomModuleSelection = connectRefinementList(Modules);
const CustomDifficultySelection = connectRefinementList(Difficulty);
const CustomStarredSelection = connectRefinementList(Starred);
const CustomSectionSelection = connectRefinementList(Section);
const CustomStatusSelection = connectRefinementList(Status);
const CustomSourceSelection = connectRefinementList(Source);
const CustomSearchBox = connectSearchBox(SearchBox);
const CustomHits = connectHits(ProblemHits);
const CustomRefinementList = connectRefinementList(RefinementList);

export default function ProblemsPage(props: PageProps) {
  const { problems } = props.data as any;
  const problemIds = problems.edges.reduce((acc, cur) => {
    const problem = cur.node;
    acc.push(problem.uniqueId);
    return acc;
  }, []);
  return (
    <Layout>
      <SEO title="All Problems" />

      <div className="min-h-screen bg-gray-100 dark:bg-dark-surface">
        <TopNavigationBar />

        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <div className="py-16 bg-blue-600 dark:bg-blue-900 px-5">
            <div className="max-w-3xl mx-auto mb-6">
              <h1 className="text-center text-3xl sm:text-5xl font-bold text-white dark:text-dark-high-emphasis mb-6">
                Problems (Beta)
              </h1>
              <CustomSearchBox />
            </div>
          </div>
          <div className="flex mt-4 mb-1 mx-9 justify-center">
            <PoweredBy />
          </div>
          <div className="pt-3 px-9 pb-4 grid grid-cols-10">
            <div className="sm:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-2 col-span-5 overflow-y-auto">
              <CustomRefinementList attribute="tags" limit={500} searchable />
            </div>
            <div className="py-0.5 px-1 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-8 col-span-5 overflow-y-auto">
              <div className="mb-5 items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-3">
                <div className="sm:col-span-3 col-span-2 md:col-span-1 lg:col-span-2">
                  <CustomDifficultySelection
                    attribute="difficulty"
                    limit={500}
                    searchable
                  />
                </div>
                <div className="sm:col-span-3 col-span-2 md:col-span-1 lg:col-span-2 tw-forms-disable-all-descendants">
                  <CustomModuleSelection
                    attribute="problemModules.title"
                    limit={500}
                    searchable
                  />
                </div>
                <div className="sm:col-span-3 col-span-2 md:col-span-1 lg:col-span-2 tw-forms-disable-all-descendants">
                  <CustomSourceSelection
                    attribute="source"
                    limit={500}
                    searchable
                  />
                </div>
                <div className="sm:col-span-3 col-span-2 md:col-span-1 lg:col-span-2">
                  <CustomStarredSelection
                    attribute="isStarred"
                    limit={500}
                    searchable
                  />
                </div>
                <div className="sm:col-span-3 col-span-2 md:col-span-1 lg:col-span-2">
                  <CustomSectionSelection
                    attribute="problemModules.id"
                    limit={500}
                    searchable
                  />
                </div>
                <div className="sm:col-span-3 col-span-2 md:col-span-1 lg:col-span-2 ">
                  <CustomStatusSelection
                    attribute="objectID"
                    limit={500}
                    searchable
                    problemIds={problemIds}
                  />
                </div>
              </div>
              <CustomHits />
              <div className="mt-3 flex flex-wrap justify-center">
                <Pagination showLast={true} className="pr-4" />
                <HitsPerPage
                  items={[
                    { label: '24 hits per page', value: 24 },
                    { label: '32 hits per page', value: 32 },
                    { label: '48 hits per page', value: 48 },
                  ]}
                  defaultRefinement={24}
                  className="mt-1 lg:mt-0"
                />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    problems: allProblemInfo {
      edges {
        node {
          uniqueId
        }
      }
    }
  }
`;
