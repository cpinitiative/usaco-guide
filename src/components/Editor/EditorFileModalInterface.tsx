import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';
import {
  Highlight,
  InstantSearch,
  PoweredBy,
  useHits,
  useSearchBox,
} from 'react-instantsearch';
import {
  AlgoliaEditorFile,
  AlgoliaEditorFileHit,
} from '../../models/algoliaEditorFile';
import { searchClient } from '../../utils/algoliaSearchClient';

const indexName = `${
  process.env.GATSBY_ALGOLIA_INDEX_NAME ?? 'dev'
}_editorFiles`;

const FileSearch = ({
  onSelect,
  openAddFile,
}: {
  onSelect: (file: AlgoliaEditorFile | undefined) => void;
  openAddFile: () => void;
}) => {
  const { query, refine: setQuery } = useSearchBox();
  const { hits } = useHits() as { hits: AlgoliaEditorFileHit[] };
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
          <div className="max-h-[20rem] divide-y divide-gray-200 overflow-y-auto border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
            {hits.map(hit => (
              <button
                className="block w-full px-5 py-3 text-left transition hover:bg-blue-100 focus:outline-hidden dark:hover:bg-gray-700"
                key={hit.id}
                onClick={() => onSelect(hit)}
              >
                <h3 className="font-medium text-gray-600 dark:text-gray-200">
                  <Highlight hit={hit} attribute="title" /> (
                  {hit.kind === 'module' ? 'Module' : 'Solution'})
                </h3>
                <p
                  className={`text-gray-700 **:text-sm! **:leading-4! dark:text-gray-400`}
                >
                  <Highlight hit={hit} attribute="id" /> -{' '}
                  <Highlight hit={hit} attribute="path" />
                </p>
              </button>
            ))}
            <button
              className="block w-full px-5 py-3 text-left transition hover:bg-blue-100 focus:outline-hidden dark:hover:bg-gray-700"
              onClick={() => {
                onSelect(undefined);
                openAddFile();
              }}
            >
              <h3 className="font-medium text-gray-600 dark:text-gray-200">
                Add New Problem (Solution)
              </h3>
              <p className="text-sm leading-4 text-gray-700 dark:text-gray-400">
                Create New Internal Solution
              </p>
            </button>
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

const EditorFileModalInterface: React.FC<{
  onSelect: (file: AlgoliaEditorFile) => void;
  openAddFile: () => void;
}> = ({ onSelect, openAddFile }) => {
  return (
    <InstantSearch indexName={indexName} searchClient={searchClient}>
      <FileSearch onSelect={onSelect} openAddFile={openAddFile} />
    </InstantSearch>
  );
};

export default EditorFileModalInterface;
