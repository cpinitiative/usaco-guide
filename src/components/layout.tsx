import * as React from 'react';
import Footer from './Footer';
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
    <div id="main-content" className="font-sans">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
