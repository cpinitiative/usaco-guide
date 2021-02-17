import {
  makeAutoObservable,
  onBecomeObserved,
  onBecomeUnobserved,
  runInAction,
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
  currentFeed: 'all' | 'assignments' | 'announcements' = 'all';

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
      .doc(this.groupId)
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
