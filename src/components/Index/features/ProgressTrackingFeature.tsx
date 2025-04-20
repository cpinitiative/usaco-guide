import React from 'react';

export const ProgressTrackingFeature = (): JSX.Element => {
  return (
    <div className="-m-4">
      <div className="w-full p-4">
        <div className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
              Modules Progress
            </h3>
            <div className="mt-6">
              <div>
                <div className="mb-4 grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <span className="inline-block inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-800 dark:bg-green-800 dark:text-green-100">
                      6
                    </span>
                    <span className="mt-1 block text-sm font-medium text-green-800 uppercase dark:text-green-100">
                      Completed
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl font-bold text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                      3
                    </span>
                    <span className="mt-1 block text-sm font-medium text-yellow-800 uppercase dark:text-yellow-100">
                      In Progress
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                      2
                    </span>
                    <span className="mt-1 block text-sm font-medium text-blue-800 uppercase dark:text-blue-100">
                      Skipped
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl font-bold text-gray-800">
                      1
                    </span>
                    <span className="mt-1 block text-sm font-medium text-gray-800 uppercase dark:text-gray-100">
                      Not Started
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex h-4 overflow-hidden bg-gray-200 text-xs">
                    <div
                      className="flex flex-col justify-center bg-green-500 text-center whitespace-nowrap text-white shadow-none"
                      style={{ width: '50%' }}
                    />
                    <div
                      className="flex flex-col justify-center bg-yellow-300 text-center whitespace-nowrap text-white shadow-none"
                      style={{ width: '25%' }}
                    />
                    <div
                      className="flex flex-col justify-center bg-blue-500 text-center whitespace-nowrap text-white shadow-none"
                      style={{ width: '16.66667%' }}
                    />
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-sm font-semibold text-gray-800 dark:text-gray-300">
                      12 total
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
