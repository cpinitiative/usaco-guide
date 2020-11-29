import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type HideSkippedAPI = {
  hideSkipped: boolean;
  setHideSkipped: (b: boolean) => void;
};

export default class HideSkipped extends SimpleUserDataPropertyAPI {
  protected storageKey = 'hideSkipped';
  protected defaultValue = false;
  protected setterFunctionName = 'setHideSkipped';
}
