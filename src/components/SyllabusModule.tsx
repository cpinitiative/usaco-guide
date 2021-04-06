import { Link } from 'gatsby';
import * as React from 'react';

const CompletedCheck = () => (
  <svg
    className="h-6 w-6 mr-2 text-green-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const IncompleteCheck = () => (
  <svg
    className="h-6 w-6 mr-2 text-gray-200"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const renderProblem = (problem, idx) => {
  return (
    <li className="flex items-center" key={problem}>
      {idx > 0 ? <IncompleteCheck /> : <CompletedCheck />}
      {/* todo make url legit */}
      <a className="text-blue-600" href="https://google.com/">
        {problem}
      </a>
    </li>
  );
};

const renderPrerequisite = prerequisite => {
  return <li key={prerequisite}>{prerequisite}</li>;
};

const SyllabusModule = ({
  title,
  children,
  author,
  problems,
  prerequisites,
  url,
}) => {
  // in the future, fetch this data either from localStorage or from server.
  const isComplete = title === 'Prerequisites' || title === 'Getting Started';

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg mb-8" id={url}>
      <div className="border-b border-gray-200 px-4 py-4 sm:px-6  flex items-center">
        <h2 className="font-bold text-xl mr-2">{title}</h2>
        {isComplete && (
          <svg
            className="h-8 w-8 text-green-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      {prerequisites && (
        <div className="p-4 sm:p-6 border-b border-gray-200">
          Prerequisites:{' '}
          <ul className="ml-8 list-disc">
            {prerequisites.map(renderPrerequisite)}
          </ul>
        </div>
      )}
      <div className="px-4 py-4 sm:p-6">
        <p>{children}</p>

        {author && <p className="mt-2">Author: {author}</p>}
      </div>
      <Link
        to={url || '/'}
        className="block border-t border-gray-200 px-4 py-4 sm:px-6 text-blue-600 font-bold uppercase text-sm hover:bg-gray-50 transition duration-150"
      >
        View Module
      </Link>
    </div>
  );
};

export default SyllabusModule;
