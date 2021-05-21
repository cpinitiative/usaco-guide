import { Timestamp } from 'firebase/firestore';
import Block from './Block';
import DeepStateItem from './DeepStateItem';
import StateItem from './StateItem';

/**
 * Represents a state, like `DeepStateItem`, but does not store the actual value of
 * the state. Rather, it is computed when needed (ie when .val is accessed).
 */
export default class ShallowStateItem<
  T extends {
    [key: string]: string;
  }
> extends StateItem<T> {
  protected block: Block<T>;

  constructor(id: number, timestamp: Timestamp, block: Block<T>) {
    super(id, timestamp);
    this.block = block;
  }

  /**
   * The value of the state (will be computed when requested)
   */
  get val(): T {
    return this.block.getState(this.id, true).val;
  }

  /**
   * Computes the state, and gets the appropriate deep state item (which ensures
   * that the state will be stored and not re-computed the next time it is needed).
   */
  public getDeepStateItem(): DeepStateItem<T> {
    return new DeepStateItem<T>(this.id, this.timestamp, this.val);
  }
}
