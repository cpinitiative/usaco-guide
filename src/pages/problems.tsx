import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Chapter } from '../../content/ordering';

import {
  HitsPerPage,
  InstantSearch,
  Pagination,
  PoweredBy,
} from 'react-instantsearch';

import SECTIONS from '../../content/ordering';
import Layout from '../components/layout';
import ProblemHits from '../components/ProblemsPage/ProblemHits';
import SearchBox from '../components/ProblemsPage/SearchBox';
import Selection, {
  SelectionProps,
} from '../components/ProblemsPage/Selection';
import TagsRefinementList from '../components/ProblemsPage/TagsRefinementList';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import { useUserProgressOnProblems } from '../context/UserDataContext/properties/userProgress';
import { searchClient } from '../utils/algoliaSearchClient';

const indexName = `${process.env.GATSBY_ALGOLIA_INDEX_NAME ?? 'dev'}_problems`;

type DataProps = {
  allProblemInfo: {
    nodes: {
      uniqueId: string;
    }[];
  };
};

export default function ProblemsPage(props: PageProps<DataProps>) {
  const {
    allProblemInfo: { nodes: problems },
  } = props.data;
  const problemIds = problems.map(problem => problem.uniqueId);
  const userProgress = useUserProgressOnProblems();
  const selectionMetadata: SelectionProps[] = [
    {
      attribute: 'difficulty',
      limit: 500,
      placeholder: 'Difficulty',
      searchable: false,
      isMulti: true,
    },
    {
      attribute: 'problemModules.title',
      limit: 500,
      placeholder: 'Modules',
      searchable: true,
      isMulti: true,
    },
    {
      attribute: 'source',
      limit: 500,
      placeholder: 'Source',
      searchable: true,
      isMulti: true,
    },
    {
      attribute: 'isStarred',
      limit: 500,
      placeholder: 'Starred',
      searchable: false,
      transformLabel: label => (label == 'true' ? 'Yes' : 'No'),
      isMulti: false,
    },
    {
      attribute: 'problemModules.id',
      limit: 500,
      placeholder: 'Section',
      searchable: false,
      isMulti: true,
      items: (
        [
          ['General', SECTIONS.general],
          ['Bronze', SECTIONS.bronze],
          ['Silver', SECTIONS.silver],
          ['Gold', SECTIONS.gold],
          ['Platinum', SECTIONS.plat],
          ['Advanced', SECTIONS.adv],
        ] as unknown as [string, Chapter[]][]
      ).map(([section, chapters]) => ({
        label: section,
        value: chapters.map(chapter => chapter.items).flat(),
      })),
    },
    {
      attribute: 'objectID',
      limit: 500,
      placeholder: 'Status',
      searchable: false,
      isMulti: true,
      items: [
        'Not Attempted',
        'Solving',
        'Reviewing',
        'Skipped',
        'Ignored',
        'Solved',
      ].map(label => ({
        label,
        value: problemIds.filter(
          id => (userProgress[id] ?? 'Not Attempted') == label
        ),
      })),
    },
  ];
  return (
    <Layout>
      <SEO title="All Problems" />

      <div className="min-h-screen bg-gray-100 dark:bg-dark-surface">
        <TopNavigationBar />

        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <div className="py-16 bg-blue-600 dark:bg-blue-900 px-5">
            <div className="max-w-3xl mx-auto mb-6">
              <h1 className="text-center text-3xl sm:text-5xl font-bold text-white dark:text-dark-high-emphasis mb-6">
                Problems
              </h1>
              <SearchBox />
            </div>
          </div>
          <div className="flex mt-4 mb-1 mx-9 justify-center">
            <PoweredBy />
          </div>
          <div className="pt-3 px-9 pb-4 grid grid-cols-10">
            <div className="sm:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-2 col-span-5 overflow-y-auto">
              <TagsRefinementList />
            </div>
            <div className="py-0.5 px-1 sm:col-span-6 md:col-span-7 lg:col-span-8 xl:col-span-8 col-span-5">
              <div className="mb-5 items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-3">
                {selectionMetadata.map(props => (
                  <div
                    className="sm:col-span-3 col-span-2 md:col-span-1 lg:col-span-2 tw-forms-disable-all-descendants"
                    key={props.attribute}
                  >
                    <Selection {...props} />
                  </div>
                ))}
              </div>
              <ProblemHits />
              <div className="mt-3 flex flex-wrap justify-center">
                <Pagination showLast={true} className="pr-4" />
                <HitsPerPage
                  items={[
                    { label: '24 hits per page', value: 24, default: true },
                    { label: '32 hits per page', value: 32 },
                    { label: '48 hits per page', value: 48 },
                  ]}
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
    allProblemInfo {
      nodes {
        uniqueId
      }
    }
  }
`;
