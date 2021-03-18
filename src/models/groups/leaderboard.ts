import { ProblemData } from './problem';

export type Leaderboard = {
  // problem ID
  [key: string]: {
    // user ID
    [key: string]: number;
  };
};

export const getTotalPointsOfUserFromLeaderboard = (
  leaderboard: Leaderboard,
  userId: string
) => {
  return Object.keys(leaderboard).reduce((acc, problemId) => {
    return acc + (leaderboard[problemId][userId] || 0);
  }, 0);
};
