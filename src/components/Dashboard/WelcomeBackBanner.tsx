import { Link } from 'gatsby';
import * as React from 'react';

export default function WelcomeBackBanner({
  lastViewedModuleURL,
  lastViewedModuleLabel,
}) {
  return (
    <div className="w-full bg-white shadow-sm lg:rounded-lg dark:bg-gray-800">
      <Link
        className="block px-4 py-6 sm:flex sm:items-center sm:justify-between sm:p-8"
        to={lastViewedModuleURL || '/general/using-this-guide'}
      >
        <div>
          <h3 className="dark:text-dark-high-emphasis text-xl leading-7 font-medium text-black sm:text-2xl">
            {lastViewedModuleURL
              ? 'Welcome Back!'
              : 'Welcome to the USACO Guide!'}
          </h3>
          <div className="mt-2 font-medium text-blue-600 dark:text-blue-300">
            <p>
              {lastViewedModuleURL
                ? `Pick up where you left off. Your last viewed module was "${lastViewedModuleLabel}."`
                : `Get started on the first module, "Using This Guide."`}
            </p>
          </div>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center lg:mr-2">
          <span className="inline-flex rounded-md shadow-sm">
            <span className="focus:shadow-outline-blue inline-flex items-center rounded-md border border-transparent bg-blue-800 px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-blue-600 focus:border-blue-700 focus:outline-hidden active:bg-blue-700 sm:text-base lg:px-8 lg:py-3 lg:text-lg dark:hover:bg-blue-700">
              {lastViewedModuleURL
                ? `Continue: ${lastViewedModuleLabel}`
                : `Get Started: Using This Guide!`}
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
}
