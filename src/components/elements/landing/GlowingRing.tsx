import React from 'react';

export const GlowingRing = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => (
  <div className="relative group">
    <div
      className="
        absolute
        -inset-1.5
        bg-gradient-to-r
        from-blue-600
        to-purple-700
        rounded-lg
        blur
        opacity-50
        -z-1
        transition
        duration-1000
        group-hover:opacity-75
      "
    />
    {children}
  </div>
);
