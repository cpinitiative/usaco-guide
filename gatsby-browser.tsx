import './src/styles/main.css';
import './src/styles/anchor.css';
import * as React from 'react';
import MDXProvider from './src/components/markdown/MDXProvider';
import { UserDataProvider } from './src/context/UserDataContext';

export const wrapRootElement = ({ element }) => (
  <MDXProvider>
    <UserDataProvider>{element}</UserDataProvider>
  </MDXProvider>
);
