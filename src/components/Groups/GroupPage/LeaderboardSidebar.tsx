import * as React from 'react';
import LeaderboardList from '../LeaderboardList/LeaderboardList';

export default function LeaderboardSidebar({ leaderboard }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-6 pb-3">
        <div className="flex items-baseline justify-between">
          <h2
            id="who-to-follow-heading"
            className="text-base font-medium text-gray-900 dark:text-gray-100"
          >
            Leaderboard
          </h2>
          <a
            href="#"
            className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
          >
            View All &rarr;
          </a>
        </div>
        <div className="flow-root mt-2">
          <LeaderboardList leaderboard={leaderboard} />
        </div>
      </div>
    </div>
  );
}
