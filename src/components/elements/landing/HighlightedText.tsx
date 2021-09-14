import React from 'react';

export const HighlightedText = ({
  children,
}: {
  children: string;
}): JSX.Element => (
  <span className="bg-yellow-400 rounded-lg px-1.5">{children}</span>
);
