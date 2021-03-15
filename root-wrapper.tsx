import * as React from 'react';
import { FirebaseProvider } from './src/context/FirebaseContext';
import MDXProvider from './src/components/markdown/MDXProvider';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';
import { UserGroupsProvider } from './src/hooks/groups/useUserGroups';
import { NotificationSystemProvider } from './src/context/NotificationSystemContext';
import GlobalErrorBoundary from './src/context/GlobalErrorBoundary';

export const wrapRootElement = ({ element }) => (
  <NotificationSystemProvider>
    <GlobalErrorBoundary>
      <FirebaseProvider>
        <MDXProvider>
          <UserDataProvider>
            <UserGroupsProvider>{element}</UserGroupsProvider>
          </UserDataProvider>
        </MDXProvider>
      </FirebaseProvider>
    </GlobalErrorBoundary>
  </NotificationSystemProvider>
);
