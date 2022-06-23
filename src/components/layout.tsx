import * as React from 'react';
import { useAnalyticsEffect } from '../hooks/useAnalyticsEffect';
import { useUpdateStreakEffect } from '../hooks/useUpdateStreakEffect';

const Layout = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  useAnalyticsEffect();
  useUpdateStreakEffect();
  return <div className="font-sans">{children}</div>;
};

export default Layout;
