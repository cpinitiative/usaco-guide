import React from 'react';
import Logo from '../components/Logo';
import LogoSquare from '../components/LogoSquare';

export default {
  title: 'Logo',
};

export const Default = (): JSX.Element => (
  <div className="h-9">
    <Logo />
  </div>
);

export const Square = (): JSX.Element => <LogoSquare className="h-10 w-10" />;
