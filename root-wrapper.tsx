import * as React from 'react';
import { FirebaseProvider } from './src/context/FirebaseContext';
import MDXProvider from './src/components/markdown/MDXProvider';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    <MDXProvider>
      <UserDataProvider>{element}</UserDataProvider>
    </MDXProvider>
  </FirebaseProvider>
);
