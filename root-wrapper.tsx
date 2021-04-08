import * as React from 'react';
import MDXProvider from './src/components/markdown/MDXProvider';
import { DarkModeProvider } from './src/context/DarkModeProvider';
import { FirebaseProvider } from './src/context/FirebaseContext';
import GlobalErrorBoundary from './src/context/GlobalErrorBoundary';
import { NotificationSystemProvider } from './src/context/NotificationSystemContext';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';
import { UserGroupsProvider } from './src/hooks/groups/useUserGroups';

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
