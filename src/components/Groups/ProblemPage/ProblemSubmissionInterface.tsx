import * as React from 'react';
import { useReducer } from 'react';
import { useDropzone } from 'react-dropzone';
import { LANGUAGE_LABELS } from '../../../context/UserDataContext/properties/userLang';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import {
  ExecutionStatus,
  GroupProblemData,
  Submission,
  SubmissionType,
} from '../../../models/groups/problem';
import ButtonGroup from '../../ButtonGroup';
import TabIndentableTextarea from '../../elements/TabIndentableTextarea';

// const ScoreInput = styled.input`
//   &::-webkit-outer-spin-button,
//   &::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//
//   /* Firefox */
//   &[type='number'] {
//     -moz-appearance: textfield;
//   }
// `;

export default function ProblemSubmissionInterface({
  problem,
}: {
  problem: GroupProblemData;
}) {
  const { lang } = React.useContext(UserDataContext);
  if (problem.submissionType !== SubmissionType.SELF_GRADED) {
    throw new Error(
      "Problem submission interface doesn't support CCC problems yet"
    );
  }
  const emptySubmission: Partial<Submission> = {
    problemId: problem.id,
    type: problem.submissionType,
    code: '',
    language: lang === 'showAll' ? 'cpp' : lang,
    result: 1,
    status: ExecutionStatus.PENDING,
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

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    onDrop: ([file]) => {
      const fileReader = new FileReader();
      fileReader.readAsText(file, 'UTF-8');
      fileReader.onload = e => {
        editSubmission({
          code: e.target.result.toString(),
        });
      };
    },
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        submitSolution(problem, submission);
        editSubmission(emptySubmission);
      }}
    >
      <div>
        <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Submit Code
        </h2>
      </div>
      <div className="text-sm mt-1 text-gray-900 dark:text-gray-300">
        <b>Self-graded problem:</b> Use the Problem Statement link above to test
        your code. Submit your <i>working</i> code below. Group admins will
        manually verify your code to ensure that your code works.
      </div>
      {/*<div className="mt-4">*/}
      {/*  <label*/}
      {/*    htmlFor="score"*/}
      {/*    className="block text-sm font-medium text-gray-700 dark:text-gray-300"*/}
      {/*  >*/}
      {/*    Score*/}
      {/*  </label>*/}
      {/*  <div className="mt-1 relative rounded-md shadow-sm w-24">*/}
      {/*    <ScoreInput*/}
      {/*      type="number"*/}
      {/*      name="score"*/}
      {/*      id="score"*/}
      {/*      min={0}*/}
      {/*      max={100}*/}
      {/*      value={*/}
      {/*        submission.result === null*/}
      {/*          ? ''*/}
      {/*          : Math.round((submission.result as number) * 100)*/}
      {/*      }*/}
      {/*      onChange={e =>*/}
      {/*        editSubmission({ result: parseInt(e.target.value) / 100 })*/}
      {/*      }*/}
      {/*      className="input"*/}
      {/*      placeholder="0 - 100"*/}
      {/*      aria-describedby="price-currency"*/}
      {/*      required*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Language
        </label>
        <div className="mt-1">
          <ButtonGroup
            options={['cpp', 'java', 'py']}
            value={submission.language}
            onChange={lang =>
              editSubmission({
                language: lang,
              })
            }
            labelMap={LANGUAGE_LABELS}
          />
        </div>
      </div>
      <div className="mt-4" {...getRootProps()}>
        <input {...getInputProps()} />
        <TabIndentableTextarea
          rows={7}
          value={submission.code}
          onChange={e => editSubmission({ code: e.target.value })}
          className={`input font-mono${
            isDragActive ? ' border-blue-600 ring-blue-600 ring-1' : ''
          }`}
          placeholder="Paste code, or drag and drop a file over this textbox."
          required
        />
      </div>
      <div className="mt-1 text-sm space-x-2 text-gray-500 dark:text-gray-400">
        If you&apos;d prefer, you can also{' '}
        <button
          className="hover:text-gray-900 underline"
          type="button"
          onClick={() => open()}
        >
          click here
        </button>{' '}
        to select a file.
      </div>
      <button type="submit" className="mt-4 btn">
        Submit Code
      </button>
    </form>
  );
}
