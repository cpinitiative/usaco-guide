import * as React from 'react';

export default function LeaderboardSidebar() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-6">
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
          <ul>
            <li className="py-3">
              <div className="flex items-center lg:space-x-4">
                <div className="flex-shrink-0 hidden lg:block">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    1. Leonard Krasner
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    1500 points
                  </p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center lg:space-x-4">
                <div className="flex-shrink-0 hidden lg:block">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    2. Leonard Krasner
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    1500 points
                  </p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center lg:space-x-4">
                <div className="flex-shrink-0 hidden lg:block">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    3. Leonard Krasner
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    1500 points
                  </p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-200 italic text-center">
              7 more people
            </li>
            <li className="py-3">
              <div className="flex items-center lg:space-x-4">
                <div className="flex-shrink-0 hidden lg:block">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    11. Jeffrey Meng
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    1100 points
                  </p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
            <li className="py-3 bg-light-blue-50 dark:bg-cyan-900 px-6 -mx-6">
              <div className="flex items-center lg:space-x-4">
                <div className="flex-shrink-0 hidden lg:block">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    12. Nathan Wang
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    1000 points
                  </p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center lg:space-x-4">
                <div className="flex-shrink-0 hidden lg:block">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    13. Billy Bob
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    900 points
                  </p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
            <li className="py-2 text-sm text-gray-700 dark:text-gray-200 italic text-center">
              12 more people
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
