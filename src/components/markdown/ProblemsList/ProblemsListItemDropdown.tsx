import React from 'react';
import useUserSolutionsForProblem from '../../../hooks/useUserSolutionsForProblem';
import { isUsaco } from '../../../models/problem';
import TextTooltip from '../../Tooltip/TextTooltip';
import ProblemListItemSolution from './ProblemListItemSolution';
import { ProblemsListItemProps } from './ProblemsListItem';

export default function ProblemsListItemDropdown(
  props: ProblemsListItemProps & { onViewProblemSolutions: () => void }
) {
  const [copied, setCopied] = React.useState(false);

  const problem = props.problem;
  const { solutions, currentUserSolutions } =
    useUserSolutionsForProblem(problem);

  let viewSolutionsContent = (
    <>View User Solutions ({solutions?.length ?? '...'})</>
  );
  if (currentUserSolutions?.length) {
    viewSolutionsContent = (
      <>
        <TextTooltip
          position="bottom"
          content={"You've submitted a solution to this problem."}
        >
          {viewSolutionsContent}
        </TextTooltip>
        <svg
          className="h-5 w-5 text-green-400 inline-block ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </>
    );
  }
  return (
    <div className="-mx-2 text-left">
      <div>
        <ProblemListItemSolution
          problem={props.problem}
          onShowSolutionSketch={props.onShowSolutionSketch}
        />
        <button
          type="button"
          className="focus:outline-none block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900"
          onClick={props.onViewProblemSolutions}
        >
          {viewSolutionsContent}
        </button>
        <button
          type="button"
          className="focus:outline-none block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900"
          onClick={e => {
            e.preventDefault();
            setCopied(true);
            navigator.clipboard.writeText(
              window.location.href.split(/[?#]/)[0] +
                '#problem-' +
                problem.uniqueId
            );
          }}
        >
          {copied ? 'Copied!' : 'Copy Permalink'}
        </button>
        {isUsaco(problem.source) && (
          <a
            className="!font-normal focus:outline-none block w-full text-left px-4 py-2 text-sm !text-gray-700 dark:!text-gray-300 hover:!bg-gray-100 dark:hover:!bg-gray-800 hover:!text-gray-900"
            href={`https://ide.usaco.guide/usaco/${problem.uniqueId.substring(
              problem.uniqueId.indexOf('-') + 1
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Open in IDE
          </a>
        )}
      </div>
    </div>
  );
}
