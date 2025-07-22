import { SearchIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';
import React from 'react';
import {
  Configure,
  Highlight,
  InstantSearch,
  PoweredBy,
  Snippet,
  useHits,
  useSearchBox,
} from 'react-instantsearch';
import { moduleIDToURLMap, SECTION_LABELS } from '../../../content/ordering';
import { AlgoliaModuleInfoHit } from '../../models/module';
import { searchClient } from '../../utils/algoliaSearchClient';

const indexName = `${process.env.GATSBY_ALGOLIA_INDEX_NAME ?? 'dev'}_modules`;

const ModuleSearch = () => {
  const { query, refine: setQuery } = useSearchBox();
  const { hits } = useHits() as { hits: AlgoliaModuleInfoHit[] };
  return (
    <div>
      <div className="flex items-center p-2">
        <input
          type="search"
          placeholder="Search"
          className="dark:bg-dark-surface flex-1 border-0 text-gray-700 focus:ring-0 focus:outline-hidden dark:text-gray-200 dark:placeholder-gray-400"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
        />
        <span className="p-2">
          <SearchIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
        </span>
      </div>
      {query !== '' && (
        <div>
          <div className="max-h-[20rem] divide-y divide-gray-200 overflow-y-auto border-t border-gray-200 sm:max-h-[40rem] dark:divide-gray-700 dark:border-gray-700">
            {hits.map(hit => (
              <Link
                to={moduleIDToURLMap[hit.id]}
                className="block px-5 py-3 transition hover:bg-blue-100 dark:hover:bg-gray-700"
                key={hit.id}
              >
                <h3 className="font-medium text-gray-700 dark:text-gray-200">
                  <Highlight hit={hit} attribute="title" /> -{' '}
                  {SECTION_LABELS[hit.division]}
                </h3>
                <div className="mb-1 text-sm leading-4 text-gray-700 dark:text-gray-200">
                  <Highlight hit={hit} attribute="description" />
                </div>
                <div className="text-sm leading-4 text-gray-500 dark:text-gray-400">
                  <Snippet hit={hit} attribute="content" />
                </div>
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-200 px-5 py-3 dark:border-gray-700">
            <div className="hidden dark:block">
              <PoweredBy theme="dark" />
            </div>
            <div className="block dark:hidden">
              <PoweredBy theme="light" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SearchModalInterface: React.FC = () => {
  return (
    <InstantSearch indexName={indexName} searchClient={searchClient}>
      <Configure hitsPerPage={10} attributesToSnippet={['content:30']} />
      <ModuleSearch />
    </InstantSearch>
  );
};

export default SearchModalInterface;
