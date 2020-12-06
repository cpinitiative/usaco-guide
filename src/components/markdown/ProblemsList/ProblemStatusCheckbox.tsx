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
                  Feedback for {problem.name}
                </h3>
                <div className="mt-4">
                  <form action="#" method="POST">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label
                              htmlFor="company_website"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Website
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                http://
                              </span>
                              <input
                                type="text"
                                name="company_website"
                                id="company_website"
                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                placeholder="www.example.com"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            About
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows="3"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="you@example.com"
                            >
                              {' '}
                            </textarea>
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Brief description for your profile. URLs are
                            hyperlinked.
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Photo
                          </label>
                          <div className="mt-2 flex items-center">
                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                            <button
                              type="button"
                              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Change
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Cover photo
                          </label>
                          <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
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
