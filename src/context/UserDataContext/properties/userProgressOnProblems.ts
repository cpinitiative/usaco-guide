import UserDataPropertyAPI from '../userDataPropertyAPI';
import { ProblemInfo, ProblemProgress } from '../../../models/problem';
import problemURLToIdMap from './problemURLToIdMap';
import { ProblemActivity } from '../../../models/activity';

export type UserProgressOnProblemsAPI = {
  userProgressOnProblems: { [key: string]: ProblemProgress };
  userProgressOnProblemsActivity: ProblemActivity[];
  setUserProgressOnProblems: (
    problem: ProblemInfo,
    status: ProblemProgress
  ) => void;
};

export default class UserProgressOnProblemsProperty extends UserDataPropertyAPI {
  private progressStorageKey = 'userProgressOnProblems';
  private progressValue = {};

  private activityStorageKey = 'userProgressOnProblemsActivity';
  private activityValue: ProblemActivity[] = [];

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
      this.firebaseUserDoc.update({
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
      this.getLocalStorageKey(this.activityStorageKey),
      this.activityValue
    );
  };

  eraseFromLocalStorage = () => {
    window.localStorage.removeItem(
      this.getLocalStorageKey(this.progressStorageKey)
    );
    window.localStorage.removeItem(
      this.getLocalStorageKey(this.activityStorageKey)
    );
  };

  exportValue = (): any => {
    return {
      [this.progressStorageKey]: this.progressValue,
      [this.activityStorageKey]: this.activityValue,
    };
  };

  importValueFromObject = (data: object) => {
    let pendingProgressValue = data[this.progressStorageKey] || { version: 2 };
    if (!pendingProgressValue.version || pendingProgressValue.version < 2) {
      pendingProgressValue = this.migrateLegacyValue(pendingProgressValue);
    }
    this.progressValue = pendingProgressValue;
    this.activityValue = data[this.activityStorageKey] || [];
  };

  getAPI: () => UserProgressOnProblemsAPI = () => {
    return {
      userProgressOnProblems: this.progressValue,
      userProgressOnProblemsActivity: this.activityValue,
      setUserProgressOnProblems: (problem, status) => {
        if (!this.firebaseUserDoc) {
          // if the user isn't using firebase, it is possible that they
          // have multiple tabs open, which can result in localStorage
          // being out of sync.
          this.initializeFromLocalStorage();
        }

        this.activityValue.push({
          timestamp: Date.now(),
          problemID: problem.uniqueId,
          problemProgress: status,
        });
        this.progressValue[problem.uniqueId] = status;

        if (this.firebaseUserDoc) {
          this.firebaseUserDoc.set(
            {
              [this.progressStorageKey]: {
                [problem.uniqueId]: status,
              },
              [this.activityStorageKey]: this.activityValue,
            },
            { merge: true }
          );
        }

        this.writeValueToLocalStorage();
        this.triggerRerender();
      },
    };
  };
}
