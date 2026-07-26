export const groupId = 'test-group-1';

export const members = [
  { uid: 'user-1', displayName: 'Alice' },
  { uid: 'user-2', displayName: 'Bob' },
  { uid: 'user-3', displayName: 'Charlie' },
];

export const joinKey = 'join-key-123';

export const testGroupData = {
  id: groupId,
  name: 'Test Group',
  ownerIds: [members[0].uid],
  adminIds: [],
  memberIds: [members[0].uid],
  problemIds: [],
};
