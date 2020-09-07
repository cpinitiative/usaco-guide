import UserDataPropertyAPI from '../userDataPropertyAPI';
import { ModuleProgress } from '../../../models/module';

export type UserProgressOnModulesAPI = {
  userProgressOnModules: { [key: string]: ModuleProgress };
  setModuleProgress: (moduleID: string, progress: ModuleProgress) => void;

  // userProgressOnProblems: { [key: string]: ProblemProgress };
  // setUserProgressOnProblems: (
  //   problem: Problem,
  //   status: ProblemProgress
  // ) => void;
};

export default class UserProgressOnModulesProperty extends UserDataPropertyAPI {
  protected defaultValue = {};
  protected storageKey = 'userProgressOnModules';
  private value = {};

  initializeFromLocalStorage = () => {
    let legacyValue = this.getValueFromLocalStorage(
      'guide:userData:progress',
      null
    );
    if (legacyValue !== null) {
      window.localStorage.removeItem('guide:userData:progress');
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
    return {
      [this.storageKey]: this.value,
    };
  };

  importValueFromObject = (data: object) => {
    this.value = data['userProgressOnModules'] || this.defaultValue;
  };

  getAPI = () => {
    return {
      userProgressOnModules: this.value,
      setModuleProgress: (moduleID: string, progress: ModuleProgress) => {
        if (this.firebaseUserDoc) {
          this.firebaseUserDoc.set(
            {
              [this.storageKey]: {
                [moduleID]: progress,
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
        this.value[moduleID] = progress;
        this.writeValueToLocalStorage();
        this.triggerRerender();
      },
    };
  };
}
