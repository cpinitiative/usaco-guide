import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type HideSolsAPI = {
  hideSols: boolean;
  setHideSols: (b: boolean) => void;
};

export default class HideSols extends SimpleUserDataPropertyAPI {
  protected storageKey = 'hideSols';
  protected defaultValue = false;
  protected setterFunctionName = 'setHideSols';
}
