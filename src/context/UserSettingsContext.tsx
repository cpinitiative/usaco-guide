import { createContext } from 'react';
import * as React from 'react';
import useStickyState from '../hooks/useStickyState';

const UserSettingsContext = createContext({
  primaryLang: 'showAll',
  setPrimaryLang: null,
});

export const UserSettingsProvider = ({ children }) => {
  const [primaryLang, setPrimaryLang] = useStickyState(
    'showAll',
    'user-primary-lang'
  );
  React.useEffect(() => {
    if (primaryLang === 'showAll') setPrimaryLang('cpp');
  }, []);
  return (
    <UserSettingsContext.Provider
      value={{
        primaryLang,
        setPrimaryLang,
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};

export default UserSettingsContext;
