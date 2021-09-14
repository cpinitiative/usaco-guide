import * as Sentry from '@sentry/browser';
import { setDoc, updateDoc } from 'firebase/firestore';
import { ProblemActivity } from '../../../models/activity';
import { ProblemNotes, ProblemProgress } from '../../../models/problem';
import UserDataPropertyAPI from '../userDataPropertyAPI';
import problemURLToIdMap from './problemURLToIdMap';

export type UserProgressOnProblemsAPI = {
  userProgressOnProblems: { [key: string]: ProblemProgress };
  userNotesOnProblems: { [key: string]: ProblemNotes };
  userProgressOnProblemsActivity: ProblemActivity[];
  setUserProgressOnProblems: (
    problemId: string,
    status: ProblemProgress,
    notes: ProblemNotes
  ) => void;
};

export default class UserProgressOnProblemsProperty extends UserDataPropertyAPI {
  private progressStorageKey = 'userProgressOnProblems';
  private progressValue = {};

  private activityStorageKey = 'userProgressOnProblemsActivity';
  private activityValue: ProblemActivity[] = [];

  private notesStorageKey = 'userNotesOnProblems';
  private notesValue = {};

  initializeFromLocalStorage = () => {
    const currentValue = this.getValueFromLocalStorage(
      this.getLocalStorageKey(this.progressStorageKey),
      { version: 2 }
    );

    if (!currentValue.version || currentValue.version < 2) {
      this.migrateLegacyValue(currentValue);
    } else {
      this.progressValue = currentValue;
    }

    const currentNotesValue = this.getValueFromLocalStorage(
      this.getLocalStorageKey(this.notesStorageKey),
      { version: 2 }
    );

    if (!currentNotesValue.version || currentNotesValue.version < 2) {
      this.migrateLegacyValue(currentNotesValue);
    } else {
      this.notesValue = currentNotesValue;
    }

    this.activityValue = this.getValueFromLocalStorage(
      this.getLocalStorageKey(this.activityStorageKey),
      []
    );
  };

  migrateLegacyValue = legacyValue => {
    localStorage.setItem(
      'guide:userData:userProgressOnProblems:backups:' + new Date().getTime(),
      JSON.stringify(legacyValue)
    );

    const migratedValue = Object.keys(legacyValue).reduce(
      (acc, key) => {
        const migratedKey = problemURLToIdMap[key];
        if (!migratedKey) {
          console.warn(
            'Dropping problem URL ' +
              key +
              ' because it was not found in the map.'
          );

          return acc;
        }
        return { ...acc, [migratedKey]: legacyValue[key] };
      },
      { version: 2 }
    );
    this.progressValue = migratedValue;
    this.writeValueToLocalStorage();
    if (this.firebaseUserDoc) {
      updateDoc(this.firebaseUserDoc, {
        [this.progressStorageKey]: migratedValue,
      });
    }
    return migratedValue;
  };

  writeValueToLocalStorage = () => {
    this.saveLocalStorageValue(
      this.getLocalStorageKey(this.progressStorageKey),
      this.progressValue
    );

    this.saveLocalStorageValue(
      this.getLocalStorageKey(this.notesStorageKey),
      this.notesValue
    );

    this.saveLocalStorageValue(
      this.getLocalStorageKey(this.activityStorageKey),
      this.activityValue
    );
  };

  eraseFromLocalStorage = () => {
    window.localStorage.removeItem(
      this.getLocalStorageKey(this.progressStorageKey)
    );

    window.localStorage.removeItem(
      this.getLocalStorageKey(this.notesStorageKey)
    );

    window.localStorage.removeItem(
      this.getLocalStorageKey(this.activityStorageKey)
    );
  };

  exportValue = (): any => {
    return {
      [this.progressStorageKey]: this.progressValue,
      [this.notesStorageKey]: this.notesValue,
      [this.activityStorageKey]: this.activityValue,
    };
  };

  importValueFromObject = (data: Record<string, any>) => {
    let pendingProgressValue = data[this.progressStorageKey] || { version: 2 };
    if (!pendingProgressValue.version || pendingProgressValue.version < 2) {
      pendingProgressValue = this.migrateLegacyValue(pendingProgressValue);
    }
    this.progressValue = pendingProgressValue;
    this.notesValue = data[this.notesStorageKey] || [];
    this.activityValue = data[this.activityStorageKey] || [];
  };

  getAPI: () => UserProgressOnProblemsAPI = () => {
    return {
      userProgressOnProblems: this.progressValue,
      userProgressOnProblemsActivity: this.activityValue,
      userNotesOnProblemsActivity: this.notesValue,

      setUserProgressOnProblems: (problemId, status, note) => {
        if (!this.firebaseUserDoc) {
          // if the user isn't using firebase, it is possible that they
          // have multiple tabs open, which can result in localStorage
          // being out of sync.
          this.initializeFromLocalStorage();
        }
        try {
          this.activityValue.push({
            timestamp: Date.now(),
            problemID: problemId,
            problemProgress: status,
            notes: note,
          });
          this.progressValue[problemId] = status;
          this.notesValue[problemId] = note;

          if (this.firebaseUserDoc) {
            setDoc(
              this.firebaseUserDoc,
              {
                [this.progressStorageKey]: {
                  [problemId]: status,
                },
                [this.notesStorageKey]: {
                  [problemId]: note,
                },
                [this.activityStorageKey]: this.activityValue,
              },
              { merge: true }
            );
          }

          this.writeValueToLocalStorage();
          this.triggerRerender();
        } catch (e) {
          Sentry.captureException(e, {
            extra: {
              status,
              problemId,
              activityValue: this.activityValue,
              noteValue: this.notesValue,
              fbData: {
                [this.progressStorageKey]: {
                  [problemId]: status,
                },
                [this.notesStorageKey]: {
                  [problemId]: note,
                },
                [this.activityStorageKey]: this.activityValue,
              },
              thisValue: { ...this },
            },
          });

          alert(
            "We're sorry, but an error occurred. This error has been automatically sent to us, but you can email us to provide details if you wish."
          );
        }
      },
    };
  };
}
