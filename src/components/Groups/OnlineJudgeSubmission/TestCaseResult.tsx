import React from 'react';
import {
  getTestCaseSymbol,
  TestCaseResult as TestCaseResultType,
} from '../../../models/groups/problem';

const TestCaseResult = ({
  data,
}: {
  data: TestCaseResultType;
}): JSX.Element => {
  const containerClasses = data.pass
    ? 'bg-green-100 border-green-200 dark:bg-green-700 dark:border-green-700'
    : 'bg-red-100 border-red-200 dark:bg-red-700 dark:border-red-700';
  const textColor = data.pass
    ? 'text-green-800 dark:text-green-100'
    : 'text-red-800 dark:text-red-100';
  return (
    <div
      className={`m-1 inline-block w-[70px] h-[60px] dark:bg-opacity-50 border ${containerClasses} relative`}
      title={data.pass === true ? 'Correct answer' : data.error}
    >
      <div
        className={`font-bold text-center text-[2.5rem] ${textColor} leading-10`}
      >
        {getTestCaseSymbol(data)}
      </div>
      <span
        className={`absolute bottom-0 left-[4px] ${textColor} text-[0.8125rem] font-bold`}
      >
        {data.caseId + 1}
      </span>
      {data.pass && (
        <span
          className={`absolute bottom-0 right-0 text-right ${textColor} leading-3 p-[2px] text-[0.625rem]`}
        >
          {/* {data.memory}kb
          <br /> */}
          {data.time}ms
        </span>
      )}
    </div>
  );
};

export default TestCaseResult;
