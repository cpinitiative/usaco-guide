import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import { Transition } from '@headlessui/react';
import { Problem } from '../models/problem';
import className from 'classnames';

export default function ProblemFeedbackModal({
  isOpen,
  onClose,
  problem,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  problem: Problem;
  onSubmit: (feedback) => void;
}) {
  problem = new Problem(
    'CSES',
    'Sum of Two Values',
    '1640',
    'Easy',
    true,
    [],
    '@CPH 8.1'
  );

  const [showModal, setShowModal] = React.useState(false);
  const [textFeedback, setTextFeedback] = React.useState('No feedback entered');
  const [solutionfeedback, setsolutionfeedback] = React.useState(
    'No feedback entered'
  );
  const [difficultyfeedback, setdifficultyfeedback] = React.useState(
    'No feedback entered'
  );
  const [solutionNotes, setsolutionNotes] = React.useState(
    'No feedback entered'
  );
  const [solutionCode, setsolutionCode] = React.useState('No feedback entered');
  const [shareCode, setShareCode] = React.useState(true);
  const handleSumbit = (event, problem) => {
    event.preventDefault();
    setShowModal(false);
    firebase.firestore().collection('problemFeedback').add({
      difficulty: difficultyfeedback,
      problemName: problem.name,
      solutionNotes: solutionNotes,
      solutionCode: solutionCode,
      generalFeedback: textFeedback,
      togglePrivate: false,
    });
  };

  return (
    <Transition
      show={isOpen}
      className="fixed z-30 inset-0 h-full overflow-y-auto"
    >
      <div className="flex items-end justify-center min-h-full pt-4 px-4 pb-12 text-center sm:block">
        <Transition.Child
          className="fixed inset-0 transition-opacity"
          onClick={onClose}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </Transition.Child>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <Transition.Child
          className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">Close</span>
                {/* Heroicon name: x */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              id="modal-headline"
            >
              Problem Feedback for {problem?.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Help us improve the USACO Guide by giving us feedback on the
              problem {problem?.name}!
            </p>
            <div className="mt-6 space-y-6">
              <div>
                <label className="block font-medium text-gray-700">
                  Problem Difficulty
                </label>
                <div className="w-full overflow-x-auto mt-2">
                  <span className="relative z-0 inline-flex shadow-sm rounded-md">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      Very Easy
                    </button>
                    <button
                      type="button"
                      className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      Easy
                    </button>
                    <button
                      type="button"
                      className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      Normal
                    </button>
                    <button
                      type="button"
                      className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      Hard
                    </button>
                    <button
                      type="button"
                      className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      Insane
                    </button>
                  </span>
                </div>
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Suggested Tags
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <input
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="DP, Dijkstra"
                    value={problem?.tags?.join(', ')}
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Solution Code
                </label>
                <div className="">
                  <p className="mb-3 text-sm text-gray-500">
                    Consider leaving solution notes at the top of the file as a
                    comment.
                  </p>

                  <div className="rounded-md shadow-sm">
                    <textarea
                      rows={10}
                      className="form-textarea block w-full transition duration-150 ease-in-out text-sm font-mono sm:leading-5"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex-grow flex flex-col" id="toggleLabel">
                  <span className="leading-5 font-medium text-gray-900">
                    Share Solution Code
                  </span>
                  <span className="text-sm leading-normal text-gray-500">
                    This will allow other users to view your anonymized solution
                    code if they are stuck.
                  </span>
                </span>
                <span
                  role="checkbox"
                  tabIndex={0}
                  onClick={() => setShareCode(!shareCode)}
                  className={className(
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline',
                    shareCode ? 'bg-blue-600' : 'bg-gray-200'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={className(
                      shareCode ? 'translate-x-5' : 'translate-x-0',
                      'relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200'
                    )}
                  >
                    <span
                      className={className(
                        shareCode
                          ? 'opacity-0 ease-out duration-100'
                          : 'opacity-100 ease-in duration-200',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                      )}
                    >
                      <svg
                        className="h-3 w-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      className={className(
                        shareCode
                          ? 'opacity-100 ease-in duration-200'
                          : 'opacity-0 ease-out duration-100',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                      )}
                    >
                      <svg
                        className="h-3 w-3 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                      </svg>
                    </span>
                  </span>
                </span>
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Other Feedback (Optional)
                </label>
                <div className="">
                  {' '}
                  <p className="mb-3 text-sm text-gray-500">
                    In case there's anything else you want to tell us.
                  </p>
                  <div className="rounded-md shadow-sm">
                    <textarea
                      rows={2}
                      className="form-textarea block w-full transition duration-150 ease-in-out text-sm font-mono sm:leading-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Submit Feedback
              </button>
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Cancel
              </button>
            </span>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
}
