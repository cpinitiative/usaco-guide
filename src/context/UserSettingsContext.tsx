import { createContext, useRef, useState } from 'react';
import * as React from 'react';

const UserSettingsContext = createContext({
  primaryLang: 'showAll',
  setPrimaryLang: null,
});

export const UserSettingsProvider = ({ children }) => {
  const key = 'guide:userSettings:primaryLang';
  const [primaryLang, setPrimaryLang] = useState('showAll');

  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);
    let v = null;
    try {
      v = JSON.parse(stickyValue);
    } catch (e) {
      console.error("Couldn't parse user primary language", e);
    }
    if (v === 'cpp' || v === 'java' || v === 'py') setPrimaryLang(v);
    else setPrimaryLang('cpp');
  }, []);

  return (
    <UserSettingsContext.Provider
      value={{
        primaryLang,
        setPrimaryLang: lang => {
          window.localStorage.setItem(key, JSON.stringify(lang));
          setPrimaryLang(lang);
        },
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};

export default UserSettingsContext;
