import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type AdSettings = {
  hideMarch2021: boolean;
};

export type AdSettingsAPI = {
  adSettings: AdSettings;
  setAdSettings: (x: AdSettings) => void;
};

export default class AdSettingsProperty extends SimpleUserDataPropertyAPI {
  protected storageKey = 'adSettings';
  protected defaultValue = {
    hideMarch2021: false,
  };
  protected setterFunctionName = 'setAdSettings';
}
