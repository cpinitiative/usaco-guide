import UserDataPropertyAPI from '../userDataPropertyAPI';

export type LastVisitAPI = {
  lastVisitDate: number;
  setLastVisitDate: (today: number) => void;
  consecutiveVisits: number;
  totalNoVisits: number;
};

export default class LastVisitProperty extends UserDataPropertyAPI {
  private lastVisitDate: number;
  private consecutiveVisits: number;
  private totalNoVisits: number;

  initializeFromLocalStorage = () => {
    this.lastVisitDate = this.getValueFromLocalStorage(
      this.getLocalStorageKey('lastVisitDate'),
      new Date().getTime()
    );
    this.consecutiveVisits = this.getValueFromLocalStorage(
      this.getLocalStorageKey('consecutiveVisits'),
      1
    );
    this.totalNoVisits = this.getValueFromLocalStorage(
      this.getLocalStorageKey('totalNoVisits'),
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
    this.saveLocalStorageValue(
      this.getLocalStorageKey('totalNoVisits'),
      this.totalNoVisits
    );
  };

  eraseFromLocalStorage = () => {
    window.localStorage.removeItem(this.getLocalStorageKey('lastVisitDate'));
    window.localStorage.removeItem(
      this.getLocalStorageKey('consecutiveVisits')
    );
    window.localStorage.removeItem(this.getLocalStorageKey('totalNoVisits'));
  };

  exportValue = (): any => {
    return {
      lastVisitDate: this.lastVisitDate,
      consecutiveVisits: this.consecutiveVisits,
      totalNoVisits: this.totalNoVisits,
    };
  };

  importValueFromObject = (data: object) => {
    this.lastVisitDate = data['lastVisitDate'] || new Date().getTime();
    this.consecutiveVisits = data['consecutiveVisits'] || 1;
    this.totalNoVisits = data['totalNoVisits'] || 1;
  };

  getAPI = () => {
    return {
      lastVisitDate: this.lastVisitDate,
      consecutiveVisits: this.consecutiveVisits,
      totalNoVisits: this.totalNoVisits,
      setLastVisitDate: (today: number) => {
        this.totalNoVisits++;
        let timeSinceLastVisit = today - this.lastVisitDate;
        let oneDay = 1000 * 60 * 60 * 20,
          twoDays = 1000 * 60 * 60 * 24 * 2;

        let newLastVisit = null,
          newConsecutiveVisits = null;

        if (timeSinceLastVisit >= oneDay && timeSinceLastVisit <= twoDays) {
          newLastVisit = today;
          newConsecutiveVisits = this.consecutiveVisits + 1;
        } else if (timeSinceLastVisit > twoDays) {
          newLastVisit = today;
          newConsecutiveVisits = 1;
        }

        if (newLastVisit !== null) {
          if (this.firebaseUserDoc) {
            this.firebaseUserDoc.set(
              {
                lastVisitDate: newLastVisit,
                consecutiveVisits: newConsecutiveVisits,
              },
              { merge: true }
            );
          }
          this.lastVisitDate = newLastVisit;
          this.consecutiveVisits = newConsecutiveVisits;
          this.writeValueToLocalStorage();
          this.triggerRerender();
        }
      },
    };
  };
}
