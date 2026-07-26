import * as React from 'react';
import { githubRepoUrl } from '../../config';
import Danger from './Danger';

export const IncompleteSection = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  return (
    <Danger title="This section is not complete.">
      Any help would be appreciated! Just submit a Pull Request on{' '}
      <a href={githubRepoUrl()} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      .{children && <div className="mb-0 h-2" />}
      {children}
    </Danger>
  );
};
