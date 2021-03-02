import { flow, makeAutoObservable, reaction, runInAction } from 'mobx';
import Group from './Group';
import firebaseType from 'firebase';
import RootStore from './RootStore';
import { GroupData } from '../models/groups/groups';

export default class GroupsStore {
  firebase: typeof firebaseType;
  rootStore: RootStore;

  /**
   * List of groups the current user is in
   */
  groups: Group[] = null;
  /**
   * The current group the user is browsing. Auto-updates when activeGroupId changes.
   */
  activeGroup: Group = null;
  /**
   * The ID of the current group the user is browsing. When this changes, activeGroup automatically updates.
   */
  activeGroupId: string = null;

  constructor(rootStore: RootStore) {
    this.firebase = rootStore.firebase;
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      firebase: false,
      rootStore: false,
      loadUserGroups: flow,
      loadActiveGroup: flow,
    });

    reaction(
      () => this.activeGroupId, // Observe everything that is used in the JSON.
      groupId => {
        if (this.activeGroup?.id !== groupId) {
          this.loadActiveGroup(groupId);
        }
      }
    );
  }

  *loadUserGroups() {
    const userId = this.rootStore.firebaseUser?.uid;
    if (!userId) {
      throw 'Firebase User ID is not defined. Is the user logged in?';
    }

    const snapshot = yield Promise.all(
      ['ownerIds', 'memberIds', 'adminIds'].map(key =>
        this.firebase
          .firestore()
          .collection('groups')
          .where(key, 'array-contains', userId)
          .get()
      )
    );

    this.groups = snapshot
      .map(snapshot =>
        snapshot.docs.map(doc => {
          const group = new Group(this, doc.id);
          group.updateFromJson(doc.data() as any);
          return group;
        })
      )
      .flat();
  }

  *loadActiveGroup(groupId: string) {
    if (groupId === null) {
      this.activeGroup = null;
      return;
    }

    // Check to see if we have already fetched the group info through loadUserGroups()
    // This data might be stale, so regardless we want to re-fetch the data.
    const currentGroup = this.groups?.find(group => group.id === groupId);
    if (this.activeGroup?.id !== groupId && currentGroup !== null) {
      runInAction(() => {
        this.activeGroup = currentGroup;
      });
    }

    const groupSnapshot = yield this.firebase
      .firestore()
      .collection('groups')
      .doc(groupId)
      .get();
    if (!this.activeGroup) {
      runInAction(() => {
        this.activeGroup = new Group(this, groupId);
      });
    }
    if (this.activeGroup.id !== groupId) {
      // stale request?
      return;
    }
    runInAction(() => {
      this.activeGroup.updateFromJson(groupSnapshot.data() as GroupData);
    });
  }

  handleLogOut() {
    this.groups = null;
    this.activeGroup = null;
    this.activeGroupId = null;
  }
}
