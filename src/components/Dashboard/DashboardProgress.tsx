import * as React from 'react';

const ProgressBar = ({ text, green, yellow, blue }) => {
  return (
    <div className="relative">
      <div className="overflow-hidden h-4 text-xs flex bg-gray-200">
        <div
          style={{ width: `${green}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
        />
        <div
          style={{ width: `${yellow}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-300"
        />
        <div
          style={{ width: `${blue}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        />
      </div>
      {text && (
        <div className="text-right">
          <span className="text-sm font-semibold inline-block text-gray-800">
            {text}
          </span>
        </div>
      )}
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

export default function DashboardProgress({
  completed,
  inProgress,
  skipped,
  notStarted,
  total,
}) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        <FancyNumber
          number={completed}
          text="Completed"
          textColor="text-green-800"
          bgColor="bg-green-100"
        />
        <FancyNumber
          number={inProgress}
          text="In Progress"
          textColor="text-yellow-800"
          bgColor="bg-yellow-100"
        />
        <FancyNumber
          number={skipped}
          text="Skipped"
          textColor="text-blue-800"
          bgColor="bg-blue-50"
        />
        <FancyNumber
          number={notStarted}
          text="Not Started"
          textColor="text-gray-800"
          bgColor="bg-gray-100"
        />
      </div>
      <ProgressBar
        green={(completed / total) * 100}
        yellow={(inProgress / total) * 100}
        blue={(skipped / total) * 100}
        text={`${total} total`}
      />
    </div>
  );
}

const ProgressBarSmall = ({ text, green, yellow, blue }) => {
  return (
    <>
      <div className="inline-block">
        <div className="overflow-hidden h-2 text-xs flex bg-gray-200 rounded-full w-24 inline">
          <div
            style={{ width: `${green}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          />
          <div
            style={{ width: `${yellow}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-300"
          />
          <div
            style={{ width: `${blue}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          />
        </div>
      </div>
      <div className="inline-block">
        {text && (
          <span className="text-sm font-semibold text-gray-800">
            &nbsp;{text}
          </span>
        )}
      </div>
    </>
  );
};

export function DashboardProgressSmall({
  completed,
  inProgress,
  skipped,
  notStarted,
  total,
}) {
  return (
    <ProgressBarSmall
      text={completed + '/' + total}
      green={(completed / total) * 100}
      yellow={(inProgress / total) * 100}
      blue={(skipped / total) * 100}
    />
  );
}
