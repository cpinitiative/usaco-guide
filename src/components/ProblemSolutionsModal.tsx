import * as React from 'react';
import { Transition } from '@headlessui/react';
import {
  Problem,
  PROBLEM_DIFFICULTY_OPTIONS,
  ProblemFeedback,
} from '../models/problem';
import className from 'classnames';
import ButtonGroup from './ButtonGroup';
import { LANGUAGE_LABELS } from '../context/UserDataContext/properties/userLang';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import useUserSolutionsForProblem from '../hooks/useUserSolutionsForProblem';
import CodeBlock from './markdown/CodeBlock/CodeBlock';
import Spoiler from './markdown/Spoiler';
import { useContext } from 'react';
import useUserProblemSolutionActions from '../hooks/useUserProblemSolutionActions';

export default function ProblemSolutionsModal({
  isOpen,
  onClose,
  showSubmitSolutionModal,
  problem,
}: {
  isOpen: boolean;
  onClose: () => void;
  showSubmitSolutionModal: Function;
  problem: Problem;
}) {
  const { solutions, currentUserSolutions } = useUserSolutionsForProblem(
    problem
  );
  const {
    deleteSolution,
    upvoteSolution,
    undoUpvoteSolution,
  } = useUserProblemSolutionActions();
  const { firebaseUser, signIn } = useContext(UserDataContext);

  const publicSolutions = solutions?.filter(
    submission => submission.userID !== firebaseUser?.uid
  );

  publicSolutions?.sort((a, b) => b.upvotes.length - a.upvotes.length);

  if (!isOpen) return null;

  return (
    <div className="fixed z-30 inset-0 h-full bg-white dark:bg-dark-surface overflow-y-auto">
      <div className="flex items-end justify-center h-full px-4 text-center sm:block">
        <div className="w-full inline-block align-bottom rounded-lg text-left overflow-hidden sm:max-w-5xl sm:w-full">
          <div className="bg-white dark:bg-dark-surface px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="hidden sm:block fixed top-0 right-0 pt-4 pr-4 xl:pt-8 xl:pr-8">
              <button
                type="button"
                onClick={() => onClose()}
                className="bg-white dark:bg-dark-surface rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
              >
                <span className="sr-only">Close</span>
                {/* Heroicon name: x */}
                <svg
                  className="h-6 w-6 xl:h-12 xl:w-12"
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
              className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100"
              id="modal-headline"
            >
              User Solutions for {problem?.name}
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Below are user-submitted solutions for {problem?.name}. If you
              notice any of them are incorrect, email us at{' '}
              <a
                className="underline text-blue-600 dark:text-blue-400"
                href="mailto:usacoguide@gmail.com"
                target="_blank"
              >
                usacoguide@gmail.com
              </a>
              .
            </p>
            <button
              className="my-4 btn-primary"
              onClick={() =>
                firebaseUser ? showSubmitSolutionModal() : signIn()
              }
            >
              {firebaseUser
                ? 'Submit a Solution'
                : 'Sign in to submit a solution'}
            </button>
            <div className="h-8" />
            <h3 className="text-lg font-semibold pb-2 mb-4 border-b border-gray-200 dark:border-gray-800">
              My Solutions
            </h3>
            <div className="space-y-6">
              {currentUserSolutions?.map(submission => (
                <div key={submission.id}>
                  <h4 className="mb-2 text-gray-700 dark:text-gray-100">
                    {submission.language
                      ? LANGUAGE_LABELS[submission.language]
                      : 'Unknown Language'}{' '}
                    | Votes: {submission.upvotes.length}. (
                    {submission.isPublic ? 'Public' : 'Private'}){' '}
                    <button
                      className="hover:underline text-blue-600 dark:text-blue-300"
                      onClick={() => {
                        if (
                          confirm(
                            'Are you sure you want to delete this submission?'
                          )
                        ) {
                          deleteSolution(submission.id);
                        }
                      }}
                    >
                      (Delete)
                    </button>
                  </h4>
                  <div className="text-sm leading-normal">
                    <CodeBlock
                      className={
                        submission.language !== 'unknown'
                          ? `language-${submission.language}`
                          : undefined
                      }
                    >
                      {submission.solutionCode}
                    </CodeBlock>
                  </div>
                </div>
              ))}
              {currentUserSolutions?.length === 0 && (
                <span>No solutions yet!</span>
              )}
            </div>
            {/* <h3 className="text-lg font-semibold pb-2 mb-4 border-b border-gray-200 dark:border-gray-800">
              Public Solutions
            </h3> */}
            {['cpp', 'java', 'py'].map(lang => (
              <>
                <div className="h-8" />
                <h4 className="text-lg font-semibold pb-2 mb-4 border-b border-gray-200 dark:border-gray-800">
                  Public {LANGUAGE_LABELS[lang]} Solutions
                </h4>
                <div className="space-y-6">
                  {publicSolutions
                    ?.filter(submission => submission.language == lang)
                    .map(submission => (
                      <div key={submission.id}>
                        <h4 className="mb-2 text-gray-700 dark:text-gray-100">
                          {submission.userName ?? 'Unknown User'} | Votes:{' '}
                          {submission.upvotes.length}.{' '}
                          {firebaseUser?.uid && (
                            <button
                              className="hover:underline text-blue-600 dark:text-blue-300 focus:outline-none"
                              onClick={() => {
                                if (
                                  submission.upvotes.includes(firebaseUser?.uid)
                                ) {
                                  undoUpvoteSolution(submission.id);
                                } else {
                                  upvoteSolution(submission.id);
                                }
                              }}
                            >
                              {submission.upvotes.includes(firebaseUser?.uid)
                                ? '(Undo Upvote)'
                                : '(Upvote)'}
                            </button>
                          )}
                        </h4>
                        <div className="text-sm leading-normal">
                          <CodeBlock
                            className={
                              submission.language !== 'unknown'
                                ? `language-${submission.language}`
                                : undefined
                            }
                          >
                            {submission.solutionCode}
                          </CodeBlock>
                        </div>
                      </div>
                    ))}
                  {publicSolutions?.filter(
                    submission => submission.language == lang
                  ).length === 0 && <span>No solutions yet!</span>}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
