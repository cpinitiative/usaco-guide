import {
  getObserverTree,
  makeAutoObservable,
  reaction,
  runInAction,
} from 'mobx';
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
    // const group = new Group(this.firebase, snapshot.id);
    // group.updateFromJson(data);
    // return group;
    throw "shouldn't be called";
  },
};

export default class GroupsStore {
  firebase: typeof firebaseType;
  groups: Group[] = null;
  activeGroup: Group = null;
  activeGroupId = null;

  constructor(firebase: typeof firebaseType) {
    this.firebase = firebase;
    makeAutoObservable(this, {
      firebase: false,
    });
    reaction(
      () => this.activeGroupId, // Observe everything that is used in the JSON.
      groupId => {
        if (this.activeGroup?.groupId !== groupId) {
          this.loadActiveGroup(groupId);
        }
      }
    );
  }

  async loadGroups(userId: string): Promise<void> {
    const snapshot = await Promise.all(
      ['ownerIds', 'memberIds', 'adminIds'].map(key =>
        this.firebase
          .firestore()
          .collection('groups')
          .where(key, 'array-contains', userId)
          .get()
      )
    );
    const data = snapshot
      .map(snapshot =>
        snapshot.docs.map(doc => {
          const group = new Group(this.firebase, doc.id);
          group.updateFromJson(doc.data() as any);
          return group;
        })
      )
      // @ts-ignore
      .flat();
    runInAction(() => {
      this.groups = data;
    });
  }

  async loadActiveGroup(groupId: string) {
    console.log('loading group ', groupId);
    if (groupId === null) {
      this.activeGroup = null;
      return;
    }
    const currentGroup = this.groups?.find(group => group.groupId === groupId);
    if (this.activeGroup?.groupId !== groupId && currentGroup !== null) {
      runInAction(() => {
        this.activeGroup = currentGroup;
      });
    }
    const snapshot = await this.firebase
      .firestore()
      .collection('groups')
      .doc(groupId)
      .get();
    if (!this.activeGroup) {
      runInAction(() => {
        this.activeGroup = new Group(this.firebase, groupId);
      });
    }
    if (this.activeGroup.groupId !== groupId) {
      // stale request?
      return;
    }
    runInAction(() => {
      this.activeGroup.updateFromJson(snapshot.data() as any);
    });
  }

  handleLogOut = () => {
    this.groups = null;
    this.activeGroup = null;
    this.activeGroupId = null;
  };
}
