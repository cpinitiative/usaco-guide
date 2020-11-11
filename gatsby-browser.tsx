import './src/styles/main.css';
// import './src/styles/inter_and_algolia.css';
import './src/styles/tailwindcss-utils.css';
import './src/styles/anchor.css';
import * as React from 'react';
import MDXProvider from './src/components/markdown/MDXProvider';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';
import { FirebaseProvider } from './src/context/FirebaseContext';

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    <MDXProvider>
      <UserDataProvider>{element}</UserDataProvider>
    </MDXProvider>
  </FirebaseProvider>
);
