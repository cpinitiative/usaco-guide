import { Link } from 'gatsby';
import * as React from 'react';
import LeaderboardList from '../LeaderboardList/LeaderboardList';

export default function LeaderboardSidebar() {
  return (
    <div className="rounded-lg bg-white shadow-sm dark:bg-gray-800">
      <div className="p-6 pb-3">
        <div className="flex items-baseline justify-between">
          <h2
            id="who-to-follow-heading"
            className="text-base font-medium text-gray-900 dark:text-gray-100"
          >
            Leaderboard
          </h2>
          <Link
            to="leaderboard"
            className="text-sm font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
          >
            View All &rarr;
          </Link>
        </div>
        <div className="mt-2 flow-root">
          <LeaderboardList />
        </div>
      </div>
    </div>
  );
}
