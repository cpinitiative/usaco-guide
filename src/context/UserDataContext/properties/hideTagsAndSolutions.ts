import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type HideTagsAndSolutionsAPI = {
  hide: boolean;
  setHide: (b: boolean) => void;
};

export default class HideTagsAndSolutions extends SimpleUserDataPropertyAPI {
  protected storageKey = 'hide';
  protected defaultValue = false;
  protected setterFunctionName = 'setHide';
}
