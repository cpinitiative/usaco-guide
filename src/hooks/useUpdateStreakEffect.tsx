import * as React from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';

export const useUpdateStreakEffect = () => {
  const { setLastVisitDate, isLoaded } = React.useContext(UserDataContext);

  React.useEffect(() => {
    if (isLoaded) {
      setLastVisitDate(new Date().getTime());
    }
  }, [isLoaded]);
};
