import { createContext } from 'react';
import * as React from 'react';

const FirebaseContext = createContext(null);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBYajl4hgIoH_c35xc3EMW3XVZ7qeWu3Eo',
  authDomain: 'usaco-guide-sample.firebaseapp.com',
  databaseURL: 'https://usaco-guide-sample.firebaseio.com',
  projectId: 'usaco-guide-sample',
  storageBucket: 'usaco-guide-sample.appspot.com',
  messagingSenderId: '90939059194',
  appId: '1:90939059194:web:b0946fab9766d878f55243',
  measurementId: 'G-7TZJWE960M',
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
        const firebaseInstance = values[0];
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
