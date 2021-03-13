import * as React from 'react';
import { FirebaseProvider } from './src/context/FirebaseContext';
import MDXProvider from './src/components/markdown/MDXProvider';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';
import { UserGroupsProvider } from './src/hooks/groups/useUserGroups';

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    <MDXProvider>
      <UserDataProvider>
        <UserGroupsProvider>{element}</UserGroupsProvider>
      </UserDataProvider>
    </MDXProvider>
  </FirebaseProvider>
);
