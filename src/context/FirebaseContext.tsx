import { createContext } from 'react';
import * as React from 'react';

const FirebaseContext = createContext(null);
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

  React.useEffect(() => {
    if (!firebase && typeof window !== 'undefined') {
      const app = import('firebase/app');
      const auth = import('firebase/auth');
      const firestore = import('firebase/firestore');
      const functions = import('firebase/functions');
      const database = import('firebase/database');

      Promise.all([app, auth, firestore, database, functions]).then(values => {
        const firebaseInstance = values[0].default;
        firebaseInstance.initializeApp(firebaseConfig);
        setFirebase(firebaseInstance);
      });
    }
  }, []);

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
