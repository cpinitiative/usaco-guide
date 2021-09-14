import classNames from 'classnames';
import React from 'react';
import { ProblemDifficulty } from '../../../models/problem';

const difficultyClasses = {
  'Very Easy': 'bg-gray-100 text-gray-800',
  Easy: 'bg-green-100 text-green-800',
  Normal: 'bg-blue-100 text-blue-800',
  Hard: 'bg-purple-100 text-purple-800',
  'Very Hard': 'bg-orange-100 text-orange-800',
  Insane: 'bg-red-100 text-red-800',
};

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
    <tr className={className}>
      <td className="pl-4 md:pl-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
        {source}
      </td>
      <td className="pl-4 md:px-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
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
          <span
            className="sm:pl-2 truncate text-gray-800"
            style={{ maxWidth: '20rem' }}
          >
            {title}
          </span>
        </div>
      </td>
      <td className="py-4 whitespace-nowrap leading-5 pr-4 md:pr-6">
        <span
          className={
            'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' +
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
    <div className="max-w-full overflow-hidden -mx-4">
      <div className="min-w-[36rem] px-4">
        <div className="-mx-4 sm:-mx-6 md:mx-0">
          <div className="flex flex-col mb-4">
            <div className={`overflow-x-auto md:-mx-4 md:px-4 -my-2 py-2`}>
              <div
                className={`align-middle inline-block min-w-full shadow overflow-hidden md:rounded-lg border-b border-gray-200`}
              >
                <table className="min-w-full no-markdown text-gray-500">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 pr-4 md:pr-6">
                      <th className="pl-4 md:pl-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                        Source
                      </th>

                      <th className="pl-4 sm:pl-10 md:pl-12 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider whitespace-nowrap">
                        Problem Name
                      </th>

                      <th
                        className={`pr-4 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider`}
                      >
                        Difficulty
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <TableRow
                      source="CSES"
                      title="Road Construction"
                      difficulty="Easy"
                    />
                    <TableRow
                      source="USACO Gold"
                      title="Closing the Farm"
                      difficulty="Easy"
                      className="bg-gray-50"
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
                      className="bg-gray-50"
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
