import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import useLeaderboardData from '../../../hooks/groups/useLeaderboardData';
import { MemberInfo } from '../../../hooks/groups/useMemberInfoForGroup';

const LeaderboardListItem = ({
  place,
  member,
  points,
}: {
  place: number;
  member: MemberInfo;
  points: number;
}) => {
  const { activeUserId } = useActiveGroup();
  return (
    <li className="py-3">
      <div className="flex items-center lg:space-x-4">
        <div className="flex-shrink-0 hidden lg:block">
          <img className="h-8 w-8 rounded-full" src={member.photoURL} alt="" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
            {place}. {member.displayName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {Math.round(points)} points
          </p>
        </div>
        {activeUserId === member.uid && (
          <div>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100">
              Me
            </span>
          </div>
        )}
      </div>
    </li>
  );
};

export default function LeaderboardList({
  postId, // optional. If provided, limits to only certain posts.
}: {
  postId?: string;
}): JSX.Element {
  const activeGroup = useActiveGroup();
  const leaderboard = useLeaderboardData({
    groupId: activeGroup.activeGroupId,
    postId,
  });

  return (
    <ul>
      {leaderboard ? (
        leaderboard.map((item, idx) => (
          <LeaderboardListItem
            key={item.userInfo.uid}
            place={idx + 1}
            member={item.userInfo}
            points={postId ? item[postId].totalPoints : item.totalPoints}
          />
        ))
      ) : (
        <p className="py-2 italic text-gray-600 dark:text-gray-300">
          Loading...
        </p>
      )}
    </ul>
  );
}
