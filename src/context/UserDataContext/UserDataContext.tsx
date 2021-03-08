import * as React from 'react';
import { createContext, useReducer, useState, useContext } from 'react';
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
import DarkMode, { DarkModeAPI } from './properties/darkMode';
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
  new DarkMode(),
  new LastReadAnnouncement(),
  new UserProgressOnModulesProperty(),
  new UserProgressOnProblemsProperty(),
  new LastVisitProperty(),
  new UserClassesProperty(),
];

type UserDataContextAPI = UserLangAPI &
  LastViewedModuleAPI &
  HideTagsAndDifficultyAPI &
  DivisionTableQueryAPI &
  ShowIgnoredAPI &
  DarkModeAPI &
  LastReadAnnouncementAPI &
  UserProgressOnModulesAPI &
  UserProgressOnProblemsAPI &
  LastVisitAPI &
  UserClassesAPI & {
    firebaseUser: any;
    signIn: Function;
    signOut: Function;
    isLoaded: boolean;
    onlineUsers: number;
    getDataExport: Function;
    importUserData: Function;
    isAdmin: boolean;
  };

const UserDataContext = createContext<UserDataContextAPI>({
  consecutiveVisits: 0,
  darkMode: false,
  firebaseUser: null,
  isAdmin: false,
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
  setDarkMode: x => {},
  setHideTagsAndDifficulty: x => {},
  setDivisionTableQuery: x => {},
  setLang: x => {},
  setLastReadAnnouncement: x => {},
  setLastViewedModule: x => {},
  setLastVisitDate: x => {},
  setModuleProgress: (moduleID, progress) => {},
  setShowIgnored: x => {},
  setUserClasses: classes => {},
  setUserProgressOnProblems: (problem, status) => {},
  showIgnored: false,
  signIn: () => {},
  signOut: () => {},
  userClasses: [],
  userClassIds: [],
  userProgressOnModules: {},
  userProgressOnModulesActivity: [],
  userProgressOnProblems: {},
  userProgressOnProblemsActivity: [],
});

export const UserDataProvider = ({ children }) => {
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
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // const [onlineUsers, setOnlineUsers] = useState(0);

  const [_, triggerRerender] = useReducer(cur => cur + 1, 0);
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

  // just once, ask all API's to initialize their values from localStorage
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
            setIsAdmin(data.isAdmin ?? false);
            setIsLoaded(true);
            triggerRerender();
          });
        });
    }
  }, [firebaseUser]);

  const userData = {
    firebaseUser,
    signIn: () => {
      if (firebase)
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    },
    signOut: () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          UserDataContextAPIs.forEach(api => api.eraseFromLocalStorage());
          UserDataContextAPIs.forEach(api => api.initializeFromLocalStorage());
        });
    },
    isLoaded,
    onlineUsers: -1,
    isAdmin,

    ...UserDataContextAPIs.reduce((acc, api) => {
      return {
        ...acc,
        ...api.getAPI(),
      };
    }, {}),

    getDataExport: () => {
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
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
