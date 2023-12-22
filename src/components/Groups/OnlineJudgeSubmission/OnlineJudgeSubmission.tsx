import React from 'react';
import { ProblemSubmissionResult } from '../../../models/groups/problem';
import TestCaseResult from './TestCaseResult';

const OnlineJudgeSubmission = ({
  submission,
}: {
  submission: ProblemSubmissionResult;
}): JSX.Element => {
  return (
    <div>
      <div>
        {submission.status === 'compiling' && 'Compiling in progress...'}
        {submission.status === 'executing' && 'Grading in progress...'}
        {submission.status === 'done' &&
          (submission.verdict === 'CE'
            ? 'Compilation Error'
            : submission.verdict === 'IE'
            ? 'Internal Error: ' +
              submission.message +
              ' ' +
              submission.debugData
            : 'Done')}
      </div>
      {submission.verdict !== 'IE' && (
        <>
          {submission.status === 'done' && submission.verdict !== 'AC' && (
            <p>
              Common issues: Java users should name their class Main. Remember
              to use standard input/output instead of file input/output.
              Finally, our grader currently has an issue that requires you to
              output an endline (ex. \n or endl) at the end of the output. This
              is a bug (it works on USACO without the endline) that we're
              working on fixing.
            </p>
          )}
          {submission.verdict === 'CE' && (
            <pre className="text-red-800 dark:text-red-200 overflow-auto">
              {submission.message}
            </pre>
          )}
          {submission.verdict !== 'CE' && (
            <div>
              {submission.testCases.map((tc, i) => (
                <TestCaseResult
                  data={tc}
                  tcNum={i + 1}
                  key={submission.submissionID + '_' + i}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OnlineJudgeSubmission;
