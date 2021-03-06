import * as React from 'react';
import styled from 'styled-components';
import { useReducer, useState } from 'react';
import {
  PostData,
  ProblemData,
  Submission,
} from '../../../models/groups/posts';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';

const ScoreInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export default function ProblemSubmissionInterface({
  problem,
}: {
  problem: ProblemData;
}) {
  const emptySubmission: Partial<Submission> = {
    problemId: problem.id,
    type: problem.submissionType,
    code: '',
    language: 'cpp',
    result: null,
  };
  const [submission, editSubmission] = useReducer(
    (oldSubmission, updates: Partial<Submission>): Partial<Submission> => ({
      ...oldSubmission,
      ...updates,
    }),
    emptySubmission
  );
  const activeGroup = useActiveGroup();
  const { submitSolution } = usePostActions(activeGroup.activeGroupId);

  return (
    <section>
      <div>
        <h2 className="text-xl font-medium text-gray-900">Submit Code</h2>
      </div>
      <div className="text-sm mt-1 text-gray-900">
        <b>Self-graded problem:</b> Use the Problem Statement link above to test
        your code. Submit your code and your score below. Group admins will
        manually verify your code to ensure the score you entered is accurate.
      </div>
      <div className="mt-4">
        <label
          htmlFor="score"
          className="block text-sm font-medium text-gray-700"
        >
          Score
        </label>
        <div className="mt-1 relative rounded-md shadow-sm w-24">
          <ScoreInput
            type="number"
            name="score"
            id="score"
            min={0}
            max={100}
            value={submission.result ?? ''}
            onChange={e => editSubmission({ result: parseInt(e.target.value) })}
            className="focus:ring-gray-900 focus:border-gray-900 block w-full pl-3 pr-3 sm:text-sm border-gray-300"
            placeholder="0 - 100"
            aria-describedby="price-currency"
          />
        </div>
      </div>
      <div className="mt-4">
        <textarea
          rows={3}
          value={submission.code}
          onChange={e => editSubmission({ code: e.target.value })}
          className="shadow-sm block w-full focus:ring-gray-900 focus:border-gray-900 sm:text-sm border-gray-300 font-mono"
          placeholder="Paste code here, or drag and drop a file here."
        />
      </div>
      <div className="mt-1 text-sm space-x-2 text-gray-500">
        You can drag and drop a file on the textbox, or{' '}
        <button className="hover:text-gray-900 underline">click here</button> to
        choose a file.
      </div>
      <button
        type="button"
        onClick={() => {
          submitSolution(problem, submission);
          editSubmission(emptySubmission);
        }}
        className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
      >
        Submit Code
      </button>
    </section>
  );
}
