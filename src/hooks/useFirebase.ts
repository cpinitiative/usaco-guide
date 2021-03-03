import * as React from 'react';
import FirebaseContext from '../context/FirebaseContext';
import firebaseType from 'firebase';

// from https://github.com/alexluong/gatsby-packages/blob/master/packages/gatsby-plugin-firebase/src/components/FirebaseContext.js

export default function useFirebase(
  fn: (firebase: typeof firebaseType) => void | (() => void | undefined) = null,
  dep = []
) {
  const firebase = React.useContext(FirebaseContext);

  if (fn == null) return firebase;

  React.useEffect(() => {
    if (!firebase) {
      return;
    }
    return fn(firebase);
  }, [firebase, ...dep]);
}
