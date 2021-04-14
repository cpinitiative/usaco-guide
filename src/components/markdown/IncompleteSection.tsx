import * as React from 'react';
import Danger from './Danger';

export const IncompleteSection: React.FC = ({ children }) => {
  return (
    <Danger title="This section is not complete.">
      Any help would be appreciated! Just submit a Pull Request on{' '}
      <a
        href="https://github.com/cpinitiative/usaco-guide"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      .{children && <div className="h-2 mb-0" />}
      {children}
    </Danger>
  );
};
