import { Timestamp } from 'firebase/firestore';
import { ExecutionVerdict } from './problem';

export type Leaderboard = {
  [postID: string]: {
    [problemID: string]: {
      [userID: string]: {
        bestScore: number;
        bestScoreStatus: ExecutionVerdict;
        bestScoreTimestamp: Timestamp;
        bestScoreSubmissionId: string;
      };
    };
  };
};
