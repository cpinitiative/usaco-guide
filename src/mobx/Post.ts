import { makeAutoObservable, reaction, toJS } from 'mobx';
import Group from './Group';
import { Problem } from './Problem';
import firebase from 'firebase';

export class Post {
  id = null; // Unique id of this Post, immutable.
  title = null;
  timestamp = null;
  body = null;
  problems: { [key: string]: Problem } = {};
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

  get dueDateString() {
    return this.timestamp.toDate().toString().slice(0, 15);
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
      timestamp: this.timestamp,
      body: this.body,
      problems: Object.keys(this.problems).reduce(
        (acc, cur) => ({ ...acc, [cur]: this.problems[cur].asJson }),
        []
      ),
    };
  }

  // Update this Post with information from the server.
  updateFromJson(json) {
    this.autoSave = false; // Prevent sending of our changes back to the server.
    this.title = json.title;
    this.timestamp = json.timestamp;
    this.body = json.body;
    Object.keys(this.problems)
      .filter(id => !json.problems.hasOwnProperty(id))
      .forEach(id => this.removeProblem(this.problems[id]));
    Object.entries(json.problems).forEach(([id, problem]) => {
      if (!this.problems[id]) {
        this.problems[id] = new Problem(this, id);
      }
      this.problems[id].updateFromJson(problem);
    });
    this.autoSave = true;
  }

  removeProblem(problem: Problem) {
    delete this.problems[problem.id];
    problem.dispose();
  }

  // Clean up the observer.
  dispose() {
    this.saveHandler();
  }
}
