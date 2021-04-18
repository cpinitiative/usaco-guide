import { FirebaseApp } from 'firebase/app';
import firebaseType from 'firebase/compat';
import * as React from 'react';
import FirebaseContext, {
  FirebaseAppContext,
} from '../context/FirebaseContext';

// from https://github.com/alexluong/gatsby-packages/blob/master/packages/gatsby-plugin-firebase/src/components/FirebaseContext.js

export default function useFirebase(
  fn: (firebase: typeof firebaseType) => void | (() => void | undefined) = null,
  dep = []
): typeof firebaseType {
  const firebase = React.useContext(FirebaseContext);

  if (fn == null) return firebase;

  React.useEffect(() => {
    if (!firebase) {
      return;
    }
    return fn(firebase);
  }, [firebase, ...dep]);
}

export function useFirebaseApp(fn = null, dep = []): FirebaseApp {
  const firebaseApp = React.useContext(FirebaseAppContext);

  if (fn == null) return firebaseApp;

  React.useEffect(() => {
    if (!firebaseApp) {
      return;
    }
    return fn(firebaseApp);
  }, [firebaseApp, ...dep]);
}
