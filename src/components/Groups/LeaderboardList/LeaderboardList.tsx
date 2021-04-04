import * as React from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { Leaderboard } from '../../../models/groups/leaderboard';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import getMemberInfoForGroup, {
  MemberInfo,
} from '../../../hooks/groups/useMemberInfoForGroup';

const LeaderboardListItem = ({
  place,
  member,
  points,
}: {
  place: number;
  member: MemberInfo;
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
            {place}. {member.displayName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {points} points
          </p>
        </div>
        {firebaseUser?.uid === member.uid && (
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
}) {
  const activeGroup = useActiveGroup();
  const leaderboard = activeGroup.groupData?.leaderboard;
  const members = getMemberInfoForGroup(activeGroup.groupData);
  const leaderboardItems = React.useMemo(() => {
    if (!leaderboard || !members) return null;

    const leaderboardSum = {};

    const processPost = id => {
      if (!leaderboard.hasOwnProperty(id)) return;
      for (let problemID of Object.keys(leaderboard[id])) {
        for (let userID of Object.keys(leaderboard[id][problemID])) {
          if (!(userID in leaderboardSum)) leaderboardSum[userID] = 0;
          leaderboardSum[userID] +=
            leaderboard[id][problemID][userID].bestScore;
        }
      }
    };

    if (!postId) {
      for (let postID of Object.keys(leaderboard)) {
        processPost(postID);
      }
    } else {
      processPost(postId);
    }

    let data = activeGroup.groupData.memberIds
      .map(id => ({
        member: members.find(member => member.uid === id),
        points: leaderboardSum[id] ?? 0,
      }))
      .filter(x => !!x.member); // filter is needed in case a member just joined and their data isn't available yet
    return data.sort((a, b) => b.points - a.points);
  }, [leaderboard, activeGroup.groupData.memberIds, members?.length, postId]);

  return (
    <ul>
      {leaderboardItems ? (
        leaderboardItems.map((item, idx) => (
          <LeaderboardListItem
            key={item.member.uid}
            place={idx + 1}
            member={item.member}
            points={item.points}
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
