import * as React from 'react';

const Info = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="rounded-md bg-blue-50 dark:bg-blue-900 p-4 mb-4 tailwind-alert">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg
          className="h-5 w-5 text-blue-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      </div>
      <div className="ml-3 flex-1">
        <h3 className="text-sm leading-5 font-medium text-blue-800 my-0 dark:text-dark-high-emphasis">
          {title}
        </h3>
        <div className="text-sm leading-5 text-blue-700 mt-2 no-bottom-margin dark:text-blue-200">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Info;
