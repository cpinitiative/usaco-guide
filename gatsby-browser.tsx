import './src/styles/main.css';
import './src/styles/anchor.css';
import * as React from 'react';
import MDXProvider from './src/components/markdown/MDXProvider';
import { UserSettingsProvider } from './src/context/UserSettingsContext';

export const wrapRootElement = ({ element }) => (
  <MDXProvider>
    <UserSettingsProvider>{element}</UserSettingsProvider>
  </MDXProvider>
);
