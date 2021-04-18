import { FirebaseApp, initializeApp } from 'firebase/app';
import * as React from 'react';
import { createContext } from 'react';

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
  const [firebaseApp, setFirebaseApp] = React.useState<FirebaseApp>(null);

  React.useEffect(() => {
    if (!firebaseApp && typeof window !== 'undefined') {
      const firebaseApp = initializeApp(firebaseConfig);
      setFirebaseApp(firebaseApp);
    }
  }, []);

  return (
    <FirebaseAppContext.Provider value={firebaseApp}>
      {children}
    </FirebaseAppContext.Provider>
  );
};
