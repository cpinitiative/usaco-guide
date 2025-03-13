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
          <div className="max-h-[20rem] overflow-y-auto border-t divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700">
            {hits.map(hit => (
              <button
                className="block hover:bg-blue-100 dark:hover:bg-gray-700 py-3 px-5 transition focus:outline-none w-full text-left"
                key={hit.id}
                onClick={() => onSelect(hit)}
              >
                <h3 className="text-gray-600 dark:text-gray-200 font-medium">
                  <Highlight hit={hit} attribute="title" /> (
                  {hit.kind === 'module' ? 'Module' : 'Solution'})
                </h3>
                <p
                  className={`text-gray-700 dark:text-gray-400 [&_*]:!text-sm [&_*]:!leading-4`}
                >
                  <Highlight hit={hit} attribute="id" /> -{' '}
                  <Highlight hit={hit} attribute="path" />
                </p>
              </button>
            ))}
            <button
              className="block hover:bg-blue-100 dark:hover:bg-gray-700 py-3 px-5 transition focus:outline-none w-full text-left"
              onClick={() => {
                onSelect(undefined);
                openAddFile();
              }}
            >
              <h3 className="text-gray-600 dark:text-gray-200 font-medium">
                Add New Problem (Solution)
              </h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm leading-4">
                Create New Internal Solution
              </p>
            </button>
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
