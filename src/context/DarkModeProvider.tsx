import * as React from 'react';
import { useEffect, useState } from 'react';
import { DarkModeContext } from './DarkModeContext';
import { useThemeSetting } from './UserDataContext/properties/simpleProperties';
import { useIsUserDataLoaded } from './UserDataContext/UserDataContext';

export function DarkModeProvider({ children }) {
  const theme = useThemeSetting();
  const isLoaded = useIsUserDataLoaded();
  const [isClient, setIsClient] = useState(false);

  const [darkMode, setDarkMode] = React.useReducer((prev, next) => {
    if (prev !== next && isClient) {
      // Only modify DOM on client
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      document.documentElement.classList.add('transitioning-color-scheme');
      setTimeout(
        () =>
          document.documentElement.classList.remove(
            'transitioning-color-scheme'
          ),
        0
      );
    }
    return next;
  }, false);

  useEffect(() => {
    setIsClient(true);
    if (!isLoaded) {
      setDarkMode(document.documentElement.classList.contains('dark'));
    }
    if (theme === 'system') {
      if (!window.matchMedia) {
        setDarkMode(false);
        return;
      }

      const query = window.matchMedia('(prefers-color-scheme: dark)');

      setDarkMode(query.matches);

      const onChange = e => setDarkMode(e.matches);
      // some browsers don't support addEventListener
      if (query.addEventListener) {
        query.addEventListener('change', onChange);
        return () => query.removeEventListener('change', onChange);
      }
    } else {
      if (theme === 'light') setDarkMode(false);
      else if (theme === 'dark') setDarkMode(true);
      else throw new Error('Unknown theme ' + theme);
    }
  }, [theme, isLoaded]);

  return (
    <DarkModeContext.Provider value={darkMode}>
      {children}
    </DarkModeContext.Provider>
  );
}
