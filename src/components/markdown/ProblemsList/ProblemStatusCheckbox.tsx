import * as React from 'react';
import { Problem, PROBLEM_PROGRESS_OPTIONS } from '../../../models/problem';
import { useContext, useRef, useState } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { ProblemProgress } from '../../../models/problem';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import styled from 'styled-components';
import feedbackModal from '../../feedbackModal';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import ConfettiContext from '../../../context/ConfettiContext';
import Transition from '../../Transition';
import { logError } from 'gatsby/dist/state-machines/develop/actions';

const StyledTippy = styled(Tippy)`
  .tippy-content {
    padding: 0;
  }
`;

const ProgressDropdown = ({
  onProgressSelected,
  currentProgress,
  openModal,
}) => {
  const [activeProgress, setActiveProgress] = useState<ProblemProgress>();

  return (
    <div>
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
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
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
    </div>
  );
};

export default function ProblemStatusCheckbox({
  problem,
  size = 'small',
}: {
  problem: Problem;
  size?: 'small' | 'large';
}) {
  const [showModal, setShowModal] = React.useState(false);

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
  const showConfetti = useContext(ConfettiContext);
  const Modal = (
    <Transition show={showModal} timeout={300}>
      <div className="fixed z-10 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
        {showModal && console.log('running')}
        <Transition
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity">
            <div
              className="absolute inset-0 bg-gray-500 opacity-75"
              onClick={() => setShowModal(false)}
            />
          </div>
        </Transition>

        <Transition
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            className="relative bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-xl sm:w-full sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="sm:flex sm:items-start">
              <div className="text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  FEEDBACK INPUT
                </h3>
                <div className="mt-4">
                  <p className="text-gray-700">ghuvhjhj</p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  );
  return (
    <div>
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
                if (status != progress && progress == 'Solved') {
                  showConfetti();
                  setShowModal(true);
                }
              }}
              currentProgress={status}
              openModal={showModal}
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
      {Modal}
    </div>
  );
}
