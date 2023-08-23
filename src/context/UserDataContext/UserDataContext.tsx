import * as Sentry from '@sentry/browser';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import {
  doc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import * as React from 'react';
import { createContext, ReactNode, useState } from 'react';
import toast from 'react-hot-toast';
import { useFirebaseApp } from '../../hooks/useFirebase';
import { UserPermissionsContextProvider } from './UserPermissionsContext';

// What's actually stored in local storage / firebase
type UserData = {
  consecutiveVisits: number;
};

// What's exposed in the context
type UserDataContextAPI = {
  userData: UserData;
  firebaseUser: User;
  isLoaded: boolean;
};

const UserDataContext = createContext<UserDataContextAPI>({
  // make suer CREATING_ACCOUNT_FOR_FIRST_TIME is here
  consecutiveVisits: 0,
  // firebaseUser: null,
  // getDataExport: () => Promise.resolve(),
  // importUserData: () => true,
  // showTags: false,
  // hideDifficulty: false,
  // hideModules: false,
  // divisionTableQuery: {
  //   division: '',
  //   season: '',
  // },
  isLoaded: true,
  // lang: 'cpp',
  // lastReadAnnouncement: 'open-source',
  // lastViewedModule: 'binary-search-sorted',
  // lastVisitDate: 1608324157466,
  // numPageviews: 130,
  // onlineUsers: -1,
  // pageviewsPerDay: {
  //   1606896000000: 4,
  //   1607068800000: 17,
  //   1608192000000: 27,
  //   1608278400000: 82,
  // },
  // theme: 'system',
  // setTheme: _x => {
  //   // do nothing
  // },
  // setShowTags: _x => {
  //   // do nothing
  // },
  // setHideDifficulty: _x => {
  //   // do nothing
  // },
  // setHideModules: _x => {
  //   // do nothing
  // },
  // setDivisionTableQuery: _x => {
  //   // do nothing
  // },
  // setLang: _x => {
  //   // do nothing
  // },
  // setLastReadAnnouncement: _x => {
  //   // do nothing
  // },
  // setLastViewedModule: _x => {
  //   // do nothing
  // },
  // setLastVisitDate: _x => {
  //   // do nothing
  // },
  // setModuleProgress: (_moduleID, _progress) => {
  //   // do nothing/
  // },
  // setShowIgnored: _x => {
  //   // do nothing
  // },
  // setUserProgressOnProblems: (_problemId, _status) => {
  //   // do nothing
  // },
  // setUserProgressOnResources: (_moduleId, _status) => {
  //   // do nothing
  // },
  // showIgnored: false,
  // signOut: () => {
  //   // do nothing
  //   return Promise.resolve();
  // },
  // triggerUserDataContextRerender: () => {},
  // userProgressOnModules: {},
  // userProgressOnModulesActivity: [],
  // userProgressOnProblems: {},
  // userProgressOnProblemsActivity: [],
  // userProgressOnResources: {},
  // adSettings: {
  //   hideMarch2021: false,
  // },
  // setAdSettings: () => {
  //   // do nothing
  // },
});

export const UserDataProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const firebaseApp = useFirebaseApp();
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Listen for firebase user sign in / sign out
  useFirebaseApp(firebase => {
    const auth = getAuth(firebase);
    onAuthStateChanged(auth, user => {
      if (user == null) setIsLoaded(true);
      else setIsLoaded(false);
      setFirebaseUser(user);

      // If the user is signed in, sync remote data with local data
      if (user) {
        const userDoc = doc(getFirestore(firebaseApp), 'users', user.uid);
        return onSnapshot(userDoc, {
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
              // todo: override local user data with remote user data
              setUserData(assignDefaultsToUserData(data));
            }

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
  });

  // initialize from localstorage
  React.useEffect(() => {
    let localStorageData: object;
    try {
      localStorageData = JSON.parse(
        localStorage.getItem('guide:userData:v100') ?? '{}'
      );
    } catch (e) {
      localStorageData = {};
    }
    setUserData(assignDefaultsTouserData(localStorageData));
  }, []);

  const userDataAPI = {
    userData,

    firebaseUser,
    isLoaded,

    signOut: (): Promise<void> => {
      return signOut(getAuth(firebaseApp)).then(() => {
        // todo: clear, then re-initialize from local storage
      });
    },

    getDataExport: (): Record<string, any> => {
      return {};
      // return UserDataContextAPIs.reduce(
      //   (acc, api) => ({ ...acc, ...api.exportValue() }),
      //   {}
      // );
    },

    importUserData: (data: Record<string, any>): boolean => {
      // if (
      //   confirm(
      //     'Import user data (beta)? All existing data will be lost. Make sure to back up your data before proceeding.'
      //   )
      // ) {
      //   if (CREATING_ACCOUNT_FOR_FIRST_TIME !== undefined)
      //     data['CREATING_ACCOUNT_FOR_FIRST_TIME'] =
      //       CREATING_ACCOUNT_FOR_FIRST_TIME;
      //   UserDataContextAPIs.forEach(api => api.importValueFromObject(data));
      //   UserDataContextAPIs.forEach(api => api.writeValueToLocalStorage());
      //   if (firebaseUser) {
      //     setDoc(
      //       doc(getFirestore(firebaseApp), 'users', firebaseUser.uid),
      //       data
      //     ).catch(err => {
      //       console.error(err);
      //       alert(
      //         `importUserData: Error setting firebase doc. Check console for details.`
      //       );
      //     });
      //   }
      //   triggerRerender();
      //   return true;
      // }
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

export default UserDataContext;
