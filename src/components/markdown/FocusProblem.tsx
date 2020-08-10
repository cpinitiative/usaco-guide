import * as React from 'react';
import { Problem } from '../../models/problem';
import { Link } from 'gatsby';
import ProblemStatusCheckbox from './ProblemsList/ProblemStatusCheckbox';

export default function FocusProblem({ problem }: { problem: Problem }) {
  return (
    <Link
      to={problem.url}
      target="_blank"
      rel="noreferrer"
      className="overflow-hidden shadow hover:shadow-lg block transition duration-150 ease-in-out transform hover:-translate-y-1"
    >
      <div className="border-t-4 border-blue-600">
        <div className="flex items-center py-4 px-6">
          <div className="flex-1 mr-4">
            <div className="flex items-center">
              <div className="flex-1 block group transition duration-150 ease-in-out">
                <p className="text-xl font-medium text-black flex items-center">
                  {problem.name}
                  <svg
                    className="text-gray-300 h-5 w-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {problem.source} - {problem.difficulty}
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex-shrink-0 flex items-center justify-center mt-1 sm:mr-2"
            onClick={e => e.preventDefault()}
          >
            <ProblemStatusCheckbox problem={problem} size="large" />
          </div>
        </div>
        <p className="text-xs italic text-gray-400 font-normal py-3 border-t border-gray-100 px-6">
          Focus Problem – read through this problem before continuing!
        </p>
      </div>
    </Link>
  );
}
