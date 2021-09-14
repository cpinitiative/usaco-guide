import * as React from 'react';
import LogoSquare from './LogoSquare';

export default function Logo(): JSX.Element {
  return (
    <div className="flex items-center space-x-2 whitespace-nowrap flex-nowrap">
      <div className="h-9 w-9 flex-shrink-0">
        <LogoSquare />
      </div>
      <span className="font-bold text-xl tracking-tight text-black dark:text-gray-300">
        USACO Guide
      </span>
    </div>
  );
}
