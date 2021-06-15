import { DocumentReference, setDoc } from 'firebase/firestore';

/**
 * This class makes it easy to add new properties to UserDataContext.
 *
 * To use this class, first set the following properties:
 * - `storageKey`
 * - `defaultValue`
 */
export default abstract class UserDataPropertyAPI {
  getLocalStorageKey(storageKey: string) {
    return `guide:userData:${storageKey}`;
  }

  /**
   * This is a reference to the firebase document of the user.
   * It can be used to save information to firebase.
   * If the user is not signed in, the value is null.
   */
  protected firebaseUserDoc: DocumentReference | null;
  /**
   * This function will trigger a rerender of the User Data Context component.
   * Any time the value returned by `getAPI()` changes, make sure to call
   * this function.
   */
  protected triggerRerender: () => void;

  public setFirebaseUserDoc = (doc: DocumentReference | null) => {
    this.firebaseUserDoc = doc;
  };

  public setTriggerRerenderFunction = (func: () => void) => {
    this.triggerRerender = func;
  };

  /**
   * Whatever is returned from this function will be added to the context value.
   * It's important nothing here conflicts with other API's. Make sure
   * to call triggerRerender() as necessary!!!
   *
   * @example userLang will return the following:
   * {
   *   lang: "cpp",
   *   setLang: (lang: Language) => {
   *     this.save(lang);
   *   }
   * }
   */
  abstract getAPI();

  /**
   * Called once when the page loads. Initialize data by reading from localStorage.
   */
  abstract initializeFromLocalStorage();

  /**
   * Return a serializable value that can then be imported and restored.
   *
   * This will be called:
   * - when the user requests a backup of their data
   * - when the user first creates an account and requests to sync their local data with the remote data
   *
   * DON'T use common keys -- all the exportValue() functions from all the properties
   * will be merged into one object. Using duplicate keys means the values may get overwritten.
   */
  abstract exportValue(): any;

  /**
   * Restore the property value from the given object. Whatever was returned from exportValue()
   * is probably going to be inside the given object.
   *
   * This is called:
   * - when the user restores a backup of their data
   * - when remote data is synced with local data
   */
  abstract importValueFromObject(data: Record<string, unknown>);

  /**
   * Erase all data from localStorage. This will be called when the user signs out.
   */
  abstract eraseFromLocalStorage();

  /**
   * Write the current value into localStorage. This is called once the user connects to firebase,
   * in order to ensure that remote and local data is kept in sync.
   */
  abstract writeValueToLocalStorage();

  /**
   * Helper method that parses and returns the given key from localStorage
   */
  protected getValueFromLocalStorage(key: string, defaultValue) {
    const value = window.localStorage.getItem(key);
    let v = null;
    try {
      v = JSON.parse(value);
    } catch (e) {
      console.error(`Couldn't parse ${key} from localStorage`, e);
    }
    return v === null ? defaultValue : v;
  }

  /**
   * Helper method that saves the given key and value into firebase, if the user is logged in.
   */
  protected saveFirebaseValue = (key: string, value) => {
    if (this.firebaseUserDoc) {
      setDoc(this.firebaseUserDoc, { [key]: value }, { merge: true });
    }
  };

  /**
   * Helper method that saves the given key and value in localStorage.
   */
  protected saveLocalStorageValue(key: string, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Helper method that saves the given value into both firebase and localStorage,
   * using the provided key, then re-renders UserDataContext.
   */
  protected updateValueAndRerender = (key: string, value) => {
    this.saveFirebaseValue(key, value);
    this.saveLocalStorageValue(this.getLocalStorageKey(key), value);
    this.triggerRerender();
  };
}
