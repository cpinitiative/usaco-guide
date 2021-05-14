import { FirebaseApp } from 'firebase/app';
import * as React from 'react';
import { FirebaseAppContext } from '../context/FirebaseContext';

export function useFirebaseApp(
  fn: (firebaseApp: FirebaseApp) => void | (() => void | undefined) = null,
  dep = []
): FirebaseApp {
  const firebaseApp = React.useContext(FirebaseAppContext);

  if (fn == null) return firebaseApp;

  React.useEffect(() => {
    if (!firebaseApp) {
      return;
    }
    return fn(firebaseApp);
  }, [firebaseApp, ...dep]);
}
