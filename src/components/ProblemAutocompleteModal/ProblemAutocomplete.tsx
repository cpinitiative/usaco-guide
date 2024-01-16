import { BaseHit, Hit } from 'instantsearch.js';
import * as React from 'react';
import { useHits, useSearchBox } from 'react-instantsearch';
import { AlgoliaProblemInfo } from '../../models/problem';

type AlgoliaProblemInfoHit = Hit<BaseHit> & AlgoliaProblemInfo;

const ProblemAutocompleteHit = ({
  hit,
  onClick,
}: {
  hit: AlgoliaProblemInfoHit;
  onClick: (problem: AlgoliaProblemInfoHit) => void;
}) => {
  return (
    <li key={hit.objectID}>
      <button
        className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-left w-full focus:outline-none group hover:bg-light-blue-500 dark:hover:bg-light-blue-700 hover:text-white"
        onClick={() => onClick(hit)}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium">{`${hit.source}: ${hit.name}`}</span>
          <span>
            {hit.isStarred ? 'Starred • ' : ''}
            {hit.difficulty}
          </span>
        </div>
        <div className="md:flex md:items-center md:justify-between text-sm text-gray-700 dark:text-gray-300 group-hover:text-light-blue-100">
          <span>
            Tags: {hit.tags?.length > 0 ? hit.tags.join(', ') : 'None'}
          </span>
          <span className="max-w-xs truncate">
            Appears in{' '}
            {hit.problemModules &&
              `${hit.problemModules.map(x => `${x.title}`).join(', ')}`}
          </span>
        </div>
      </button>
    </li>
  );
};

export const indexName = `${
  process.env.GATSBY_ALGOLIA_INDEX_NAME ?? 'dev'
}_problems`;

export type ProblemAutocompleteProps = {
  onProblemSelect: (problem: AlgoliaProblemInfoHit) => void;
  modalIsOpen: boolean;
};

export function ProblemAutocomplete({
  onProblemSelect,
  modalIsOpen,
}: ProblemAutocompleteProps) {
  const { query, refine: setQuery } = useSearchBox();
  const { hits } = useHits() as { hits: AlgoliaProblemInfoHit[] };
  return (
    <div>
      <div>
        <input
          autoFocus={modalIsOpen}
          type="text"
          className="input"
          placeholder="Problem Name"
          value={query}
          onChange={e => setQuery(e.currentTarget.value)}
        />
      </div>
      <ul
        className="overflow-y-auto mt-2 space-y-2"
        style={{ height: '40rem' }}
      >
        {hits.map(hit => (
          <ProblemAutocompleteHit
            hit={hit}
            key={hit.objectID}
            onClick={p => onProblemSelect(p)}
          />
        ))}
      </ul>
    </div>
  );
}
