import { Link } from 'gatsby';
import { BaseHit, Hit } from 'instantsearch.js';
import * as React from 'react';
import { Highlight, useHits } from 'react-instantsearch';
import { moduleIDToSectionMap } from '../../../content/ordering';
import { useBlindMode } from '../../context/BlindModeContext';
import { ConfettiProvider } from '../../context/ConfettiContext';
import {
  useHideDifficultySetting,
  useHideModulesSetting,
  useShowTagsSetting,
} from '../../context/UserDataContext/properties/simpleProperties';
import { useUserProgressOnProblems } from '../../context/UserDataContext/properties/userProgress';
import {
  AlgoliaProblemInfo,
  getProblemURL,
  isUsaco,
  ProblemInfo,
  ProblemProgress,
  recentUsaco,
} from '../../models/problem';
import DifficultyBox from '../DifficultyBox';
import Info from '../markdown/Info';
import ProblemStatusCheckbox from '../markdown/ProblemsList/ProblemStatusCheckbox';

type AlgoliaProblemInfoHit = Hit<BaseHit> & AlgoliaProblemInfo;
interface ProblemHitProps {
  hit: AlgoliaProblemInfoHit;
}

function ProblemHit({ hit }: ProblemHitProps) {
  const hideDifficulty = useHideDifficultySetting();
  const showTags = useShowTagsSetting();
  const hideModules = useHideModulesSetting();
  const { isBlindMode } = useBlindMode();

  if (hit.problemModules.length == 0 && recentUsaco.includes(hit.source)) {
    hit.problemModules.push({
      id: 'usaco-monthlies',
      title: 'USACO Monthlies',
    });
  }
  const problem = hit as unknown as ProblemInfo;
  problem.uniqueId = hit.objectID;
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6 dark:bg-gray-900">
      <div className="flex w-full flex-row justify-between">
        <span>
          <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
            {hit.source}
          </span>
          <p className="mt-1 mb-2 text-xl leading-6">
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
                className="ml-2 inline-block h-6 w-4 pb-1 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </p>
        </span>
        <ConfettiProvider>
          <ProblemStatusCheckbox problem={problem} size="large" />
        </ConfettiProvider>
      </div>
      {/* <div>
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
      </div> */}

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
            className="dark:text-dark-med-emphasis text-sm text-gray-500"
          >
            View Solution
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mb-1 ml-0.5 inline h-4 w-4"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        )}
      {isUsaco(problem.source) && (
        <>
          <br />
          <a
            href={`https://ide.usaco.guide/usaco/${problem.uniqueId.substring(
              problem.uniqueId.indexOf('-') + 1
            )}`}
            target="_blank"
            rel="noreferrer"
            className="dark:text-dark-med-emphasis text-sm text-gray-500"
          >
            Open in IDE
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mb-1 ml-0.5 inline h-4 w-4"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </>
      )}
      {!hideModules && !isBlindMode && (
        <>
          <p className="dark:text-dark-med-emphasis mt-2 text-sm text-gray-500">
            Appears In:
          </p>
          <ul className="ml-6 list-disc">
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
        </>
      )}

      <div className="pt-4">
        {!hideDifficulty && <DifficultyBox difficulty={hit.difficulty} />}
        {showTags &&
          hit.tags?.map(tag => (
            <span
              className="dark:text-dark-high-emphasis mr-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs leading-4 font-medium text-gray-800 dark:bg-gray-800"
              key={tag}
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
}

export default function ProblemHits({ shuffle, random }) {
  const { hits } = useHits() as { hits: AlgoliaProblemInfoHit[] };
  const [displayHits, setDisplayHits] =
    React.useState<AlgoliaProblemInfoHit[]>(hits);
  const userProgressOnProblems = useUserProgressOnProblems();

  function shuffleArr(arr) {
    const nArr = [...arr];
    let l = nArr.length;

    while (l > 0) {
      const i = Math.floor(Math.random() * l--);
      [nArr[l], nArr[i]] = [nArr[i], nArr[l]];
    }

    return nArr;
  }

  React.useEffect(() => {
    if (shuffle) {
      setDisplayHits(shuffleArr(hits));
    } else {
      setDisplayHits(hits);
    }
  }, [shuffle, hits]);

  React.useEffect(() => {
    if (random) {
      const unsolvedURLs: string[] = [];
      for (const h of hits) {
        const status: ProblemProgress =
          userProgressOnProblems[String(h.uniqueId)] || 'Not Attempted';
        if (status === 'Not Attempted') {
          unsolvedURLs.push(h.url);
        }
      }

      if (unsolvedURLs.length > 0) {
        window.open(
          unsolvedURLs[Math.floor(Math.random() * unsolvedURLs.length)],
          '_blank'
        );
      }
    }
  }, [random]);

  if (!hits.length || !displayHits.length) {
    return (
      <Info title="No Problems Found">
        No problems were found matching your search criteria. Try changing your
        search or filters.
      </Info>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayHits.map(hit => (
        <ProblemHit hit={hit} key={hit.objectID} />
      ))}
    </div>
  );
}
