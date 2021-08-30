import React from 'react';
import TextTooltip from '../../Tooltip/TextTooltip';

export interface LeaderboardTableProps {
  columns:
    | {
        id: string;
        tooltip: string;
      }[]
    | null;
  rows:
    | {
        id: string;
        name: string;
        points: number;
        items: {
          id: string;
          value: string;
          payload?: unknown;
        }[];
      }[]
    | null;
  onCellClick?: (personIndex: number, payload: unknown) => void;
}

export const LeaderboardTable = (props: LeaderboardTableProps): JSX.Element => {
  const problemCellStyles =
    'w-16 text-center border-l border-gray-200 dark:border-gray-700 px-3';

  if (!props.rows || !props.columns) return null;

  return (
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow border-b border-gray-200 dark:border-transparent sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center border-r border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-16"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Points
                </th>
                {/*<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">*/}
                {/*  Last Submission Time*/}
                {/*</th>*/}
                {props.columns.map(({ id, tooltip }, index) => (
                  <th
                    scope="col"
                    className={
                      problemCellStyles +
                      ' py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'
                    }
                    key={id}
                  >
                    <TextTooltip content={tooltip}>P{index}</TextTooltip>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.rows.map((person, idx) => (
                <tr
                  className={
                    idx % 2 === 0
                      ? 'bg-white dark:bg-gray-900'
                      : 'bg-gray-50 dark:bg-gray-800'
                  }
                  key={person.id}
                >
                  <td className="text-center border-r border-gray-200 dark:border-gray-700 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100 w-16">
                    {idx + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    {person.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    {Math.round(person.points)}
                  </td>
                  {/*<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">*/}
                  {/*  MMMM Do YYYY, h:mm:ss a*/}
                  {/*</td>*/}
                  {person.items.map(({ id, value, payload }, idx) => (
                    <td
                      className={
                        problemCellStyles +
                        ' py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 font-medium' +
                        (payload
                          ? ' cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'
                          : '')
                      }
                      key={id}
                      onClick={() =>
                        payload &&
                        props.onCellClick &&
                        props.onCellClick(idx, payload)
                      }
                    >
                      {Math.round(parseFloat(value))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
