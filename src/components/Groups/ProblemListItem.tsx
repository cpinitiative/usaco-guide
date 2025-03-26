import { Link } from 'gatsby';
import * as React from 'react';
import { useActiveGroup } from '../../hooks/groups/useActiveGroup';
import { useUserLeaderboardData } from '../../hooks/groups/useLeaderboardData';
import { GroupData } from '../../models/groups/groups';
import { PostData } from '../../models/groups/posts';
import {
  ProblemData,
  submissionCircleBorderColor,
  submissionCircleColor,
} from '../../models/groups/problem';

const ProblemListItem = ({
  group,
  post,
  problem,
  dragHandle,
}: {
  group: GroupData;
  post: PostData;
  problem: ProblemData;
  dragHandle?: JSX.Element;
}): JSX.Element => {
  const { activeUserId } = useActiveGroup();
  // todo optimize reads...?
  const userLeaderboardData = useUserLeaderboardData(group.id, activeUserId!);
  const bestSubmission =
    userLeaderboardData?.details?.[post.id!]?.[problem.id] || null;
  const pointsEarned = bestSubmission?.bestScore || 0;
  const status = bestSubmission?.bestScoreStatus || 'WA';

  if (!problem) throw new Error('No problem found'); // this shouldn't happen...

  return (
    <div className="dark:bg-dark-surface flex items-center bg-white">
      {dragHandle}
      <div
        className={`relative flex-1 py-5 pr-6 hover:bg-gray-50 sm:py-6 dark:hover:bg-gray-900 ${
          dragHandle ? 'pl-2' : 'pl-4 sm:pl-6 lg:pl-8 xl:pl-6'
        }`}
      >
        <div className="flex items-center justify-between space-x-4">
          <div className="min-w-0 space-y-3">
            <div className="flex items-center space-x-3">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full ${submissionCircleBorderColor[status]}`}
                aria-hidden="true"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${submissionCircleColor[status]}`}
                />
              </span>

              <span className="block">
                <h2 className="leading-3 font-medium">
                  <Link
                    to={`/groups/${group.id}/post/${post.id}/problems/${problem.id}`}
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {problem.name}
                  </Link>
                </h2>
              </span>
            </div>
            <div className="group relative flex items-center space-x-2.5">
              <svg
                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                {pointsEarned} / {problem.points} points earned
              </span>
            </div>
          </div>
          <div className="sm:hidden">
            {/* Heroicon name: solid/chevron-right */}
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
          {/* Repo meta info */}
          <div className="hidden shrink-0 flex-col items-end space-y-3 sm:flex">
            <p className="flex items-center space-x-4">
              <Link
                to={`/groups/${group.id}/post/${post.id}/problems/${problem.id}`}
                className="relative text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                View Problem
              </Link>
            </p>
            <p className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Source: {problem.source}</span>
              <span aria-hidden="true">&middot;</span>
              <span>Difficulty: {problem.difficulty}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemListItem;
