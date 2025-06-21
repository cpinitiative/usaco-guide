import * as React from 'react';
import { BlindModeProvider } from '../context/BlindModeContext';
import { useAnalyticsEffect } from '../hooks/useAnalyticsEffect';
import { useUpdateStreakEffect } from '../hooks/useUpdateStreakEffect';

const Layout = ({
  children,
  setLastViewedModule,
}: {
  children?: React.ReactNode;
  /**
   * If specified, in addition to updating number of pageviews,
   * we will also update lastViewedModule
   */
  setLastViewedModule?: string;
}): JSX.Element => {
  useAnalyticsEffect();
  useUpdateStreakEffect({ setLastViewedModule });
  return (
    <BlindModeProvider>
      <div className="font-sans">{children}</div>
    </BlindModeProvider>
  );
};

export default Layout;
