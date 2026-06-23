import React, { Suspense } from 'react';

// Lazy loading wrapper component
export const LazyLoad = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

// Development mode check
export const isDevelopment = process.env.NODE_ENV === 'development';

// Lazy loading configuration
// set enabled to false to disable lazy loading
export const lazyLoadConfig = {
  editor: {
    enabled: isDevelopment,
    fallback: () => <div>Editor is loading...</div>,
  },
  groups: {
    enabled: isDevelopment,
    fallback: () => <div>Groups is loading...</div>,
  },
};
