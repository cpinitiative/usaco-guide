import * as React from 'react';
import { FirebaseProvider } from './src/context/FirebaseContext';
import MDXProvider from './src/components/markdown/MDXProvider';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';
import { UserGroupsProvider } from './src/hooks/groups/useUserGroups';
import { NotificationSystemProvider } from './src/context/NotificationSystemContext';
import GlobalErrorBoundary from './src/context/GlobalErrorBoundary';
import { DarkModeProvider } from './src/context/DarkModeContext';

export const wrapRootElement = ({ element }) => (
  <NotificationSystemProvider>
    <GlobalErrorBoundary>
      <FirebaseProvider>
        <MDXProvider>
          <UserDataProvider>
            <UserGroupsProvider>
              <DarkModeProvider>{element}</DarkModeProvider>
            </UserGroupsProvider>
          </UserDataProvider>
        </MDXProvider>
      </FirebaseProvider>
    </GlobalErrorBoundary>
  </NotificationSystemProvider>
);
