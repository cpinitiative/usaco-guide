export default function getMembershipKey(
  permissionLevel: 'OWNER' | 'ADMIN' | 'MEMBER'
) {
  return permissionLevel == 'OWNER'
    ? 'ownerIds'
    : permissionLevel == 'ADMIN'
    ? 'adminIds'
    : 'memberIds';
}
