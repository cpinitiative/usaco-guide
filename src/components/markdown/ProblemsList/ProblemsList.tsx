import { Transition } from '@headlessui/react';
import { globalHistory } from '@reach/router';
import * as React from 'react';
import { Fragment } from 'react';
import { useMarkdownProblemLists } from '../../../context/MarkdownProblemListsContext';
import {
  useHideDifficultySetting,
  useShowTagsSetting,
} from '../../../context/UserDataContext/properties/simpleProperties';
import { ProblemInfo } from '../../../models/problem';
import { ListTable } from '../ListTable/ListTable';
import { DivisionProblemInfo } from './DivisionList/DivisionProblemInfo';
import ProblemsListHeader from './ProblemsListHeader';
import ProblemsListItem from './ProblemsListItem';
import SuggestProblemRow from './SuggestProblemRow';

/* eslint-disable react/prop-types */

type ProblemsListProps =
  | {
      title?: string;
      children?: React.ReactNode;
      problems?: string;
      hideSuggestProblemButton?: boolean;
    }
  | {
      title?: string;
      children?: React.ReactNode;
      problems?: DivisionProblemInfo[]; // normally string; only DivisionProblemInfo[] when it's a division table
      division?: string; // only if is division table
      modules?: boolean; // only if is division table
    };
type AnnotatedProblemsListProps =
  | {
      isDivisionTable: false;
      tableName?: string;
      title?: string;
      children?: React.ReactNode;
      problems: ProblemInfo[];
      hideSuggestProblemButton?: boolean;
    }
  | {
      isDivisionTable: true;
      title?: string;
      children?: React.ReactNode;
      problems?: DivisionProblemInfo[]; // normally string; only DivisionProblemInfo[] when it's a division table
      division?: string; // only if is division table
      modules?: boolean; // only if is division table
    };
export function ProblemsList(unannotatedProps: ProblemsListProps): JSX.Element {
  const markdownProblems = useMarkdownProblemLists()!;
  let problems: ProblemInfo[] | DivisionProblemInfo[];
  if (typeof unannotatedProps.problems === 'string') {
    problems = markdownProblems.find(
      list => list.listId === unannotatedProps.problems
    )!.problems;
    if (!problems) {
      throw new Error(
        "Couldn't find the problem list with name " + unannotatedProps.problems
      );
    }
  } else {
    problems = unannotatedProps.problems as DivisionProblemInfo[];
  }
  const props: AnnotatedProblemsListProps = {
    ...unannotatedProps,
    ...(typeof unannotatedProps.problems === 'string'
      ? { tableName: unannotatedProps.problems }
      : {}),
    isDivisionTable: !(typeof unannotatedProps.problems === 'string'),
    problems,
  } as AnnotatedProblemsListProps;
  const showTags = useShowTagsSetting();
  const showDifficulty = !useHideDifficultySetting();

  const [problem, setProblem] = React.useState<ProblemInfo | null>(null);
  const [showModal, setShowModal] = React.useState(false);

  const shouldShowSolvePercentage =
    props.isDivisionTable &&
    props.problems!.some(problem => !!problem.percentageSolved);

  const path = globalHistory.location.pathname || '';

  return (
    <>
      <ListTable
        id={`problemlist-${
          props.isDivisionTable === false
            ? props.tableName
            : 'division-' + props.division
        }`}
        header={
          <ProblemsListHeader
            showTags={showTags}
            showDifficulty={showDifficulty}
            isDivisionTable={props.isDivisionTable}
            showSolvePercentage={shouldShowSolvePercentage}
            showPlatinumSolvePercentageMessage={
              props.isDivisionTable
                ? props.division === 'Platinum'
                : (undefined as any)
            }
          />
        }
      >
        {props.isDivisionTable === true &&
          props.problems!.map((problem: DivisionProblemInfo) => {
            return (
              <ProblemsListItem
                key={problem.uniqueId}
                problem={problem}
                showTags={showTags}
                showDifficulty={showDifficulty}
                onShowSolutionSketch={problem => {
                  setProblem(problem);
                  setShowModal(true);
                }}
                isDivisionTable={props.isDivisionTable}
                modules={props.modules!}
                showPercent={shouldShowSolvePercentage}
              />
            );
          })}
        {props.isDivisionTable === false && (
          <>
            {props.problems.map((problem: ProblemInfo) => (
              <ProblemsListItem
                key={problem.uniqueId}
                problem={problem}
                showTags={showTags}
                showDifficulty={showDifficulty}
                onShowSolutionSketch={problem => {
                  setProblem(problem);
                  setShowModal(true);
                }}
                isDivisionTable={props.isDivisionTable}
                showPercent={shouldShowSolvePercentage}
              />
            ))}
            {!props.hideSuggestProblemButton && path.includes('conclusion') && (
              <SuggestProblemRow listName={props.tableName!} />
            )}
          </>
        )}
      </ListTable>

      <Transition show={showModal} as={Fragment}>
        <div className="fixed inset-x-0 bottom-0 z-10 px-4 pb-6 sm:inset-0 sm:flex sm:items-center sm:justify-center sm:p-0">
          <Transition
            show={showModal}
            as={Fragment}
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
            show={showModal}
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 shadow-xl transition-all sm:w-full sm:max-w-xl sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button
                  type="button"
                  className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500 focus:text-gray-500 focus:outline-hidden"
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
              {problem?.solution?.kind === 'sketch' && (
                <div className="sm:flex sm:items-start">
                  <div className="text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Solution Sketch: {problem?.name}
                    </h3>
                    <div className="mt-4">
                      <p className="text-gray-700">{problem.solution.sketch}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Transition>
        </div>
      </Transition>
    </>
  );
}
