import { useEffect, useMemo, useState } from 'react';
import { Chapter } from '../../../content/ordering';

import {
  HitsPerPage,
  InstantSearch,
  Pagination,
  PoweredBy,
  useInstantSearch,
} from 'react-instantsearch';

import { GetStaticProps } from 'next';
import SECTIONS from '../../../content/ordering';
import BlindModeToggle from '../../components/BlindModeToggle';
import { difficultyClasses } from '../../components/DifficultyBox';
import Layout from '../../components/layout';
import ProblemHits from '../../components/ProblemsPage/ProblemHits';
import {
  createRouting,
  indexName,
} from '../../components/ProblemsPage/routing';
import SearchBox from '../../components/ProblemsPage/SearchBox';
import Selection, {
  SelectionProps,
} from '../../components/ProblemsPage/Selection';
import TagsRefinementList from '../../components/ProblemsPage/TagsRefinementList';
import SEO from '../../components/seo';
import { SortButton } from '../../components/SortButton';
import TopNavigationBar from '../../components/TopNavigationBar/TopNavigationBar';
import { useUserProgressOnProblems } from '../../context/UserDataContext/properties/userProgress';
import searchClient from '../../utils/algoliaLiteSearchClient';

const SORT_OPTIONS = [
  'Relevance',
  'Difficulty (Ascending)',
  'Difficulty (Descending)',
  'Contest (Newer)',
  'Contest (Older)',
];

const STATUS_OPTIONS = [
  'Not Attempted',
  'Solving',
  'Reviewing',
  'Skipped',
  'Ignored',
  'Solved',
];

/** Replaces the given query params in the URL without adding history entries. */
function updateUrlParams(updates: Record<string, string[]>) {
  const url = new URL(window.location.href);
  for (const [param, values] of Object.entries(updates)) {
    url.searchParams.delete(param);
    for (const value of values) url.searchParams.append(param, value);
  }
  window.history.replaceState(window.history.state, '', url);
}

/**
 * Applies the Status filter (a list of status labels) by expanding it into the
 * matching problem IDs. Runs again when user progress loads / changes, since
 * the expansion depends on it.
 */
function StatusFilterSync({
  statuses,
  problemIds,
}: {
  statuses: string[];
  problemIds: string[];
}) {
  const userProgress = useUserProgressOnProblems();
  const { setIndexUiState } = useInstantSearch();
  useEffect(() => {
    if (!statuses.length) return;
    const ids = problemIds.filter(id =>
      statuses.includes(userProgress[id] ?? 'Not Attempted')
    );
    // No matches usually means user progress hasn't loaded yet; leave the
    // results unfiltered instead of showing zero results
    if (!ids.length) return;
    setIndexUiState(prevIndexUiState => ({
      ...prevIndexUiState,
      refinementList: {
        ...prevIndexUiState.refinementList,
        objectID: [...ids, 'null'],
      },
    }));
  }, [statuses, problemIds, userProgress]);
  return null;
}

interface ProblemsPageProps {
  problemIds: string[];
}

export default function ProblemsPage({ problemIds }: ProblemsPageProps) {
  const userProgress = useUserProgressOnProblems();
  const [shuffle, sendShuffle] = useState(0);
  const [random, sendRandom] = useState(0);
  const [sort, setSort] = useState('Relevance');
  // Status labels selected via the URL or the Status dropdown; expanded into
  // problem IDs by StatusFilterSync
  const [statuses, setStatuses] = useState<string[]>([]);
  const routing = useMemo(createRouting, []);
  useEffect(() => {
    // Restore the page-managed params (sort, status) from the URL;
    // InstantSearch's routing handles the rest
    const params = new URLSearchParams(window.location.search);
    const sortParam = params.get('sort');
    if (sortParam && SORT_OPTIONS.includes(sortParam)) setSort(sortParam);
    const statusParams = params
      .getAll('status')
      .filter(status => STATUS_OPTIONS.includes(status));
    if (statusParams.length) setStatuses(statusParams);
  }, []);
  // keys of difficultyClasses are in increasing order of difficulty
  const difficultyOrder = Object.keys(difficultyClasses);
  const selectionMetadata: SelectionProps[] = [
    {
      attribute: 'difficulty',
      limit: 500,
      placeholder: 'Difficulty',
      searchable: false,
      isMulti: true,
      sortBy: (a, b) =>
        difficultyOrder.indexOf(a.name) - difficultyOrder.indexOf(b.name),
    },
    {
      attribute: 'problemModules.title',
      limit: 500,
      placeholder: 'Modules',
      searchable: true,
      isMulti: true,
      sortBy: ['name:asc'],
    },
    {
      attribute: 'source',
      limit: 500,
      placeholder: 'Source',
      searchable: true,
      isMulti: true,
      sortBy: ['name:asc'],
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
      onRefine: labels => {
        setStatuses(labels);
        updateUrlParams({ status: labels });
      },
      items: STATUS_OPTIONS.map(label => ({
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

        <InstantSearch
          searchClient={searchClient}
          indexName={indexName}
          routing={routing}
        >
          <StatusFilterSync statuses={statuses} problemIds={problemIds} />
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
              <div className="mb-5 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => sendShuffle(shuffle + 1)}
                  className="dark:text-dark-high-emphasis dark:hover:text-dark-high-emphasis focus:shadow-outline-blue inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-hidden dark:border-gray-800 dark:bg-gray-900"
                  title={'Shuffle problems'}
                >
                  <svg
                    className={'mr-2 h-5 w-5 text-gray-200'}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Shuffle
                </button>
                <button
                  onClick={() => sendRandom(random + 1)}
                  className="dark:text-dark-high-emphasis dark:hover:text-dark-high-emphasis focus:shadow-outline-blue inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-hidden dark:border-gray-800 dark:bg-gray-900"
                  title={'Go to a random unsolved problem'}
                >
                  <svg
                    className={'mr-2 h-5 w-5 text-gray-200'}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8" cy="8" r="1" />
                    <circle cx="16" cy="8" r="1" />
                    <circle cx="8" cy="16" r="1" />
                    <circle cx="16" cy="16" r="1" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                  Random
                </button>
                <SortButton
                  options={SORT_OPTIONS}
                  state={sort}
                  onChange={newSort => {
                    setSort(newSort);
                    updateUrlParams({
                      sort: newSort === 'Relevance' ? [] : [newSort],
                    });
                  }}
                />
              </div>
              <ProblemHits shuffle={shuffle} random={random} sort={sort} />
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { queryAllProblemIds } = await import('../../lib/queryContent');
    const problemIds = await queryAllProblemIds();
    if (!problemIds) {
      console.error('Failed to load problem IDs');
      return { notFound: true };
    }
    return { props: { problemIds } };
  } catch (error) {
    console.error('Error loading problem IDs:', error);
    return { notFound: true };
  }
};
