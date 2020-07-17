import * as React from 'react';
import Tooltip from './tooltip/Tooltip';
import { Problem } from '../../content/models';
import { useContext } from 'react';
import UserDataContext, {
  NEXT_PROBLEM_STATUS,
  ProblemStatus,
} from '../context/UserDataContext';

export default function ProblemStatusCheckbox({
  problem,
}: {
  problem: Problem;
}) {
  const { problemStatus, setProblemStatus } = useContext(UserDataContext);
  let status: ProblemStatus =
    problemStatus[problem.uniqueID] || 'Not Attempted';
  const icon: { [key in ProblemStatus]: React.ReactNode } = {
    'Not Attempted': (
      <span className="inline-block h-6 w-6 rounded-full bg-gray-200 cursor-pointer" />
    ),
    Solving: (
      <span className="inline-block h-6 w-6 rounded-full bg-yellow-300 cursor-pointer" />
    ),
    Solved: (
      <span className="inline-block h-6 w-6 rounded-full bg-green-500 cursor-pointer" />
    ),
    "Can't Solve": (
      <span className="inline-block h-6 w-6 rounded-full bg-red-500 cursor-pointer" />
    ),
    Skipped: (
      <span className="inline-block h-6 w-6 rounded-full bg-blue-300 cursor-pointer" />
    ),
  };
  const handleClick = () => {
    setProblemStatus(problem, NEXT_PROBLEM_STATUS[status]);
  };
  return (
    <Tooltip
      content={status}
      hideOnClick={false}
      type="compact"
      position="left"
    >
      <span onClick={handleClick} className="inline-block h-6 w-6">
        {icon[status]}
      </span>
    </Tooltip>
  );
}
