import React, { Suspense } from 'react';
import { LoadingSpinner } from '../components/elements/LoadingSpinner';

// Lazy loading wrapper component
export const LazyLoad = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div className="flex justify-center p-4"><LoadingSpinner /></div>}>{children}</Suspense>;
};

// Development mode check
export const isDevelopment = process.env.NODE_ENV === 'development';

// Lazy loading configuration
export const lazyLoadConfig = {
  editor: {
    enabled: true,
    fallback: () => <div className="flex justify-center p-4"><LoadingSpinner /></div>,
  },
  groups: {
    enabled: true,
    fallback: () => <div className="flex justify-center p-4"><LoadingSpinner /></div>,
  },
};
