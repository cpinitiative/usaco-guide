import { makeAutoObservable, reaction } from 'mobx';
import { Post } from './Post';

export class Problem {
  id = null;
  name = null;
  body = null;
  source = null;
  points = null;
  difficulty = null;
  autoSave = true;
  saveHandler = null;
  post: Post;

  constructor(post, id) {
    makeAutoObservable(this, {
      id: false,
      post: false,
      autoSave: false,
      saveHandler: false,
      dispose: false,
    });
    this.post = post;
    this.id = id;

    this.saveHandler = reaction(
      () => this.asJson, // Observe everything that is used in the JSON.
      ({ id, ...data }) => {
        // If autoSave is true, send JSON to the server.
        if (this.autoSave) {
          // oops this should be in a transport layer but whatever
          // todo
        }
      }
    );
  }

  // Remove this Problem from the client and the server.
  delete() {
    // should be in a transport layer...
    // todo
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
    this.points = json.points;
    this.difficulty = json.difficulty;
    this.autoSave = true;
  }

  dispose() {
    this.saveHandler();
  }
}
