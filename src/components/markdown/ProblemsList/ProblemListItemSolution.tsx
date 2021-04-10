import * as React from 'react';
import { getProblemURL, ProblemInfo } from '../../../models/problem';
import TextTooltip from '../../Tooltip/TextTooltip';
import Tooltip from '../../Tooltip/Tooltip';
import { Anchor } from './ProblemsListItem';

type ProblemListItemSolutionProps = {
  problem: ProblemInfo;
  onShowSolutionSketch: (problem: ProblemInfo) => void;
};

export default function ProblemListItemSolution(
  props: ProblemListItemSolutionProps
): JSX.Element {
  const { problem } = props;
  let contents: JSX.Element = null;
  if (!problem.solution) {
    contents = (
      <div className="px-4 py-2 text-sm text-gray-300 dark:text-gray-500">
        <Tooltip
          content={`We haven't written a solution for this problem yet. If needed, request one using the "Contact Us" button!`}
        >
          <span>View Solution</span>
        </Tooltip>
      </div>
    );
  } else if (problem.solution.kind === 'sketch') {
    contents = (
      <div
        className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300 cursor-pointer"
        onClick={() => props.onShowSolutionSketch(problem)}
      >
        <span className="inline-flex items-center group h-5">
          Show Solution Sketch
          <Tooltip content="This solution is still a work-in-progress. It may be vague or incomplete.">
            <svg
              className="h-5 w-5 text-gray-300 ml-1 group-hover:text-yellow-300 transition"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </Tooltip>
        </span>
      </div>
    );
  } else if (problem.solution.kind === 'label') {
    const textContent = <>Solution: {problem.solution.label}</>;
    contents = (
      <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
        {problem.solution.labelTooltip ? (
          <TextTooltip content={problem.solution.labelTooltip}>
            {textContent}
          </TextTooltip>
        ) : (
          textContent
        )}
      </div>
    );
  } else if (problem.solution.kind === 'link') {
    contents = (
      <Anchor
        href={problem.solution.url}
        target="_blank"
        className="block w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {problem.solution.label}
      </Anchor>
    );
  } else if (problem.solution.kind === 'internal') {
    contents = (
      <a
        className={`flex items-center group px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
        href={`${getProblemURL(problem)}/solution`}
        target="_blank"
        rel="noreferrer"
      >
        <div className="text-left">Internal Sol</div>
      </a>
    );
  } else {
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      "Couldn't determine problem solution type " + problem.solution.kind
    );
  }
  return contents;
}
