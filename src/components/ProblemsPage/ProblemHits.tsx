import { Link } from 'gatsby';
import * as React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import { moduleIDToSectionMap } from '../../../content/ordering';
import { AlgoliaProblemInfo, getProblemURL } from '../../models/problem';

function ProblemHit({ hit }: { hit: AlgoliaProblemInfo }) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow p-4 sm:p-6 rounded-lg">
      <span className="text-blue-700 dark:text-blue-400 font-medium text-sm">
        {hit.source}
      </span>
      <p className="text-xl leading-6 mt-1 mb-2">
        <a
          href={hit.url}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          <Highlight hit={hit} attribute="name" />
        </a>
        {hit.isStarred && (
          <svg
            className="h-6 w-4 text-blue-400 ml-2 pb-1 inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
      </p>
      <div>
        <a
          href={hit.url}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 dark:text-dark-med-emphasis text-sm"
        >
          View Problem Statement
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 inline ml-0.5 mb-1"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </div>

      {hit.solution &&
        (hit.solution.kind === 'internal' || hit.solution.kind === 'link') && (
          <a
            href={
              hit.solution.kind === 'internal'
                ? `${getProblemURL({
                    ...hit,
                    uniqueId: hit.objectID,
                  })}/solution`
                : hit.solution.url
            }
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 dark:text-dark-med-emphasis text-sm"
          >
            View Solution
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 inline ml-0.5 mb-1"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        )}

      <p className="text-sm text-gray-500 dark:text-dark-med-emphasis  mt-2">
        Appears In:
      </p>
      <ul className="list-disc ml-6">
        {hit.problemModules.map(({ id: moduleID, title: moduleLabel }) => (
          <li key={moduleID}>
            <Link
              to={`/${moduleIDToSectionMap[moduleID]}/${moduleID}/#problem-${hit.objectID}`}
              className="text-sm text-blue-600 dark:text-blue-400"
            >
              {moduleLabel}
            </Link>
          </li>
        ))}
      </ul>

      <div className="pt-4">
        {hit.tags?.map(tag => (
          <span
            className="mr-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-dark-high-emphasis"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProblemHits({ hits }) {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {hits.map(hit => (
        <ProblemHit hit={hit} key={hit.objectID} />
      ))}
    </div>
  );
}
