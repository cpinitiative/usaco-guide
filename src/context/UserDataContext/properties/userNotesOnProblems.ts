import * as Sentry from '@sentry/browser';
import admin from 'firebase-admin';
import { collection, getFirestore, query, where } from 'firebase/firestore';
import React from 'react';
import { useFirebaseApp } from '../../../hooks/useFirebase';
import UserDataContext from '../UserDataContext';

// keeping notes separate as it is not in the user docs, but rather in a individual notes doc
export default class UserNotesAPI {
  userNotesValue: Map<string, string>;
  q: any;

  getNote = (problemId: string) => {
    try {
      return this.userNotesValue.get(problemId);
    } catch (e) {
      this.userNotesValue.set(problemId, 'Type here!');
    }
  };

  initNotes = () => {
    const firebaseApp = useFirebaseApp();
    const dbNotes = collection(getFirestore(firebaseApp), 'notes');
    const { firebaseUser } = React.useContext(UserDataContext);

    this.q = query(dbNotes, where('userId', '==', firebaseUser.uid));
    this.q.forEach(doc => {
      if (this.userNotesValue.has(doc.problemId)) {
        this.userNotesValue.delete(doc.problemId);
      }
      this.userNotesValue.set(doc.problemId, 'Type here!');
    });

    console.log(this.q);
    return this.q;
  };

  setNote = (problemId: string, noteContent: string) => {
    try {
      this.userNotesValue.delete(problemId);
      this.userNotesValue.set(problemId, noteContent);

      const db = admin.firestore();

      console.log('logged');
    } catch (e) {
      Sentry.captureException(e, {
        extra: {
          problemId,
          noteValue: noteContent,
          fbData: {},
          thisValue: { ...this },
        },
      });

      alert(
        "We're sorry, but an error occurred. This error has been automatically sent to us, but you can email us to provide details if you wish."
      );
    }
  };
}
