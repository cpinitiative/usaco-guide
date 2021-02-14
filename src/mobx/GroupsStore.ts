import { makeAutoObservable, runInAction } from 'mobx';
import Group from './Group';
import firebaseType from 'firebase';
enum GroupPermission {
  MEMBER = 'member',
  ADMIN = 'admin',
  OWNER = 'owner',
}

export const groupConverter = {
  toFirestore(group: Group): firebaseType.firestore.DocumentData {
    return {
      ownerIds: group.ownerIds,
      adminIds: group.ownerIds,
      memberIds: group.ownerIds,
      members: group.members,
      name: group.name,
      detail: group.detail,
    };
  },

  fromFirestore(
    snapshot: firebaseType.firestore.QueryDocumentSnapshot,
    options: firebaseType.firestore.SnapshotOptions
  ): Group {
    const data = snapshot.data(options) as {
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
    };
    return new Group(data);
  },
};

export default class GroupsStore {
  firebase: typeof firebaseType;
  groups: { data: Group[]; error } = { data: null, error: null };
  activeGroup: { data: Group; error } = { data: null, error: null };

  constructor(firebase: typeof firebaseType) {
    this.firebase = firebase;
    makeAutoObservable(this);
  }

  async loadGroups(userId: string): Promise<void> {
    const snapshot = await Promise.all(
      ['ownerIds', 'memberIds', 'adminids'].map(key =>
        this.firebase
          .firestore()
          .collection('groups')
          .where(key, 'array-contains', userId)
          .withConverter(groupConverter)
          .get()
      )
    );
    const data = snapshot
      .map(snapshot => snapshot.docs.map(doc => doc.data()))
      .flat();
    runInAction(() => {
      this.groups.data = data;
    });
  }

  async loadCurrentGroup(groupId: string) {
    const snapshot = await this.firebase
      .firestore()
      .collection('groups')
      .doc(groupId)
      .withConverter(groupConverter)
      .get();
    const data = snapshot.data();
    runInAction(() => {
      this.activeGroup.data = data;
    });
  }
}
