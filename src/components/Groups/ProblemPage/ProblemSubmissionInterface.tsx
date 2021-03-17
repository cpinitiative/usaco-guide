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
        <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Submit Code
        </h2>
      </div>
      <div className="text-sm mt-1 text-gray-900 dark:text-gray-300">
        <b>Self-graded problem:</b> Use the Problem Statement link above to test
        your code. Submit your code and your score below. Group admins will
        manually verify your code to ensure the score you entered is accurate.
      </div>
      <div className="mt-4">
        <label
          htmlFor="score"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
            className="input"
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
          className="input font-mono"
          placeholder="Paste code, or drag and drop a file over this textbox."
        />
      </div>
      <div className="mt-1 text-sm space-x-2 text-gray-500 dark:text-gray-400">
        If you&apos;d prefer, you can also{' '}
        <button className="hover:text-gray-900 underline">click here</button> to
        select a file.
      </div>
      <button
        type="button"
        onClick={() => {
          submitSolution(problem, submission);
          editSubmission(emptySubmission);
        }}
        className="mt-4 btn"
      >
        Submit Code
      </button>
    </section>
  );
}
