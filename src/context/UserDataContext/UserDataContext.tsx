import * as React from 'react';
import {
  createContext,
  useReducer,
  useState,
  useContext,
  ReactNode,
} from 'react';
import ReactDOM from 'react-dom';
import useFirebase from '../../hooks/useFirebase';
import UserLang, { UserLangAPI } from './properties/userLang';
import UserDataPropertyAPI from './userDataPropertyAPI';
import LastViewedModule, {
  LastViewedModuleAPI,
} from './properties/lastViewedModule';
import HideTagsAndDifficulty, {
  HideTagsAndDifficultyAPI,
} from './properties/hideTagsAndDifficulty';
import DivisionTableQuery, {
  DivisionTableQueryAPI,
} from './properties/divisionTableQuery';
import ShowIgnored, { ShowIgnoredAPI } from './properties/showIgnored';
import LastReadAnnouncement, {
  LastReadAnnouncementAPI,
} from './properties/lastReadAnnouncement';
import UserProgressOnModulesProperty, {
  UserProgressOnModulesAPI,
} from './properties/userProgressOnModules';
import UserProgressOnProblemsProperty, {
  UserProgressOnProblemsAPI,
} from './properties/userProgressOnProblems';
import LastVisitProperty, { LastVisitAPI } from './properties/lastVisit';
import UserClassesProperty, { UserClassesAPI } from './properties/userClasses';
import firebaseType from 'firebase';
import { UserPermissionsContextProvider } from './UserPermissionsContext';
import AdSettingsProperty, {
  AdSettingsAPI,
} from './properties/adSettingsProperty';
import ThemeProperty, { ThemePropertyAPI } from './properties/themeProperty';

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
  new HideTagsAndDifficulty(),
  new DivisionTableQuery(),
  new ShowIgnored(),
  new ThemeProperty(),
  new LastReadAnnouncement(),
  new UserProgressOnModulesProperty(),
  new UserProgressOnProblemsProperty(),
  new LastVisitProperty(),
  new UserClassesProperty(),
  new AdSettingsProperty(),
];

type UserDataContextAPI = UserLangAPI &
  LastViewedModuleAPI &
  HideTagsAndDifficultyAPI &
  DivisionTableQueryAPI &
  ShowIgnoredAPI &
  ThemePropertyAPI &
  LastReadAnnouncementAPI &
  UserProgressOnModulesAPI &
  UserProgressOnProblemsAPI &
  LastVisitAPI &
  UserClassesAPI &
  AdSettingsAPI & {
    firebaseUser: firebaseType.User;
    signIn: Function;
    signOut: Function;
    isLoaded: boolean;
    onlineUsers: number;
    getDataExport: Function;
    importUserData: Function;
  };

const UserDataContext = createContext<UserDataContextAPI>({
  consecutiveVisits: 0,
  firebaseUser: null,
  getDataExport: () => {},
  importUserData: () => {},
  hideTagsAndDifficulty: false,
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
  setDarkMode: x => {
    // do nothing
  },
  setHideTagsAndDifficulty: x => {
    // do nothing
  },
  setDivisionTableQuery: x => {
    // do nothing
  },
  setLang: x => {
    // do nothing
  },
  setLastReadAnnouncement: x => {
    // do nothing
  },
  setLastViewedModule: x => {
    // do nothing
  },
  setLastVisitDate: x => {
    // do nothing
  },
  setModuleProgress: (moduleID, progress) => {
    // do nothing/
  },
  setShowIgnored: x => {
    // do nothing
  },
  setUserClasses: classes => {
    // do nothing
  },
  setUserProgressOnProblems: (problem, status) => {
    // do nothing
  },
  showIgnored: false,
  signIn: () => {
    // do nothing
  },
  signOut: () => {
    // do nothing
  },
  userClasses: [],
  userClassIds: [],
  userProgressOnModules: {},
  userProgressOnModulesActivity: [],
  userProgressOnProblems: {},
  userProgressOnProblemsActivity: [],
  adSettings: {
    hideMarch2021: false,
  },
  setAdSettings: () => {
    // do nothing
  },
});

export const UserDataProvider = ({ children }: { children: ReactNode }) => {
  const firebase = useFirebase();

  const [firebaseUser, setFirebaseUser] = useReducer((_, user) => {
    // when the firebase user changes, update all the API's
    const userDoc = user
      ? firebase.firestore().collection('users').doc(user.uid)
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

  // Listen for firebase user sign in / sign out
  useFirebase(firebase => {
    return firebase.auth().onAuthStateChanged(user => {
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

  // If the user is signed in, sync remote data with local data
  React.useEffect(() => {
    if (firebaseUser) {
      return firebase
        .firestore()
        .collection('users')
        .doc(firebaseUser.uid)
        .onSnapshot(snapshot => {
          let data = snapshot.data();
          if (!data) {
            const lastViewedModule = UserDataContextAPIs.find(
              x => x instanceof LastViewedModule
            ).exportValue();
            const localDataIsNotEmpty = lastViewedModule !== null;

            if (localDataIsNotEmpty) {
              if (
                confirm(
                  `Override server data with local progress? (You'll lose your local progress if you choose no.)`
                )
              ) {
                // sync all local data with firebase if the firebase account doesn't exist yet
                firebase
                  .firestore()
                  .collection('users')
                  .doc(firebaseUser.uid)
                  .set(
                    UserDataContextAPIs.reduce((acc, cur) => {
                      return {
                        ...acc,
                        ...cur.exportValue(),
                      };
                    }, {}),
                    { merge: true }
                  );
              }
            }
          }
          data = data || {};
          ReactDOM.unstable_batchedUpdates(() => {
            UserDataContextAPIs.forEach(api => api.importValueFromObject(data));
            UserDataContextAPIs.forEach(api => api.writeValueToLocalStorage());
            setIsLoaded(true);
            triggerRerender();
          });
        });
    }
  }, [firebaseUser]);

  const userData = {
    firebaseUser,
    signIn: (): Promise<void> => {
      if (firebase) {
        return firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      }
      return Promise.resolve();
    },
    signOut: (): Promise<void> => {
      return firebase
        .auth()
        .signOut()
        .then(() => {
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

    importUserData: (data: JSON) => {
      if (
        confirm(
          'Import user data (beta)? All existing data will be lost. Make sure to back up your data before proceeding.'
        )
      ) {
        UserDataContextAPIs.forEach(api => api.importValueFromObject(data));
        UserDataContextAPIs.forEach(api => api.writeValueToLocalStorage());
        if (firebaseUser) {
          firebase
            .firestore()
            .collection('users')
            .doc(firebaseUser.uid)
            .set(data);
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
