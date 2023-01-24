import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type ShowTagsAPI = {
  showTags: boolean;
  setShowTags: (b: boolean) => void;
};

export default class ShowTags extends SimpleUserDataPropertyAPI {
  protected storageKey = 'showTags';
  protected defaultValue = false;
  protected setterFunctionName = 'setShowTags';
}
