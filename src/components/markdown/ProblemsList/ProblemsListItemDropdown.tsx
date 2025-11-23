import Tippy from '@tippyjs/react';
import React from 'react';
import { Instance } from 'tippy.js';
import { useDarkMode } from '../../../context/DarkModeContext';
import useUserSolutionsForProblem from '../../../hooks/useUserSolutionsForProblem';
import { getProblemURL, isUsaco, ProblemInfo } from '../../../models/problem';
import TextTooltip from '../../Tooltip/TextTooltip';
import { DivisionProblemInfo } from './DivisionList/DivisionProblemInfo';
import ProblemListItemSolution from './ProblemListItemSolution';
import { ProblemsListItemProps } from './ProblemsListItem';

function ViewSolutionsContent({
  problem,
}: {
  problem: ProblemInfo | DivisionProblemInfo;
}): JSX.Element {
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
          className="ml-1 inline-block h-5 w-5 text-green-400"
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
    <a
      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-hidden dark:text-gray-300 dark:hover:bg-gray-800"
      href={`/problems/${problem.uniqueId}/user-solutions`}
      target="_blank"
      rel="noreferrer"
    >
      {viewSolutionsContent}
    </a>
  );
}

export default function ProblemsListItemDropdown(
  props: ProblemsListItemProps & { isFocusProblem: boolean }
) {
  const [copied, setCopied] = React.useState(false);

  const { problem, isDivisionTable, isFocusProblem } = props;
  const darkMode = useDarkMode();

  const solutionContent = isFocusProblem ? (
    <></>
  ) : isDivisionTable ? (
    props?.problem?.solution?.kind == 'internal' ? (
      <a
        className={`group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800`}
        href={`${getProblemURL(problem)}/solution`}
        target="_blank"
        rel="noreferrer"
      >
        <div className="text-left">
          {props.problem.solution.hasHints && 'Hints + '}Internal Sol
        </div>
      </a>
    ) : (
      <></>
    )
  ) : (
    <ProblemListItemSolution
      problem={props.problem}
      onShowSolutionSketch={props.onShowSolutionSketch}
    />
  );

  const tippyRef = React.useRef<Instance | null>(null);
  const [isDropdownShown, setIsDropdownShown] = React.useState(false);

  return (
    <Tippy
      onCreate={tippy => (tippyRef.current = tippy)}
      content={
        isDropdownShown ? (
          <div className="-mx-2 text-left">
            {solutionContent}
            <ViewSolutionsContent problem={problem} />
            <button
              type="button"
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-hidden dark:text-gray-300 dark:hover:bg-gray-800"
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
                className="block w-full px-4 py-2 text-left text-sm font-normal! text-gray-700! hover:bg-gray-100! hover:text-gray-900! focus:outline-hidden dark:text-gray-300! dark:hover:bg-gray-800!"
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
        ) : (
          ''
        )
      }
      theme={darkMode ? 'dark' : 'light'}
      placement="bottom-end"
      arrow={true}
      animation="fade"
      trigger="click"
      interactive={true}
      onShow={() => setIsDropdownShown(true)}
      onHidden={() => setIsDropdownShown(false)}
      appendTo={() => document.body}
    >
      <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-gray-400 hover:text-gray-500 focus:outline-hidden dark:hover:text-gray-300">
        {/* Heroicon name: solid/dots-vertical */}
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
    </Tippy>
  );
}
