import {
  makeAutoObservable,
  onBecomeObserved,
  onBecomeUnobserved,
  reaction,
  runInAction,
} from 'mobx';
import { Post } from './Post';
import { ProblemSubmission } from './ProblemSubmission';

export class Problem {
  id = null;
  name = null;
  body = null;
  source = null;
  points = null;
  difficulty = null;
  userSubmissions: ProblemSubmission[] = [];
  autoSave = true;
  saveHandler = null;
  post: Post;

  isWritingToServer = false;
  isEditing = false;
  _editBackupData = null;
  _beforeUnloadListener = null;

  unsubscribeSubmissions;

  constructor(post, id) {
    makeAutoObservable(this, {
      id: false,
      post: false,
      autoSave: false,
      saveHandler: false,
      dispose: false,
      _editBackupData: false,
      _beforeUnloadListener: false,
    });
    this.post = post;
    this.id = id;

    this.saveHandler = reaction(
      () => this.asJson, // Observe everything that is used in the JSON.
      ({ id, ...data }) => {
        // If autoSave is true, send JSON to the server.
        if (this.autoSave) {
          // oops this should be in a transport layer but whatever
          this.writeToServer();
        }
      }
    );

    onBecomeObserved(this, 'userSubmissions', this.resumeUserSubmissions);
    onBecomeUnobserved(this, 'userSubmissions', this.suspendUserSubmissions);
  }

  // Remove this Problem from the client and the server.
  async delete() {
    this.post.removeProblem(this);
  }

  get asJson() {
    return {
      id: this.id,
      name: this.name,
      body: this.body,
      source: this.source,
      points: this.points,
      difficulty: this.difficulty,
    };
  }

  updateFromJson(json) {
    this.autoSave = false;
    this.name = json.name;
    this.body = json.body;
    this.source = json.source;
    this.points = parseInt(json.points) || 0;
    this.difficulty = json.difficulty;
    this.autoSave = true;
  }

  startEditing() {
    this.autoSave = false;
    this.post.autoSave = false;
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
    this.post.autoSave = true;
    this.autoSave = true;
  }

  saveEdits() {
    this._editBackupData = this.asJson;
    return this.writeToServer();
  }

  writeToServer() {
    console.log('writing problem ' + this.id + ' to server');
    this.isWritingToServer = true;
    return this.post.group.firebase
      .firestore()
      .collection('groups')
      .doc(this.post.group.id)
      .collection('posts')
      .doc(this.post.id)
      .update({
        problems: this.post.asJson.problems,
      })
      .finally(() => (this.isWritingToServer = false));
  }

  // returns a new temporary submission but doesn't write it to the server
  // intended for problem submission page
  createTemporarySubmission() {
    const ref = this.post.group.firebase
      .firestore()
      .collection('groups')
      .doc(this.post.group.id)
      .collection('submissions')
      .doc();
    const submission = new ProblemSubmission(this, ref.id);
    submission.userId = this.post.group.groupsStore.rootStore.firebaseUser.uid;
    return submission;
  }

  resumeUserSubmissions = () => {
    this.unsubscribeSubmissions = this.post.group.firebase
      .firestore()
      .collection('groups')
      .doc(this.post.group.id)
      .collection('submissions')
      .where('problemId', '==', this.id)
      .where(
        'userId',
        '==',
        this.post.group.groupsStore.rootStore.firebaseUser.uid
      )
      .onSnapshot(snap => {
        runInAction(() => {
          this.userSubmissions
            .filter(submission => !snap.docs.includes(submission.id))
            .forEach(submission => this.removeSubmission(submission));
          snap.docs.forEach(doc => {
            this.updateSubmissionFromFirebaseDoc(doc);
          });
          this.userSubmissions.sort(
            (a, b) => b.timestamp.toMillis() - a.timestamp.toMillis()
          );
        });
      });
  };

  suspendUserSubmissions = () => {
    this.unsubscribeSubmissions();
  };

  updateSubmissionFromFirebaseDoc(doc) {
    let submission = this.userSubmissions.find(
      submission => submission.id === doc.id
    );
    if (!submission) {
      submission = new ProblemSubmission(this, doc.id);
      this.userSubmissions.push(submission);
    }
    submission.updateFromJson(doc.data());
  }

  removeSubmission(submission: ProblemSubmission) {
    if (this.userSubmissions.indexOf(submission) !== -1)
      this.userSubmissions.splice(this.userSubmissions.indexOf(submission), 1);
  }

  dispose() {
    this.saveHandler();
  }
}
