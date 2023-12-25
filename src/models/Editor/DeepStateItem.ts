import { Timestamp } from 'firebase/firestore';
import StateItem from './StateItem';

/**
 * Represents a state, like `ShallowStateItem`, but stores the actual value of
 * the state, rather than computing it when needed.
 */
export default class DeepStateItem<
  T extends {
    [key: string]: string;
  }
> extends StateItem<T> {
  private readonly _val: T;
  constructor(id: number, timestamp: Timestamp, value: T) {
    super(id, timestamp);
    this._val = value;
  }

  /**
   * The value of the state
   */
  get val(): T {
    return this._val;
  }
}
