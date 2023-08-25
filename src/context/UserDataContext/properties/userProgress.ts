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

export const useSetProgressOnModule = () => {
  const setProgressOnModule = createUserDataMutation(
    (
      userData,
      { moduleID, progress }: { moduleID: string; progress: ModuleProgress }
    ) => {
      const newActivityData = {
        timestamp: Date.now(),
        moduleID: moduleID,
        moduleProgress: progress,
      };
      return {
        userProgressOnModules: {
          ...userData.userProgressOnModules,
          [moduleID]: progress,
        },
        userProgressOnModulesActivity: [
          ...userData.userProgressOnModulesActivity,
          newActivityData,
        ],
      };

      // if (this.firebaseUserDoc) {
      //   updateDoc(this.firebaseUserDoc, {
      //     [`${this.progressStorageKey}.${moduleID}`]: progress,
      //     [this.activityStorageKey]: arrayUnion(newActivityData),
      //   });
      // }
    }
  )();
  return (moduleID: string, progress: ModuleProgress) => {
    return setProgressOnModule({ moduleID, progress });
  };
};

export const useSetProgressOnProblem = () => {
  const setProgressOnProblem = createUserDataMutation(
    (
      userData,
      { problemID, progress }: { problemID: string; progress: ProblemProgress }
    ) => {
      const newActivityData = {
        timestamp: Date.now(),
        problemID: problemID,
        problemProgress: progress,
      };
      return {
        userProgressOnProblems: {
          ...userData.userProgressOnProblems,
          [problemID]: progress,
        },
        userProgressOnProblemsActivity: [
          ...userData.userProgressOnProblemsActivity,
          newActivityData,
        ],
      };
    }
  )();
  return (problemID: string, progress: ProblemProgress) => {
    return setProgressOnProblem({ problemID, progress });
  };
};

export const replaceIllegalFirebaseCharacters = (str: string) => {
  return str.replace(/[^a-zA-Z0-9]/g, ''); // technically only ~*/[] aren't allowed but whatever
};
export const useSetProgressOnResource = () => {
  const setProgressOnResource = createUserDataMutation(
    (
      userData,
      {
        resourceID,
        progress,
      }: { resourceID: string; progress: ResourceProgress }
    ) => {
      resourceID = replaceIllegalFirebaseCharacters(resourceID);
      return {
        userProgressOnResources: {
          ...userData.userProgressOnResources,
          [resourceID]: progress,
        },
      };
    }
  )();
  return (resourceID: string, progress: ResourceProgress) => {
    return setProgressOnResource({ resourceID, progress });
  };
};
