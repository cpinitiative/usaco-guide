import React from 'react';
import { TestCaseResult as TestCaseResultType } from '../../../models/groups/problem';

const TestCaseResult = ({ data }: { data: TestCaseResultType }): JSX.Element => {
  const containerClasses =
    data.title === 'Correct answer'
      ? 'bg-green-700 border-green-700'
      : 'bg-red-700 border-red-700';
  const textColor =
    data.title === 'Correct answer' ? 'text-green-100' : 'text-red-100';
  return (
    <div
      className={`m-1 inline-block w-[70px] h-[60px] bg-opacity-50 border ${containerClasses} relative`}
      title={data.title}
    >
      <div
        className={`font-bold text-center text-[2.5rem] ${textColor} leading-10`}
      >
        {data.symbol}
      </div>
      <span
        className={`absolute bottom-0 left-[4px] ${textColor} text-[0.8125rem] font-bold`}
      >
        {data.trialNum}
      </span>
      <span
        className={`absolute bottom-0 right-0 text-right ${textColor} leading-3 p-[2px] text-[0.625rem]`}
      >
        {data.memory}
        <br />
        {data.time}
      </span>
    </div>
  );
};

export default TestCaseResult;
