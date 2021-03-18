import { ExecutionStatus, ProblemData } from './problem';
import firebaseType from 'firebase';

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
        bestSubmissionId: string;
      };
    };
  };
};
