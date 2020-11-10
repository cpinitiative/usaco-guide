import * as React from 'react';
import { Problem, PROBLEM_PROGRESS_OPTIONS } from '../../../models/problem';
import { useContext, useRef, useState } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { ProblemProgress } from '../../../models/problem';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import styled from 'styled-components';

import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';

const StyledTippy = styled(Tippy)`
  .tippy-content {
    padding: 0;
  }
`;
const Chooseicon = status => {
  switch (status) {
    case 'Reading':
      return (
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-yellow-300"
          >
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
        </span>
      );
    case 'Complete':
      return (
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-green-400"
          >
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </span>
      );
    case 'Practicing':
      return (
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-orange-500"
          >
            <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
          </svg>
        </span>
      );
    case 'Skipped':
      return (
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-blue-400"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      );
    case 'Ignored':
      return (
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-purple-400"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      );
    default:
      return;
  }
};

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
            {Chooseicon(progress)}
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
  const markdownLayoutContext = useContext(MarkdownLayoutContext);
  const { userProgressOnModules, setModuleProgress } = useContext(
    UserDataContext
  );
  const { userProgressOnProblems, setUserProgressOnProblems } = useContext(
    UserDataContext
  );
  const updateModuleProgressToPracticing = () => {
    if (
      markdownLayoutContext === null ||
      !markdownLayoutContext.markdownLayoutInfo?.id
    )
      return;
    const { markdownLayoutInfo } = markdownLayoutContext;
    const moduleProgress =
      (userProgressOnModules && userProgressOnModules[markdownLayoutInfo.id]) ||
      'Not Started';
    if (moduleProgress !== 'Not Started') return;
    setModuleProgress(markdownLayoutInfo.id, 'Practicing');
  };
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
        <div className="w-56 z-20">
          <ProgressDropdown
            onProgressSelected={progress => {
              // @ts-ignore
              tippyRef.current.hide();
              setUserProgressOnProblems(problem, progress);
              if (progress == 'Solving' || progress == 'Solved')
                updateModuleProgressToPracticing();
              const { conf } = markdownLayoutContext;
              if (status != progress && progress == 'Solved') {
                conf(true);
              }
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
