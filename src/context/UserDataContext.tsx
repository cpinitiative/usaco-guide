import * as React from 'react';
import { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Problem } from '../../content/models';
import { ModuleProgress } from '../models/module';
import { ProblemProgress } from '../models/problem';
import useFirebase from '../hooks/useFirebase';

// this file needs some serious cleanup

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

  firebaseUser: any;
  signIn: Function;
  signOut: Function;
}>({
  lang: 'showAll',
  setLang: null,
  userProgressOnModules: null,
  setModuleProgress: null,
  userProgressOnProblems: null,
  setUserProgressOnProblems: null,
  lastViewedModule: null,
  setLastViewedModule: null,
  firebaseUser: null,
  signIn: null,
  signOut: null,
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

function areEqualShallow(a, b) {
  for (let key of Object.keys(a)) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

export const UserDataProvider = ({ children }) => {
  const [lang, setLang] = useState<UserLang>('showAll');
  const [userProgressOnModules, setUserProgressOnModules] = useState<{
    [key: string]: ModuleProgress;
  }>({});
  const [userProgressOnProblems, setUserProgressOnProblems] = useState<{
    [key: string]: ProblemProgress;
  }>({});
  const [lastViewedModule, setLastViewedModule] = useState<string>(null);
  const [firebaseUser, setFirebaseUser] = useState(null);

  useFirebase(firebase => {
    return firebase.auth().onAuthStateChanged(user => {
      setFirebaseUser(user);
    });
  });

  const firebase = useFirebase();

  React.useEffect(() => {
    setLang(getLangFromStorage());
    setUserProgressOnModules(getProgressFromStorage());
    setUserProgressOnProblems(getProblemStatusFromStorage());
    setLastViewedModule(getLastViewedModuleFromStorage());
  }, []);

  React.useEffect(() => {
    if (firebaseUser) {
      // sync all local data with firebase
      firebase
        .firestore()
        .collection('users')
        .doc(firebaseUser.uid)
        .get()
        .then(snapshot => {
          const data = snapshot.data();
          let newLang = lang,
            newUserProgressOnModules = userProgressOnModules,
            newUserProgressOnProblems = userProgressOnProblems,
            newLastViewedModule = lastViewedModule;
          if (data) {
            newLang = data.lang || lang;
            newUserProgressOnModules = {
              ...userProgressOnModules,
              ...data.userProgressOnModules,
            };
            newUserProgressOnProblems = {
              ...userProgressOnProblems,
              ...data.userProgressOnProblems,
            };
            newLastViewedModule = data.lastViewedModule || lastViewedModule;
          }
          if (
            !data ||
            newLang !== lang ||
            newLastViewedModule !== lastViewedModule ||
            !areEqualShallow(userProgressOnModules, newUserProgressOnModules) ||
            !areEqualShallow(userProgressOnProblems, newUserProgressOnProblems)
          ) {
            firebase.firestore().collection('users').doc(firebaseUser.uid).set(
              {
                lang: newLang,
                userProgressOnModules: newUserProgressOnModules,
                userProgressOnProblems: newUserProgressOnProblems,
                lastViewedModule: newLastViewedModule,
              },
              { merge: true }
            );
            ReactDOM.unstable_batchedUpdates(() => {
              window.localStorage.setItem(langKey, JSON.stringify(newLang));
              window.localStorage.setItem(
                lastViewedModuleKey,
                JSON.stringify(newLastViewedModule)
              );
              window.localStorage.setItem(
                problemStatusKey,
                JSON.stringify(newUserProgressOnProblems)
              );
              window.localStorage.setItem(
                progressKey,
                JSON.stringify(newUserProgressOnModules)
              );
              setLang(newLang);
              setLastViewedModule(newLastViewedModule);
              setUserProgressOnModules(newUserProgressOnModules);
              setUserProgressOnProblems(newUserProgressOnProblems);
            });
          }
        });
    }
  }, [firebaseUser]);

  const userData = React.useMemo(
    () => ({
      lang: lang as UserLang,
      setLang: lang => {
        window.localStorage.setItem(langKey, JSON.stringify(lang));
        setLang(lang);
      },
      userProgressOnModules,
      setModuleProgress: (moduleID: string, progress: ModuleProgress) => {
        const newProgress = {
          ...getProgressFromStorage(),
          [moduleID]: progress,
        };
        window.localStorage.setItem(progressKey, JSON.stringify(newProgress));

        if (firebaseUser) {
          firebase.firestore().collection('users').doc(firebaseUser.uid).set(
            {
              userProgressOnModules: newProgress,
            },
            { merge: true }
          );
        }

        setUserProgressOnModules(newProgress);
      },
      userProgressOnProblems,
      setUserProgressOnProblems: (problem, status) => {
        const newStatus = {
          ...getProblemStatusFromStorage(),
          [problem.uniqueID]: status,
        };
        window.localStorage.setItem(
          problemStatusKey,
          JSON.stringify(newStatus)
        );

        if (firebaseUser) {
          firebase.firestore().collection('users').doc(firebaseUser.uid).set(
            {
              userProgressOnProblems: newStatus,
            },
            { merge: true }
          );
        }

        setUserProgressOnProblems(newStatus);
      },
      lastViewedModule,
      setLastViewedModule: moduleID => {
        window.localStorage.setItem(
          lastViewedModuleKey,
          JSON.stringify(moduleID)
        );

        if (firebaseUser) {
          firebase.firestore().collection('users').doc(firebaseUser.uid).set(
            {
              lastViewedModule: moduleID,
            },
            { merge: true }
          );
        }

        setLastViewedModule(moduleID);
      },
      firebaseUser,
      signIn: () => {
        firebase
          .auth()
          .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      },
      signOut: () => {
        firebase.auth().signOut();
      },
    }),
    [
      lang,
      userProgressOnModules,
      userProgressOnProblems,
      lastViewedModule,
      firebaseUser,
      firebase,
    ]
  );

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
