import { getProblemURL, ProblemInfo } from '../../../models/problem';
import TextTooltip from '../../Tooltip/TextTooltip';
import Tooltip from '../../Tooltip/Tooltip';

type ProblemListItemSolutionProps = {
  problem: ProblemInfo;
  onShowSolutionSketch: (problem: ProblemInfo) => void;
};

export default function ProblemListItemSolution(
  props: ProblemListItemSolutionProps
): JSX.Element {
  const { problem } = props;
  let contents: JSX.Element | null = null;
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
      <a
        href={problem.solution.url}
        target="_blank"
        className="block w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        rel="noopener noreferrer"
      >
        {problem.solution.label}
      </a>
    );
  } else if (problem.solution.kind === 'internal') {
    contents = (
      <a
        className={`group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800`}
        href={`${getProblemURL(problem)}/solution`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-left">
          {problem.solution.hasHints && 'Hints + '}Internal Sol
        </div>
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

