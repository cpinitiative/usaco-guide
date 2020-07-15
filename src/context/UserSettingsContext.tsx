import { createContext, useRef, useState } from 'react';
import * as React from 'react';

const UserSettingsContext = createContext({
  primaryLang: 'showAll',
  setPrimaryLang: null,
});

export const UserSettingsProvider = ({ children }) => {
  const key = 'guide:userSettings:primaryLang';
  const [primaryLang, setPrimaryLang] = useState('showAll');
  const initialRender = useRef(true);

  React.useEffect(() => {
    if (initialRender.current) {
      const stickyValue = window.localStorage.getItem(key);
      if (stickyValue !== null) setPrimaryLang(JSON.parse(stickyValue));
      else setPrimaryLang('C++');

      initialRender.current = false;
    } else if (primaryLang !== 'showAll') {
      window.localStorage.setItem(key, JSON.stringify(primaryLang));
    }
  }, [key, primaryLang]);

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
