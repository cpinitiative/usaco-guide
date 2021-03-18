import firebaseType from 'firebase';
import { Leaderboard } from './leaderboard';

export type GroupData = {
  id: string;
  name: string;
  description: string;
  ownerIds: string[];
  adminIds: string[];
  memberIds: string[];
  /**
   * Maps owner/admin/member ID's to information about that member
   */
  members: { [key: string]: MemberData };
  leaderboard: Leaderboard;
};

export enum GroupPermission {
  MEMBER = 'member',
  ADMIN = 'admin',
  OWNER = 'owner',
}

export type MemberData = {
  id: string;
  name: string;
  photoURL: string;
  permission: GroupPermission;
};

export type JoinGroupLink = {
  id: string;
  groupId: string;
  revoked: boolean;
  numUses: number;
  maxUses: number | null;
  expirationTime: firebaseType.firestore.Timestamp | null;
  usedBy: string[];
  author: string;
};

export const groupConverter = {
  toFirestore(
    group: Omit<GroupData, 'id'>
  ): firebaseType.firestore.DocumentData {
    return {
      name: group.name,
      description: group.description,
      ownerIds: group.ownerIds,
      adminIds: group.ownerIds,
      memberIds: group.ownerIds,
      members: group.members,
    };
  },

  fromFirestore(
    snapshot: firebaseType.firestore.QueryDocumentSnapshot,
    options: firebaseType.firestore.SnapshotOptions
  ): GroupData {
    return {
      ...snapshot.data(options),
      id: snapshot.id,
    } as GroupData;
  },
};

export const isUserAdminOfGroup = (group: GroupData, userId: string) => {
  return (
    !!group?.adminIds.includes(userId) || !!group?.ownerIds.includes(userId)
  );
};
