import * as React from 'react';
import MDXProvider from './src/components/markdown/MDXProvider';

export const wrapRootElement = ({ element }) => (
  <MDXProvider>{element}</MDXProvider>
);
