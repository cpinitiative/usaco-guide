import { Link } from 'gatsby';
import React, { useContext } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { useActivePostProblems } from '../../../hooks/groups/useActivePostProblems';
import { useUserLeaderboardData } from '../../../hooks/groups/useLeaderboardData';
import {
  getTotalPointsFromProblems,
  PostData,
} from '../../../models/groups/posts';
import LeaderboardList from '../LeaderboardList/LeaderboardList';
import SidebarDueDate from '../SidebarDueDate';

export default function PostSidebar({
  post,
  isMobile = false,
}: {
  post: PostData;
  isMobile?: boolean;
}): JSX.Element {
  const { problems } = useActivePostProblems();
  const activeGroup = useActiveGroup();
  const userLeaderboardData = useUserLeaderboardData(
    activeGroup.activeGroupId,
    activeGroup.activeUserId
  );

  return (
    <>
      <h2 className="sr-only">Details</h2>
      <div className="space-y-5">
        <div className="flex items-center space-x-2">
          <svg
            className="h-5 w-5 text-green-500 dark:text-green-400"
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
          <span className="text-green-700 dark:text-green-400 text-sm font-medium">
            {userLeaderboardData?.[post.id]?.totalPoints ?? 0} /{' '}
            {problems && getTotalPointsFromProblems(problems)} points earned
          </span>
        </div>
        <SidebarDueDate post={post} />
        {isMobile && (
          <div>
            <Link to="leaderboard" className="font-medium hover:underline">
              View Assignment Leaderboard &rarr;
            </Link>
          </div>
        )}
      </div>
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 py-6 space-y-8">
        {!isMobile && (
          <div>
            <div className="flex items-baseline justify-between">
              <h3
                id="who-to-follow-heading"
                className="text-base font-medium text-gray-900 dark:text-gray-100"
              >
                Assignment Leaderboard
              </h3>
              <Link
                to="leaderboard"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                View All &rarr;
              </Link>
            </div>
            <div className="h-2" />
            <LeaderboardList postId={post.id} />
          </div>
        )}
      </div>
    </>
  );
}
