import * as React from 'react';
import { MemberData } from '../../../models/groups/groups';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { Leaderboard } from '../../../models/groups/leaderboard';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { useActivePostProblems } from '../../../hooks/groups/useActivePostProblems';

const LeaderboardListItem = ({
  place,
  member,
  points,
}: {
  place: number;
  member: MemberData;
  points: number;
}) => {
  const { firebaseUser } = React.useContext(UserDataContext);
  return (
    <li className="py-3">
      <div className="flex items-center lg:space-x-4">
        <div className="flex-shrink-0 hidden lg:block">
          <img className="h-8 w-8 rounded-full" src={member.photoURL} alt="" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
            {place}. {member.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {points} points
          </p>
        </div>
        {firebaseUser?.uid === member.id && (
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
  leaderboard,
}: {
  leaderboard: Leaderboard;
}) {
  const activeGroup = useActiveGroup();
  const leaderboardItems = React.useMemo(() => {
    if (!leaderboard) return [];

    const leaderboardSum = {};
    for (let postID of Object.keys(leaderboard)) {
      for (let problemID of Object.keys(leaderboard[postID])) {
        for (let userID of Object.keys(leaderboard[postID][problemID])) {
          if (!(userID in leaderboardSum)) leaderboardSum[userID] = 0;
          leaderboardSum[userID] +=
            leaderboard[postID][problemID][userID].bestScore;
        }
      }
    }
    let data = activeGroup.groupData.memberIds.map(id => ({
      member: activeGroup.groupData.members[id],
      points: leaderboardSum[id] ?? 0,
    }));
    return data.sort((a, b) => b.points - a.points);
  }, [
    leaderboard,
    activeGroup.groupData.memberIds,
    activeGroup.groupData.members,
  ]);

  return (
    <ul>
      {leaderboardItems.map((item, idx) => (
        <LeaderboardListItem
          key={item.member.id}
          place={idx + 1}
          member={item.member}
          points={item.points}
        />
      ))}
    </ul>
  );
}
