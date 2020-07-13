import * as React from 'react';
import { Problem } from '../../../content/models';
import Transition from '../Transition';
import renderMathInElement from 'katex/contrib/auto-render/auto-render';
import { KatexRenderer } from './KatexRenderer';
import Tooltip from '../tooltip/Tooltip';
import TextTooltip from '../tooltip/TextTooltip';
import { sourceTooltip } from './Resources';

type ProblemsListComponentProps = {
  title?: string;
  children?: React.ReactChildren;
  problems: Problem[];
};

export function ProblemsListComponent(props: ProblemsListComponentProps) {
  const [problem, setProblem] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full no-markdown">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Problem Name
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                </tr>
              </thead>
              <tbody className="table-alternating-stripes">
                {props.problems.map(problem => (
                  <ProblemComponent
                    problem={problem}
                    onShowSolution={problem => {
                      setProblem(problem);
                      setShowModal(true);
                    }}
                    key={problem.id}
                  />
                ))}
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
                    <p className="text-gray-700">
                      <KatexRenderer>{problem?.sketch}</KatexRenderer>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </>
  );
}

type ProblemComponentProps = {
  problem: Problem;
  onShowSolution: Function;
};

export function ProblemComponent(props: ProblemComponentProps) {
  const difficultyClasses = {
    'Very Easy': 'bg-gray-100 text-gray-800',
    Easy: 'bg-green-100 text-green-800',
    Normal: 'bg-blue-100 text-blue-800',
    Hard: 'bg-purple-100 text-purple-800',
    'Very Hard': 'bg-orange-100 text-orange-800',
    Insane: 'bg-red-100 text-red-800',
  };
  const [showTags, setShowTags] = React.useState(false);
  const { problem } = props;

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 font-medium">
        {sourceTooltip.hasOwnProperty(problem.source) ? (
          <TextTooltip content={sourceTooltip[problem.source]}>
            {problem.source}
          </TextTooltip>
        ) : (
          problem.source
        )}
      </td>
      <td className="pl-6 w-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        {problem.starred && (
          <svg
            className="h-6 w-6 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        <a href={problem.url}>{problem.name}</a>
        {problem.isIntro && (
          <span
            className={
              'ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-100 text-teal-800'
            }
          >
            Intro
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap leading-5">
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
      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        {!showTags && (
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-900"
            onClick={e => {
              e.preventDefault();
              setShowTags(true);
            }}
          >
            Show Tags
          </a>
        )}
        {showTags &&
          (problem.tags && problem.tags.length
            ? problem.tags.join(', ')
            : 'None')}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        {problem.sketch && (
          <span
            className="text-blue-600 hover:text-blue-900 cursor-pointer"
            onClick={() => props.onShowSolution(problem)}
          >
            Show Solution
          </span>
        )}
      </td>
    </tr>
  );
}
