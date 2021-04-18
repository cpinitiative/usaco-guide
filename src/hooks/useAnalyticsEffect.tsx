import { getDatabase, increment, ref, set } from 'firebase/database';
import { useFirebaseApp } from './useFirebase';

export const useAnalyticsEffect = () => {
  useFirebaseApp(firebaseApp => {
    // todo @jeffrey can we migrate this to a firebase function?
    const db = getDatabase(firebaseApp);
    if ((window as any).ga && (window as any).ga.create) {
      // google analytics loaded
    } else {
      // google analytics got blocked
      set(ref(db, 'analytics/no_ga_pageviews'), increment(1));
    }
    set(ref(db, 'analytics/pageviews'), increment(1));
  });
};
