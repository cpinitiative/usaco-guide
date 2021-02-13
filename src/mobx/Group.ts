import { makeAutoObservable } from 'mobx';

export default class Group {
  constructor() {
    makeAutoObservable(this);
  }
}

// enum GroupPermission {
//   MEMBER = "member",
//   ADMIN = "admin",
//   OWNER = "owner",
// }
//
// interface Group {
//   ownerIds: string[];
//   adminIds: string[];
//   memberIds: string[];
//   members: {
//     name: string;
//     id: string;
//     permission: GroupPermission;
//   }[];
//   name: string;
//   detail?: string;
// }
//
// // if any of the conditions are not met, the link should not work: expires is before now, numUses is less than maxUses
// interface GroupInvite {
//   groupId: string;
//   expires: firebase.firestore.Timestamp;
//   numUses: number;
//   maxUses: number;
// }
