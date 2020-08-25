import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type LastViewedModuleAPI = {
  lastViewedModule: string;
  setLastViewedModule: (moduleID: string) => void;
};

export default class LastViewedModule extends SimpleUserDataPropertyAPI {
  protected storageKey = 'lastViewedModule';
  protected defaultValue = null;
  protected setterFunctionName = 'setLastViewedModule';
}
