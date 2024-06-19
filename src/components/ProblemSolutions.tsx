import { ExternalLinkIcon } from '@heroicons/react/solid';
import Filter from 'bad-words';
import * as React from 'react';
import { useState } from 'react';
import {
  SECTION_LABELS,
  moduleIDToSectionMap,
  moduleIDToURLMap,
} from '../../content/ordering';
import ContactUsSlideover from '../components/ContactUsSlideover/ContactUsSlideover';
import { useDarkMode } from '../context/DarkModeContext';
import { useSignIn } from '../context/SignInContext';
import { useFirebaseUser } from '../context/UserDataContext/UserDataContext';
import { useUserPermissions } from '../context/UserDataContext/UserPermissionsContext';
import {
  LANGUAGE_LABELS,
  useUserLangSetting,
} from '../context/UserDataContext/properties/simpleProperties';
import useUserProblemSolutionActions from '../hooks/useUserProblemSolutionActions';
import useUserSolutionsForProblem from '../hooks/useUserSolutionsForProblem';
import { ShortProblemInfo } from '../models/problem';
import CodeBlock from './markdown/CodeBlock/CodeBlock';

export default function ProblemSolutions({
  modulesThatHaveProblem,
  showSubmitSolutionModal,
  problem,
}: {
  modulesThatHaveProblem: { title: string; id: string }[];
  showSubmitSolutionModal: () => void;
  problem: ShortProblemInfo;
}): JSX.Element {
  const { solutions, currentUserSolutions } =
    useUserSolutionsForProblem(problem);
  const { deleteSolution, upvoteSolution, undoUpvoteSolution, mutateSolution } =
    useUserProblemSolutionActions();
  const firebaseUser = useFirebaseUser();
  const lang = useUserLangSetting();
  const [isContactUsActive, setIsContactUsActive] = useState(false);
  const { signIn } = useSignIn();
  const canModerate = useUserPermissions().canModerate;
  const isDarkMode = useDarkMode();
  const filter = new Filter();
  const langArr: ('cpp' | 'java' | 'py')[] = ['cpp', 'java', 'py'];
  langArr.sort(function (first, second) {
    if (first === lang && second !== lang) {
      return -1;
    } else if (first !== lang && second === lang) {
      return 1;
    }
    return 0;
  });

  const publicSolutions = (solutions ?? []).filter(
    submission => submission.userID !== firebaseUser?.uid
  );

  publicSolutions?.sort((a, b) => b.upvotes.length - a.upvotes.length);

  const moduleHeaderLinks: { label: string; url?: string }[] =
    modulesThatHaveProblem.map(module => {
      return {
        label: `${SECTION_LABELS[moduleIDToSectionMap[module.id]]} - ${
          module.title
        }`,
        url: `${moduleIDToURLMap[module.id]}#problem-${problem!.uniqueId}`,
      };
    });

  return (
    <div className="w-full rounded-lg overflow-hidden max-w-5xl mx-auto">
      <div className="bg-white dark:bg-dark-surface px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mt-6">
        <h3
          className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100"
          id="modal-headline"
        >
          User Solutions for {problem?.name}
        </h3>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Below are user-submitted solutions for {problem?.name}. If you notice
          any of them are incorrect, submit the contact form below.
        </p>

        <div className="rounded-md bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:p-6 mt-4">
          {moduleHeaderLinks?.length > 0 && (
            <div>
              <h3 className="text-sm leading-5 font-medium text-gray-800 my-0 dark:text-gray-200">
                Appears In
              </h3>
              <div className="text-sm leading-5 text-gray-700 mt-1 no-y-margin dark:text-gray-300">
                <ul className="list-disc list-inside pl-3 space-y-1">
                  {moduleHeaderLinks.map(link => (
                    <li key={link.url ?? link.label}>
                      {link.url ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-black dark:text-gray-200"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <span className="text-black dark:text-gray-200">
                          {link.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {problem.url && (
            <div>
              <div className="h-4 sm:h-6" />
              <a
                href={problem.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-800 hover:text-gray-900 my-0 dark:text-gray-200 dark:hover:text-gray-100 group inline-flex items-center space-x-1.5"
              >
                <span>View Problem Statement</span>
                <ExternalLinkIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300" />
              </a>
            </div>
          )}
        </div>

        <button
          className="my-4 btn-primary"
          onClick={() => (firebaseUser ? showSubmitSolutionModal() : signIn())}
        >
          {firebaseUser ? 'Submit a Solution' : 'Sign in to submit a solution'}
        </button>
        <button
          className="my-4 mx-3 btn-primary"
          onClick={() => setIsContactUsActive(true)}
        >
          Contact Us
        </button>
        <ContactUsSlideover
          isOpen={isContactUsActive}
          onClose={() => setIsContactUsActive(false)}
          defaultLocation={`Problem Solution - ${problem?.name} (ID: ${problem?.uniqueId})`}
        />

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
                  isDarkMode={isDarkMode}
                >
                  {submission.solutionCode}
                </CodeBlock>
              </div>
            </div>
          ))}
          {currentUserSolutions?.length === 0 && <span>No solutions yet!</span>}
        </div>
        {langArr.map(lang => {
          const filteredSubmissions = publicSolutions.filter(submission => {
            return (
              submission.language == lang &&
              !filter.isProfane(submission.solutionCode) &&
              !filter.isProfane(submission.userName ?? 'Unknown User')
            );
          });
          return (
            <React.Fragment key={lang}>
              <div className="h-8" />
              <h4 className="text-lg font-semibold pb-2 mb-4 border-b border-gray-200 dark:border-gray-800">
                Public {LANGUAGE_LABELS[lang]} Solutions (
                {filteredSubmissions.length})
              </h4>
              <div className="space-y-6">
                {filteredSubmissions.map(submission => (
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
                      {canModerate && (
                        <button
                          className="hover:underline text-blue-600 dark:text-blue-300 mx-2"
                          onClick={() => {
                            if (
                              confirm(
                                "Are you sure you want to make this solution private? (Currently it's nontrivial to undo this...)"
                              )
                            ) {
                              mutateSolution(submission.id, {
                                isPublic: false,
                              });
                            }
                          }}
                        >
                          (Mark Private as Moderator)
                        </button>
                      )}
                      {canModerate && (
                        <button
                          className="hover:underline text-blue-600 dark:text-blue-300 mx-2"
                          onClick={() => {
                            if (
                              confirm(
                                'Are you sure you want to delete this solution?'
                              )
                            ) {
                              deleteSolution(submission.id);
                            }
                          }}
                        >
                          (Delete as Moderator)
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
                        isDarkMode={isDarkMode}
                      >
                        {submission.solutionCode}
                      </CodeBlock>
                    </div>
                  </div>
                ))}
                {filteredSubmissions.length === 0 && (
                  <span>No solutions yet!</span>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
