import classNames from 'classnames';
import React from 'react';

export const GlowingText = ({
  className,
  extraGlow = false,
  children,
}: {
  className: string;
  extraGlow?: boolean;
  children: string;
}): JSX.Element => (
  <div className="relative group">
    <h1 className={classNames(className, 'relative z-10')}>{children}</h1>
    <span
      className={classNames(
        className,
        '-z-10 absolute inset-0',
        'bg-gradient-to-r from-sky-700 to-purple-700',
        'bg-clip-text text-transparent blur-xl select-none'
      )}
      aria-hidden="true"
    >
      {children}
    </span>
    {extraGlow && (
      <span
        className={classNames(
          className,
          '-z-10 absolute inset-0',
          'bg-gradient-to-r from-sky-700 to-purple-700',
          'bg-clip-text text-transparent blur-xl select-none'
        )}
        aria-hidden="true"
      >
        {children}
      </span>
    )}
    <span
      className={classNames(
        className,
        '-z-10 absolute inset-0',
        'bg-gradient-to-r from-sky-700 to-purple-700',
        'bg-clip-text text-transparent blur-xl select-none',
        'opacity-0 transition duration-1000 group-hover:opacity-100'
      )}
      aria-hidden="true"
    >
      {children}
    </span>
  </div>
);
