import GroupsStore from './GroupsStore';
import firebaseType from 'firebase';
import { makeAutoObservable } from 'mobx';
import type firebase from 'firebase';

export default class RootStore {
  firebase: typeof firebaseType = null;
  groupsStore = null;

  firebaseUser: firebase.User = null;

  constructor(firebase) {
    this.firebase = firebase;
    this.groupsStore = new GroupsStore(this);

    makeAutoObservable(this, {
      firebase: false,
      groupsStore: false,
    });
  }
}
