import { Timestamp } from 'firebase/firestore';

export default abstract class StateItem<
  T extends {
    [key: string]: string;
  }
> {
  public readonly id: number;
  public readonly timestamp: Timestamp;
  abstract get val(): T;

  protected constructor(id: number, timestamp: Timestamp) {
    this.id = id;
    this.timestamp = timestamp;
  }
}
