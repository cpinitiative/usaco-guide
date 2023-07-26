import Filter from 'bad-words';
import * as React from 'react';
import { useContext, useState } from 'react';
import ContactUsSlideover from '../components/ContactUsSlideover/ContactUsSlideover';
import { useDarkMode } from '../context/DarkModeContext';
import { SignInContext } from '../context/SignInContext';
import { LANGUAGE_LABELS } from '../context/UserDataContext/properties/userLang';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import { useUserPermissions } from '../context/UserDataContext/UserPermissionsContext';
import useUserProblemSolutionActions from '../hooks/useUserProblemSolutionActions';
import useUserSolutionsForProblem from '../hooks/useUserSolutionsForProblem';
import { ShortProblemInfo } from '../models/problem';
import CodeBlock from './markdown/CodeBlock/CodeBlock';

export default function ProblemSolutions({
  showSubmitSolutionModal,
  problem,
}: {
  showSubmitSolutionModal: () => void;
  problem: ShortProblemInfo;
}): JSX.Element {
  const { solutions, currentUserSolutions } =
    useUserSolutionsForProblem(problem);
  const { deleteSolution, upvoteSolution, undoUpvoteSolution, mutateSolution } =
    useUserProblemSolutionActions();
  const { firebaseUser, lang } = useContext(UserDataContext);
  const [isContactUsActive, setIsContactUsActive] = useState(false);
  const { signIn } = React.useContext(SignInContext);
  const canModerate = useUserPermissions().canModerate;
  const isDarkMode = useDarkMode();
  const filter = new Filter();
  const langArr = ['cpp', 'java', 'py'];
  langArr.sort(function (first, second) {
    if (first === lang && second !== lang) {
      return -1;
    } else if (first !== lang && second === lang) {
      return 1;
    }
    return 0;
  });

  const publicSolutions = solutions?.filter(
    submission => submission.userID !== firebaseUser?.uid
  );

  publicSolutions?.sort((a, b) => b.upvotes.length - a.upvotes.length);

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
        {langArr.map(lang => (
          <React.Fragment key={lang}>
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
                        {filter.isProfane(submission.solutionCode)
                          ? filter.clean(submission.solutionCode)
                          : submission.solutionCode}
                      </CodeBlock>
                    </div>
                  </div>
                ))}
              {publicSolutions?.filter(
                submission => submission.language == lang
              ).length === 0 && <span>No solutions yet!</span>}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
