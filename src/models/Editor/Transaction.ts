import { Timestamp } from 'firebase/firestore';
import { Blob } from 'blob-polyfill';

/**
 * A transaction is a patch that describes the changes from one state to another state, as well as the time at which this change was made.
 */
export default class Transaction<
  T extends {
    [key: string]: string;
  }
> {
  /**
   * The numeric identifier of the transaction, which should be unique within a block.
   */
  public readonly timestamp: Timestamp;
  /**
   * An object mapping keys to patches, in GNU diff/patch format.
   */
  public readonly patches: T;

  constructor(patches: T, timestamp?: Timestamp) {
    this.timestamp = timestamp || Timestamp.now();
    this.patches = patches;
  }

  /**
   * Returns this timestamp, represented as an object that can be uploaded to firebase
   */
  public getFirebaseData(): {
    timestamp: Timestamp;
    patches: T;
  } {
    return {
      timestamp: this.timestamp,
      patches: this.patches,
    };
  }

  /**
   * Returns the storage size of the transaction, as defined by the firebase firestore size calculations
   * https://firebase.google.com/docs/firestore/storage-size
   */
  get storageSize() {
    // size of strings is the number of bytes of each string, plus 1 additional byte per string
    // strings include any string value as well as all the keys
    const strings = [
      'timestamp',
      'patches',
      ...Object.keys(this.patches),
      ...Object.values(this.patches),
    ];
    const sizeOfStrings = new Blob(strings).size + strings.length;

    // we have one timestamp @ 8 bytes per timestamp
    const sizeOfTimestamps = 8;

    // firebase docs aren't too clear on this, but I think we add just 32 bytes for each map
    // there are two maps: the map that we return, as well as the patches map
    return sizeOfStrings + sizeOfTimestamps + 32 + 32;
  }
}
