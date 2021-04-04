import * as React from 'react';

export default function ForumCTA() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 sm:rounded-lg mb-4">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
          Join the USACO Forum!
        </h3>
        <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500 dark:text-gray-400">
          <p>
            Stuck on a problem, or don't understand a module? Join the USACO
            Forum and get help from other competitive programmers!
          </p>
        </div>
        <div className="mt-5">
          <span className="inline-flex rounded-md shadow-sm">
            <a
              href="https://forum.usaco.guide/"
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
            >
              Join Forum
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
