import * as React from 'react';
import { useIsUserDataLoaded } from './UserDataContext/UserDataContext';

// Note: this is separate from DarkModeProvider.tsx because this is imported by Storybook.

export const DarkModeContext = React.createContext<boolean>(null);

export const useDarkMode = (): boolean => {
  const context = React.useContext(DarkModeContext);
  if (!useIsUserDataLoaded()) {
    return document.documentElement.classList.contains('dark');
  }
  if (context === null) {
    throw new Error('useDarkMode() must be used inside a DarkModeProvider');
  }
  return context;
};
