import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type HideTagsAPI = {
  hideTags: boolean;
  setHideTags: (b: boolean) => void;
};

export default class HideTags extends SimpleUserDataPropertyAPI {
  protected storageKey = 'hideTags';
  protected defaultValue = false;
  protected setterFunctionName = 'setHideTags';
}
