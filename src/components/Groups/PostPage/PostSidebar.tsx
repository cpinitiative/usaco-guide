import * as React from 'react';
import {
  getPostDueDateString,
  getPostTotalPoints,
  PostData,
} from '../../../models/groups/posts';

export default function PostSidebar({ post }: { post: PostData }) {
  return (
    <>
      <h2 className="sr-only">Details</h2>
      <div className="space-y-5">
        <div className="flex items-center space-x-2">
          <svg
            className="h-5 w-5 text-green-500"
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
          <span className="text-green-700 text-sm font-medium">
            400 / {getPostTotalPoints(post)} points earned
          </span>
        </div>
        <div className="flex items-center space-x-2">
          {/* Heroicon name: solid/calendar */}
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-900 text-sm font-medium">
            Due on {getPostDueDateString(post)}
          </span>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
        <div>
          <h2 className="font-medium text-gray-600 mb-1">
            Assignment Leaderboard
          </h2>
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
                  <p className="text-sm font-medium text-gray-900 truncate">
                    1. Leonard Krasner
                  </p>
                  <p className="text-sm text-gray-500 truncate">1500 points</p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
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
                  <p className="text-sm font-medium text-gray-900 truncate">
                    2. Leonard Krasner
                  </p>
                  <p className="text-sm text-gray-500 truncate">1500 points</p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
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
                  <p className="text-sm font-medium text-gray-900 truncate">
                    3. Leonard Krasner
                  </p>
                  <p className="text-sm text-gray-500 truncate">1500 points</p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
            <li className="text-sm text-gray-700 italic text-center">
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
                  <p className="text-sm font-medium text-gray-900 truncate">
                    11. Jeffrey Meng
                  </p>
                  <p className="text-sm text-gray-500 truncate">1100 points</p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
            <li className="my-1 py-2 bg-light-blue-50 rounded-full px-4 -mx-4">
              <div className="flex items-center lg:space-x-4">
                <div className="flex-shrink-0 hidden lg:block">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    12. Nathan Wang
                  </p>
                  <p className="text-sm text-gray-500 truncate">1000 points</p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
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
                  <p className="text-sm font-medium text-gray-900 truncate">
                    13. Billy Bob
                  </p>
                  <p className="text-sm text-gray-500 truncate">900 points</p>
                </div>
                <div className="ml-4">
                  <a
                    href="/"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                  >
                    View
                  </a>
                </div>
              </div>
            </li>
            <li className="py-2 text-sm text-gray-700 italic text-center">
              12 more people
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
