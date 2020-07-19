import { Link } from 'gatsby';
import * as React from 'react';

export default function WelcomeBackBanner({
  lastViewedModuleURL,
  lastViewedModuleLabel,
}) {
  return (
    <div className="bg-blue-700 shadow hover:shadow-lg transition duration-150 ease-in-out sm:rounded-lg w-full">
      <Link
        className="px-4 py-5 sm:p-6 lg:p-8 block sm:flex sm:items-center sm:justify-between"
        to={lastViewedModuleURL || '/intro/using-this-guide'}
      >
        <div>
          <h3 className="text-2xl leading-7 font-medium text-white">
            {lastViewedModuleURL
              ? 'Welcome Back!'
              : 'Welcome to the USACO Guide!'}
          </h3>
          <div className="mt-2 leading-5 text-teal-200">
            <p>
              {lastViewedModuleURL
                ? `Pick up where you left off. Your last viewed module was ${lastViewedModuleLabel}.`
                : `Get started on the first module, "Using This Guide."`}
            </p>
          </div>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center mr-2">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              {lastViewedModuleURL
                ? `Continue: ${lastViewedModuleLabel}`
                : `Get Started: Using This Guide!`}
            </button>
          </span>
        </div>
      </Link>
    </div>
  );
}
