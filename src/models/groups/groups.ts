import { Timestamp } from 'firebase/firestore';
import { Leaderboard } from './leaderboard';

export type GroupData = {
  id: string;
  name: string;
  description: string;
  ownerIds: string[];
  adminIds: string[];
  memberIds: string[];
  leaderboard: Leaderboard;
};

export enum GroupPermission {
  MEMBER = 'member',
  ADMIN = 'admin',
  OWNER = 'owner',
}

export type JoinGroupLink = {
  id: string;
  groupId: string;
  revoked: boolean;
  numUses: number;
  maxUses: number | null;
  expirationTime: Timestamp | null;
  usedBy: string[];
  author: string;
};

export const isUserAdminOfGroup = (
  group: GroupData,
  userId: string
): boolean => {
  return (
    !!group?.adminIds.includes(userId) || !!group?.ownerIds.includes(userId)
  );
};
