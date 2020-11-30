import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type ShowIgnoredAPI = {
  showIgnored: boolean;
  setShowIgnored: (b: boolean) => void;
};

export default class ShowIgnored extends SimpleUserDataPropertyAPI {
  protected storageKey = 'showIgnored';
  protected defaultValue = false;
  protected setterFunctionName = 'setShowIgnored';
}
