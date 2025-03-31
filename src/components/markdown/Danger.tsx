import * as React from 'react';

export interface DangerProps {
  /**
   * The title of the danger block
   */
  title: string;
  /**
   * The content of the danger block
   */
  children: React.ReactNode;
}

const Danger: React.FC<DangerProps> = ({ children, title }) => (
  <div className="mb-4 rounded-md bg-red-50 p-4 dark:bg-red-700/25">
    <div className="flex">
      <div className="shrink-0">
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
      <div className="ml-3 flex-1">
        <h3 className="my-0 text-sm leading-5 font-medium text-red-800 dark:text-red-100">
          {title}
        </h3>
        <div className="no-y-margin tailwind-alert tailwind-alert--danger mt-2 text-sm leading-5 text-red-700 dark:text-red-300">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Danger;
