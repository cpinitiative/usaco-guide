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
      <td className="py-4 pl-4 text-sm leading-5 whitespace-nowrap text-gray-500 sm:pl-6 dark:text-gray-400">
        {source}
      </td>
      <td className="py-4 pr-4 pl-2 text-sm leading-5 font-medium whitespace-nowrap text-blue-600 sm:pr-6 sm:pl-6 dark:text-blue-300">
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
      <td className="no-y-margin w-full px-4 py-4 text-sm leading-5 text-gray-500 sm:px-6 dark:text-gray-400">
        {children}
      </td>
    </tr>
  );
};

export const ResourcesFeature = (): JSX.Element => {
  return (
    <div className="-mx-4 max-w-full overflow-hidden">
      <div className="min-w-[52rem] px-4">
        <div>
          <div className="mb-4 flex flex-col">
            <div className={`-mx-4 -my-2 overflow-x-auto px-4 py-2`}>
              <div
                className={`inline-block min-w-full overflow-hidden rounded-lg border-b border-gray-200 align-middle shadow-sm dark:border-l dark:border-black`}
              >
                <table className="no-markdown min-w-full">
                  <thead>
                    <tr>
                      <th
                        colSpan={3}
                        className={`border-b border-gray-200 bg-purple-50 px-4 py-3 text-left text-sm font-medium text-purple-500 uppercase sm:px-6 dark:border-transparent dark:bg-purple-700/25 dark:text-purple-200`}
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
