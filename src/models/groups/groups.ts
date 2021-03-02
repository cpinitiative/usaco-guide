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

enum GroupPermission {
  MEMBER = 'member',
  ADMIN = 'admin',
  OWNER = 'owner',
}

export type MemberData = {
  id: string;
  name: string;
  permission: GroupPermission;
};
