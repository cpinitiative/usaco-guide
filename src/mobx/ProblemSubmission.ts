import { makeAutoObservable, reaction } from 'mobx';
import { Problem } from './Problem';
import firebase from 'firebase';

export class ProblemSubmission {
  id = null;
  problem: Problem;

  score = null;
  code = null;
  userId = null;
  timestamp: firebase.firestore.Timestamp = null;

  constructor(problem, id) {
    this.problem = problem;
    this.id = id;
    makeAutoObservable(this, {
      id: false,
      problem: false,
    });
  }

  get timestampString() {
    return this.timestamp.toDate().toString().substr(0, 24);
  }

  get earnedPoints() {
    return Math.round((this.score / 100.0) * this.problem.points);
  }

  get verdict() {
    if (this.score === 100) return 'AC';
    return 'WA';
  }

  get asJson() {
    return {
      id: this.id,
      score: this.score,
      code: this.code,
      userId: this.userId,
      problemId: this.problem.id,
      timestamp: this.timestamp,
    };
  }

  updateFromJson(json) {
    this.score = parseInt(json.score) || null;
    this.code = json.code || null;
    this.userId = json.userId || null;
    this.timestamp = json.timestamp || null;
  }

  // saves submission to server
  submit() {
    this.timestamp = this.problem.post.group.firebase.firestore.Timestamp.now();
    const { id, ...data } = this.asJson;
    return this.problem.post.group.firebase
      .firestore()
      .collection('groups')
      .doc(this.problem.post.group.id)
      .collection('submissions')
      .doc(this.id)
      .set(data);
  }
}
