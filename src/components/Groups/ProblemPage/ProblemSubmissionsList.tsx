import * as React from 'react';
import {
  FirebaseSubmission,
  getSubmissionEarnedPoints,
  getSubmissionStatus,
  getSubmissionTimestampString,
  ProblemData,
  submissionCircleBorderColor,
  submissionCircleColor,
  submissionTextColor,
} from '../../../models/groups/problem';
import { useProblemSubmissionPopupAction } from '../ProblemSubmissionPopup';

const SubmissionListItem = ({
  problem,
  submission,
}: {
  problem: ProblemData;
  submission: FirebaseSubmission;
}) => {
  const showSubmissionAction = useProblemSubmissionPopupAction();

  return (
    <li className="group relative py-2">
      <div className="flex items-center justify-between space-x-4">
        <span className="block text-sm leading-3 font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100">
          <button
            type="button"
            className="focus:outline-hidden"
            onClick={() => showSubmissionAction(submission)}
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {getSubmissionTimestampString(submission)}
          </button>
        </span>
        <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100">
          <span
            className={`h-5 w-5 ${
              submissionCircleBorderColor[getSubmissionStatus(submission)]
            } flex items-center justify-center rounded-full`}
            aria-hidden="true"
          >
            <span
              className={`h-2.5 w-2.5 ${
                submissionCircleColor[getSubmissionStatus(submission)]
              } rounded-full`}
            />
          </span>
          <span
            className={`mr-4 ml-2 ${
              submissionTextColor[getSubmissionStatus(submission)]
            }`}
          >
            {getSubmissionEarnedPoints(submission, problem)} / {problem.points}
          </span>
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </li>
  );
};

export default function ProblemSubmissionsList({
  problem,
  submissions,
}: {
  problem: ProblemData;
  submissions: FirebaseSubmission[];
}) {
  if (!submissions?.length) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        No submissions yet!
      </p>
    );
  }
  return (
    <ul>
      {submissions.map(submission => (
        <SubmissionListItem
          problem={problem}
          submission={submission}
          key={
            'submissionID' in submission
              ? submission.submissionID
              : submission.timestamp
          }
        />
      ))}
    </ul>
  );
}
