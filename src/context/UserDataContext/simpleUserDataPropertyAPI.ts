import UserDataPropertyAPI from './userDataPropertyAPI';

/**
 * Wrapper around UserDataPropertyAPI for very simple properties.
 */
export default abstract class SimpleUserDataPropertyAPI extends UserDataPropertyAPI {
  /**
   * The default value of this property, in case localStorage is corrupted or does not exist.
   */
  protected abstract defaultValue;
  /**
   * The storage key associated with the property.
   *
   * A local storage key (`guide:userData:${this.storageKey}`)
   * and a firebase key will automatically be generated from this.
   */
  protected abstract storageKey: string;
  protected abstract setterFunctionName: string;
  protected value;

  public initializeFromLocalStorage = () => {
    this.value = this.getValueFromLocalStorage(
      this.getLocalStorageKey(this.storageKey),
      this.defaultValue
    );
  };

  public writeValueToLocalStorage = () => {
    this.saveLocalStorageValue(
      this.getLocalStorageKey(this.storageKey),
      this.value
    );
  };

  public eraseFromLocalStorage = () => {
    window.localStorage.removeItem(this.getLocalStorageKey(this.storageKey));
  };

  public exportValue = (): Record<string, unknown> => {
    return {
      [this.storageKey]: this.value,
    };
  };

  public importValueFromObject = data => {
    this.value =
      data.hasOwnProperty(this.storageKey) && data[this.storageKey] !== null
        ? data[this.storageKey]
        : this.defaultValue;
  };

  public getAPI = () => {
    return {
      [this.storageKey]: this.value,
      [this.setterFunctionName]: v => {
        this.value = v;
        this.updateValueAndRerender(this.storageKey, v);
      },
    };
  };
}
