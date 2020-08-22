import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export const darkModeKey = 'guide:userData:darkMode';

export type DarkModeAPI = {
  darkMode: Boolean;
  setDarkMode: (b: Boolean) => void;
};

export default class DarkMode extends SimpleUserDataPropertyAPI {
  protected storageKey = 'darkMode';
  protected defaultValue = false;
  protected setterFunctionName = 'setDarkMode';

  public setTriggerRerenderFunction = (func: Function) => {
    this.triggerRerender = () => {
      if (this.value) {
        document.documentElement.classList.add('mode-dark');
      } else {
        document.documentElement.classList.remove('mode-dark');
      }
      document.documentElement.classList.add('transitioning-color-scheme');
      setTimeout(
        () =>
          document.documentElement.classList.remove(
            'transitioning-color-scheme'
          ),
        0
      );
      func();
    };
  };
}
