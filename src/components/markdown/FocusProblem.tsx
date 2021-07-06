import { ExternalLinkIcon } from '@heroicons/react/solid';
import * as React from 'react';
import { useMarkdownProblemLists } from '../../context/MarkdownProblemListsContext';
import { getProblemURL, ProblemInfo } from '../../models/problem';
import ProblemStatusCheckbox from './ProblemsList/ProblemStatusCheckbox';

export default function FocusProblem({
  problem: problemID,
}: {
  problem: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  const problemLists = useMarkdownProblemLists();
  const problemList = problemLists.find(x => x.listId === problemID);

  if (!problemList) {
    throw new Error("Couldn't find focus problem " + problemID);
  }
  if (problemList.problems.length !== 1) {
    throw new Error(
      `The focus problem list ${problemID} should have exactly one problem.`
    );
  }

  const problem: ProblemInfo = problemList.problems[0];

  // transform must go in the isHovered condition
  // See https://github.com/thecodingwizard/usaco-guide/issues/198
  // transform creates a new stacking context :(
  return (
    <div
      className={`shadow block transition dark:bg-gray-900 mb-4${
        isHovered ? ' transform -translate-y-1 shadow-lg' : ''
      }`}
      id={'problem-' + problem.uniqueId}
    >
      <div className="border-t-4 border-blue-600">
        <div className="flex items-center px-4 sm:px-6">
          <div className="flex-1 mr-4">
            <div className="flex items-center">
              <a
                href={problem.url}
                target="_blank"
                rel="noreferrer"
                className="flex-1 block group transition py-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="text-lg sm:text-xl font-medium text-black flex items-center dark:text-dark-high-emphasis">
                  {problem.name}
                  <svg
                    className="text-gray-300 h-5 w-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </div>
                <div className="text-gray-500 text-sm mt-1 dark:text-dark-med-emphasis">
                  {problem.source} - {problem.difficulty}
                </div>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center mt-1 sm:mr-2 ml-2">
            <ProblemStatusCheckbox problem={problem} size="large" />
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-700 sm:flex sm:justify-between">
          <p className="text-xs italic text-gray-400 font-normal pt-3 px-4 sm:px-6 !mb-0 sm:pb-3">
            Focus Problem – read through this problem before continuing!
          </p>
          {problem.solution?.kind === 'internal' && (
            <a
              href={`${getProblemURL(problem)}/solution`}
              className="text-xs italic !text-gray-400 !font-normal py-3 px-4 sm:px-6 !mb-0 inline-flex hover:underline"
            >
              <span className="mr-1">View Internal Solution</span>
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
