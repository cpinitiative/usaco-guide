import * as Sentry from '@sentry/browser';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import {
  doc,
  getFirestore,
  onSnapshot,
  runTransaction,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import * as React from 'react';
import { createContext, ReactNode, useState } from 'react';
import toast from 'react-hot-toast';
import { useFirebaseApp } from '../../hooks/useFirebase';
import { ModuleProgress } from '../../models/module';
import { ProblemProgress } from '../../models/problem';
import { ResourceProgress } from '../../models/resource';
import runMigration from './migration';
import { Language, Theme } from './properties/simpleProperties';
import { getLangFromUrl, updateLangURL } from './userLangQueryVariableUtils';
import { UserPermissionsContextProvider } from './UserPermissionsContext';

// What's actually stored in local storage / firebase
export type UserData = {
  consecutiveVisits: number;
  /** show tags on problems table */
  showTags: boolean;
  /** hide difficulty on problems table */
  hideDifficulty: boolean;
  /** hide modules in problems list (problems search page) */
  hideModules: boolean;
  /** show ignored modules in dashboard */
  showIgnored: boolean;
  /** used for usaco monthlies table (I think) */
  divisionTableQuery: {
    division: string;
    season: string;
  };
  lang: Language;
  lastReadAnnouncement: string;
  lastViewedModule: string;
  lastVisitDate: number; // timestamp
  numPageviews: number;
  // mapping timestamp to pageviews
  pageviewsPerDay: Record<number, number>;
  theme: Theme;
  // mapping module ID to progress
  userProgressOnModules: Record<string, ModuleProgress>;
  userProgressOnModulesActivity: {
    timestamp: number;
    moduleID: string;
    moduleProgress: ModuleProgress;
  }[];
  userProgressOnProblems: Record<string, ProblemProgress>;
  userProgressOnProblemsActivity: {
    timestamp: number;
    problemID: string;
    problemProgress: ProblemProgress;
  }[];
  userProgressOnResources: Record<string, ResourceProgress>;
};

// What's exposed in the context
type UserDataContextAPI = {
  userData: UserData | null;
  firebaseUser: User | null;
  forceFirebaseUserRerender: () => void;
  isLoaded: boolean;
  updateUserData: (
    computeUpdatesFunc: (prevUserData: UserData) => Partial<UserData>
  ) => void;
  importUserData: (data: Partial<UserData>) => boolean;
  signOut: () => Promise<void>;
};

export const assignDefaultsToUserData = (data: object): UserData => {
  return {
    consecutiveVisits: 1,
    showTags: true,
    hideDifficulty: false,
    hideModules: false,
    showIgnored: true,
    divisionTableQuery: {
      division: '',
      season: '',
    },
    lang: 'cpp',
    lastReadAnnouncement: '',
    lastViewedModule: '',
    lastVisitDate: new Date().getTime(),
    numPageviews: 0,
    pageviewsPerDay: {},
    theme: 'system',
    userProgressOnModules: {},
    userProgressOnModulesActivity: [],
    userProgressOnProblems: {},
    userProgressOnProblemsActivity: [],
    userProgressOnResources: {},
    ...data,
  };
};

// localstorage key for theme. We need this to set light / dark theme the moment the page loads.
// duplicated from guide:userData:v100.
export const themeKey = 'guide:userData:theme';

// Todo figure out why we even need defaults
const UserDataContext = createContext<UserDataContextAPI>({
  userData: assignDefaultsToUserData({}),
  updateUserData: _ => {},
  signOut: () => Promise.resolve(),
  firebaseUser: null,
  forceFirebaseUserRerender: () => {},
  importUserData: _ => false,
  isLoaded: true,
});

export const UserDataProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const firebaseApp = useFirebaseApp();
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [userData, setUserData] = React.useReducer(
    (prevState: UserData, updates: Partial<UserData>): UserData => {
      if (updates.lang && prevState.lang !== updates.lang) {
        updateLangURL(updates.lang);
      }
      if (updates.theme && prevState.theme !== updates.theme) {
        localStorage.setItem(themeKey, JSON.stringify(updates.theme));
      }
      return { ...prevState, ...updates };
    },
    null,
    () => {
      // These initial values are what's used during the initial SSG render
      return assignDefaultsToUserData({
        lang: 'showAll',
      });
    }
  );
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Listen for firebase user sign in / sign out
  useFirebaseApp(firebase => {
    const auth = getAuth(firebase);
    let snapshotUnsubscribe: null | (() => void) = null;
    const authUnsubscribe = onAuthStateChanged(auth, user => {
      if (snapshotUnsubscribe) {
        snapshotUnsubscribe();
        snapshotUnsubscribe = null;
      }

      if (user == null) setIsLoaded(true);
      else setIsLoaded(false);
      setFirebaseUser(user);

      // If the user is signed in, sync remote data with local data
      if (user) {
        const userDoc = doc(getFirestore(firebaseApp), 'users', user.uid);

        // For the very first firestore data read, we should set the language property
        // to whatever the URL query param is
        let shouldUseLangQueryParam = true;

        snapshotUnsubscribe = onSnapshot(userDoc, {
          next: snapshot => {
            const data = snapshot.data();
            if (!data) {
              // sync all local data with firebase if the firebase account doesn't exist yet
              // other APIs use updateDoc() so we need to initialize it with *something*
              setDoc(
                userDoc,
                {
                  ...userData,

                  // this is to prevent us from accidentally overriding the user data
                  // firebase security rules will have a check to make sure that this is actually the first time
                  // the user has logged in. occasionally, with poor internet, firebase will glitch and
                  // we will accidentally override user data.
                  // see https://github.com/cpinitiative/usaco-guide/issues/534
                  CREATING_ACCOUNT_FOR_FIRST_TIME: serverTimestamp(),
                },
                { merge: true }
              );
            } else {
              const newUserData = assignDefaultsToUserData(data);
              if (shouldUseLangQueryParam) {
                const urlLang = getLangFromUrl();
                if (urlLang) {
                  newUserData.lang = urlLang;
                }
              }
              localStorage.setItem(
                'guide:userData:v100',
                JSON.stringify(newUserData)
              );
              setUserData(newUserData);
            }

            shouldUseLangQueryParam = false;
            setIsLoaded(true);
          },
          error: error => {
            toast.error(error.message);
            Sentry.captureException(error, {
              extra: {
                userId: user.uid,
              },
            });
          },
        });
      }
    });
    return () => {
      authUnsubscribe();
      if (snapshotUnsubscribe) snapshotUnsubscribe();
    };
  });

  const initializeFromLocalStorage = (
    { useURLLang } = { useURLLang: true }
  ) => {
    let localStorageData: Partial<UserData>;
    try {
      localStorageData = JSON.parse(
        localStorage.getItem('guide:userData:v100') ?? '{}'
      );
    } catch (e) {
      localStorageData = {};
    }

    if (useURLLang) {
      const urlLang = getLangFromUrl();
      if (urlLang) {
        localStorageData.lang = urlLang;
      }
    }

    const actualUserData = assignDefaultsToUserData(localStorageData);

    // We should write back to local storage if either URL lang changed,
    // or if some defaults were assigned. But being lazy, let's just
    // write back all the time.
    localStorage.setItem('guide:userData:v100', JSON.stringify(actualUserData));

    setUserData(actualUserData);
  };

  // initialize from localstorage
  React.useEffect(() => {
    runMigration();
    initializeFromLocalStorage();
  }, []);

  const userDataAPI: UserDataContextAPI = {
    userData,

    firebaseUser,
    /**
     * Forces anything that depends on firebaseUser to rerender.
     * Sometimes, such as when we just linked a Github account to a Google account,
     * firebaseUser changes, but React doesn't know about the change so it doesn't rerender.
     * This function forces React to update firebaseUser and trigger any rerenders
     * that might be necessary. This funcation is used in SignInModal.tsx,
     * when someone links a Google or Github account, causing firebaseUser to change,
     * but onAuthStateChanged doesn't rereun.
     */
    forceFirebaseUserRerender: () => {
      // todo: test to see whether this actually works lol
      setFirebaseUser(getAuth(firebaseApp).currentUser);
    },

    isLoaded,

    updateUserData: React.useCallback(
      updateFunc => {
        if (!isLoaded) {
          throw new Error(
            'updateUserData() can only be called after user data has been loaded.'
          );
        }

        const latestUserData = JSON.parse(
          // Since we write valid user data to local storage every time the page loads,
          // just assume reading will be valid. If it isn't, the user can always reload
          // the page to get a working version of user data.
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          localStorage.getItem('guide:userData:v100')!
        );

        const changes = updateFunc(latestUserData);
        const newUserData = { ...latestUserData, ...changes };

        localStorage.setItem(
          'guide:userData:v100',
          JSON.stringify(newUserData)
        );

        setUserData(newUserData);

        // If thie user isn't signed in, this is all we need to do
        if (!firebaseUser) return;

        const userDoc = doc(
          getFirestore(firebaseApp),
          'users',
          firebaseUser.uid
        );
        // Otherwise, if the user is signed in, we need to update Firebase too
        runTransaction(getFirestore(firebaseApp), async transaction => {
          const firebaseUserData = assignDefaultsToUserData(
            await transaction.get<Partial<UserData>>(userDoc)
          );
          const changes = updateFunc(firebaseUserData);
          transaction.update(userDoc, changes);
        });

        // After this transaction finishes, we don't have to do anything -- our
        // onSnapshot listener will automatically be called with the updated data
      },
      [firebaseApp, setUserData, isLoaded, !!firebaseUser]
    ),

    signOut: (): Promise<void> => {
      return signOut(getAuth(firebaseApp)).then(() => {
        localStorage.removeItem('guide:userData:v100');
        initializeFromLocalStorage({ useURLLang: false });
      });
    },

    importUserData: (data: Partial<UserData>): boolean => {
      if (
        confirm(
          'Import user data (beta)? All existing data will be lost. Make sure to back up your data before proceeding.'
        )
      ) {
        const updatedData = assignDefaultsToUserData(data);
        localStorage.setItem(
          'guide:userData:v100',
          JSON.stringify(updatedData)
        );
        setUserData(updatedData);
        if (firebaseUser) {
          // Stupid hack: if firebase user is set, userData will actually have
          // the CREATING_ACCOUNT_FOR_FIRST_TIME property, since userData will
          // be set from the Firebase doc.
          const CREATING_ACCOUNT_FOR_FIRST_TIME = (userData as any)
            .CREATING_ACCOUNT_FOR_FIRST_TIME;
          setDoc(doc(getFirestore(firebaseApp), 'users', firebaseUser.uid), {
            ...data,
            CREATING_ACCOUNT_FOR_FIRST_TIME,
          }).catch(err => {
            console.error(err);
            alert(
              `importUserData: Error setting firebase doc. Check console for details.`
            );
          });
        }
        return true;
      }
      return false;
    },
  };

  return (
    <UserDataContext.Provider value={userDataAPI}>
      <UserPermissionsContextProvider>
        {children}
      </UserPermissionsContextProvider>
    </UserDataContext.Provider>
  );
};

export const useUserData = (): UserData => {
  const userData = React.useContext(UserDataContext).userData;
  if (!userData) {
    throw new Error("userData was null, but it shouldn't be");
  }
  return userData;
};

export const useUpdateUserData = () => {
  return React.useContext(UserDataContext).updateUserData;
};

export const useFirebaseUser = () => {
  return React.useContext(UserDataContext).firebaseUser;
};

export const useIsUserDataLoaded = () => {
  return React.useContext(UserDataContext).isLoaded;
};

export const useForceFirebaseUserRerender = () => {
  return React.useContext(UserDataContext).forceFirebaseUserRerender;
};

export const useSignOutAction = () => {
  return React.useContext(UserDataContext).signOut;
};

export const useImportUserDataAction = () => {
  return React.useContext(UserDataContext).importUserData;
};
