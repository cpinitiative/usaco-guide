import * as React from 'react';
import { useSetLastVisitDate } from '../context/UserDataContext/properties/lastVisit';
import { useIsUserDataLoaded } from '../context/UserDataContext/UserDataContext';

export const useUpdateStreakEffect = () => {
  const setLastVisitDate = useSetLastVisitDate();
  const isLoaded = useIsUserDataLoaded();

  React.useEffect(() => {
    if (isLoaded) {
      setLastVisitDate(new Date().getTime());
    }
  }, [isLoaded]);
};
