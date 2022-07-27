import classNames from 'classnames';
import React from 'react';

export const CPIProjectCard = ({
  icon: Icon,
  iconClasses,
  title,
  url,
  children,
}: {
  icon: React.ElementType;
  iconClasses: string;
  title: string;
  url: string;
  children: React.ReactNode;
}): JSX.Element => (
  // <div className="rounded-lg border border-gray-100 dark:border-none dark:bg-gray-800 p-6 md:p-8 transition hover:shadow-lg relative flex flex-col">
  <div className="rounded-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-none p-6 md:p-8 transition hover:shadow-lg relative flex flex-col">
    <div className="flex-1">
      <div
        className={classNames(
          'w-12 h-12 rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white',
          iconClasses
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-gray-200">
        {title}
      </h3>
      <p className="mt-2 md:mt-4 text-gray-700 dark:text-gray-400 md:text-lg">
        {children}
      </p>
    </div>
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 dark:text-blue-300 md:text-lg mt-4 inline-block"
    >
      Learn More &rarr;
      <div className="absolute inset-0"></div>
    </a>
  </div>
);
