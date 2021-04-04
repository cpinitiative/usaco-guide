import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export const themeKey = 'guide:userData:theme';

export type Theme = 'light' | 'dark' | 'system';

export type ThemePropertyAPI = {
  theme: Theme;
  setTheme: (x: Theme) => void;
};

export default class ThemeProperty extends SimpleUserDataPropertyAPI {
  protected storageKey = 'theme';
  protected setterFunctionName = 'setTheme';
  protected defaultValue = 'system';
}
