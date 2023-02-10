import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type HideModulesAPI = {
  hideModules: boolean;
  setHideModules: (b: boolean) => void;
};

export default class hideModules extends SimpleUserDataPropertyAPI {
  protected storageKey = 'hideModules';
  protected defaultValue = false;
  protected setterFunctionName = 'setHideModules';
}
