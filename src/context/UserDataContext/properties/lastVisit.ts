import { increment } from 'firebase/firestore';
import { UserData } from '../UserDataContext';
import { createUserDataGetter, createUserDataMutation } from './hooks';

export const useLastVisitInfo = createUserDataGetter(userData => {
  return {
    lastVisitDate: userData.lastVisitDate,
    consecutiveVisits: userData.consecutiveVisits,
    numPageviews: userData.numPageviews,
    pageviewsPerDay: userData.pageviewsPerDay,
  };
});
export const useSetLastVisitDate = createUserDataMutation(
  (
    userData,
    {
      lastVisitDate,
      lastViewedModule,
    }: { lastVisitDate: number; lastViewedModule?: string }
  ) => {
    const timeSinceLastVisit = lastVisitDate - userData.lastVisitDate;
    const oneDay = 1000 * 60 * 60 * 20,
      twoDays = 1000 * 60 * 60 * 24 * 2;

    const changes: {
      localStorageUpdate: Partial<UserData>;
      firebaseUpdate: Record<string, any>;
    } = {
      localStorageUpdate: {},
      firebaseUpdate: {},
    };

    if (timeSinceLastVisit >= oneDay && timeSinceLastVisit <= twoDays) {
      changes.localStorageUpdate['lastVisitDate'] = lastVisitDate;
      changes.firebaseUpdate['lastVisitDate'] = lastVisitDate;
      changes.localStorageUpdate['consecutiveVisits'] =
        userData.consecutiveVisits + 1;
      changes.firebaseUpdate[`consecutiveVisits`] = increment(1);
    } else if (timeSinceLastVisit > twoDays) {
      changes.localStorageUpdate['lastVisitDate'] = lastVisitDate;
      changes.firebaseUpdate['lastVisitDate'] = lastVisitDate;
      changes.localStorageUpdate['consecutiveVisits'] = 1;
      changes.firebaseUpdate[`consecutiveVisits`] = 1;
    }
    changes.localStorageUpdate['numPageviews'] = userData.numPageviews + 1;
    changes.localStorageUpdate['pageviewsPerDay'] = {
      ...userData.pageviewsPerDay,
    };

    const todayDate = new Date(lastVisitDate);
    todayDate.setHours(0, 0, 0, 0);
    const todayDateTimestamp = todayDate.getTime();
    if (todayDateTimestamp in changes.localStorageUpdate.pageviewsPerDay) {
      changes.localStorageUpdate.pageviewsPerDay[todayDateTimestamp]++;
    } else {
      changes.localStorageUpdate.pageviewsPerDay[todayDateTimestamp] = 1;
    }

    changes.firebaseUpdate[`numPageviews`] = increment(1);
    changes.firebaseUpdate[`pageviewsPerDay.${todayDateTimestamp}`] =
      increment(1);

    if (lastViewedModule) {
      changes.localStorageUpdate.lastViewedModule = lastViewedModule;
      changes.firebaseUpdate.lastViewedModule = lastViewedModule;
    }

    return changes;
  }
);
