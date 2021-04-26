import { Timestamp } from 'firebase/firestore';

export type UserSolutionForProblem = {
  id: string;
  userID: string;
  userName: string;
  problemID: string;
  isPublic: boolean;
  solutionCode: string;
  upvotes: string[];
  language: 'cpp' | 'java' | 'py' | 'unknown';
  timestamp: Timestamp;
};
