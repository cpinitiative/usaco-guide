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
  <div className="relative flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition hover:shadow-lg md:p-8 dark:border-none dark:bg-gray-800">
    <div className="flex-1">
      <div
        className={classNames(
          'mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br text-white',
          iconClasses
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-gray-200">
        {title}
      </h3>
      <p className="mt-2 text-gray-700 md:mt-4 md:text-lg dark:text-gray-400">
        {children}
      </p>
    </div>
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mt-4 inline-block text-blue-600 md:text-lg dark:text-blue-300"
    >
      Learn More &rarr;
      <div className="absolute inset-0"></div>
    </a>
  </div>
);
