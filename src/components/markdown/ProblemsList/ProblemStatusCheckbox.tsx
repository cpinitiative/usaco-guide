import * as React from 'react';
import { Problem, PROBLEM_PROGRESS_OPTIONS } from '../../../models/problem';
import { useContext, useRef, useState } from 'react';
import UserDataContext from '../../../context/UserDataContext';
import { ProblemProgress } from '../../../models/problem';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import styled from 'styled-components';

const StyledTippy = styled(Tippy)`
  .tippy-content {
    padding: 0;
  }
`;

const ProgressDropdown = ({ onProgressSelected, currentProgress }) => {
  const [activeProgress, setActiveProgress] = useState<ProblemProgress>();
  return (
    <ul
      tabIndex={-1}
      className="max-h-60 rounded-md py-1 text-base leading-6 overflow-auto focus:outline-none sm:text-sm sm:leading-5 no-markdown"
    >
      {PROBLEM_PROGRESS_OPTIONS.map(progress => (
        <li
          role="option"
          className={`${
            activeProgress === progress
              ? 'text-white bg-indigo-600'
              : 'text-gray-900'
          } cursor-default select-none relative py-2 pl-10 pr-4`}
          key={progress}
          onClick={() => onProgressSelected(progress)}
          onMouseEnter={() => setActiveProgress(progress)}
        >
          <span
            className={`${
              progress === status ? 'font-semibold' : 'font-normal'
            } block truncate`}
          >
            {progress}
          </span>

          {progress === currentProgress && (
            <span
              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                activeProgress === progress ? 'text-white' : 'text-indigo-600'
              }`}
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default function ProblemStatusCheckbox({
  problem,
  size = 'small',
}: {
  problem: Problem;
  size?: 'small' | 'large';
}) {
  const { userProgressOnProblems, setUserProgressOnProblems } = useContext(
    UserDataContext
  );
  let status: ProblemProgress =
    userProgressOnProblems[problem.uniqueID] || 'Not Attempted';
  const color: { [key in ProblemProgress]: string } = {
    'Not Attempted': 'bg-gray-200 dark:bg-gray-700',
    Solving: 'bg-yellow-300 dark:bg-yellow-500',
    Solved: 'bg-green-500 dark:bg-green-600',
    Ignored: 'bg-red-100 dark:bg-red-900',
    Skipped: 'bg-blue-300 dark:bg-blue-700',
  };
  const tippyRef = useRef();
  return (
    <StyledTippy
      onCreate={tippy => (tippyRef.current = tippy)}
      content={
        <div className="w-56">
          <ProgressDropdown
            onProgressSelected={progress => {
              // @ts-ignore
              tippyRef.current.hide();
              setUserProgressOnProblems(problem, progress);
            }}
            currentProgress={status}
          />
        </div>
      }
      interactive={true}
      trigger="click"
      placement="bottom-start"
      theme="light"
    >
      <span
        // onClick={handleClick}
        // onContextMenu={handleRightClick}
        className={`inline-block ${size === 'small' ? 'h-6 w-6' : 'h-8 w-8'}`}
      >
        <span
          className={
            `inline-block ${
              size === 'small' ? 'h-6 w-6' : 'h-8 w-8'
            } rounded-full cursor-pointer transition duration-100 ease-out ` +
            color[status]
          }
        />
      </span>
    </StyledTippy>
  );
}
