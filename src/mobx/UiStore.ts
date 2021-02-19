import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';
import { ProblemSubmission } from './ProblemSubmission';

export default class UiStore {
  rootStore: RootStore;

  currentPopupSubmission: ProblemSubmission = null;
  showSubmissionPopup: boolean = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      rootStore: false,
    });
  }
}
