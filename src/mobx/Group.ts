import { makeAutoObservable } from 'mobx';
enum GroupPermission {
  MEMBER = 'member',
  ADMIN = 'admin',
  OWNER = 'owner',
}
export default class Group {
  groupId = '';
  name = '';
  detail?: string = '';
  ownerIds: string[] = [];
  adminIds: string[] = [];
  memberIds: string[] = [];
  members: {
    name: string;
    id: string;
    permission: GroupPermission;
  }[] = [];

  constructor({
    groupId,
    ownerIds,
    adminIds,
    memberIds,
    members,
    name,
    detail,
  }: {
    groupId: string;
    ownerIds: string[];
    adminIds: string[];
    memberIds: string[];
    members: {
      name: string;
      id: string;
      permission: GroupPermission;
    }[];
    name: string;
    detail?: string;
  }) {
    this.groupId = groupId;
    this.ownerIds = ownerIds;
    this.adminIds = adminIds;
    this.memberIds = memberIds;
    this.members = members;
    this.name = name;
    this.detail = detail;

    makeAutoObservable(this);
  }
}

// if any of the conditions are not met, the link should not work: expires is before now, numUses is less than maxUses
// interface GroupInvite {
//   groupId: string;
//   expires: firebase.firestore.Timestamp;
//   numUses: number;
//   maxUses: number;
// }
