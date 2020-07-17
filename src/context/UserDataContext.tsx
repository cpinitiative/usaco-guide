import { createContext, useState } from 'react';
import * as React from 'react';
import { Problem } from '../../content/models';

export type ModuleProgress =
  | 'Not Started'
  | 'Reading'
  | 'Practicing'
  | 'Complete'
  | 'Skipped';
export const ModuleProgressOptions: ModuleProgress[] = [
  'Not Started',
  'Reading',
  'Practicing',
  'Complete',
  'Skipped',
];
export type UserProgress = { [key: string]: ModuleProgress };
export type UserLang = 'showAll' | 'cpp' | 'java' | 'py';
export type ProblemStatus =
  | 'Not Attempted'
  | 'Solving'
  | 'Solved'
  | "Can't Solve"
  | 'Skipped';
export const NEXT_PROBLEM_STATUS: { [key in ProblemStatus]: ProblemStatus } = {
  'Not Attempted': 'Solving',
  Solving: 'Solved',
  Solved: "Can't Solve",
  "Can't Solve": 'Skipped',
  Skipped: 'Not Attempted',
};

const UserDataContext = createContext<{
  lang: UserLang;
  setLang: (lang: UserLang) => void;
  userProgress: UserProgress;
  setModuleProgress: (moduleID: string, progress: ModuleProgress) => void;
  problemStatus: { [key: string]: ProblemStatus };
  setProblemStatus: (problem: Problem, status: ProblemStatus) => void;
}>({
  lang: 'showAll',
  setLang: null,
  userProgress: null,
  setModuleProgress: null,
  problemStatus: null,
  setProblemStatus: null,
});

const langKey = 'guide:userData:lang';
const getLangFromStorage = () => {
  let stickyValue = window.localStorage.getItem(langKey);
  let v = null;
  try {
    v = JSON.parse(stickyValue);
  } catch (e) {
    console.error("Couldn't parse user primary language", e);
  }
  if (v === 'cpp' || v === 'java' || v === 'py') return v;
  return 'cpp';
};

const progressKey = 'guide:userData:progress';
const getProgressFromStorage = () => {
  let stickyValue = window.localStorage.getItem(progressKey);
  let v = {};
  try {
    v = JSON.parse(stickyValue);
  } catch (e) {
    console.error("Couldn't parse user progress", e);
  }
  return v || {};
};

const problemStatusKey = 'guide:userData:problemStatus';
const getProblemStatusFromStorage = () => {
  let stickyValue = window.localStorage.getItem(problemStatusKey);
  let v = {};
  try {
    v = JSON.parse(stickyValue);
  } catch (e) {
    console.error("Couldn't parse problem status", e);
  }
  return v || {};
};

export const UserDataProvider = ({ children }) => {
  const [lang, setLang] = useState<UserLang>('showAll');
  const [userProgress, setUserProgress] = useState<UserProgress>({});
  const [problemStatus, setProblemStatus] = useState<{
    [key: string]: ProblemStatus;
  }>({});

  React.useEffect(() => {
    setLang(getLangFromStorage());
    setUserProgress(getProgressFromStorage());
    setProblemStatus(getProblemStatusFromStorage());
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        lang: lang as UserLang,
        setLang: lang => {
          window.localStorage.setItem(langKey, JSON.stringify(lang));
          setLang(lang);
        },
        userProgress,
        setModuleProgress: (moduleID: string, progress: ModuleProgress) => {
          const newProgress = {
            ...getProgressFromStorage(),
            [moduleID]: progress,
          };
          window.localStorage.setItem(progressKey, JSON.stringify(newProgress));
          setUserProgress(newProgress);
        },
        problemStatus,
        setProblemStatus: (problem, status) => {
          const newStatus = {
            ...getProblemStatusFromStorage(),
            [problem.uniqueID]: status,
          };
          window.localStorage.setItem(
            problemStatusKey,
            JSON.stringify(newStatus)
          );
          setProblemStatus(newStatus);
        },
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
