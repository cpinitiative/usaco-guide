import * as React from 'react';

const ProgressBar = ({ title }) => {
  return (
    <div className="relative">
      <div className="overflow-hidden h-4 text-xs flex rounded-full bg-gray-200">
        <div
          style={{ width: '45%' }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
        />
        <div
          style={{ width: '10%' }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-300"
        />
        <div
          style={{ width: '5%' }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        />
      </div>
      <div className="text-right">
        <span className="text-sm font-semibold inline-block text-gray-800">
          107 total modules
        </span>
      </div>
    </div>
  );
};

const FancyNumber = ({ number, text, textColor, bgColor }) => (
  <div className="text-center">
    <span
      className={`text-3xl font-bold ${textColor} ${bgColor} rounded-full h-16 w-16 inline-block inline-flex items-center justify-center`}
    >
      {number}
    </span>
    <span className={`block mt-1 text-sm font-medium uppercase ${textColor}`}>
      {text}
    </span>
  </div>
);

export default function SectionProgress() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        <FancyNumber
          number="12"
          text="Completed"
          textColor="text-green-800"
          bgColor="bg-green-100"
        />
        <FancyNumber
          number="3"
          text="In Progress"
          textColor="text-yellow-800"
          bgColor="bg-yellow-100"
        />
        <FancyNumber
          number="1"
          text="Skipped"
          textColor="text-blue-800"
          bgColor="bg-blue-50"
        />
        <FancyNumber
          number="8"
          text="Not Started"
          textColor="text-gray-800"
          bgColor="bg-gray-100"
        />
      </div>
      <ProgressBar title="Modules" />
    </div>
  );
}
