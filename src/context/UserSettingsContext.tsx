import { createContext, useState } from 'react';
import * as React from 'react';

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

const UserSettingsContext = createContext<{
  primaryLang: UserLang;
  setPrimaryLang: (lang: string) => void;
  userProgress: UserProgress;
  setModuleProgress: (moduleID: string, progress: ModuleProgress) => void;
}>({
  primaryLang: 'showAll',
  setPrimaryLang: null,
  userProgress: null,
  setModuleProgress: null,
});

export const UserSettingsProvider = ({ children }) => {
  const langKey = 'guide:userSettings:primaryLang';
  const progressKey = 'guide:userSettings:progress';
  const [primaryLang, setPrimaryLang] = useState('showAll');
  const [userProgress, setUserProgress] = useState({});

  React.useEffect(() => {
    let stickyValue = window.localStorage.getItem(langKey);
    let v = null;
    try {
      v = JSON.parse(stickyValue);
    } catch (e) {
      console.error("Couldn't parse user primary language", e);
    }
    if (v === 'cpp' || v === 'java' || v === 'py') setPrimaryLang(v);
    else setPrimaryLang('cpp');

    stickyValue = window.localStorage.getItem(progressKey);
    v = {};
    try {
      v = JSON.parse(stickyValue);
    } catch (e) {
      console.error("Couldn't parse user progress", e);
    }
    setUserProgress(v || {});
  }, []);

  return (
    <UserSettingsContext.Provider
      value={{
        primaryLang: primaryLang as UserLang,
        setPrimaryLang: lang => {
          window.localStorage.setItem(langKey, JSON.stringify(lang));
          setPrimaryLang(lang);
        },
        userProgress,
        setModuleProgress: (moduleID: string, progress: ModuleProgress) => {
          const newProgress = { ...userProgress, [moduleID]: progress };
          window.localStorage.setItem(progressKey, JSON.stringify(newProgress));
          setUserProgress(newProgress);
        },
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};

export default UserSettingsContext;
