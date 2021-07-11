import React from 'react';
import {
  ExecutionStatus,
  Submission,
  SubmissionType,
} from '../../../models/groups/problem';
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
        {submission.gradingStatus === 'error' &&
          (submission.errorMessage
            ? 'Error: ' + submission.errorMessage
            : 'Error')}
      </div>
      {submission.gradingStatus === 'done' &&
        submission.status !== ExecutionStatus.AC && (
          <p>
            Common issues: Java users should name their class Main. Remember to
            use standard input/output instead of file input/output.
          </p>
        )}
      {submission.compilationError === true && (
        <pre className="text-red-800 dark:text-red-200 overflow-auto">
          {submission.compilationErrorMessage}
        </pre>
      )}
      {submission.compilationError === false && (
        <div>
          {submission.testCases.map(tc => (
            <TestCaseResult data={tc} key={tc.caseId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OnlineJudgeSubmission;
