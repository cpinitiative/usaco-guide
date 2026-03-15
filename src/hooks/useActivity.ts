import {
  useUserProgressOnModulesActivity,
  useUserProgressOnProblemsActivity,
} from '../context/UserDataContext/properties/userProgress';
import { ModuleActivity, ProblemActivity } from '../models/activity';

export const useActivity = () => {
  const userProgressOnModulesActivity = useUserProgressOnModulesActivity();
  const userProgressOnProblemsActivity = useUserProgressOnProblemsActivity();
  const activityCount: { [key: number]: number } = {};
  const moduleActivities: { [key: number]: ModuleActivity[] } = {};
  const problemActivities: { [key: number]: ProblemActivity[] } = {};

  const moduleIDs: [string, number][] = [];
  for (const activity of userProgressOnModulesActivity) {
    if (
      activity.moduleProgress === 'Practicing' ||
      activity.moduleProgress === 'Complete'
    ) {
      const newDate = new Date(activity.timestamp);
      newDate.setHours(0, 0, 0, 0);
      if (
        moduleIDs.some(
          m => m[0] === activity.moduleID && m[1] === newDate.getTime()
        )
      ) {
        continue;
      }
      moduleIDs.push([activity.moduleID, newDate.getTime()]);
      if (newDate.getTime() in activityCount) {
        activityCount[newDate.getTime()]++;
        moduleActivities[newDate.getTime()].push(activity);
      } else {
        activityCount[newDate.getTime()] = 1;
        moduleActivities[newDate.getTime()] = [activity];
      }
    }
  }

  const problemIDs: [string, number][] = [];
  for (const activity of userProgressOnProblemsActivity) {
    if (activity.problemProgress === 'Solved') {
      const newDate = new Date(activity.timestamp);
      newDate.setHours(0, 0, 0, 0);
      if (
        problemIDs.some(
          p => p[0] === activity.problemID && p[1] === newDate.getTime()
        )
      ) {
        continue;
      }
      problemIDs.push([activity.problemID, newDate.getTime()]);

      if (newDate.getTime() in activityCount) {
        activityCount[newDate.getTime()]++;
      } else {
        activityCount[newDate.getTime()] = 1;
      }
      if (newDate.getTime() in problemActivities) {
        problemActivities[newDate.getTime()].push(activity);
      } else {
        problemActivities[newDate.getTime()] = [activity];
      }
    }
  }

  return { activityCount, moduleActivities, problemActivities };
};
