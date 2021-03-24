import * as React from 'react';
import Transition from '../../Transition';
import 'tippy.js/themes/light.css';

import { useContext } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import SuggestProblemRow from './SuggestProblemRow';
import { useMarkdownProblemLists } from '../../../context/MarkdownProblemListsContext';
import ProblemsListHeader from './ProblemsListHeader';
import ProblemsListItem from './ProblemsListItem';

type ProblemsListProps = {
  title?: string;
  children?: React.ReactChildren;
  problems: string;
  modules?: boolean;
  division?: string;
};

export function ProblemsList(props: ProblemsListProps) {
  const userSettings = useContext(UserDataContext);
  const showTagsAndDifficulty = !userSettings.hideTagsAndDifficulty;

  const [problem, setProblem] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const divisionTable = !!props.division;
  const shouldShowSolvePercentage = false; // props.problems.some(problem => !problem.fraction);

  const markdownProblems = useMarkdownProblemLists();
  let problems = markdownProblems.find(list => list.listId === props.problems)
    ?.problems;
  if (!problems)
    throw new Error(
      "Couldn't find the problem list with name " + props.problems
    );

  return (
    <div
      className="-mx-4 sm:-mx-6 lg:mx-0"
      id={`problemlist-${props.problems}`}
    >
      <div className="flex flex-col">
        <div className="-my-2 py-2 overflow-x-auto lg:-mx-4 lg:px-4">
          <div className="align-middle inline-block shadow overflow-hidden min-w-full lg:rounded-lg dark:bg-gray-900 border-b border-gray-200 dark:border-transparent">
            <table className="w-full no-markdown text-gray-500 dark:text-dark-med-emphasis">
              <thead>
                <ProblemsListHeader
                  showTagsAndDifficulty={showTagsAndDifficulty}
                  isDivisionTable={!!props.division}
                  showSolvePercentage={shouldShowSolvePercentage}
                  showPlatinumSolvePercentageMessage={
                    props.division === 'Platinum'
                  }
                />
              </thead>
              <tbody className="table-alternating-stripes">
                {problems.map(problem => (
                  <ProblemsListItem
                    key={problem.uniqueId}
                    problem={problem}
                    showTagsAndDifficulty={showTagsAndDifficulty}
                    onShowSolutionSketch={problem => {
                      setProblem(problem);
                      setShowModal(true);
                    }}
                    // division={props.division}
                    // modules={props.modules}
                    // showPercent={showPercent}
                  />
                ))}
                {!divisionTable && (
                  <SuggestProblemRow listName={props.problems} />
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
