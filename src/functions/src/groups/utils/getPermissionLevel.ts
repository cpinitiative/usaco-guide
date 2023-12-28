export default function getPermissionLevel(
  userId: string,
  groupData: {
    ownerIds: string[];
    adminIds: string[];
    memberIds: string[];
  }
): 'OWNER' | 'ADMIN' | 'MEMBER' | 'NOT_MEMBER' {
  return groupData.ownerIds.includes(userId)
    ? 'OWNER'
    : groupData.adminIds.includes(userId)
    ? 'ADMIN'
    : groupData.memberIds.includes(userId)
    ? 'MEMBER'
    : 'NOT_MEMBER';
}
