import firebaseType from 'firebase';
import { ExecutionStatus } from './problem';

export type Leaderboard = {
  // post ID
  [key: string]: {
    // problem ID
    [key: string]: {
      // user ID
      [key: string]: {
        bestScore: number;
        bestScoreStatus: ExecutionStatus;
        bestScoreTimestamp: firebaseType.firestore.Timestamp;
        bestScoreSubmissionId: string;
      };
    };
  };
};
