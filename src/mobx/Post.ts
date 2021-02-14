import { makeAutoObservable, reaction } from 'mobx';
import Group from './Group';

export class Post {
  id = null; // Unique id of this Post, immutable.
  title = null;
  autoSave = true; // Indicator for submitting changes in this post to the server.
  saveHandler = null; // Disposer of the side effect auto-saving this post (dispose).
  group: Group;

  constructor(group, id) {
    makeAutoObservable(this, {
      id: false,
      group: false,
      autoSave: false,
      saveHandler: false,
      dispose: false,
    });
    this.group = group;
    this.id = id;

    this.saveHandler = reaction(
      () => this.asJson, // Observe everything that is used in the JSON.
      ({ id, ...data }) => {
        // If autoSave is true, send JSON to the server.
        if (this.autoSave) {
          // oops this should be in a transport layer but whatever
          this.group.firebase
            .firestore()
            .collection('groups')
            .doc(group.id)
            .collection('posts')
            .doc(this.id)
            .set(data);
        }
      }
    );
  }

  // Remove this Post from the client and the server.
  delete() {
    // should be in a transport layer...
    this.group.firebase
      .firestore()
      .collection('groups')
      .doc(this.group.groupId)
      .collection('posts')
      .doc(this.id)
      .delete();
    this.group.removePost(this);
  }

  get asJson() {
    return {
      id: this.id,
      title: this.title,
    };
  }

  // Update this Post with information from the server.
  updateFromJson(json) {
    this.autoSave = false; // Prevent sending of our changes back to the server.
    this.title = json.title;
    this.autoSave = true;
  }

  // Clean up the observer.
  dispose() {
    this.saveHandler();
  }
}
