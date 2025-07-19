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
import BlindModeToggle from '../components/BlindModeToggle';
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

      <div className="dark:bg-dark-surface min-h-screen bg-gray-100">
        <TopNavigationBar />

        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <div className="bg-blue-600 px-5 py-16 dark:bg-blue-900">
            <div className="mx-auto mb-6 max-w-3xl">
              <h1 className="dark:text-dark-high-emphasis mb-6 text-center text-3xl font-bold text-white sm:text-5xl">
                Problems
              </h1>
              <SearchBox />
            </div>
          </div>
          <div className="mx-9 mt-4 mb-1 flex justify-center">
            <PoweredBy />
          </div>

          <div className="grid grid-cols-10 px-9 pt-3 pb-4">
            <div className="col-span-5 overflow-y-auto sm:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-2">
              <div className="mb-4">
                <BlindModeToggle />
              </div>
              <TagsRefinementList />
            </div>
            <div className="col-span-5 px-1 py-0.5 sm:col-span-6 md:col-span-7 lg:col-span-8 xl:col-span-8">
              <div className="mb-5 grid grid-cols-1 items-center gap-x-5 gap-y-3 sm:grid-cols-2 lg:grid-cols-6">
                {selectionMetadata.map(props => (
                  <div
                    className="tw-forms-disable-all-descendants col-span-2 sm:col-span-3 md:col-span-1 lg:col-span-2"
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
