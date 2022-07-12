import classNames from 'classnames';
import React from 'react';

export const HighlightedText = ({
  dark = false,
  children,
}: {
  dark?: boolean;
  children: string;
}): JSX.Element => {
  const bg = dark ? 'bg-yellow-700' : 'bg-yellow-400';
  return (
    <span className={classNames('rounded-lg px-1.5', bg)}>{children}</span>
  );
};
