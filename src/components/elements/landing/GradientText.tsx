import classNames from 'classnames';
import React from 'react';

export const GradientText = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}): JSX.Element => (
  <span
    className={classNames(
      className,
      'bg-gradient-to-r from-sky-400 to-purple-400 text-transparent bg-clip-text'
    )}
  >
    {children}
  </span>
);
