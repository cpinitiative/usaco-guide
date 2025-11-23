import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import * as React from 'react';
import { useContext } from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import useProblemSubmissionResult from '../../hooks/useProblemSubmissionResult';
import {
  FirebaseSubmission,
  getSubmissionStatus,
  getSubmissionTimestampString,
} from '../../models/groups/problem';
import CodeBlock from '../markdown/CodeBlock/CodeBlock';

const ProblemSubmissionPopupContext = React.createContext<{
  showPopup: boolean;
  setShowPopup: (showPopup: boolean) => void;
  submission: FirebaseSubmission | null;
  setSubmission: (submission: FirebaseSubmission) => void;
} | null>(null);

function ProblemSubmissionPopup() {
  const popupContext = useContext(ProblemSubmissionPopupContext);
  if (!popupContext) throw new Error('No ProblemSubmissionPopupContext');
  const submission = popupContext.submission;
  const submissionResult = useProblemSubmissionResult(
    submission && 'submissionID' in submission ? submission?.submissionID : null
  );
  const isDarkMode = useDarkMode();

  if (!submission) return null;

  return (
    <Dialog
      open={popupContext.showPopup}
      onClose={() => popupContext.setShowPopup(false)}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 dark:bg-gray-800/75"
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <DialogPanel
            transition
            className="dark:bg-dark-surface inline-block transform overflow-hidden rounded-lg bg-white pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:py-6 sm:align-middle"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
                  id="modal-headline"
                >
                  Submission Details
                </h3>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-800 dark:text-gray-400"
                    onClick={() => popupContext.setShowPopup(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
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
              </div>

              <div className="mt-4">
                <div className="overflow-hidden shadow sm:rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {getSubmissionTimestampString(submission)}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {'Status: ' + getSubmissionStatus(submission)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="mt-2 rounded-md">
                      {'link' in submission ? (
                        <p className="px-4 text-base sm:px-6">
                          Submission Link:{' '}
                          <a
                            className="font-medium underline"
                            href={submission.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {submission.link}
                          </a>
                        </p>
                      ) : (
                        <CodeBlock
                          className={`language-${submission.language}`}
                          isDarkMode={isDarkMode}
                        >
                          {submissionResult?.sourceCode ?? 'Loading...'}
                        </CodeBlock>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 px-4 py-1 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                onClick={() => popupContext.setShowPopup(false)}
              >
                Close Submission
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export function ProblemSubmissionPopupProvider({ children }) {
  const [showPopup, setShowPopup] = React.useState(false);
  const [submission, setSubmission] = React.useState<FirebaseSubmission | null>(
    null
  );
  return (
    <ProblemSubmissionPopupContext.Provider
      value={{
        showPopup,
        setShowPopup,
        submission,
        setSubmission,
      }}
    >
      {children}
      <ProblemSubmissionPopup />
    </ProblemSubmissionPopupContext.Provider>
  );
}

export function useProblemSubmissionPopupAction() {
  const popupContext = useContext(ProblemSubmissionPopupContext);
  if (!popupContext) {
    throw 'useProblemSubmissionPopupAction() must be used in a ProblemSubmissionPopupContext';
  }

  return (submission: FirebaseSubmission) => {
    popupContext.setSubmission(submission);
    popupContext.setShowPopup(true);
  };
}
