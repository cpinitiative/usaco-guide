import * as React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="font-sans dark:bg-dark-surface dark:text-dark-high-emphasis">
      {children}
    </div>
  );
};

export default Layout;
