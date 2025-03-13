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
      // We have to use box-decoration-clone here due to some dumb iOS safari bug
      // https://stackoverflow.com/questions/32084460/safari-doesnt-render-css-gradient-text
      'bg-linear-to-r dark:bg-linear-to-r box-decoration-clone from-sky-600 to-purple-700 dark:from-sky-400 dark:to-purple-400 text-transparent bg-clip-text'
    )}
  >
    {children}
  </span>
);
