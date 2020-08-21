import * as React from 'react';
import { useUpdateStreakEffect } from '../hooks/useUpdateStreakEffect';

const Layout = ({ children }) => {
  useUpdateStreakEffect();
  return <div className="font-sans">{children}</div>;
};

export default Layout;
