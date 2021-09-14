import React from 'react';

export const ProgressTrackingFeature = (): JSX.Element => {
  return (
    <div className="-m-4">
      <div className="w-full p-4">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Modules Progress
            </h3>
            <div className="mt-6">
              <div>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-green-800 bg-green-100 rounded-full h-16 w-16 inline-block inline-flex items-center justify-center">
                      6
                    </span>
                    <span className="block mt-1 text-sm font-medium uppercase text-green-800">
                      Completed
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-yellow-800 bg-yellow-100 rounded-full h-16 w-16 inline-block inline-flex items-center justify-center">
                      3
                    </span>
                    <span className="block mt-1 text-sm font-medium uppercase text-yellow-800">
                      In Progress
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-800 bg-blue-50 rounded-full h-16 w-16 inline-block inline-flex items-center justify-center">
                      2
                    </span>
                    <span className="block mt-1 text-sm font-medium uppercase text-blue-800">
                      Skipped
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-gray-800 bg-gray-100 rounded-full h-16 w-16 inline-block inline-flex items-center justify-center">
                      1
                    </span>
                    <span className="block mt-1 text-sm font-medium uppercase text-gray-800">
                      Not Started
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="overflow-hidden h-4 text-xs flex bg-gray-200">
                    <div
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                      style={{ width: '50%' }}
                    />
                    <div
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-300"
                      style={{ width: '25%' }}
                    />
                    <div
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      style={{ width: '16.66667%' }}
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold inline-block text-gray-800">
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
