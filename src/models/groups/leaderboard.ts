import { ExecutionStatus, ProblemData } from './problem';
import firebaseType from 'firebase';

export type Leaderboard = {
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

export const getTotalPointsOfUserFromLeaderboard = (
  leaderboard: Leaderboard,
  userId: string
) => {
  return Object.keys(leaderboard).reduce((acc, problemId) => {
    return acc + (leaderboard[problemId][userId]?.bestScore || 0);
  }, 0);
};
