import { arrayUnion } from 'firebase/firestore';
import { ModuleProgress } from '../../../models/module';
import { ProblemProgress } from '../../../models/problem';
import { ResourceProgress } from '../../../models/resource';
import { createUserDataGetter, createUserDataMutation } from './hooks';

export const useUserProgressOnModules = createUserDataGetter(
  userData => userData.userProgressOnModules
);
export const useUserProgressOnModulesActivity = createUserDataGetter(
  userData => userData.userProgressOnModulesActivity
);

export const useUserProgressOnProblemsActivity = createUserDataGetter(
  userData => userData.userProgressOnProblemsActivity
);
export const useUserProgressOnProblems = createUserDataGetter(
  userData => userData.userProgressOnProblems
);

export const useUserProgressOnResources = createUserDataGetter(
  userData => userData.userProgressOnResources
);

export const useSetProgressOnModule = createUserDataMutation(
  (userData, moduleID: string, progress: ModuleProgress) => {
    const newActivityData = {
      timestamp: Date.now(),
      moduleID: moduleID,
      moduleProgress: progress,
    };
    return {
      localStorageUpdate: {
        userProgressOnModules: {
          ...userData.userProgressOnModules,
          [moduleID]: progress,
        },
        userProgressOnModulesActivity: [
          ...userData.userProgressOnModulesActivity,
          newActivityData,
        ],
      },
      firebaseUpdate: {
        [`userProgressOnModules.${moduleID}`]: progress,
        userProgressOnModulesActivity: arrayUnion(newActivityData),
      },
    };
  }
);

export const useSetProgressOnProblem = createUserDataMutation(
  (userData, problemID: string, progress: ProblemProgress) => {
    const newActivityData = {
      timestamp: Date.now(),
      problemID: problemID,
      problemProgress: progress,
    };
    return {
      localStorageUpdate: {
        userProgressOnProblems: {
          ...userData.userProgressOnProblems,
          [problemID]: progress,
        },
        userProgressOnProblemsActivity: [
          ...userData.userProgressOnProblemsActivity,
          newActivityData,
        ],
      },
      firebaseUpdate: {
        [`userProgressOnProblems.${problemID}`]: progress,
        userProgressOnProblemsActivity: arrayUnion(newActivityData),
      },
    };
  }
);

export const replaceIllegalFirebaseCharacters = (str: string) => {
  return str.replace(/[^a-zA-Z0-9]/g, ''); // technically only ~*/[] aren't allowed but whatever
};
export const useSetProgressOnResource = createUserDataMutation(
  (userData, resourceID: string, progress: ResourceProgress) => {
    resourceID = replaceIllegalFirebaseCharacters(resourceID);
    return {
      localStorageUpdate: {
        userProgressOnResources: {
          ...userData.userProgressOnResources,
          [resourceID]: progress,
        },
      },
      firebaseUpdate: {
        [`userProgressOnResources.${resourceID}`]: progress,
      },
    };
  }
);
