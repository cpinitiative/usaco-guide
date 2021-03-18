import * as React from 'react';
import { useProblemSubmissionPopupAction } from '../ProblemSubmissionPopup';
import {
  ExecutionStatus,
  getSubmissionEarnedPoints,
  getSubmissionStatus,
  getSubmissionTimestampString,
  ProblemData,
  Submission,
} from '../../../models/groups/problem';

const SubmissionListItem = ({
  problem,
  submission,
}: {
  problem: ProblemData;
  submission: Submission;
}) => {
  const showSubmissionAction = useProblemSubmissionPopupAction();

  const textColor: { [key in ExecutionStatus]: string } = {
    AC: 'text-green-800',
    WA: 'text-red-800',
    TLE: 'text-red-800',
    MLE: 'text-red-800',
    RTE: 'text-red-800',
    Pending: 'text-gray-800',
  };

  const circleColor: { [key in ExecutionStatus]: string } = {
    AC: 'bg-green-400',
    WA: 'bg-red-400',
    TLE: 'bg-red-400',
    MLE: 'bg-red-400',
    RTE: 'bg-red-400',
    Pending: 'bg-gray-400',
  };

  const circleBorderColor: { [key in ExecutionStatus]: string } = {
    AC: 'bg-green-100',
    WA: 'bg-red-100',
    TLE: 'bg-red-100',
    MLE: 'bg-red-100',
    RTE: 'bg-red-100',
    Pending: 'bg-gray-100',
  };

  return (
    <li className="relative py-2 group">
      <div className="flex items-center justify-between space-x-4">
        <span className="block leading-3 text-sm text-gray-500 group-hover:text-gray-900 font-medium">
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => showSubmissionAction(submission)}
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {getSubmissionTimestampString(submission)}
          </button>
        </span>
        <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-900 font-medium">
          <span
            className={`h-5 w-5 ${
              circleBorderColor[getSubmissionStatus(submission)]
            } rounded-full flex items-center justify-center`}
            aria-hidden="true"
          >
            <span
              className={`h-2.5 w-2.5 ${
                circleColor[getSubmissionStatus(submission)]
              } rounded-full`}
            />
          </span>
          <span
            className={`ml-2 mr-4 ${
              textColor[getSubmissionStatus(submission)]
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
  submissions: Submission[];
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
          key={submission.id}
        />
      ))}
    </ul>
  );
}
