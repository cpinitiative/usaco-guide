import firebaseType from 'firebase';

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
};

export enum GroupPermission {
  MEMBER = 'member',
  ADMIN = 'admin',
  OWNER = 'owner',
}

export type MemberData = {
  id: string;
  name: string;
  permission: GroupPermission;
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

// todo: actually implement this properly
export const isUserAdminOfGroup = (group: GroupData, userId: string) => true;
