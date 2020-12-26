import * as React from 'react';

export const IncompleteSection = ({ children }) => {
  return (
    <div className="p-4 bg-red-50 rounded-md tailwind-alert dark:bg-red-900 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-red-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm leading-5 font-medium text-red-800 dark:text-red-200">
            This section is not complete.
          </h3>
          <div className="mt-2 text-sm leading-5 text-red-700 no-bottom-margin dark:text-red-300">
            Any help would be appreciated! Just submit a Pull Request on{' '}
            <a
              href="https://github.com/cpinitiative/usaco-guide"
              target="_blank"
            >
              Github
            </a>
            . <br />
            <i>{children}</i>
          </div>
        </div>
      </div>
    </div>
  );
};
