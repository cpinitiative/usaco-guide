import { Transition } from '@headlessui/react';
import * as React from 'react';
import { useContext } from 'react';
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
  submission: FirebaseSubmission;
  setSubmission: (submission: FirebaseSubmission) => void;
}>(null);

function ProblemSubmissionPopup() {
  const popupContext = useContext(ProblemSubmissionPopupContext);
  const submission = popupContext.submission;
  const submissionResult = useProblemSubmissionResult(submission?.submissionID);

  if (!submission) return null;

  return (
    <Transition
      show={popupContext.showPopup}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 dark:bg-gray-800 opacity-75" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          className="inline-block align-bottom bg-white dark:bg-dark-surface rounded-lg pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:py-6"
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
              <p className="text-sm text-gray-900 dark:text-gray-200 font-medium mt-1">
                Status: {getSubmissionStatus(submission)}
              </p>
            </div>
            <div className="mt-4 text-sm">
              {submission && (
                <CodeBlock className={`language-${submission.language}`}>
                  {submissionResult?.sourceCode ?? 'Loading...'}
                </CodeBlock>
              )}
            </div>
          </div>
          <div className="mt-5 sm:mt-4 flex flex-row-reverse justify-between px-4 sm:px-6">
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
  const [submission, setSubmission] = React.useState<FirebaseSubmission>(null);
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
