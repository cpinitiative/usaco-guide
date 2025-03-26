import * as React from 'react';

export interface InfoProps {
  /**
   * The title of the info block
   */
  title: string;
  /**
   * The content of the info block
   */
  children: React.ReactNode;
}

const Info: React.FC<InfoProps> = ({ children, title }) => (
  <div className="mb-4 rounded-md bg-blue-50 p-4 dark:bg-blue-700/25">
    <div className="flex">
      <div className="shrink-0">
        <svg
          className="h-5 w-5 text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="ml-3 flex-1">
        <h3 className="my-0 text-sm leading-5 font-medium text-blue-800 dark:text-blue-100">
          {title}
        </h3>
        <div className="no-y-margin tailwind-alert tailwind-alert--info mt-2 text-sm leading-5 text-blue-700 dark:text-blue-300">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Info;
