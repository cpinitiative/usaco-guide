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
import { SECTION_LABELS, moduleIDToURLMap } from '../../../content/ordering';
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
          className="focus:outline-hidden focus:ring-0 text-gray-700 dark:bg-dark-surface dark:text-gray-200 dark:placeholder-gray-400 border-0 flex-1"
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
          <div className="max-h-[20rem] sm:max-h-[40rem] overflow-y-auto border-t divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700">
            {hits.map(hit => (
              <Link
                to={moduleIDToURLMap[hit.id]}
                className="block hover:bg-blue-100 dark:hover:bg-gray-700 py-3 px-5 transition"
                key={hit.id}
              >
                <h3 className="text-gray-700 dark:text-gray-200 font-medium">
                  <Highlight hit={hit} attribute="title" /> -{' '}
                  {SECTION_LABELS[hit.division]}
                </h3>
                <p className="**:text-sm! **:leading-4!">
                  <div className="mb-1 text-gray-700 dark:text-gray-200">
                    <Highlight hit={hit} attribute="description" />
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    <Snippet hit={hit} attribute="content" />
                  </div>
                </p>
              </Link>
            ))}
          </div>
          <div className="px-5 py-3 border-t border-gray-200 dark:border-gray-700">
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
