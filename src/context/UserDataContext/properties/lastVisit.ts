import UserDataPropertyAPI from '../userDataPropertyAPI';

export type LastVisitAPI = {
  lastVisitDate: number;
  setLastVisitDate: (today: number) => void;

  consecutiveVisits: number;
};

export default class LastVisitProperty extends UserDataPropertyAPI {
  private lastVisitDate: number;
  private consecutiveVisits: number;

  eraseFromLocalStorage = () => {
    window.localStorage.removeItem(this.getLocalStorageKey('lastVisitDate'));
    window.localStorage.removeItem(
      this.getLocalStorageKey('consecutiveVisits')
    );
  };

  exportValue = (): any => {
    return {
      lastVisitDate: this.lastVisitDate,
      consecutiveVisits: this.consecutiveVisits,
    };
  };

  getAPI = () => {
    return {
      lastVisitDate: this.lastVisitDate,
      consecutiveVisits: this.consecutiveVisits,
      setLastVisitDate: (today: number) => {
        let newVisits = this.consecutiveVisits;
        const x = new Date(this.lastVisitDate);
        const y = new Date(today);
        // console.log(x.toDateString())
        // console.log(y.toDateString())
        if (x.toDateString() == y.toDateString()) {
        } else {
          x.setDate(x.getDate() + 1);
          if (x.toDateString() == y.toDateString()) newVisits++;
          else newVisits = 1;
        }
        if (this.firebaseUserDoc) {
          this.firebaseUserDoc.set(
            {
              lastVisitDate: today,
              consecutiveVisits: newVisits,
            },
            { merge: true }
          );
        }
        this.lastVisitDate = today;
        this.consecutiveVisits = newVisits;
        this.writeValueToLocalStorage();
        this.triggerRerender();
      },
    };
  };

  importValueFromObject = (data: object) => {
    this.lastVisitDate = data['lastVisitDate'] || new Date().getTime();
    this.consecutiveVisits = data['consecutiveVisits'] || 1;
  };

  initializeFromLocalStorage = () => {
    this.lastVisitDate = this.getValueFromLocalStorage(
      this.getLocalStorageKey('lastVisitDate'),
      new Date().getTime()
    );
    this.consecutiveVisits = this.getValueFromLocalStorage(
      this.getLocalStorageKey('consecutiveVisits'),
      1
    );
  };

  writeValueToLocalStorage = () => {
    this.saveLocalStorageValue(
      this.getLocalStorageKey('lastVisitDate'),
      this.lastVisitDate
    );
    this.saveLocalStorageValue(
      this.getLocalStorageKey('consecutiveVisits'),
      this.consecutiveVisits
    );
  };
}
