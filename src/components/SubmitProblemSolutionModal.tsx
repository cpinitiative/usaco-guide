import { Transition } from '@headlessui/react';
import className from 'classnames';
import * as React from 'react';
import { LANGUAGE_LABELS } from '../context/UserDataContext/properties/userLang';
import useUserProblemSolutionActions from '../hooks/useUserProblemSolutionActions';
import { ProblemInfo } from '../models/problem';
import ButtonGroup from './ButtonGroup';
import TabIndentableTextarea from './elements/TabIndentableTextarea';

export default function SubmitProblemSolutionModal({
  isOpen,
  onClose,
  problem,
}: {
  isOpen: boolean;
  onClose: () => void;
  problem: ProblemInfo;
}) {
  const [solutionCode, setSolutionCode] = React.useState('');
  const [codeLang, setCodeLang] = React.useState('');
  const [isCodePublic, setIsCodePublic] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const { submitSolution: submitAction } = useUserProblemSolutionActions();

  React.useEffect(() => {
    if (isOpen) {
      setSolutionCode('');
      setIsCodePublic(true);
      setCodeLang(null);
      setLoading(false);
      setShowSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = event => {
    event.preventDefault();

    if (solutionCode.length < 10) {
      alert('Your solution seems too short!');
      return;
    }
    if (!codeLang) {
      alert('Please select a language.');
      return;
    }

    setLoading(true);
    submitAction({
      isPublic: isCodePublic,
      solutionCode,
      problemID: problem.uniqueId,
      language: codeLang as any,
    })
      .then(() => setShowSuccess(true))
      .catch(e => alert('Error: ' + e.message))
      .finally(() => setLoading(false));
  };

  const solutionForm = (
    <>
      <div>
        <label className="block font-medium text-gray-700 dark:text-gray-200">
          Solution Code
        </label>
        <div>
          <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
            Please keep these in mind when submitting a solution.
            <ol className="list-decimal ml-5">
              <li>
                Especially if sharing your code, consider cleaning it up and{' '}
                <b> adding solution notes</b> as a comment at the top.
              </li>
              <li>
                Make sure not to leave out any headers/templates, and that your
                code passes all test cases!
              </li>
            </ol>
          </p>
          <ButtonGroup
            options={['cpp', 'java', 'py']}
            labelMap={LANGUAGE_LABELS}
            value={codeLang}
            onChange={x => setCodeLang(x)}
          />

          <div className="rounded-md shadow-sm mt-3">
            <TabIndentableTextarea
              rows={10}
              className="textarea font-mono"
              value={solutionCode}
              onChange={e => setSolutionCode(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="flex-grow flex flex-col" id="toggleLabel">
          <span className="leading-5 font-medium text-gray-900 dark:text-gray-100">
            Share Solution Code
          </span>
          <span className="text-sm leading-normal text-gray-500 dark:text-gray-400">
            This will allow other users to view your solution code if they are
            stuck.
          </span>
        </span>
        <span
          role="checkbox"
          tabIndex={0}
          onClick={() => setIsCodePublic(!isCodePublic)}
          className={className(
            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline',
            isCodePublic ? 'bg-blue-600' : 'bg-gray-200'
          )}
        >
          <span
            aria-hidden="true"
            className={className(
              isCodePublic ? 'translate-x-5' : 'translate-x-0',
              'relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200'
            )}
          >
            <span
              className={className(
                isCodePublic
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
                isCodePublic
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
    </>
  );

  const successMessage = (
    <div className="rounded-md bg-green-50 dark:bg-green-800 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-green-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm leading-5 font-medium text-green-800 dark:text-dark-high-emphasis">
            Solution Submitted!
          </h3>
          <div className="mt-2 text-sm leading-5 text-green-700 dark:text-dark-high-emphasis">
            <p>Thanks for helping to improve the USACO Guide.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Transition
      show={isOpen}
      className="fixed z-30 inset-0 h-full overflow-y-auto"
    >
      <form
        className="flex items-end justify-center min-h-full pt-4 px-4 pb-12 text-center sm:block"
        onSubmit={handleSubmit}
      >
        <Transition.Child
          className="fixed inset-0 transition-opacity"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75" />
        </Transition.Child>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <Transition.Child
          className="w-full inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
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
          <div className="bg-white dark:bg-dark-surface px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                onClick={() => onClose()}
                className="bg-white dark:bg-dark-surface rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
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
              className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
              id="modal-headline"
            >
              Submit Solution for {problem?.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Help others out by submitting a solution for {problem?.name}!
            </p>
            <div className="mt-6 space-y-6">
              {showSuccess ? successMessage : solutionForm}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {showSuccess ? (
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Done
                </button>
              </span>
            ) : (
              <>
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit Solution'}
                  </button>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-800 text-base leading-6 font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => onClose()}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                </span>
              </>
            )}
          </div>
        </Transition.Child>
      </form>
    </Transition>
  );
}
