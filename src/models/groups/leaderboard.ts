import { Timestamp } from 'firebase/firestore';
import { ExecutionVerdict } from './problem';

export type Leaderboard = {
  // post ID
  [key: string]: {
    // problem ID
    [key: string]: {
      // user ID
      [key: string]: {
        bestScore: number;
        bestScoreStatus: ExecutionVerdict;
        bestScoreTimestamp: Timestamp;
        bestScoreSubmissionId: string;
      };
    };
  };
};
