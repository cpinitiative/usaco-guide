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
      // We have to use decoration-clone here due to some dumb iOS safari bug
      // https://stackoverflow.com/questions/32084460/safari-doesnt-render-css-gradient-text
      'bg-gradient-to-r decoration-clone from-sky-400 to-purple-400 text-transparent bg-clip-text'
    )}
  >
    {children}
  </span>
);
