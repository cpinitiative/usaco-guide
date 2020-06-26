import * as React from 'react';
import { Problem } from '../../../content/models';

type ProblemsListComponentProps = {
  title?: string;
  children?: React.ReactChildren;
  problems: Problem[];
};

export function ProblemsListComponent(props: ProblemsListComponentProps) {
  console.log(props.problems);
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full no-markdown">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Problem Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
              </tr>
            </thead>
            <tbody className="table-alternating-stripes">
              {props.problems.map(problem => (
                <ProblemComponent problem={problem} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

type ProblemComponentProps = {
  problem: Problem;
};

export function ProblemComponent(props: ProblemComponentProps) {
  const difficultyClasses = {
    Intro: 'bg-teal-100 text-teal-800',
    Easy: 'bg-yellow-100 text-yellow-800',
    Normal: 'bg-green-100 text-green-800',
    Hard: 'bg-purple-100 text-purple-800',
    'Very Hard': 'bg-red-100 text-red-800',
    Insane: 'bg-blue-100 text-blue-800',
  };
  const [showTags, setShowTags] = React.useState(false);
  const { problem } = props;

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 font-medium">
        {problem.source}
      </td>
      <td className="pl-6 w-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        {problem.starred && (
          <svg
            className="h-6 w-6 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        )}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        <a href={problem.url}>{problem.name}</a>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap leading-5">
        {problem.difficulty && (
          <span
            className={
              'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' +
              difficultyClasses[problem.difficulty]
            }
          >
            {problem.difficulty}
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        {!showTags && (
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-900"
            onClick={e => {
              e.preventDefault();
              setShowTags(true);
            }}
          >
            Show Tags
          </a>
        )}
        {showTags &&
          (problem.tags && problem.tags.length
            ? problem.tags.join(', ')
            : 'None')}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        {/*{props.children}*/}
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Show Solution
        </a>
      </td>
    </tr>
  );
}
