import { setDoc } from 'firebase/firestore';
import UserDataPropertyAPI from '../userDataPropertyAPI';

export type LastVisitAPI = {
  lastVisitDate: number;
  setLastVisitDate: (today: number) => void;
  consecutiveVisits: number;
  numPageviews: number;
  // timestamp for midnight on that day ==> how many pageviews for that day
  pageviewsPerDay: { [key: number]: number };
};

export default class LastVisitProperty extends UserDataPropertyAPI {
  private lastVisitDate: number;
  private consecutiveVisits: number;
  private numPageviews: number;
  private pageviewsPerDay: { [key: number]: number };

  initializeFromLocalStorage = () => {
    this.lastVisitDate = this.getValueFromLocalStorage(
      this.getLocalStorageKey('lastVisitDate'),
      new Date().getTime()
    );
    this.consecutiveVisits = this.getValueFromLocalStorage(
      this.getLocalStorageKey('consecutiveVisits'),
      1
    );
    this.numPageviews = this.getValueFromLocalStorage(
      this.getLocalStorageKey('numPageviews'),
      0
    );
    this.pageviewsPerDay = this.getValueFromLocalStorage(
      this.getLocalStorageKey('pageviewsPerDay'),
      {}
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
      this.getLocalStorageKey('numPageviews'),
      this.numPageviews
    );
    this.saveLocalStorageValue(
      this.getLocalStorageKey('pageviewsPerDay'),
      this.pageviewsPerDay
    );
  };

  eraseFromLocalStorage = () => {
    window.localStorage.removeItem(this.getLocalStorageKey('lastVisitDate'));
    window.localStorage.removeItem(
      this.getLocalStorageKey('consecutiveVisits')
    );
    window.localStorage.removeItem(this.getLocalStorageKey('numPageviews'));
    window.localStorage.removeItem(this.getLocalStorageKey('pageviewsPerDay'));
  };

  exportValue = (): any => {
    return {
      lastVisitDate: this.lastVisitDate,
      consecutiveVisits: this.consecutiveVisits,
      numPageviews: this.numPageviews,
      pageviewsPerDay: this.pageviewsPerDay,
    };
  };

  importValueFromObject = (data: Record<string, any>) => {
    this.lastVisitDate = data['lastVisitDate'] || new Date().getTime();
    this.consecutiveVisits = data['consecutiveVisits'] || 1;
    this.numPageviews = data['numPageviews'] || 0;
    this.pageviewsPerDay = data['pageviewsPerDay'] || {};
  };

  getAPI = () => {
    return {
      lastVisitDate: this.lastVisitDate,
      consecutiveVisits: this.consecutiveVisits,
      numPageviews: this.numPageviews,
      pageviewsPerDay: this.pageviewsPerDay,
      setLastVisitDate: (today: number) => {
        const timeSinceLastVisit = today - this.lastVisitDate;
        const oneDay = 1000 * 60 * 60 * 20,
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

        let changes = {};
        if (newLastVisit !== null) {
          this.lastVisitDate = newLastVisit;
          this.consecutiveVisits = newConsecutiveVisits;
          changes = {
            lastVisitDate: newLastVisit,
            consecutiveVisits: newConsecutiveVisits,
          };
        }

        this.numPageviews++;
        const todayDate = new Date(today);
        todayDate.setHours(0, 0, 0, 0);
        const todayDateTimestamp = todayDate.getTime();
        if (todayDateTimestamp in this.pageviewsPerDay) {
          this.pageviewsPerDay[todayDateTimestamp]++;
        } else {
          this.pageviewsPerDay[todayDateTimestamp] = 1;
        }

        if (this.firebaseUserDoc) {
          setDoc(
            this.firebaseUserDoc,
            {
              ...changes,
              numPageviews: this.numPageviews,
              pageviewsPerDay: {
                [todayDateTimestamp]: this.pageviewsPerDay[todayDateTimestamp],
              },
            },
            { merge: true }
          );
        }

        this.writeValueToLocalStorage();
        this.triggerRerender();
      },
    };
  };
}
