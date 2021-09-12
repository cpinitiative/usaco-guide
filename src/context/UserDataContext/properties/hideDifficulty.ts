import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type HideDifficultyAPI = {
  hideDifficulty: boolean;
  setHideDifficulty: (b: boolean) => void;
};

export default class HideDifficulty extends SimpleUserDataPropertyAPI {
  protected storageKey = 'hideDifficulty';
  protected defaultValue = false;
  protected setterFunctionName = 'setHideDifficulty';
}
