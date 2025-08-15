import type { BaseHit, Hit } from 'instantsearch.js';
import * as React from 'react';
import { useHits, useSearchBox } from 'react-instantsearch';
import { ALGOLIA_INDEX_NAME } from '../../constants/algolia';
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
        className="group w-full rounded-lg bg-gray-50 p-4 text-left hover:bg-sky-500 hover:text-white focus:outline-hidden dark:bg-gray-800 dark:hover:bg-sky-700"
        onClick={() => onClick(hit)}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium">{`${hit.source}: ${hit.name}`}</span>
          <span>
            {hit.isStarred ? 'Starred • ' : ''}
            {hit.difficulty}
          </span>
        </div>
        <div className="text-sm text-gray-700 group-hover:text-sky-100 md:flex md:items-center md:justify-between dark:text-gray-300">
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

export const indexName = ALGOLIA_INDEX_NAME;

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
        className="mt-2 space-y-2 overflow-y-auto"
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
