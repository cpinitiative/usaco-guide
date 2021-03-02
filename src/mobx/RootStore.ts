import GroupsStore from './GroupsStore';
import firebaseType from 'firebase';
import { makeAutoObservable } from 'mobx';
import type firebase from 'firebase';
import UiStore from './UiStore';

export default class RootStore {
  firebase: typeof firebaseType = null;
  groupsStore: GroupsStore = null;
  uiStore: UiStore = null;

  firebaseUser: firebase.User = null;

  constructor(firebase) {
    this.firebase = firebase;
    this.groupsStore = new GroupsStore(this);
    this.uiStore = new UiStore(this);

    makeAutoObservable(this, {
      firebase: false,
      groupsStore: false,
      uiStore: false,
    });
  }
}
