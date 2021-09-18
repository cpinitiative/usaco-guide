import * as Sentry from '@sentry/browser';
import { collection, getFirestore } from 'firebase/firestore';
import { useFirebaseApp } from '../../../hooks/useFirebase';

// keeping notes separate as it is not in the user docs, but rather in a individual notes doc
export default class UserNotesAPI {
  userNotesValue: Map<string, string>;

  getNote = (problemId: string) => {
    return this.userNotesValue.get(problemId);
  };

  initNotes = () => {
    const firebaseApp = useFirebaseApp();
    const dbNotes = collection(getFirestore(firebaseApp), 'notes');
    console.log(dbNotes);
  };

  setNote = (problemId: string, noteContent: string) => {
    try {
      this.userNotesValue.delete(problemId);
      this.userNotesValue.set(problemId, noteContent);
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
