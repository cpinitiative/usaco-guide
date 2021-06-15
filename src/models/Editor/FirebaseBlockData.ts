import { Timestamp } from 'firebase/firestore';
import { Patches } from './Block';

export default interface FirebaseBlockData<T> {
  startTimestamp: Timestamp;
  sealed: boolean;
  transactions: (
    | { initial: true }
    | {
        timestamp: Timestamp;
        patches: Patches<T>;
      }
  )[];
}
