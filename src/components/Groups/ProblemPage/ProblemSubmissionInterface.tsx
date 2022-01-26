import * as React from 'react';
import { useReducer } from 'react';
import { useDropzone } from 'react-dropzone';
import { LANGUAGE_LABELS } from '../../../context/UserDataContext/properties/userLang';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import {
  ProblemSubmissionRequestData,
  usePostActions,
} from '../../../hooks/groups/usePostActions';
import useProblemSubmissionResult from '../../../hooks/useProblemSubmissionResult';
import { GroupProblemData } from '../../../models/groups/problem';
import ButtonGroup from '../../ButtonGroup';
import TabIndentableTextarea from '../../elements/TabIndentableTextarea';
import OnlineJudgeSubmission from '../OnlineJudgeSubmission/OnlineJudgeSubmission';

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
  const { lang, firebaseUser } = React.useContext(UserDataContext);
  const emptySubmission: Partial<ProblemSubmissionRequestData> = {
    problemID: problem.id,
    sourceCode: '',
    language: lang === 'showAll' ? 'cpp' : lang,
  };
  const [submission, editSubmission] = useReducer(
    (
      oldSubmission,
      updates: Partial<ProblemSubmissionRequestData>
    ): Partial<ProblemSubmissionRequestData> => ({
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
          sourceCode: e.target.result.toString(),
        });
      };
    },
  });

  const [submissionID, setSubmissionID] = React.useState(null);
  const submissionResult = useProblemSubmissionResult(submissionID);

  if (activeGroup.activeUserId !== firebaseUser?.uid) {
    // this suggests the parent is viewing the child's account
    // or a group owner is viewing the group as a group member. either way
    // don't allow submissions.
    return (
      <p className="italic">
        Submission disabled while viewing another user's account.
      </p>
    );
  }

  // todo add ys?
  const cannotSubmit = !(
    problem.usacoGuideId?.startsWith('usaco') ||
    problem.usacoGuideId?.startsWith('cses')
  );

  if (cannotSubmit) {
    return (
      <div>
        <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Submit Code
        </h2>
        <div className="mt-1 text-gray-900 dark:text-gray-300">
          Unfortunately, we don't support built-in code submissions for this
          problem yet. Submit this problem directly from the problem statement
          website. For CodeForces problems, you may need to make a CodeForces
          account first.
        </div>
      </div>
    );
  }

  const handleSubmitSolution = async e => {
    e.preventDefault();
    try {
      const submissionID = await submitSolution(
        {
          problemID: problem.usacoGuideId,
          language: submission.language,
          filename: {
            cpp: 'main.cpp',
            java: 'Main.java',
            py: 'main.py',
          }[submission.language],
          sourceCode: submission.sourceCode,
        },
        problem.postId,
        problem.id
      );
      setSubmissionID(submissionID);
    } catch (error) {
      alert('Failed to submit solution: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmitSolution}>
      <div>
        <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Submit Code
        </h2>
      </div>
      <div className="text-sm mt-1 text-gray-900 dark:text-gray-300">
        <>
          All problems submitted through this website use standard input/output.
          When using Java, make sure to name your class Main. You can use{' '}
          <a
            href="https://ide.usaco.guide/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            ide.usaco.guide
          </a>{' '}
          to test your code online. Report any issues to{' '}
          <a
            href="mailto:classes@joincpi.org"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            classes@joincpi.org
          </a>
          .
        </>
      </div>
      {submissionResult && (
        <div className="mt-4">
          <OnlineJudgeSubmission submission={submissionResult} />
        </div>
      )}
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
          value={submission.sourceCode}
          onChange={e => editSubmission({ sourceCode: e.target.value })}
          className={`input font-mono${
            isDragActive ? ' border-blue-600 ring-blue-600 ring-1' : ''
          }`}
          placeholder="Paste code, or drag and drop a file over this textbox."
          required
        />
      </div>
      <div className="mt-1 text-sm space-x-2 text-gray-500 dark:text-gray-400">
        If you'd prefer, you can also{' '}
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
