import { createSimpleUserDataMutation, createUserDataGetter } from './hooks';

export const useShowTagsSetting = createUserDataGetter(userData => {
  return userData.showTags;
});
export const useSetShowTagsSetting = createSimpleUserDataMutation(
  (userData, showTags: boolean) => {
    return {
      showTags,
    };
  }
);

export const useShowIgnoredSetting = createUserDataGetter(userData => {
  return userData.showIgnored;
});
export const useSetShowIgnoredSetting = createSimpleUserDataMutation(
  (userData, showIgnored: boolean) => {
    return {
      showIgnored,
    };
  }
);

export type Theme = 'light' | 'dark' | 'system';
export const useThemeSetting = createUserDataGetter(userData => {
  return userData.theme;
});
export const useSetThemeSetting = createSimpleUserDataMutation(
  (userData, theme: Theme) => {
    return {
      theme,
    };
  }
);

export const useHideDifficultySetting = createUserDataGetter(userData => {
  return userData.hideDifficulty;
});
export const useSetHideDifficultySetting = createSimpleUserDataMutation(
  (userData, hideDifficulty: boolean) => {
    return {
      hideDifficulty,
    };
  }
);

export const useHideModulesSetting = createUserDataGetter(userData => {
  return userData.hideModules;
});
export const useSetHideModulesSetting = createSimpleUserDataMutation(
  (userData, hideModules: boolean) => {
    return {
      hideModules,
    };
  }
);

export type Language = 'showAll' | 'cpp' | 'java' | 'py';
export const LANGUAGE_LABELS: { [key in Language | 'unknown']: string } = {
  showAll: 'All',
  cpp: 'C++',
  java: 'Java',
  py: 'Python',
  unknown: 'Unknown',
} as const;

// Note: User Lang is synchronized with a URL query parameter
// the logic to handle this synchronization is in UserDataContext.tsx
export const useUserLangSetting = createUserDataGetter(
  userData => userData.lang
);
export const useSetUserLangSetting = createSimpleUserDataMutation(
  (userData, lang: Language) => {
    return {
      lang,
    };
  }
);

export const useDivisionTableQuery = createUserDataGetter(
  userData => userData.divisionTableQuery
);
export const useSetDivisionTableQuery = createSimpleUserDataMutation(
  (userData, divisionTableQuery: typeof userData.divisionTableQuery) => {
    return {
      divisionTableQuery,
    };
  }
);

// last viewed module is set in useUpdateStreakEffect
// we have a limitation of one update per second (firebase rate limit),
// so we combine the two updates
export const useLastViewedModule = createUserDataGetter(
  userData => userData.lastViewedModule
);

/*
TODO LATER
export const blindMode = defineBooleanProperty({
  default: false,
});
*/
