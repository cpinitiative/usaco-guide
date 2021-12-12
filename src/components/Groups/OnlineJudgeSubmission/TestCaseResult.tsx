import React from 'react';
import {
  ProblemSubmissionTestCaseResult,
  verdictToSymbol,
} from '../../../models/groups/problem';

const TestCaseResult = ({
  data,
  tcNum,
}: {
  data: ProblemSubmissionTestCaseResult | null;
  tcNum: number;
}): JSX.Element => {
  const containerClasses = data
    ? data.verdict === 'AC'
      ? 'bg-green-100 border-green-200 dark:bg-green-700 dark:border-green-700'
      : 'bg-red-100 border-red-200 dark:bg-red-700 dark:border-red-700'
    : 'bg-gray-100 border-gray-200 dark:bg-gray-700 dark:border-gray-700';
  const textColor = data
    ? data.verdict === 'AC'
      ? 'text-green-800 dark:text-green-100'
      : 'text-red-800 dark:text-red-100'
    : 'text-transparent';
  return (
    <div
      className={`m-1 inline-block w-[70px] h-[60px] dark:bg-opacity-50 border ${containerClasses} relative`}
      title={data ? data.verdict : 'Loading...'}
    >
      <div
        className={`font-bold text-center text-[2.5rem] ${textColor} leading-10`}
      >
        {data ? verdictToSymbol[data.verdict] : '.'}
      </div>
      <span
        className={`absolute bottom-0 left-[4px] ${textColor} text-[0.8125rem] font-bold`}
      >
        {tcNum}
      </span>
      {data?.verdict === 'AC' && (
        <span
          className={`absolute bottom-0 right-0 text-right ${textColor} leading-3 p-[2px] text-[0.625rem]`}
        >
          {data.memory}kb
          <br />
          {data.time}s
        </span>
      )}
    </div>
  );
};

export default TestCaseResult;
