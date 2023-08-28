import Tippy from '@tippyjs/react';
import { navigate } from 'gatsby';
import React from 'react';
import { Instance } from 'tippy.js';
import { useDarkMode } from '../../../context/DarkModeContext';
import useUserSolutionsForProblem from '../../../hooks/useUserSolutionsForProblem';
import { isUsaco, ProblemInfo } from '../../../models/problem';
import TextTooltip from '../../Tooltip/TextTooltip';
import ProblemListItemSolution from './ProblemListItemSolution';
import { ProblemsListItemProps } from './ProblemsListItem';
import { Link } from 'gatsby';

function ViewSolutionsContent({
  problem,
}: {
  problem: ProblemInfo;
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
    <a
      className="focus:outline-none block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900"
      href={`/problems/${problem.uniqueId}/user-solutions`}
      target="_blank"
    >
      {viewSolutionsContent}
    </a>
  );
}

export default function ProblemsListItemDropdown(
  props: ProblemsListItemProps & { isFocusProblem: boolean }
) {
  const [copied, setCopied] = React.useState(false);

  const { problem, isFocusProblem } = props;

  const darkMode = useDarkMode();
  const solutionContent = isFocusProblem ? (
    <></>
  ) : (
    <ProblemListItemSolution
      problem={props.problem}
      onShowSolutionSketch={props.onShowSolutionSketch}
    />
  );

  const tippyRef = React.useRef<Instance>();
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
    >
      <button className="focus:outline-none w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 dark:hover:text-gray-300">
        {/* Heroicon name: solid/dots-vertical */}
        <svg
          className="w-5 h-5"
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
