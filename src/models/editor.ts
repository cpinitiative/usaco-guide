import { diff_match_patch } from 'diff-match-patch';
import { Timestamp } from 'firebase/firestore';

/**
 * A transaction is a patch that describes the changes from one state to another state, as well as the time at which this change was made.
 */
export class Transaction<
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

/**
 * The maximum amount of storage size per block, in bytes. Firebase limits each document
 * to 1MB, and we store each block as a single document, so the cap should be
 * below 1MB. Our size calculations are not exact, so this is currently set to
 * 0.9MB / 900KB.
 */
const MAX_BLOCK_STORAGE_SIZE = 900 * 1000;
const diffMatchPatch: diff_match_patch = new diff_match_patch();

/**
 *
 * @param newText
 * @param oldText
 * @protected
 * @returns a text patch indicating how to go from fromText to toText
 */
function makePatch(fromText: string, toText: string): string {
  return diffMatchPatch.patch_toText(
    diffMatchPatch.patch_make(toText, fromText)
  );
}

/**
 *
 * @param text
 * @param patch
 * @protected
 * @returns the result of applying the patch to fromText (ie, given
 * fromText and a patch from fromText to toText, returns toText)
 */
function applyPatch(fromText: string, patch: string): string {
  const patchResult = diffMatchPatch.patch_apply(
    diffMatchPatch.patch_fromText(patch),
    fromText
  );
  if (patchResult[1].some(res => !res)) {
    console.log(fromText, patch, patchResult);
    throw new Error('Failed to apply patch due to one or more conflicts.');
  }
  return patchResult[0];
}
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
export class Block<
  T extends {
    [key: string]: string;
  }
> {
  private _state: T;
  public readonly id: string;
  public startTimestamp: Timestamp;

  // We can't use Transaction<T> because T could be an object type
  // with literal values, like {markdown:"something"|"something_else"}.
  private readonly _transactions: Transaction<
    {
      [k in keyof T]: string;
    }
  >[];
  private _sealed: boolean;
  public version = 1;
  public transactionIdOffset: number;
  constructor(id: string, state: T) {
    this.id = id;
    this._state = state;
    this._transactions = [];
  }

  public saveState(newState: T): void {
    const patches: {
      [k in keyof T]: string;
    } = newState;
    for (const key in newState) {
      patches[key] = makePatch(newState[key], this.state[key]);
    }
    this._transactions.push(new Transaction(patches));
    this._state = newState;
  }

  /**
   * Returns the state stored during the transaction at index `index`
   * @param index
   */
  public getState(index: number) {
    return this.transactions.slice(index).reduce(
      (currentRestoredState, transaction) => {
        return {
          markdown: applyPatch(
            currentRestoredState.markdown,
            transaction.patches.markdown
          ),
          problems: applyPatch(
            currentRestoredState.problems,
            transaction.patches.problems
          ),
        };
      },
      {
        markdown: this.state.markdown,
        problems: this.state.problems,
      }
    );
  }
  get transactions(): Transaction<
    {
      [k in keyof T]: string;
    }
  >[] {
    return this._transactions;
  }

  /**
   * Seal the block, which represents that it no longer contains the most current edits, and
   * that it may no longer be updated.
   */
  public seal() {
    if (this._sealed) {
      throw new Error('Block: Cannot seal an already-sealed block.');
    }
    this._sealed = true;
  }

  get state(): T {
    return this._state;
  }

  get sealed(): boolean {
    return this._sealed;
  }

  /**
   * Returns this block, represented as an object that can be uploaded to firebase
   */
  public getFirebaseData() {
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
//
// export default class EditorDataModel {
//   public readonly id: string;
//   public openBlock: Block<{
//     markdown: string;
//     problems: string;
//   }>;
//   public sealedBlocks: Block<{
//     markdown: string;
//     problems: string;
//   }>[];
//
//   public markdown = '';
//   public problems = '';
//
//   constructor(id: string) {
//     this.id = id;
//     this.openBlock = new Block(id, {
//       markdown: '',
//       problems: '',
//     });
//   }
//
//   saveState(newMarkdown: string, newProblems: string) {
//     this.openBlock.addState(
//       {
//         problems: newProblems,
//         markdown: newMarkdown,
//       },
//       new Transaction(this.openBlock.transactions.length, {
//         problems: EditorDataModel.makePatch(newProblems, this.problems),
//         markdown: EditorDataModel.makePatch(newMarkdown, this.markdown),
//       })
//     );
//     this.problems = newProblems;
//     this.markdown = newMarkdown;
//   }
//   getPastState(id: number) {
//     const blockWithTransaction =
//       id >= this.openBlock.transactions[0].id
//         ? this.openBlock
//         : this.sealedBlocks.find(
//             b =>
//               id >= b.transactions[0].id &&
//               id <= b.transactions[b.transactions.length - 1].id
//           );
//     blockWithTransaction.transactionsAtAfter(id).reduce(
//       (currentRestoredState, transaction) => {
//         return {
//           markdown: EditorDataModel.applyPatch(
//             currentRestoredState.markdown,
//             transaction.patches.markdown
//           ),
//           problems: EditorDataModel.applyPatch(
//             currentRestoredState.problems,
//             transaction.patches.problems
//           ),
//         };
//       },
//       {
//         markdown: blockWithTransaction.state.markdown,
//         problems: blockWithTransaction.state.problems,
//       }
//     );
//   }
// }
