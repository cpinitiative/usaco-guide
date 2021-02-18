import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { ProblemSubmission } from '../../../mobx/ProblemSubmission';
import { Link } from 'gatsby';

const SubmissionListItem = ({
  submission,
}: {
  submission: ProblemSubmission;
}) => {
  return (
    <li className="relative py-2 group">
      <div className="flex items-center justify-between space-x-4">
        <span className="block leading-3 text-sm text-gray-500 group-hover:text-gray-900 font-medium">
          <Link to={`/groups/`}>
            <span className="absolute inset-0" aria-hidden="true" />
            {submission.timestampString}
          </Link>
        </span>
        <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-900 font-medium">
          <span
            className={`h-5 w-5 ${
              submission.verdict === 'all_correct'
                ? 'bg-green-100'
                : 'bg-red-100'
            } rounded-full flex items-center justify-center`}
            aria-hidden="true"
          >
            <span
              className={`h-2.5 w-2.5 ${
                submission.verdict === 'all_correct'
                  ? 'bg-green-400'
                  : 'bg-red-400'
              } rounded-full`}
            />
          </span>
          <span
            className={`ml-2 mr-4 ${
              submission.verdict === 'all_correct'
                ? 'text-green-800'
                : 'text-red-800'
            }`}
          >
            {submission.earnedPoints} / {submission.problem.points}
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

export default observer(function ProblemSubmissionsList({
  submissions,
}: {
  submissions: ProblemSubmission[];
}) {
  if (submissions?.length === 0) {
    return <p className="text-sm text-gray-500">No submissions yet!</p>;
  }
  return (
    <ul>
      {submissions.map(submission => (
        <SubmissionListItem submission={submission} key={submission.id} />
      ))}
    </ul>
  );
});
