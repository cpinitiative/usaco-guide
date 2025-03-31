import * as React from 'react';
import LogoSquare from './LogoSquare';

export default function Logo(): JSX.Element {
  return (
    <div className="flex flex-nowrap items-center space-x-2 whitespace-nowrap">
      <div className="h-9 w-9 shrink-0">
        <LogoSquare />
      </div>
      <span className="text-xl font-bold tracking-tight text-black dark:text-gray-300">
        USACO Guide
      </span>
    </div>
  );
}
