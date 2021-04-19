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
  <div className="rounded-md bg-red-50 dark:bg-red-700 dark:bg-opacity-25 p-4 mb-4">
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
      <div className="ml-3 flex-1">
        <h3 className="text-sm leading-5 font-medium text-red-800 my-0 dark:text-red-100">
          {title}
        </h3>
        <div className="text-sm leading-5 text-red-700 mt-2 no-y-margin dark:text-red-300 tailwind-alert tailwind-alert--danger">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Danger;
