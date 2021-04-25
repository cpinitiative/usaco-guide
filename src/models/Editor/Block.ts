import { Timestamp } from 'firebase/firestore';
import DeepStateItem from './DeepStateItem';
import FirebaseBlockData from './FirebaseBlockData';
import InitialTransaction from './InitialTransaction';
import { applyPatch, makePatch } from './patchUtils';
import ShallowStateItem from './ShallowStateItem';
import Transaction from './Transaction';

export type Patches<T> = {
  [k in keyof T]: string;
};
/**
 * When used below, the current state of the editor is the content of the editor
 * the last (or most recent) time that it has been saved by the user, across blocks.
 *
 * A block stores the saved states of the editor between two points in time.
 * A block is either open or sealed. If the block is sealed, it has been superseded
 * with at least one newer block. This means that the block no longer contains the
 * current state of the editor, and also can no longer be modified. If a block is
 * open, it is the most recent block, and contains the current state of the editor.
 * Whenever the editor is saved, the most recent block (which is the open block), will
 * be updated so it stores the new state of the editor.
 */
export default class Block<
  T extends {
    [key: string]: string;
  }
> {
  private _state: T;
  public readonly id: string;
  public startTimestamp: Timestamp;

  // We can't use Transaction<T> because T could be an object type
  // with literal values, like {markdown:"something"|"something_else"}.
  /**
   * Represents the transactions stored in the block. The first transaction must
   * be an initial transaction, and all later transactions should be (non-initial)
   * transactions.
   * @private
   */
  private readonly _transactions: [
    InitialTransaction,
    ...Transaction<Patches<T>>[]
  ];
  private _sealed: boolean;
  public readonly version = 1;
  protected transactionIdOffset: number;

  /**
   * Creates a Block with the given initial state. The ID of the initial state will
   * always be `0`.
   * @param id - The ID of the block
   * @param state - The initial state
   */
  constructor(id: string, state: T) {
    this.id = id;
    this._state = state;
    this._transactions = [new InitialTransaction()];
  }

  /**
   *
   * @param newState - The state to save
   * @returns - A numeric ID which can be passed to getState() to retrieve the stored `newState`
   */
  public saveState(newState: T): number {
    const patches: {
      [k in keyof T]: string;
    } = { ...newState };
    for (const key in patches) {
      patches[key] = makePatch(this.state[key], newState[key]);
    }
    this._transactions.push(new Transaction(patches));
    this._state = newState;
    return this._transactions.length - 1;
  }

  /**
   * Returns all stored states, as shallow state items.
   * If you plan on immediately using all values, call with deep: true instead for better efficiency.
   */
  public getStates(deep?: false): ShallowStateItem<T>[];

  /**
   * Returns all stored states, as deep state items.
   */
  public getStates(deep: true): DeepStateItem<T>[];

  /**
   * Returns stored states with the given ids, as shallow state items.
   */
  public getStates(ids: number[], deep?: false): ShallowStateItem<T>[];

  /**
   * Returns stored states with the given ids or shallow state items, as deep state items.
   * This is more efficient than calling .val on each shallow state item individually.
   */
  public getStates(
    ids: (number | ShallowStateItem<T>)[],
    deep: true
  ): DeepStateItem<T>[];

  public getStates(
    idsOrDeep?: boolean | (number | ShallowStateItem<T>)[],
    deep: boolean = null
  ): ShallowStateItem<T>[] | DeepStateItem<T>[] {
    let ids;
    if (typeof idsOrDeep === 'boolean') {
      deep = idsOrDeep;
      ids = null;
    } else {
      ids = idsOrDeep;
    }
    if (deep) {
      return this.getDeepStates(ids);
    } else if (ids) {
      return ids.map(id => {
        const transaction = this.transactions[id];
        if (!transaction) {
          throw new Error(
            "Unable to fetch specified ID because it doesn't exit."
          );
        }
        return new ShallowStateItem(id, transaction.timestamp, this);
      });
    } else {
      return this.transactions.map(
        (t, i) => new ShallowStateItem(i, t.timestamp, this)
      );
    }
  }

  /**
   * Get the stored state with the given `id`, as a shallow state item.
   * @param id
   * @param deep
   */
  public getState(id: number, deep?: false): ShallowStateItem<T>;

  /**
   * Get the stored state with the given `id`, as a deep state item.
   * @param id
   * @param deep.
   */
  public getState(id: number, deep: true): DeepStateItem<T>;

  public getState(
    id: number,
    deep = false
  ): ShallowStateItem<T> | DeepStateItem<T> {
    if (deep) {
      return this.getStates([id], true)[0];
    } else {
      if (id >= this.transactions.length) {
        throw new Error('Unable to find a state with the given ID.');
      }
      return new ShallowStateItem(id, this.transactions[id].timestamp, this);
    }
  }

  /**
   * Returns all stored state values.
   */
  protected getDeepStates(ids): DeepStateItem<T>[];

  /**
   * Retrieves the states with given ids, as a `DeepStateItem`.
   * This is more efficient than accessing the value of each shallow state item separately.
   * @param ids
   */
  protected getDeepStates(
    ids: (number | ShallowStateItem<T>)[]
  ): DeepStateItem<T>[];

  protected getDeepStates(
    ids: (number | ShallowStateItem<T>)[] = []
  ): DeepStateItem<T>[] {
    let processedIds: number[];
    if (!ids) {
      ids = [];
    }
    if (ids.length == 0) {
      processedIds = this.transactions.map((el, i) => i);
    } else {
      processedIds = ids.map(
        id => (typeof id === 'number' ? id : id.id) as number
      );
    }

    const lowestIndex = processedIds.reduce((smallest, el) =>
      Math.min(smallest, el)
    );
    let current = {
      markdown: this.state.markdown,
      problems: this.state.problems,
    };
    const returnArr = Array(processedIds.length).fill(null);

    // the most recent state is not included
    if (processedIds.includes(this.transactions.length - 1)) {
      returnArr[
        processedIds.indexOf(this.transactions.length - 1)
      ] = new DeepStateItem(
        this.transactions.length - 1,
        this.transactions[this.transactions.length - 1].timestamp,
        current
      );
    }
    (this.transactions.slice(lowestIndex + 1) as Transaction<T>[])
      .map((t, i) => ({
        transaction: t,
        id: lowestIndex + 1 + i,
      }))
      .reverse()
      .forEach(({ transaction, id }) => {
        current = {
          markdown: applyPatch(current.markdown, transaction.patches.markdown),
          problems: applyPatch(current.problems, transaction.patches.problems),
        };

        // need to use id - 1 because a transaction is how to go from state A to B, where
        // B is `current`, and `id` refers to B. Thus, id - ` allows us to get A.
        if (processedIds.includes(id - 1)) {
          returnArr[processedIds.indexOf(id - 1)] = new DeepStateItem(
            id - 1,
            transaction.timestamp,
            current
          );
        }
      }, {});
    return returnArr;
  }

  protected get transactions(): (
    | InitialTransaction
    | Transaction<Patches<T>>
  )[] {
    return this._transactions.slice();
  }

  /**
   * Seal the block, which represents that it no longer contains the most current edits, and
   * that it may no longer be updated.
   */
  public seal(): void {
    if (this._sealed) {
      throw new Error('Block: Cannot seal an already-sealed block.');
    }
    this._sealed = true;
  }

  /**
   * The current stored state
   */
  get state(): T {
    return this._state;
  }

  get sealed(): boolean {
    return this._sealed;
  }

  /**
   * Returns this block, represented as an object that can be uploaded to firebase
   */
  public getFirebaseData(): FirebaseBlockData<T> {
    return {
      startTimestamp: this.startTimestamp,
      sealed: this.sealed,
      transactions: this.transactions.map(transaction =>
        transaction.getFirebaseData()
      ),
    };
  }

  /**
   * Returns the storage size of this block, if the result of `getFirebaseData` was
   * the value of a firebase document.
   */
  public getFirebaseDataStorageSize(): number {
    // the ID is not a field in the document, so we calculate it separately
    // IDxxx_____xxxxx_____ is a placeholder to represent the automatic ids generated by firebase, each 20 chars long
    const documentPathArr = `editor-documents/IDxxx_____xxxxx_____/edit-blocks/${this.id}`.split(
      '/'
    );
    const sizeOfName =
      new Blob(documentPathArr).size + documentPathArr.length + 16;

    // each string's size is 1 + UTF-8 bytes.
    // doesn't include the id of the document
    const strings = [
      'state',
      'timestamp',
      'transactions',
      'version',
      ...Object.keys(this.state),
      ...Object.values(this.state),
    ];
    const sizeOfStrings = new Blob(strings).size + strings.length;

    // two numbers (the ID and version) and 8 bytes per number
    const sizeOfNumbers = 2 * 8;

    // one timestamp, 8 bytes per timestamp
    const sizeOfTimestamp = 8;

    const sizeOfTransactions = this.transactions.reduce(
      (acc, el) => acc + el.storageSize,
      0
    );

    // we add 32 bytes twice: once for the document map, and again for the state map
    return (
      sizeOfName +
      sizeOfStrings +
      sizeOfNumbers +
      sizeOfTimestamp +
      sizeOfTransactions +
      32 +
      32
    );
  }
}
