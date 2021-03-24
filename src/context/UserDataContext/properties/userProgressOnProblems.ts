import UserDataPropertyAPI from '../userDataPropertyAPI';
import { ProblemInfo, ProblemProgress } from '../../../models/problem';
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
    let legacyValue = this.getValueFromLocalStorage(
      'guide:userData:problemStatus',
      null
    );
    if (legacyValue !== null) {
      window.localStorage.removeItem('guide:userData:problemStatus');
      this.progressValue = legacyValue;
      this.writeValueToLocalStorage();
    } else {
      this.progressValue = this.getValueFromLocalStorage(
        this.getLocalStorageKey(this.progressStorageKey),
        {}
      );
    }

    this.activityValue = this.getValueFromLocalStorage(
      this.getLocalStorageKey(this.activityStorageKey),
      []
    );
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
    this.progressValue = data[this.progressStorageKey] || {};
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
