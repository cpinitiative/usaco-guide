import React from 'react';

export const Feature = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <p className="mt-2 md:mt-4">
      <b>{title}.</b> {children}
    </p>
  );
};
