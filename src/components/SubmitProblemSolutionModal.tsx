import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
} from '@headlessui/react';
import className from 'classnames';
import * as React from 'react';
import { LANGUAGE_LABELS } from '../context/UserDataContext/properties/simpleProperties';
import useUserProblemSolutionActions from '../hooks/useUserProblemSolutionActions';
import { ShortProblemInfo } from '../models/problem';
import ButtonGroup from './ButtonGroup';
import TabIndentableTextarea from './elements/TabIndentableTextarea';

export default function SubmitProblemSolutionModal({
  isOpen,
  onClose,
  problem,
}: {
  isOpen: boolean;
  onClose: () => void;
  problem: ShortProblemInfo;
}) {
  const [solutionCode, setSolutionCode] = React.useState('');
  const [codeLang, setCodeLang] = React.useState<'cpp' | 'java' | 'py' | null>(
    null
  );
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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
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
      language: codeLang,
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
            <ol className="ml-5 list-decimal">
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

          <div className="mt-3 rounded-md shadow-sm">
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
        <span className="flex grow flex-col" id="toggleLabel">
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
            'focus:shadow-outline relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden',
            isCodePublic ? 'bg-blue-600' : 'bg-gray-200'
          )}
        >
          <span
            aria-hidden="true"
            className={className(
              isCodePublic ? 'translate-x-5' : 'translate-x-0',
              'relative inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out'
            )}
          >
            <span
              className={className(
                isCodePublic
                  ? 'opacity-0 duration-100 ease-out'
                  : 'opacity-100 duration-200 ease-in',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
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
                  ? 'opacity-100 duration-200 ease-in'
                  : 'opacity-0 duration-100 ease-out',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
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
    <div className="rounded-md bg-green-50 p-4 dark:bg-green-800">
      <div className="flex">
        <div className="shrink-0">
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
          <h3 className="dark:text-dark-high-emphasis text-sm leading-5 font-medium text-green-800">
            Solution Submitted!
          </h3>
          <div className="dark:text-dark-high-emphasis mt-2 text-sm leading-5 text-green-700">
            <p>Thanks for helping to improve the USACO Guide.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition
          appear
          show={true}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 bg-gray-500/75 dark:bg-gray-900/75" />
        </Transition>

        <Transition
          appear
          show={true}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <DialogPanel className="dark:bg-dark-surface relative w-full max-w-4xl transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <form onSubmit={handleSubmit}>
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-gray-900">
                {showSuccess ? (
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="button"
                      onClick={() => onClose()}
                      className="focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base leading-6 font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-500 focus:border-blue-700 focus:outline-hidden sm:text-sm sm:leading-5"
                    >
                      Done
                    </button>
                  </span>
                ) : (
                  <>
                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                      <button
                        type="submit"
                        className="focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base leading-6 font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-500 focus:border-blue-700 focus:outline-hidden sm:text-sm sm:leading-5"
                        disabled={loading}
                      >
                        {loading ? 'Submitting...' : 'Submit Solution'}
                      </button>
                    </span>
                    <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                      <button
                        type="button"
                        className="focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base leading-6 font-medium text-gray-700 shadow-sm transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-hidden sm:text-sm sm:leading-5 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                        onClick={() => onClose()}
                        disabled={loading}
                      >
                        Cancel
                      </button>
                    </span>
                  </>
                )}
              </div>
            </form>
          </DialogPanel>
        </Transition>
      </div>
    </Dialog>
  );
}
