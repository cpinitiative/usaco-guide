import { createUserDataGetter, createUserDataMutation } from './hooks';

export const useShowTagsSetting = createUserDataGetter(userData => {
  return userData.showTags;
});
export const useSetShowTagsSetting = createUserDataMutation(
  (userData, showTags: boolean) => {
    return {
      showTags,
    };
  }
);

export const useShowIgnoredSetting = createUserDataGetter(userData => {
  return userData.showIgnored;
});
export const useSetShowIgnoredSetting = createUserDataMutation(
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
export const useSetThemeSetting = createUserDataMutation(
  (userData, theme: Theme) => {
    return {
      theme,
    };
  }
);

export const useHideDifficultySetting = createUserDataGetter(userData => {
  return userData.hideDifficulty;
});
export const useSetHideDifficultySetting = createUserDataMutation(
  (userData, hideDifficulty: boolean) => {
    return {
      hideDifficulty,
    };
  }
);

export const useHideModulesSetting = createUserDataGetter(userData => {
  return userData.hideModules;
});
export const useSetHideModulesSetting = createUserDataMutation(
  (userData, hideModules: boolean) => {
    return {
      hideModules,
    };
  }
);
