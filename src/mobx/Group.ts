import {
  makeAutoObservable,
  onBecomeObserved,
  onBecomeUnobserved,
  runInAction,
} from 'mobx';
import { Post } from './Post';
import GroupsStore from './GroupsStore';
import { GroupData, MemberData } from '../models/groups/groups';
import firebaseType from 'firebase';

enum GroupPermission {
  MEMBER = 'member',
  ADMIN = 'admin',
  OWNER = 'owner',
}
export default class Group {
  firebase: typeof firebaseType;
  groupsStore: GroupsStore;
  unsubscribePosts;

  id = ''; // immutable
  name = '';
  description: string = '';
  ownerIds: string[] = [];
  adminIds: string[] = [];
  memberIds: string[] = [];
  members: { [key: string]: MemberData };
  posts: Post[] = [];

  // todo: return true if user is admin of this group
  isUserAdmin = true;
  creatingNewPost = false;
  currentFeed: 'all' | 'assignments' | 'announcements' = 'all';

  constructor(groupsStore: GroupsStore, groupId) {
    this.firebase = groupsStore.firebase;
    this.groupsStore = groupsStore;
    this.id = groupId;

    makeAutoObservable(this, {
      firebase: false,
      groupsStore: false,
      id: false,
      unsubscribePosts: false,
      resumePosts: false,
      suspendPosts: false,
    });
    onBecomeObserved(this, 'posts', this.resumePosts);
    onBecomeUnobserved(this, 'posts', this.suspendPosts);
  }

  updateFromJson(json: GroupData) {
    this.name = json.name;
    this.description = json.description;
    this.ownerIds = json.ownerIds;
    this.adminIds = json.adminIds;
    this.memberIds = json.memberIds;
    this.members = json.members;
  }

  resumePosts = () => {
    this.unsubscribePosts = this.firebase
      .firestore()
      .collection('groups')
      .doc(this.id)
      .collection('posts')
      .onSnapshot(snap => {
        runInAction(() => {
          this.posts
            .filter(post => !snap.docs.includes(post.id))
            .forEach(post => this.removePost(post));
          snap.docs.forEach(doc => {
            this.updatePostFromFirebaseDoc(doc);
          });
        });
      });
  };

  suspendPosts = () => {
    this.unsubscribePosts();
  };

  updatePostFromFirebaseDoc(doc) {
    let post = this.posts.find(post => post.id === doc.id);
    if (!post) {
      post = new Post(this, doc.id);
      this.posts.push(post);
    }
    post.updateFromJson(doc.data());
  }

  async createNewPost() {
    this.creatingNewPost = true;
    const ref = await this.firebase
      .firestore()
      .collection('groups')
      .doc(this.id)
      .collection('posts')
      .add({
        title: 'Untitled Post',
        timestamp: this.firebase.firestore.Timestamp.now(),
        isPublished: false,
      });
    runInAction(() => {
      this.creatingNewPost = false;
    });
    return ref.id;
  }

  removePost(post) {
    if (this.posts.indexOf(post) !== -1)
      this.posts.splice(this.posts.indexOf(post), 1);
    post.dispose();
  }

  get feed(): Post[] {
    return this.posts
      .filter(post => {
        if (!this.isUserAdmin && !post.isPublished) return false;
        if (this.currentFeed === 'all') return true;
        if (this.currentFeed === 'assignments') return post.isAssignment;
        if (this.currentFeed === 'announcements') return post.isAnnouncement;
        throw 'unknown feed ' + this.currentFeed;
      })
      .sort((a, b) => {
        if (a.pinned !== b.pinned)
          return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
        return b.timestamp.toMillis() - a.timestamp.toMillis();
      });
  }
}

// if any of the conditions are not met, the link should not work: expires is before now, numUses is less than maxUses
// interface GroupInvite {
//   groupId: string;
//   expires: firebase.firestore.Timestamp;
//   numUses: number;
//   maxUses: number;
// }
