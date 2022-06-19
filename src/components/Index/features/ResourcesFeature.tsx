import classNames from 'classnames';
import React from 'react';

const TableRow = ({
  source,
  title,
  starred,
  children,
  className,
}: {
  source: string;
  title: string;
  starred?: boolean;
  children: string;
  className?: string;
}) => {
  return (
    <tr className={classNames(className)}>
      <td className="pl-4 sm:pl-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-500 dark:text-gray-400">
        {source}
      </td>
      <td className="pl-2 sm:pl-6 pr-4 sm:pr-6 py-4 whitespace-nowrap text-sm leading-5 font-medium text-blue-600 dark:text-blue-300">
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
          <span className="pl-1 sm:pl-2">{title}</span>
        </div>
      </td>
      <td className="w-full px-4 sm:px-6 py-4 text-sm leading-5 text-gray-500 dark:text-gray-400 no-y-margin">
        {children}
      </td>
    </tr>
  );
};

export const ResourcesFeature = (): JSX.Element => {
  return (
    <div className="max-w-full overflow-hidden -mx-4">
      <div className="min-w-[52rem] px-4">
        <div>
          <div className="flex flex-col mb-4">
            <div className={`overflow-x-auto -mx-4 px-4 -my-2 py-2`}>
              <div
                className={`align-middle inline-block min-w-full shadow overflow-hidden rounded-lg border-b dark:border-l border-gray-200 dark:border-black`}
              >
                <table className="min-w-full no-markdown">
                  <thead>
                    <tr>
                      <th
                        colSpan={3}
                        className={`px-4 sm:px-6 border-b text-left font-medium text-sm uppercase py-3 border-gray-200 dark:border-transparent bg-purple-50 text-purple-500 dark:bg-purple-700 dark:bg-opacity-25 dark:text-purple-200`}
                      >
                        Resources
                      </th>
                    </tr>
                  </thead>
                  {/* <tbody className="bg-white dark:bg-gray-800"> */}
                  <tbody className="table-alternating-stripes">
                    <TableRow source="CF" title="EDU: DSU" starred>
                      video explanation + problems for DSU
                    </TableRow>
                    <TableRow
                      source="CSA"
                      title="Disjoint Data Sets"
                      starred
                      className="bg-gray-50 dark:bg-gray-900"
                    >
                      both optimizations, diagrams
                    </TableRow>
                    <TableRow source="PAPS" title="11.1 - Disjoint Sets">
                      both optimizations, no diagrams
                    </TableRow>
                    <TableRow
                      source="CPH"
                      title="15.2 - Union-Find"
                      className="bg-gray-50 dark:bg-gray-900"
                    >
                      small to large, diagrams
                    </TableRow>
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
