import UserDataPropertyAPI from '../userDataPropertyAPI';
import { ModuleProgress } from '../../../models/module';
interface EnrolledClass {
  id: string;
  name: string;
}
export type UserClassesAPI = {
  userClasses: EnrolledClass[];
  userClassIds: string[];
  setUserClasses: (enrolledClasses: EnrolledClass[]) => void;
};

export default class UserClassesProperty extends UserDataPropertyAPI {
  protected defaultValue = [];
  protected storageKey = 'userClasses';
  private value = [];

  initializeFromLocalStorage = () => {
    // local storage not supported for classes
  };

  writeValueToLocalStorage = () => {
    // local storage not supported for classes
  };

  eraseFromLocalStorage = () => {
    // local storage not supported for classes
  };

  exportValue = (): any => {
    return {
      [this.storageKey]: this.value,
    };
  };

  importValueFromObject = (data: object) => {
    this.value = data['userClasses'] || this.defaultValue;
  };

  getAPI = () => {
    return {
      userClasses: this.value,
      setUserClasses: (classes: EnrolledClass[]) => {
        if (this.firebaseUserDoc) {
          this.firebaseUserDoc.set(
            {
              [this.storageKey]: classes,
              userClassIds: classes.map(c => c.id),
            },
            { merge: true }
          );
        } else {
          console.warn(
            'Attempting to set user classes for a non-logged in user. Classes are not supported for users using local storage.'
          );
        }
        this.value = classes;
        this.triggerRerender();
      },
    };
  };
}
