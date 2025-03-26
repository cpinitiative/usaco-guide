import { Transition } from '@headlessui/react';
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
    <Transition
      show={popupContext.showPopup}
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-800" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          className="dark:bg-dark-surface inline-block transform overflow-hidden rounded-lg bg-white pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:py-6 sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="px-4 sm:px-6">
              <h3
                className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
                id="modal-headline"
              >
                {getSubmissionTimestampString(submission)}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-200">
                Status: {getSubmissionStatus(submission)}
              </p>
            </div>
            <div className="mt-4 text-sm">
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
          <div className="mt-5 flex flex-row-reverse justify-between px-4 sm:mt-4 sm:px-6">
            <button
              onClick={() => popupContext.setShowPopup(false)}
              type="button"
              className="btn"
            >
              Close Submission
            </button>
          </div>
        </Transition.Child>
      </div>
    </Transition>
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
