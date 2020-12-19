import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type HideTagsAndDifficultyAPI = {
  hideTagsAndDifficulty: boolean;
  setHideTagsAndDifficulty: (b: boolean) => void;
};

export default class HideTagsAndDifficulty extends SimpleUserDataPropertyAPI {
  protected storageKey = 'hideTagsAndDifficulty';
  protected defaultValue = false;
  protected setterFunctionName = 'setHideTagsAndDifficulty';
}
