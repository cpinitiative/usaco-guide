import { createContext } from 'react';
import * as React from 'react';
import useStickyState from '../hooks/useStickyState';

const UserSettingsContext = createContext({
  primaryLang: 'cpp',
  setPrimaryLang: null,
});

export const UserSettingsProvider = ({ children }) => {
  const [primaryLang, setPrimaryLang] = useStickyState(
    'cpp',
    'user-primary-lang'
  );
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
