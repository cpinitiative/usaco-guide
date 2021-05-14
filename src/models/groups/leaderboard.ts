import { Timestamp } from 'firebase/firestore';
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
        bestScoreTimestamp: Timestamp;
        bestScoreSubmissionId: string;
      };
    };
  };
};
