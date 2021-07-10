import React from 'react';
import { Submission, SubmissionType } from '../../../models/groups/problem';
import TestCaseResult from './TestCaseResult';

const OnlineJudgeSubmission = ({
  submission,
}: {
  submission: Submission & { type: SubmissionType.ONLINE_JUDGE };
}): JSX.Element => {
  return (
    <div>
      <div>
        {submission.gradingStatus === 'waiting' &&
          'Waiting for an available grading server...'}
        {submission.gradingStatus === 'in_progress' && 'Grading in progress'}
        {submission.gradingStatus === 'done' &&
          (submission.compilationError ? 'Compilation Error' : 'Done')}
      </div>
      {submission.gradingStatus === 'done' &&
        (submission.compilationError === true ? (
          <pre className="text-red-800 dark:text-red-200 overflow-auto">
            {submission.compilationErrorMessage}
          </pre>
        ) : (
          <div>
            {submission.testCases.map(tc => (
              <TestCaseResult data={tc} key={tc.caseId} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default OnlineJudgeSubmission;
