import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export const darkModeKey = 'guide:userData:darkMode';

export type DarkModeAPI = {
  darkMode: boolean;
  setDarkMode: (b: boolean) => void;
};

export default class DarkMode extends SimpleUserDataPropertyAPI {
  protected storageKey = 'darkMode';
  protected setterFunctionName = 'setDarkMode';
  private _value = false;

  get defaultValue() {
    if (typeof window === 'undefined') return false;

    // Note: see also gatsby-ssr.tsx if any of the below code needs to be changed.
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? true : false;
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return false;
  }

  get value() {
    return this._value;
  }
  set value(val: any) {
    if (this._value === val) return;
    this._value = val;
    if (this.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.classList.add('transitioning-color-scheme');
    setTimeout(
      () =>
        document.documentElement.classList.remove('transitioning-color-scheme'),
      0
    );
  }
}
