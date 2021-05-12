import * as React from 'react';

const ForumCTA = (): JSX.Element => {
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
              rel="noreferrer"
              className="btn"
            >
              Join Forum
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForumCTA;
