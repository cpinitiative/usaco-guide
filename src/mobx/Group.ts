import {
  makeAutoObservable,
  onBecomeObserved,
  onBecomeUnobserved,
  runInAction,
  trace,
} from 'mobx';
import { Post } from './Post';
enum GroupPermission {
  MEMBER = 'member',
  ADMIN = 'admin',
  OWNER = 'owner',
}
export default class Group {
  groupId = ''; // immutable
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
  posts: Post[] = [];
  creatingNewPost = false;
  firebase;
  unsubscribePosts;
  // todo: return true if user is admin of this group
  isUserAdmin = true;

  constructor(firebase, groupId) {
    this.firebase = firebase;
    this.groupId = groupId;

    makeAutoObservable(this, {
      firebase: false,
      groupId: false,
      unsubscribePosts: false,
      resumePosts: false,
      suspendPosts: false,
    });
    onBecomeObserved(this, 'posts', this.resumePosts);
    onBecomeUnobserved(this, 'posts', this.suspendPosts);
  }

  updateFromJson(json: {
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
    this.ownerIds = json.ownerIds;
    this.adminIds = json.adminIds;
    this.memberIds = json.memberIds;
    this.members = json.members;
    this.name = json.name;
    this.detail = json.detail;
  }

  resumePosts = () => {
    this.unsubscribePosts = this.firebase
      .firestore()
      .collection('groups')
      .doc(this.groupId)
      .collection('posts')
      .onSnapshot(snap => {
        runInAction(() => {
          this.posts
            .filter(post => !snap.docs.includes(doc => doc.id === post.id))
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

  createNewPost() {
    this.creatingNewPost = true;
    // todo: create new post, return promise or something
    setTimeout(() => {
      this.creatingNewPost = false;
    }, 1000);
  }

  removePost(post) {
    this.posts.splice(this.posts.indexOf(post), 1);
    post.dispose();
  }
}

// if any of the conditions are not met, the link should not work: expires is before now, numUses is less than maxUses
// interface GroupInvite {
//   groupId: string;
//   expires: firebase.firestore.Timestamp;
//   numUses: number;
//   maxUses: number;
// }
