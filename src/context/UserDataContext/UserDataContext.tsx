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
import { createContext, ReactNode, useReducer, useState } from 'react';
import toast from 'react-hot-toast';
import { useFirebaseApp } from '../../hooks/useFirebase';
import AdSettingsProperty, {
  AdSettingsAPI,
} from './properties/adSettingsProperty';
import DivisionTableQuery, {
  DivisionTableQueryAPI,
} from './properties/divisionTableQuery';
import HideDifficulty, { HideDifficultyAPI } from './properties/hideDifficulty';
import HideModules, { HideModulesAPI } from './properties/hideModules';
import LastReadAnnouncement, {
  LastReadAnnouncementAPI,
} from './properties/lastReadAnnouncement';
import LastViewedModule, {
  LastViewedModuleAPI,
} from './properties/lastViewedModule';
import LastVisitProperty, { LastVisitAPI } from './properties/lastVisit';
import ShowIgnored, { ShowIgnoredAPI } from './properties/showIgnored';
import ShowTags, { ShowTagsAPI } from './properties/showTags';
import ThemeProperty, { ThemePropertyAPI } from './properties/themeProperty';
import UserLang, { UserLangAPI } from './properties/userLang';
import UserProgressOnModulesProperty, {
  UserProgressOnModulesAPI,
} from './properties/userProgressOnModules';
import UserProgressOnProblemsProperty, {
  UserProgressOnProblemsAPI,
} from './properties/userProgressOnProblems';
import UserProgressOnResourcesProperty, {
  UserProgressOnResourcesAPI,
} from './properties/userProgressOnResources';
import UserDataPropertyAPI from './userDataPropertyAPI';
import { UserPermissionsContextProvider } from './UserPermissionsContext';

// Object for counting online users
// var Gathering = (function () {
//   function Gathering(firebase) {
//     this.firebase = firebase;
//     this.db = firebase.database();
//
//     this.room = this.db.ref('gatherings/globe');
//     this.user = null;
//
//     this.join = function (uid) {
//       // this check doesn't work if this.join() is called back-to-back
//       if (this.user) {
//         console.error('Already joined.');
//         return false;
//       }
//
//       // Add user to presence list when online.
//       var presenceRef = this.db.ref('.info/connected');
//       presenceRef.on('value', snap => {
//         if (snap.val()) {
//           this.user = uid ? this.room.child(uid) : this.room.push();
//
//           this.user
//             .onDisconnect()
//             .remove()
//             .then(() => {
//               this.user.set(this.firebase.database.ServerValue.TIMESTAMP);
//             });
//         }
//       });
//       return true;
//     };
//
//     this.onUpdated = function (callback) {
//       if ('function' == typeof callback) {
//         this.room.on('value', function (snap) {
//           callback(snap.numChildren(), snap.val());
//         });
//       } else {
//         console.error(
//           'You have to pass a callback function to onUpdated(). That function will be called (with user count and hash of users as param) every time the user list changed.'
//         );
//       }
//     };
//   }
//
//   return Gathering;
// })();

/*
 * todo document how to add new API to user data context?
 *
 * for now looking in the `properties/` folder probably suffices...
 */

const UserDataContextAPIs: UserDataPropertyAPI[] = [
  new UserLang(),
  new LastViewedModule(),
  new ShowTags(),
  new HideDifficulty(),
  new HideModules(),
  new DivisionTableQuery(),
  new ShowIgnored(),
  new ThemeProperty(),
  new LastReadAnnouncement(),
  new UserProgressOnModulesProperty(),
  new UserProgressOnProblemsProperty(),
  new UserProgressOnResourcesProperty(),
  new LastVisitProperty(),
  new AdSettingsProperty(),
];

type UserDataContextAPI = UserLangAPI &
  LastViewedModuleAPI &
  ShowTagsAPI &
  HideDifficultyAPI &
  HideModulesAPI &
  DivisionTableQueryAPI &
  ShowIgnoredAPI &
  ThemePropertyAPI &
  LastReadAnnouncementAPI &
  UserProgressOnModulesAPI &
  UserProgressOnProblemsAPI &
  UserProgressOnResourcesAPI &
  LastVisitAPI &
  AdSettingsAPI & {
    firebaseUser: User;
    signOut: () => Promise<void>;
    triggerUserDataContextRerender: () => void;
    isLoaded: boolean;
    onlineUsers: number;
    getDataExport: () => Record<string, any>;
    importUserData: (data: Record<string, any>) => boolean;
  };

const UserDataContext = createContext<UserDataContextAPI>({
  consecutiveVisits: 0,
  firebaseUser: null,
  getDataExport: () => Promise.resolve(),
  importUserData: () => true,
  showTags: false,
  hideDifficulty: false,
  hideModules: false,
  divisionTableQuery: {
    division: '',
    season: '',
  },
  isLoaded: true,
  lang: 'cpp',
  lastReadAnnouncement: 'open-source',
  lastViewedModule: 'binary-search-sorted',
  lastVisitDate: 1608324157466,
  numPageviews: 130,
  onlineUsers: -1,
  pageviewsPerDay: {
    1606896000000: 4,
    1607068800000: 17,
    1608192000000: 27,
    1608278400000: 82,
  },
  theme: 'system',
  setTheme: _x => {
    // do nothing
  },
  setShowTags: _x => {
    // do nothing
  },
  setHideDifficulty: _x => {
    // do nothing
  },
  setHideModules: _x => {
    // do nothing
  },
  setDivisionTableQuery: _x => {
    // do nothing
  },
  setLang: _x => {
    // do nothing
  },
  setLastReadAnnouncement: _x => {
    // do nothing
  },
  setLastViewedModule: _x => {
    // do nothing
  },
  setLastVisitDate: _x => {
    // do nothing
  },
  setModuleProgress: (_moduleID, _progress) => {
    // do nothing/
  },
  setShowIgnored: _x => {
    // do nothing
  },
  setUserProgressOnProblems: (_problemId, _status) => {
    // do nothing
  },
  setUserProgressOnResources: (_moduleId, _status) => {
    // do nothing
  },
  showIgnored: false,
  signOut: () => {
    // do nothing
    return Promise.resolve();
  },
  triggerUserDataContextRerender: () => {},
  userProgressOnModules: {},
  userProgressOnModulesActivity: [],
  userProgressOnProblems: {},
  userProgressOnProblemsActivity: [],
  userProgressOnResources: {},
  adSettings: {
    hideMarch2021: false,
  },
  setAdSettings: () => {
    // do nothing
  },
});

export const UserDataProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const firebaseApp = useFirebaseApp();

  const [firebaseUser, setFirebaseUser] = useReducer((_, user) => {
    // when the firebase user changes, update all the API's
    const userDoc = user
      ? doc(getFirestore(firebaseApp), 'users', user.uid)
      : null;
    UserDataContextAPIs.forEach(api => api.setFirebaseUserDoc(userDoc));

    return user;
  }, null);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // const [onlineUsers, setOnlineUsers] = useState(0);

  const [, triggerRerender] = useReducer(cur => cur + 1, 0);
  UserDataContextAPIs.forEach(api =>
    api.setTriggerRerenderFunction(triggerRerender)
  );

  React.useEffect(() => {
    UserDataContextAPIs.forEach(api => api.setFirebaseApp(firebaseApp));
  }, [firebaseApp]);

  // Listen for firebase user sign in / sign out
  useFirebaseApp(firebase => {
    const auth = getAuth(firebase);
    onAuthStateChanged(auth, user => {
      if (user == null) setIsLoaded(true);
      else setIsLoaded(false);
      setFirebaseUser(user);
    });
  });

  // Count online users
  // useFirebase(firebase => {
  //   let online = new Gathering(firebase);
  //   online.join();
  //   // Temporarily remove online user count -- it's not very accurate
  //   // online.onUpdated(function (count) {
  //   //   setOnlineUsers(count);
  //   // });
  // });

  // just once, ask all APIs to initialize their values from localStorage
  React.useEffect(() => {
    UserDataContextAPIs.forEach(api => api.initializeFromLocalStorage());
  }, []);

  const [CREATING_ACCOUNT_FOR_FIRST_TIME, setCREATING_ACCOUNT_FOR_FIRST_TIME] =
    useState(undefined);

  // If the user is signed in, sync remote data with local data
  React.useEffect(() => {
    if (firebaseUser) {
      // firebaseUser.getIdToken(true).then(token => console.log(token));

      const userDoc = doc(getFirestore(firebaseApp), 'users', firebaseUser.uid);
      return onSnapshot(userDoc, {
        next: snapshot => {
          let data = snapshot.data();
          if (!data) {
            // sync all local data with firebase if the firebase account doesn't exist yet
            // other APIs use updateDoc() so we need to initialize it with *something*
            setDoc(
              userDoc,
              UserDataContextAPIs.reduce(
                (acc, cur) => {
                  return {
                    ...acc,
                    ...cur.exportValue(),
                  };
                },
                {
                  // this is to prevent us from accidentally overriding the user data
                  // firebase security rules will have a check to make sure that this is actually the first time
                  // the user has logged in. occasionally, with poor internet, firebase will glitch and
                  // we will accidentally override user data.
                  // see https://github.com/cpinitiative/usaco-guide/issues/534
                  CREATING_ACCOUNT_FOR_FIRST_TIME: serverTimestamp(),
                }
              ),
              { merge: true }
            );
          }
          data = data || {};
          UserDataContextAPIs.forEach(api => api.importValueFromObject(data));
          UserDataContextAPIs.forEach(api => api.writeValueToLocalStorage());

          setCREATING_ACCOUNT_FOR_FIRST_TIME(
            data['CREATING_ACCOUNT_FOR_FIRST_TIME']
          );
          setIsLoaded(true);
          triggerRerender();
        },
        error: error => {
          toast.error(error.message);
          Sentry.captureException(error, {
            extra: {
              userId: firebaseUser.uid,
            },
          });
        },
      });
    }
  }, [firebaseUser]);

  const userData = {
    firebaseUser,
    triggerUserDataContextRerender: triggerRerender,
    signOut: (): Promise<void> => {
      return signOut(getAuth(firebaseApp)).then(() => {
        UserDataContextAPIs.forEach(api => api.eraseFromLocalStorage());
        UserDataContextAPIs.forEach(api => api.initializeFromLocalStorage());
      });
    },
    isLoaded,
    onlineUsers: -1,

    ...UserDataContextAPIs.reduce((acc, api) => {
      return {
        ...acc,
        ...api.getAPI(),
      };
    }, {}),

    getDataExport: (): Record<string, any> => {
      return UserDataContextAPIs.reduce(
        (acc, api) => ({ ...acc, ...api.exportValue() }),
        {}
      );
    },

    importUserData: (data: Record<string, any>): boolean => {
      if (
        confirm(
          'Import user data (beta)? All existing data will be lost. Make sure to back up your data before proceeding.'
        )
      ) {
        if (CREATING_ACCOUNT_FOR_FIRST_TIME !== undefined)
          data['CREATING_ACCOUNT_FOR_FIRST_TIME'] =
            CREATING_ACCOUNT_FOR_FIRST_TIME;
        UserDataContextAPIs.forEach(api => api.importValueFromObject(data));
        UserDataContextAPIs.forEach(api => api.writeValueToLocalStorage());
        if (firebaseUser) {
          setDoc(
            doc(getFirestore(firebaseApp), 'users', firebaseUser.uid),
            data
          ).catch(err => {
            console.error(err);
            alert(
              `importUserData: Error setting firebase doc. Check console for details.`
            );
          });
        }
        triggerRerender();
        return true;
      }
      return false;
    },
  };

  return (
    <UserDataContext.Provider value={userData}>
      <UserPermissionsContextProvider>
        {children}
      </UserPermissionsContextProvider>
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
