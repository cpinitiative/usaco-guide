import UserDataPropertyAPI from '../userDataPropertyAPI';
import { Problem, ProblemProgress } from '../../../models/problem';

export type UserProgressOnProblemsAPI = {
  userProgressOnProblems: { [key: string]: ProblemProgress };
  setUserProgressOnProblems: (
    problem: Problem,
    status: ProblemProgress
  ) => void;
};

export default class UserProgressOnProblemsProperty extends UserDataPropertyAPI {
  protected defaultValue = {};
  protected storageKey = 'userProgressOnProblems';
  private value = {};

  initializeFromLocalStorage = () => {
    let legacyValue = this.getValueFromLocalStorage(
      'guide:userData:problemStatus',
      null
    );
    if (legacyValue !== null) {
      window.localStorage.removeItem('guide:userData:problemStatus');
      this.value = legacyValue;
      this.writeValueToLocalStorage();
    } else {
      this.value = this.getValueFromLocalStorage(
        this.getLocalStorageKey(this.storageKey),
        this.defaultValue
      );
    }
  };

  writeValueToLocalStorage = () => {
    this.saveLocalStorageValue(
      this.getLocalStorageKey(this.storageKey),
      this.value
    );
  };

  eraseFromLocalStorage = () => {
    window.localStorage.removeItem(this.getLocalStorageKey(this.storageKey));
  };

  exportValue = (): any => {
    return this.value;
  };

  importValueFromObject = (data: object) => {
    this.value = data[this.storageKey] || this.defaultValue;
  };

  getAPI = () => {
    return {
      userProgressOnProblems: this.value,
      setUserProgressOnProblems: (problem, status) => {
        if (this.firebaseUserDoc) {
          this.firebaseUserDoc.set(
            {
              userProgressOnProblems: {
                [problem.uniqueID]: status,
              },
            },
            { merge: true }
          );
        } else {
          // if the user isn't using firebase, it is possible that they
          // have multiple tabs open, which can result in localStorage
          // being out of sync.
          this.initializeFromLocalStorage();
        }
        this.value[problem.uniqueID] = status;
        this.writeValueToLocalStorage();
        this.triggerRerender();
      },
    };
  };
}
