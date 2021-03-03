import { makeAutoObservable, reaction, toJS } from 'mobx';
import Group from './Group';
import { Problem } from './Problem';
import { v4 as uuidv4 } from 'uuid';
import { PostData, ProblemData } from '../models/groups/posts';
import firebase from 'firebase';

export class Post {
  group: Group;

  id = null; // Unique id of this Post, immutable.
  name = null;
  timestamp: firebase.firestore.Timestamp = null;
  dueTimestamp: firebase.firestore.Timestamp = null;
  body = null;
  isPinned = false;
  isPublished = false;
  problems: { [key: string]: Problem } = {};

  autoSave = true; // Indicator for submitting changes in this post to the server.
  saveHandler = null; // Disposer of the side effect auto-saving this post (dispose).

  _editBackupData; // used for cancelling editing
  isEditing = false;
  isWritingToServer = false;
  _beforeUnloadListener = null;

  constructor(group, id) {
    makeAutoObservable(this, {
      id: false,
      group: false,
      autoSave: false,
      saveHandler: false,
      dispose: false,
      _editBackupData: false,
      _beforeUnloadListener: false,
    });
    this.group = group;
    this.id = id;

    this.saveHandler = reaction(
      () => this.asJson, // Observe everything that is used in the JSON.
      () => {
        // If autoSave is true, send JSON to the server.
        if (this.autoSave) {
          // oops this should be in a transport layer but whatever
          this.writeToServer();
        }
      }
    );
  }

  get dueDateString() {
    return this.timestamp.toDate().toString().slice(0, 15);
  }

  get isAssignment() {
    return Object.keys(this.problems).length !== 0;
  }

  get isAnnouncement() {
    return Object.keys(this.problems).length === 0;
  }

  get totalPoints() {
    return Object.keys(this.problems).reduce(
      (acc, cur) => acc + this.problems[cur].points,
      0
    );
  }

  startEditing() {
    this.autoSave = false;
    this.isEditing = true;
    this._editBackupData = this.asJson;
    this._beforeUnloadListener = (e: BeforeUnloadEvent) => {
      e.returnValue = 'You have unsaved changes!';
      return false;
    };
    window.addEventListener('beforeunload', this._beforeUnloadListener);
  }

  stopEditing() {
    window.removeEventListener('beforeunload', this._beforeUnloadListener);
    this.isEditing = false;
    this.updateFromJson(this._editBackupData);
    this.autoSave = true;
  }

  saveEdits() {
    this._editBackupData = this.asJson;
    return this.writeToServer();
  }

  // Remove this Post from the client and the server.
  async delete() {
    // should be in a transport layer...
    await this.group.firebase
      .firestore()
      .collection('groups')
      .doc(this.group.id)
      .collection('posts')
      .doc(this.id)
      .delete();
    this.group.removePost(this);
  }

  get asJson(): PostData {
    return {
      id: this.id,
      name: this.name,
      timestamp: this.timestamp,
      dueTimestamp: this.dueTimestamp,
      body: this.body,
      isPinned: this.isPinned,
      isPublished: this.isPublished,
      problems: Object.keys(this.problems).reduce<{
        [key: string]: ProblemData;
      }>((acc, cur) => ({ ...acc, [cur]: this.problems[cur].asJson }), {}),
    };
  }

  // Update this Post with information from the server.
  updateFromJson(json: PostData) {
    this.autoSave = false; // Prevent sending of our changes back to the server.
    this.name = json.name || '';
    this.timestamp = json.timestamp || null;
    this.dueTimestamp = json.dueTimestamp || null;
    this.body = json.body || '';
    this.isPinned = json.isPinned || false;
    this.isPublished = json.isPublished || false;
    const problems = json.problems || {};
    Object.keys(this.problems)
      .filter(id => !problems.hasOwnProperty(id))
      .forEach(id => this.removeProblem(this.problems[id]));
    Object.entries(problems).forEach(([id, problem]) => {
      if (!this.problems[id]) {
        this.problems[id] = new Problem(this, id);
      }
      this.problems[id].updateFromJson(problem);
    });
    this.autoSave = true;
  }

  writeToServer() {
    this.isWritingToServer = true;
    const { id, ...data } = this.asJson;
    return this.group.firebase
      .firestore()
      .collection('groups')
      .doc(this.group.id)
      .collection('posts')
      .doc(this.id)
      .set(data)
      .finally(() => (this.isWritingToServer = false));
  }

  createNewProblem(): Problem {
    const id = uuidv4();
    this.problems[id] = new Problem(this, id);
    this.problems[id].name = 'New Problem';
    return this.problems[id];
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
