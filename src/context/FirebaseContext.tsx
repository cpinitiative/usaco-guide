import { FirebaseApp } from 'firebase/app';
import * as React from 'react';
import { createContext } from 'react';

const FirebaseContext = createContext(null);
export const FirebaseAppContext = createContext<FirebaseApp>(null);
const firebaseConfig = {
  apiKey: 'AIzaSyAvm-cvPgEFer3MVQtCiKegFTc1E9RHGG4',
  authDomain: 'usaco-guide.firebaseapp.com',
  databaseURL: 'https://usaco-guide.firebaseio.com',
  projectId: 'usaco-guide',
  storageBucket: 'usaco-guide.appspot.com',
  messagingSenderId: '862152331454',
  appId: '1:862152331454:web:8ba85fda47360ef9fe8eef',
};

export const FirebaseProvider = ({ children }) => {
  const [firebase, setFirebase] = React.useState(null);
  const [firebaseApp, setFirebaseApp] = React.useState<FirebaseApp>(null);

  React.useEffect(() => {
    if (!firebase && typeof window !== 'undefined') {
      // const firebaseApp = initializeApp(firebaseConfig);
      // setFirebaseApp(firebaseApp);

      const app = import('firebase/compat/app');
      const firestore = import('firebase/compat/firestore');
      Promise.all([app, firestore]).then(values => {
        const firebaseInstance = values[0].default;
        firebaseInstance.initializeApp(firebaseConfig);
        // firebaseInstance.functions().useEmulator('localhost', 5001);

        setFirebaseApp(firebaseInstance.app());
        setFirebase(firebaseInstance);
      });
    }
  }, []);

  return (
    <FirebaseContext.Provider value={firebase}>
      <FirebaseAppContext.Provider value={firebaseApp}>
        {children}
      </FirebaseAppContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
