import useFirebase from './useFirebase';

export const useAnalyticsEffect = () => {
  useFirebase(firebase => {
    // @ts-ignore
    if (window.ga && ga.create) {
      // google analytics loaded
    } else {
      // google analytics got blocked
      firebase
        .database()
        .ref('analytics/no_ga_pageviews')
        .set(firebase.database.ServerValue.increment(1));
    }
    firebase
      .database()
      .ref('analytics/pageviews')
      .set(firebase.database.ServerValue.increment(1));
    firebase
      .database()
      .ref('pageviews')
      .set(firebase.database.ServerValue.increment(1));
  });
};
