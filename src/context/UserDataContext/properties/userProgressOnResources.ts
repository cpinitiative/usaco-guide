import * as Sentry from '@sentry/browser';
import { getFirestore, runTransaction, updateDoc } from 'firebase/firestore';
import { ResourceProgress } from '../../../models/resource';
import UserDataPropertyAPI from '../userDataPropertyAPI';

export type UserProgressOnResourcesAPI = {
  userProgressOnResources: {
    [key: string]: ResourceProgress;
  };
  setUserProgressOnResources: (
    resourceId: string,
    status: ResourceProgress
  ) => void;
};

export const replaceIllegalFirebaseCharacters = (str: string) => {
  return str.replace(/[^a-zA-Z0-9]/g, ''); // technically only ~*/[] aren't allowed but whatever
};

export default class UserProgressOnResourcesProperty extends UserDataPropertyAPI {
  private progressStorageKey = 'userProgressOnResources';
  private progressValue: any = {};

  initializeFromLocalStorage = (): void => {
    const currentValue = this.getValueFromLocalStorage(
      this.getLocalStorageKey(this.progressStorageKey),
      { version: 3 }
    );
    this.progressValue = currentValue;
  };
  writeValueToLocalStorage = (): void => {
    this.saveLocalStorageValue(
      this.getLocalStorageKey(this.progressStorageKey),
      this.progressValue
    );
  };

  eraseFromLocalStorage = (): void => {
    window.localStorage.removeItem(
      this.getLocalStorageKey(this.progressStorageKey)
    );
  };

  exportValue = (): any => {
    return {
      [this.progressStorageKey]: this.progressValue,
    };
  };

  migrateLegacyValue = (legacyValue: Record<string, ResourceProgress>) => {
    const getMigratedValue = (
      legacyValue: Record<string, ResourceProgress>
    ) => {
      return Object.keys(legacyValue).reduce(
        (acc, key) => {
          if (key === 'version') return acc;
          const migratedKey = replaceIllegalFirebaseCharacters(key);
          return { ...acc, [migratedKey]: legacyValue[key] };
        },
        { version: 3 }
      );
    };
    if (this.firebaseUserDoc) {
      if (!this.firebaseApp) {
        throw new Error(
          'this.firebaseApp not defined, but this.firebaseUserDoc is defined'
        );
      }
      runTransaction(getFirestore(this.firebaseApp), async transaction => {
        if (!this.firebaseUserDoc) {
          // maybe the user signed out? don't think this ever runs
          return;
        }
        const userDoc = await transaction.get(this.firebaseUserDoc);
        if (!userDoc.exists()) {
          throw "Document does not exist! (this shouldn't happen)";
        }

        const newValue = getMigratedValue(
          userDoc.data()[this.progressStorageKey]
        );
        transaction.update(this.firebaseUserDoc, {
          [this.progressStorageKey]: newValue,
        });
      });
    } else {
      this.progressValue = getMigratedValue(legacyValue);
      this.writeValueToLocalStorage();
    }
  };

  importValueFromObject = (data: Record<string, any>): void => {
    const pendingProgressValue = data[this.progressStorageKey] || {
      version: 3,
    };
    if (pendingProgressValue.version === 2) {
      this.migrateLegacyValue(pendingProgressValue);
    } else {
      this.progressValue = pendingProgressValue;
    }
  };

  getAPI: () => UserProgressOnResourcesAPI = () => {
    return {
      userProgressOnResources: this.progressValue,
      setUserProgressOnResources: (problemId, status) => {
        problemId = replaceIllegalFirebaseCharacters(problemId);
        // if the user isn't using firebase, it is possible that they
        // have multiple tabs open, which can result in localStorage
        // being out of sync.
        // also bc of data loss let's just do this all the time
        this.initializeFromLocalStorage();
        try {
          this.progressValue[problemId] = status;

          if (this.firebaseUserDoc) {
            updateDoc(this.firebaseUserDoc, {
              [`${this.progressStorageKey}.${problemId}`]: status,
            });
          }

          this.writeValueToLocalStorage();
          this.triggerRerender();
        } catch (e) {
          console.error(e);

          Sentry.captureException(e, {
            extra: {
              status,
              problemId,
              fbData: {
                [this.progressStorageKey]: {
                  [problemId]: status,
                },
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
