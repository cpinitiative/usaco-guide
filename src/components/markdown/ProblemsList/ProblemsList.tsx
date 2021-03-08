import * as React from 'react';
import { Problem } from '../../../../content/models';
import Transition from '../../Transition';
import Tooltip from '../../Tooltip/Tooltip';
import TextTooltip from '../../Tooltip/TextTooltip';
import ProblemStatusCheckbox from './ProblemStatusCheckbox';
import { UsacoTableProgress } from '../../Dashboard/DashboardProgress';
// import { Link } from 'gatsby';
import { Transition as HeadlessUITransition } from '@headlessui/react';

import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';

import { useContext, useRef } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import SubmitCodeButton from './SubmitCodeButton';
import { Instance } from 'tippy.js';
import ProblemSolutionsModalContext from '../../../context/ProblemSolutionsModalContext';
import SuggestProblemRow from './SuggestProblemRow';

type ProblemsListProps = {
  title?: string;
  children?: React.ReactChildren;
  problems: Problem[];
  alwaysHideTags?: boolean;
  modules?: boolean;
  division?: string;
  isClass?: boolean;
};

let showTagsAndDifficulty = true;

export function ProblemsList(props: ProblemsListProps) {
  const userSettings = useContext(UserDataContext);
  showTagsAndDifficulty = !userSettings.hideTagsAndDifficulty;
  const [problem, setProblem] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const alwaysHideTags = props.alwaysHideTags;
  const divisionTable = !!props.division;
  const isClass = props.isClass || false;
  let showPercent = true; // props.division != 'Platinum';
  for (const problem of props.problems) {
    if (!problem.fraction) showPercent = false;
  }
  return (
    <div className="-mx-4 sm:-mx-6 lg:mx-0">
      <div className="flex flex-col">
        <div className="-my-2 py-2 overflow-x-auto lg:-mx-4 lg:px-4">
          <div className="align-middle inline-block shadow overflow-hidden min-w-full lg:rounded-lg dark:bg-gray-900 border-b border-gray-200 dark:border-transparent">
            <table className="w-full no-markdown text-gray-500 dark:text-dark-med-emphasis">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 pr-4 md:pr-6">
                  <th className="pl-4 py-3 text-xs leading-4 font-medium uppercase tracking-wider text-center">
                    Status
                  </th>

                  <th className="pl-4 md:pl-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                    {divisionTable ? 'Contest' : 'Source'}
                  </th>

                  <th className="pl-4 sm:pl-10 md:pl-12 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider whitespace-nowrap">
                    Problem Name
                  </th>

                  {showTagsAndDifficulty &&
                    (divisionTable ? (
                      showPercent && (
                        <th className="pl-4 md:pl-6 pr-4 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                          <TextTooltip
                            content={
                              props.division === 'Platinum'
                                ? 'Percentage of points scored by the top 10 USA pre-college participants.'
                                : 'Percentage of points scored by pre-college promoters. Can be interpreted as a combination of difficulty + how strong the test data is.'
                            }
                          >
                            Percent
                          </TextTooltip>
                        </th>
                      )
                    ) : (
                      <th
                        className={`pr-4 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider`}
                      >
                        Difficulty
                      </th>
                    ))}

                  {showTagsAndDifficulty && !alwaysHideTags && (
                    <th className="pl-4 md:pl-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                      Tags
                    </th>
                  )}

                  {props.modules && (
                    <th className="pl-10 md:pl-12 pr-4 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                      Module
                    </th>
                  )}
                  {isClass && (
                    <th className="pr-2 md:pr-3 py-3 leading-4 text-left text-xs font-medium uppercase tracking-wider">
                      Submit Code
                    </th>
                  )}
                  <th className="pr-2 md:pr-3 py-3 leading-4 text-left text-xs font-medium uppercase tracking-wider">
                    {/*More*/}
                  </th>
                </tr>
              </thead>
              <tbody className="table-alternating-stripes">
                {props.problems.map(problem => (
                  <ProblemComponent
                    problem={problem}
                    alwaysHideTags={alwaysHideTags}
                    division={props.division}
                    onShowSolution={problem => {
                      setProblem(problem);
                      setShowModal(true);
                    }}
                    key={problem.id}
                    modules={props.modules}
                    showPercent={showPercent}
                    showSubmitCodeButtons={isClass}
                  />
                ))}
                {!divisionTable && !isClass && (
                  <SuggestProblemRow problems={props.problems} />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Transition show={showModal} timeout={300}>
        <div className="fixed z-10 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
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
                    Solution Sketch: {problem?.name}
                  </h3>
                  <div className="mt-4">
                    <p className="text-gray-700">{problem?.solution?.sketch}</p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </div>
  );
}

type ProblemComponentProps = {
  problem: Problem;
  onShowSolution: Function;
  alwaysHideTags?: boolean;
  division?: string;
  modules?: boolean;
  showPercent?: boolean;
  showSubmitCodeButtons?: boolean;
};

export const difficultyClasses = {
  'Very Easy': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
  Easy: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
  Normal: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
  Hard: 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100',
  'Very Hard':
    'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100',
  Insane: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
};

// https://stackoverflow.com/questions/45871439/before-and-after-pseudo-classes-used-with-styled-components
const StyledProblemRow = styled.tr`
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: #fdfdea !important;
          .dark && {
            background-color: #3c3c00 !important;
          }
        `
      : null}
`;

const Anchor = styled.a`
  ${tw`text-blue-600 font-semibold`}

  .dark && {
    color: #a9c5ea;
  }
`;

export function ProblemComponent(props: ProblemComponentProps) {
  const { darkMode } = useContext(UserDataContext);
  const [isActive, setIsActive] = React.useState(false);
  const { problem, alwaysHideTags } = props;
  const id = `problem-${problem.uniqueID}`;
  const divisionTable = !!props.division;
  let resultsUrl = '';
  if (divisionTable) {
    const parts = problem.source.split(' ');
    parts[0] = parts[0].substring(2);
    if (parts[1] === 'US') parts[1] = 'open';
    else parts[1] = parts[1].toLowerCase().substring(0, 3);
    resultsUrl = `http://www.usaco.org/index.php?page=${parts[1]}${parts[0]}results`;
    // console.log('SOURCE', problem.source, resultsUrl);
  }
  React.useEffect(() => {
    const hashHandler = (): void => {
      setIsActive(
        window && window.location && window.location.hash === '#' + id
      );
    };
    hashHandler();

    window.addEventListener('hashchange', hashHandler, false);
    return (): void =>
      window.removeEventListener('hashchange', hashHandler, false);
  }, []);

  const statusCol = (
    <td className="pl-4 whitespace-nowrap text-sm font-medium">
      <div
        style={{ height: '1.25rem' }}
        className="flex items-center justify-center"
      >
        <ProblemStatusCheckbox problem={problem} />
      </div>
    </td>
  );

  const sourceCol = (
    <td className="pl-4 md:pl-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
      {divisionTable ? (
        <Anchor
          href={resultsUrl}
          className={'truncate'}
          style={{ maxWidth: '15rem' }}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {problem.source}
        </Anchor>
      ) : problem.tooltipHoverDescription ? (
        <TextTooltip content={problem.tooltipHoverDescription}>
          {problem.source}
        </TextTooltip>
      ) : (
        problem.source
      )}
    </td>
  );

  const nameCol = (
    <td className="pl-4 md:px-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
      <div className="flex items-center">
        {problem.starred && (
          <Tooltip content="We highly recommend you do all starred problems!">
            <svg
              className="h-4 w-4 text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </Tooltip>
        )}
        <Anchor
          href={problem.url}
          className={
            (problem.starred ? 'pl-1 sm:pl-2' : 'sm:pl-6') + ' truncate'
          }
          style={{ maxWidth: '20rem' }}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {problem.name}
        </Anchor>
      </div>
    </td>
  );

  const difficultyCol = (
    <td className={`py-4 whitespace-nowrap leading-5 pr-4 md:pr-6`}>
      {problem.difficulty && (
        <span
          className={
            'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' +
            difficultyClasses[problem.difficulty]
          }
        >
          {problem.difficulty}
        </span>
      )}
    </td>
  );

  const submitCodeCol = (
    <td className={`leading-5 pr-4`}>
      <SubmitCodeButton problem={problem} />
    </td>
  );

  const [copied, setCopied] = React.useState(false);
  const tippyRef = useRef<Instance>();

  const { openProblemSolutionsModal } = useContext(
    ProblemSolutionsModalContext
  );

  const more = (
    <div>
      <Tippy
        onCreate={tippy => (tippyRef.current = tippy)}
        content={
          <div className="-mx-2 text-left">
            <div>
              <ProblemSolutionCell
                problem={props.problem}
                onShowSolution={props.onShowSolution}
              />
              <button
                type="button"
                className="focus:outline-none block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900"
                onClick={() => {
                  openProblemSolutionsModal(problem);
                  tippyRef.current.hide();
                }}
              >
                View User Solutions
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
                      problem.uniqueID
                  );
                }}
              >
                {copied ? 'Copied!' : 'Copy Permalink'}
              </button>
            </div>
          </div>
        }
        theme={darkMode ? 'dark' : 'light'}
        placement="bottom-end"
        arrow={true}
        animation="fade"
        trigger="click"
        interactive={true}
        onHidden={() => setCopied(false)}
      >
        <button className="focus:outline-none w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 dark:hover:text-gray-300">
          <span className="sr-only">Open options</span>
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
    </div>
  );

  return (
    <StyledProblemRow id={id} isActive={isActive}>
      {statusCol}
      {sourceCol}
      {nameCol}
      {showTagsAndDifficulty &&
        (divisionTable
          ? props.showPercent && (
              <td className="pl-4 md:pl-6 pr-4 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                <UsacoTableProgress
                  division={props.division}
                  completed={problem.fraction}
                />
              </td>
            )
          : difficultyCol)}
      {showTagsAndDifficulty && !alwaysHideTags && (
        <td className="pl-4 md:pl-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
          {problem.tags && problem.tags.length ? (
            <details className="text-gray-500 dark:text-dark-med-emphasis">
              <summary>Show Tags</summary>
              <p className="text-xs">{problem.tags.sort().join(', ')}</p>
            </details>
          ) : null}
        </td>
      )}
      {props.modules && (
        <ProblemSolutionCell
          problem={props.problem}
          modules
          onShowSolution={props.onShowSolution}
        />
      )}
      {props.showSubmitCodeButtons && submitCodeCol}
      <td className="text-center pr-2 md:pr-3">{more}</td>
    </StyledProblemRow>
  );
}

const ProblemSolutionCell = (props: ProblemComponentProps) => {
  const { problem } = props;
  let contents: JSX.Element = null;
  if (props.modules) {
    contents = problem.moduleLink ? (
      <Anchor href={problem.moduleLink} target="_blank" className="pl-6">
        Link
      </Anchor>
    ) : (
      <Tooltip content={`This problem isn't in a module yet.`}>
        <span className="text-gray-300 dark:text-gray-600 pl-6">None</span>
      </Tooltip>
    );
    return (
      <td className="pl-4 md:pl-6 pr-4 md:pr-6 py-4 whitespace-nowrap text-sm font-medium leading-none">
        {contents}
      </td>
    );
  } else {
    contents = (
      <>
        {problem.solution?.label && problem.solution?.labelTooltip === null && (
          <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
            Solution: {problem.solution?.label}
          </div>
        )}
        {problem.solution?.label && problem.solution?.labelTooltip?.length > 0 && (
          <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
            <TextTooltip content={problem.solution.labelTooltip}>
              Solution: {problem.solution.label}
            </TextTooltip>
          </div>
        )}
        {problem.solution?.kind === 'link' && problem.solution.url != '//' && (
          <Anchor
            href={problem.solution.url}
            target="_blank"
            className="block w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {problem.solution.label}
          </Anchor>
        )}
        {problem.solution?.kind === 'internal' && (
          <a
            className={`flex items-center group px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
            href={problem.solution.url}
            target="_blank"
          >
            <div className="text-left">Internal Sol</div>
            {problem.solQuality === 'good' && (
              <Tooltip content="This solution is verified to be complete and of high quality.">
                <svg
                  className="h-5 w-5 text-green-400 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Tooltip>
            )}
            {problem.solQuality === 'bad' && (
              <Tooltip content="This solution is still a work-in-progress. It may be vague or incomplete.">
                <svg
                  className="h-5 w-5 text-gray-300 group-hover:text-yellow-300 mr-1 transition ease-in-out duration-150"
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
            )}
            {problem.solQuality === 'ok' && <span className="w-6" />}
          </a>
        )}
        {problem.solution?.kind === 'sketch' && (
          <div
            className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300 cursor-pointer"
            onClick={() =>
              problem.solution.sketch && props.onShowSolution(problem)
            }
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
        )}
        {!problem.solution && (
          <div className="px-4 py-2 text-sm text-gray-300 dark:text-gray-500">
            <Tooltip
              content={`We haven't written a solution for this problem yet. If needed, request one using the "Contact Us" button!`}
            >
              <span>View Solution</span>
            </Tooltip>
          </div>
        )}
      </>
    );
  }
  return contents;
};
