import { ExternalLinkIcon } from '@heroicons/react/solid';
import * as React from 'react';
import { useMarkdownProblemLists } from '../../context/MarkdownProblemListsContext';
import { getProblemURL, ProblemInfo } from '../../models/problem';
import ProblemsListItemDropdown from './ProblemsList/ProblemsListItemDropdown';
import ProblemStatusCheckbox from './ProblemsList/ProblemStatusCheckbox';

export default function FocusProblem({
  problem: problemID,
}: {
  problem: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  const problemLists = useMarkdownProblemLists()!;
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
      className={`block shadow transition dark:bg-gray-900 mb-4${
        isHovered ? '-translate-y-1 transform shadow-lg' : ''
      }`}
      id={'problem-' + problem.uniqueId}
    >
      <div className="border-t-4 border-blue-600">
        <div className="flex items-center px-4 sm:px-6">
          <div className="mr-4 flex-1">
            <div className="flex items-center">
              <a
                href={problem.url}
                target="_blank"
                rel="noreferrer"
                className="group block flex-1 py-4 transition"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="dark:text-dark-high-emphasis flex items-center text-lg font-medium text-black sm:text-xl">
                  {problem.name}
                  <svg
                    className="ml-1 h-5 w-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </div>
                <div className="dark:text-dark-med-emphasis mt-1 text-sm text-gray-500">
                  {problem.source} - {problem.difficulty}
                </div>
              </a>
            </div>
          </div>
          <div className="mt-1 ml-2 flex shrink-0 items-center justify-center sm:mr-2">
            <div className="mr-2">
              <ProblemsListItemDropdown
                onShowSolutionSketch={(problem: ProblemInfo) => {
                  return problem;
                }}
                problem={problem}
                showTags={true}
                showDifficulty={true}
                isFocusProblem={true}
                isDivisionTable={false}
              />
            </div>
            <ProblemStatusCheckbox problem={problem} size="large" />
          </div>
        </div>
        <div className="border-t border-gray-100 sm:flex sm:justify-between dark:border-gray-700">
          <p className="mb-0! px-4 py-3 text-xs font-normal text-gray-400 italic sm:px-6">
            Focus Problem – try your best to solve this problem before
            continuing!
          </p>
          {problem.solution?.kind === 'internal' && (
            <a
              href={`${getProblemURL(problem)}/solution`}
              className="mb-0! inline-flex px-4 py-3 text-xs font-normal! text-gray-400! italic hover:underline sm:px-6"
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
