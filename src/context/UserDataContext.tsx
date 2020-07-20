import * as React from 'react';
import { createContext, useState } from 'react';
import { Problem } from '../../content/models';
import { ModuleProgress } from '../models/module';
import { ProblemProgress } from '../models/problem';

export type UserLang = 'showAll' | 'cpp' | 'java' | 'py';
export const LANGUAGE_LABELS: { [key in UserLang]: string } = {
  showAll: 'All',
  cpp: 'C++',
  java: 'Java',
  py: 'Python',
};

const UserDataContext = createContext<{
  lang: UserLang;
  setLang: (lang: UserLang) => void;

  userProgressOnModules: { [key: string]: ModuleProgress };
  setModuleProgress: (moduleID: string, progress: ModuleProgress) => void;

  userProgressOnProblems: { [key: string]: ProblemProgress };
  setUserProgressOnProblems: (
    problem: Problem,
    status: ProblemProgress
  ) => void;

  lastViewedModule: string;
  setLastViewedModule: (moduleID: string) => void;
}>({
  lang: 'showAll',
  setLang: null,
  userProgressOnModules: null,
  setModuleProgress: null,
  userProgressOnProblems: null,
  setUserProgressOnProblems: null,
  lastViewedModule: null,
  setLastViewedModule: null,
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

const lastViewedModuleKey = 'guide:userData:lastViewedModule';
const getLastViewedModuleFromStorage = () => {
  let stickyValue = window.localStorage.getItem(lastViewedModuleKey);
  let v = null;
  try {
    v = JSON.parse(stickyValue);
  } catch (e) {
    console.error("Couldn't parse last viewed module", e);
  }
  return v || null;
};

export const UserDataProvider = ({ children }) => {
  const [lang, setLang] = useState<UserLang>('showAll');
  const [userProgress, setUserProgress] = useState<{
    [key: string]: ModuleProgress;
  }>({});
  const [problemStatus, setProblemStatus] = useState<{
    [key: string]: ProblemProgress;
  }>({});
  const [lastViewedModule, setLastViewedModule] = useState<string>(null);

  React.useEffect(() => {
    setLang(getLangFromStorage());
    setUserProgress(getProgressFromStorage());
    setProblemStatus(getProblemStatusFromStorage());
    setLastViewedModule(getLastViewedModuleFromStorage());
  }, []);

  const userData = React.useMemo(
    () => ({
      lang: lang as UserLang,
      setLang: lang => {
        window.localStorage.setItem(langKey, JSON.stringify(lang));
        setLang(lang);
      },
      userProgressOnModules: userProgress,
      setModuleProgress: (moduleID: string, progress: ModuleProgress) => {
        const newProgress = {
          ...getProgressFromStorage(),
          [moduleID]: progress,
        };
        window.localStorage.setItem(progressKey, JSON.stringify(newProgress));
        setUserProgress(newProgress);
      },
      userProgressOnProblems: problemStatus,
      setUserProgressOnProblems: (problem, status) => {
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
      lastViewedModule,
      setLastViewedModule: moduleID => {
        window.localStorage.setItem(
          lastViewedModuleKey,
          JSON.stringify(moduleID)
        );
        setLastViewedModule(moduleID);
      },
    }),
    [lang, userProgress, problemStatus, lastViewedModule]
  );

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
