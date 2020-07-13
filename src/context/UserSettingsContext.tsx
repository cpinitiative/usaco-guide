import { createContext, useCallback, useState } from 'react';
import * as React from 'react';

const UserSettingsContext = createContext({
  primaryLang: 'cpp',
  setPrimaryLang: null,
});

export const UserSettingsProvider = ({ children }) => {
  const [primaryLang, setPrimaryLang] = useState('cpp');
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
