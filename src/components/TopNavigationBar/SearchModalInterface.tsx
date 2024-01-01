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
import styled from 'styled-components';
import tw from 'twin.macro';
import { SECTION_LABELS, moduleIDToURLMap } from '../../../content/ordering';
import { AlgoliaModuleInfoHit } from '../../models/module';
import { searchClient } from '../../utils/algoliaSearchClient';

const SearchResultDescription = styled.p`
  ${tw`leading-4`}

  > p > .ais-Highlight > * {
    ${tw`text-gray-700`}
    ${tw`text-sm!`}
  }

  .dark & > p > .ais-Highlight > * {
    ${tw`text-gray-300`}
  }

  > .ais-Snippet > * {
    ${tw`text-gray-400`}
    ${tw`text-sm!`}
  }
`;

const SearchResultsContainer = styled.div`
  .dark & .ais-PoweredBy {
    ${tw`text-dark-high-emphasis!`}
  }
`;

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
          className="focus:outline-none focus:ring-0 text-gray-700 dark:bg-dark-surface dark:text-gray-200 dark:placeholder-gray-400 border-0 flex-1"
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
          <SearchResultsContainer>
            <div className="max-h-[20rem] sm:max-h-[40rem] overflow-y-auto border-t divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700">
              {hits.map(hit => (
                <Link
                  to={moduleIDToURLMap[hit.id]}
                  className="block hover:bg-blue-100 dark:hover:bg-gray-700 py-3 px-5 transition"
                  key={hit.id}
                >
                  <h3 className="text-gray-600 dark:text-gray-200 font-medium">
                    <Highlight hit={hit} attribute="title" /> -{' '}
                    {SECTION_LABELS[hit.division]}
                  </h3>
                  <SearchResultDescription>
                    <p className="mb-1">
                      <Highlight hit={hit} attribute="description" />
                    </p>
                    <Snippet hit={hit} attribute="content" />
                  </SearchResultDescription>
                </Link>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-gray-200 dark:border-gray-700">
              <PoweredBy theme="dark" />
            </div>
          </SearchResultsContainer>
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
