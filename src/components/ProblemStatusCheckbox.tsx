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
  const color: { [key in ProblemStatus]: string } = {
    'Not Attempted': 'bg-gray-200',
    Solving: 'bg-yellow-300',
    Solved: 'bg-green-500',
    "Can't Solve": 'bg-red-500',
    Skipped: 'bg-blue-300',
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
        <span
          className={
            'inline-block h-6 w-6 rounded-full cursor-pointer transition duration-100 ease-out ' +
            color[status]
          }
        />
      </span>
    </Tooltip>
  );
}
