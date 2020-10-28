import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export const darkModeKey = 'guide:userData:darkMode';

export type DarkModeAPI = {
  darkMode: boolean;
  setDarkMode: (b: boolean) => void;
};

export default class DarkMode extends SimpleUserDataPropertyAPI {
  protected storageKey = 'darkMode';
  protected defaultValue = false;
  protected setterFunctionName = 'setDarkMode';
  private _value = false;

  get value() {
    return this._value;
  }
  set value(val: any) {
    if (this._value === val) return;
    this._value = val;
    if (this.value) {
      document.documentElement.classList.add('mode-dark');
    } else {
      document.documentElement.classList.remove('mode-dark');
    }
    document.documentElement.classList.add('transitioning-color-scheme');
    setTimeout(
      () =>
        document.documentElement.classList.remove('transitioning-color-scheme'),
      0
    );
  }
}
