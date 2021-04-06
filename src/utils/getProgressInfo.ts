import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';
// import { ProblemProgress } from '../models/problem';
// import { ModuleProgress } from '../models/module';

const getProgressInfo = (
  keys: string[],
  data: { [key: string]: string },
  completedValues: string[],
  inProgressValues: string[],
  skippedValues: string[],
  notStartedValues: string[]
) => {
  const res = {
    completed: 0,
    inProgress: 0,
    skipped: 0,
    notStarted: 0,
  };
  for (const key of keys) {
    if (!(key in data)) res.notStarted++;
    else if (completedValues.includes(data[key])) res.completed++;
    else if (inProgressValues.includes(data[key])) res.inProgress++;
    else if (skippedValues.includes(data[key])) res.skipped++;
    else if (notStartedValues.includes(data[key])) res.notStarted++;
    // otherwise ignored
  }
  return res;
};

export function getModulesProgressInfo(moduleIDs: string[]) {
  const { userProgressOnModules } = useContext(UserDataContext);
  return getProgressInfo(
    moduleIDs,
    userProgressOnModules,
    ['Complete'],
    ['Reading', 'Practicing'],
    ['Skipped'],
    ['Not Started']
  );
}

export function getProblemsProgressInfo(problemIDs: string[]) {
  const { userProgressOnProblems } = useContext(UserDataContext);
  return getProgressInfo(
    problemIDs,
    userProgressOnProblems,
    ['Solved', 'Reviewing'],
    ['Solving'],
    ['Skipped'],
    ['Not Attempted']
  );
}
