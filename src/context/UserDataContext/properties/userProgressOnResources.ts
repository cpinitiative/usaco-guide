import * as Sentry from '@sentry/browser';
import { updateDoc } from 'firebase/firestore';
import { ResourceProgress } from '../../../models/resource';
import UserDataPropertyAPI from '../userDataPropertyAPI';

export type UserProgressOnResourcesAPI = {
  userProgressOnResources: { [key: string]: ResourceProgress };
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
  private progressValue = {};

  initializeFromLocalStorage = (): void => {
    const currentValue = this.getValueFromLocalStorage(
      this.getLocalStorageKey(this.progressStorageKey),
      { version: 2 }
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

  importValueFromObject = (data: Record<string, any>): void => {
    const pendingProgressValue = data[this.progressStorageKey] || {
      version: 2,
    };
    this.progressValue = pendingProgressValue;
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
