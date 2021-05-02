import { Timestamp } from 'firebase/firestore';

export default class InitialTransaction {
  public readonly timestamp: Timestamp;
  constructor(timestamp?: Timestamp) {
    this.timestamp = timestamp || Timestamp.now();
  }

  public getFirebaseData(): {
    initial: true;
  } {
    return {
      initial: true,
    };
  }
  /**
   * Returns the storage size of the transaction, as defined by the firebase firestore size calculations
   * https://firebase.google.com/docs/firestore/storage-size
   */
  get storageSize() {
    // size of strings is the number of bytes of each string, plus 1 additional byte per string
    // strings include any string value as well as all the keys
    const strings = ['initial'];
    const sizeOfStrings = new Blob(strings).size + strings.length;

    // we have one boolean @ 1 byte each
    const sizeOfBooleans = 1;

    // firebase docs aren't too clear on this, but I think we add just 32 bytes for each map
    return sizeOfStrings + sizeOfBooleans + 32;
  }
}
