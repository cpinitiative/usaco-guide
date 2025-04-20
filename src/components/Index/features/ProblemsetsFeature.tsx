import classNames from 'classnames';
import React from 'react';
import { ProblemDifficulty } from '../../../models/problem';

import { difficultyClasses } from '../../DifficultyBox';

const TableRow = ({
  source,
  title,
  starred,
  difficulty,
  className,
}: {
  source: string;
  title: string;
  starred?: boolean;
  difficulty: ProblemDifficulty;
  className?: string;
}) => {
  return (
    <tr className={classNames(className)}>
      <td className="py-4 pl-4 text-sm leading-5 font-medium whitespace-nowrap md:pl-6 dark:text-gray-400">
        {source}
      </td>
      <td className="py-4 pl-4 text-sm leading-5 font-medium whitespace-nowrap md:px-6">
        <div className="flex items-center">
          <svg
            className={classNames(
              'h-4 w-4 text-blue-400',
              !starred && 'opacity-0'
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          {/* Change the text color to the blue in the actual pages */}
          <span
            className="truncate text-blue-600 sm:pl-2 dark:text-blue-300"
            style={{ maxWidth: '20rem' }}
          >
            {title}
          </span>
        </div>
      </td>
      <td className="py-4 pr-4 leading-5 whitespace-nowrap md:pr-6">
        <span
          className={
            'inline-flex rounded-full px-2 text-xs leading-5 font-semibold ' +
            difficultyClasses[difficulty]
          }
        >
          {difficulty}
        </span>
      </td>
    </tr>
  );
};

export const ProblemsetsFeature = (): JSX.Element => {
  return (
    <div className="-mx-4 max-w-full overflow-hidden">
      <div className="min-w-[36rem] px-4">
        <div className="-mx-4 sm:-mx-6 md:mx-0">
          <div className="mb-4 flex flex-col">
            <div className={`-my-2 overflow-x-auto py-2 md:-mx-4 md:px-4`}>
              <div
                className={`inline-block min-w-full overflow-hidden border-b border-gray-200 align-middle shadow-sm md:rounded-lg dark:border-l dark:border-black`}
              >
                <table className="no-markdown min-w-full text-gray-500 dark:text-gray-400">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 pr-4 md:pr-6 dark:border-gray-700 dark:bg-gray-800">
                      <th className="py-3 pl-4 text-left text-xs leading-4 font-medium tracking-wider uppercase md:pl-6">
                        Source
                      </th>

                      <th className="py-3 pl-4 text-left text-xs leading-4 font-medium tracking-wider whitespace-nowrap uppercase sm:pl-10 md:pr-6 md:pl-12">
                        Problem Name
                      </th>

                      <th
                        className={`py-3 pr-4 text-left text-xs leading-4 font-medium tracking-wider uppercase md:pr-6`}
                      >
                        Difficulty
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-alternating-stripes">
                    <TableRow
                      source="CSES"
                      title="Road Construction"
                      difficulty="Easy"
                    />
                    <TableRow
                      source="USACO Gold"
                      title="Closing the Farm"
                      difficulty="Easy"
                      className="bg-gray-50 dark:bg-gray-900"
                    />
                    <TableRow
                      source="USACO Gold"
                      title="Mootube"
                      difficulty="Normal"
                      starred
                    />
                    <TableRow
                      source="Baltic OI"
                      title="2016 - Park"
                      difficulty="Hard"
                      className="bg-gray-50 dark:bg-gray-900"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
