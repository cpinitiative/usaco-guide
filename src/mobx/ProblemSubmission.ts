import { makeAutoObservable, reaction } from 'mobx';
import { Post } from './Post';
import { Problem } from './Problem';

export class ProblemSubmission {
  id = null;
  problem: Problem;

  score = null;
  code = null;
  userId = null;

  constructor(problem, id) {
    this.problem = problem;
    this.id = id;
    makeAutoObservable(this, {
      id: false,
      problem: false,
    });
  }

  get asJson() {
    return {
      id: this.id,
      score: this.score,
      code: this.code,
      userId: this.userId,
      problemId: this.problem.id,
    };
  }

  updateFromJson(json) {
    this.score = json.score || null;
    this.code = json.code || null;
    this.userId = json.userId || null;
  }

  // saves submission to server
  submit() {
    const { id, ...data } = this.asJson;
    return this.problem.post.group.firebase
      .firestore()
      .collection('groups')
      .doc(this.problem.post.group.groupId)
      .collection('submissions')
      .doc(this.id)
      .set(data);
  }
}
