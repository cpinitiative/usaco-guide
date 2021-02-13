import { makeAutoObservable, runInAction } from 'mobx';
import Group from './Group';

export default class GroupsStore {
  groups: { data: Group[]; error } = { data: null, error: null };
  activeGroup: { data: Group; error } = { data: null, error: null };

  constructor() {
    makeAutoObservable(this);
  }

  loadGroups() {
    // todo: implement
    setTimeout(() => {
      runInAction(() => {
        this.groups.data = [
          // new Group()
        ];
      });
    }, 1000);
  }

  loadCurrentGroup(groupId: string) {
    setTimeout(() => {
      runInAction(() => {
        this.activeGroup.data = new Group();
      });
    }, 1000);
  }
}
