import * as React from 'react';

export interface OptionalProps {
  /**
   * Title for the optional block.
   */
  title?: string;
  /**
   * Content for the optional block
   */
  children: React.ReactNode;
}

const Optional: React.FC<OptionalProps> = ({ children, title }) => (
  <div className="rounded-md bg-purple-50 dark:bg-purple-700 dark:bg-opacity-25 p-4 mb-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-purple-400 dark:text-purple-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
      </div>
      <div className="ml-3">
        <h3 className="text-sm leading-5 font-medium text-purple-800 dark:text-purple-200">
          Optional{title ? `: ${title}` : ''}
        </h3>
        <div className="mt-2 text-sm leading-5 text-purple-700 dark:text-purple-300 no-y-margin tailwind-alert tailwind-alert--optional">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Optional;
