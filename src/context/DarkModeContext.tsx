import * as React from 'react';
import UserDataContext from './UserDataContext/UserDataContext';

const DarkModeContext = React.createContext<boolean>(null);

export function DarkModeProvider({ children }) {
  const userData = React.useContext(UserDataContext);
  if (!userData) {
    throw new Error('DarkModeProvider must be used inside a UserDataProvider');
  }
  const theme = userData.theme;

  const [darkMode, setDarkMode] = React.useReducer((prev, next) => {
    if (prev !== next) {
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

  React.useEffect(() => {
    if (theme === undefined) return;

    if (theme === 'system') {
      if (!window.matchMedia) {
        setDarkMode(false);
        return;
      }

      const query = window.matchMedia('(prefers-color-scheme: dark)');

      setDarkMode(query.matches);

      const onChange = e => setDarkMode(e.matches);
      query.addEventListener('change', onChange);
      return () => query.removeEventListener('change', onChange);
    } else {
      if (theme === 'light') setDarkMode(false);
      else if (theme === 'dark') setDarkMode(true);
      else throw new Error('Unknown theme ' + theme);
    }
  }, [theme]);

  return (
    <DarkModeContext.Provider value={darkMode}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  const context = React.useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode() must be used inside a ThemeProvider');
  }
  return context;
};
