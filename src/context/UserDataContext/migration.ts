import { assignDefaultsToUserData, UserData } from './UserDataContext';

function getLegacy(key: string) {
  const value = window.localStorage.getItem(`guide:userData:${key}`);
  let v = undefined;
  if (value) {
    try {
      v = JSON.parse(value);
    } catch (e) {
      console.error(`Couldn't parse ${key} from localStorage`, e);
      v = undefined;
    }
  } else {
    v = undefined;
  }
  return v;
}

// Migrates outdated user data, if necessary
export default function runMigration() {
  if (
    !localStorage.getItem('guide:userData:v100') &&
    localStorage.getItem('guide:userData:numPageviews')
  ) {
    // The user has a legacy version of user data. need to migrate it
    const storedUserData: UserData = {
      consecutiveVisits: getLegacy('consecutiveVisits')!,
      showTags: getLegacy('showTags')!,
      hideDifficulty: getLegacy('hideDifficulty')!,
      hideModules: getLegacy('hideModules')!,
      showIgnored: getLegacy('showIgnored')!,
      divisionTableQuery: getLegacy('divisionTableQuery')!,
      lang: getLegacy('lang')!,
      lastViewedModule: getLegacy('lastViewedModule')!,
      lastVisitDate: getLegacy('lastVisitDate')!,
      numPageviews: getLegacy('numPageviews')!,
      pageviewsPerDay: getLegacy('pageviewsPerDay')!,
      theme: getLegacy('theme')!,
      userProgressOnModules: getLegacy('userProgressOnModules')!,
      userProgressOnModulesActivity: getLegacy(
        'userProgressOnModulesActivity'
      )!,
      userProgressOnProblems: getLegacy('userProgressOnProblems')!,
      userProgressOnProblemsActivity: getLegacy(
        'userProgressOnProblemsActivity'
      )!,
      userProgressOnResources: getLegacy('userProgressOnResources')!,
    };

    Object.keys(storedUserData).forEach(_key => {
      const key = _key as keyof typeof storedUserData;
      if (storedUserData[key] === undefined) delete storedUserData[key];
    });

    const migratedUserData = assignDefaultsToUserData(storedUserData);
    localStorage.setItem(
      'guide:userData:v100',
      JSON.stringify(migratedUserData)
    );

    // Erase the old data
    localStorage.removeItem('guide:userData:consecutiveVisits');
    localStorage.removeItem('guide:userData:showTags');
    localStorage.removeItem('guide:userData:hideDifficulty');
    localStorage.removeItem('guide:userData:hideModules');
    localStorage.removeItem('guide:userData:showIgnored');
    localStorage.removeItem('guide:userData:divisionTableQuery');
    localStorage.removeItem('guide:userData:lang');
    localStorage.removeItem('guide:userData:lastViewedModule');
    localStorage.removeItem('guide:userData:lastVisitDate');
    localStorage.removeItem('guide:userData:numPageviews');
    localStorage.removeItem('guide:userData:pageviewsPerDay');
    localStorage.removeItem('guide:userData:theme');
    localStorage.removeItem('guide:userData:userProgressOnModules');
    localStorage.removeItem('guide:userData:userProgressOnModulesActivity');
    localStorage.removeItem('guide:userData:userProgressOnProblems');
    localStorage.removeItem('guide:userData:userProgressOnProblemsActivity');
    localStorage.removeItem('guide:userData:userProgressOnResources');
    localStorage.removeItem('guide:userData:adSettings'); // don't need to migrate this, no longer used
  }
}
