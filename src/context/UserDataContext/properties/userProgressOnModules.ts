import { setDoc } from 'firebase/firestore';
import { ModuleActivity } from '../../../models/activity';
import { ModuleProgress } from '../../../models/module';
import UserDataPropertyAPI from '../userDataPropertyAPI';

export type UserProgressOnModulesAPI = {
  userProgressOnModules: { [key: string]: ModuleProgress };
  userProgressOnModulesActivity: ModuleActivity[];
  setModuleProgress: (moduleID: string, progress: ModuleProgress) => void;
};

export default class UserProgressOnModulesProperty extends UserDataPropertyAPI {
  private progressStorageKey = 'userProgressOnModules';
  private progressValue = {};

  private activityStorageKey = 'userProgressOnModulesActivity';
  private activityValue: ModuleActivity[] = [];

  initializeFromLocalStorage = () => {
    const legacyValue = this.getValueFromLocalStorage(
      'guide:userData:progress',
      null
    );
    if (legacyValue !== null) {
      window.localStorage.removeItem('guide:userData:progress');
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

  importValueFromObject = (data: Record<string, any>) => {
    this.progressValue = data[this.progressStorageKey] || {};
    this.activityValue = data[this.activityStorageKey] || [];
  };

  getAPI: () => UserProgressOnModulesAPI = () => {
    return {
      userProgressOnModules: this.progressValue,
      userProgressOnModulesActivity: this.activityValue,

      setModuleProgress: (moduleID: string, progress: ModuleProgress) => {
        if (!this.firebaseUserDoc) {
          // if the user isn't using firebase, it is possible that they
          // have multiple tabs open, which can result in localStorage
          // being out of sync.
          this.initializeFromLocalStorage();
        }

        this.activityValue.push({
          timestamp: Date.now(),
          moduleID: moduleID,
          moduleProgress: progress,
        });
        this.progressValue[moduleID] = progress;

        if (this.firebaseUserDoc) {
          setDoc(
            this.firebaseUserDoc,
            {
              [this.progressStorageKey]: {
                [moduleID]: progress,
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
