import * as React from 'react';
import { useMarkdownLayout } from '../../context/MarkdownLayoutContext';
import NavBar from './NavBar';

export default function MobileAppBar() {
  const { setIsMobileNavOpen } = useMarkdownLayout();

  return (
    <div className="dark:bg-dark-surface sticky inset-x-0 top-0 z-10 flex items-center bg-white pt-1 pl-1 shadow-sm lg:hidden">
      <button
        className="mobile-menu-button-container -mt-0.5 -ml-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center"
        aria-label="Open sidebar"
        onClick={() => setIsMobileNavOpen(true)}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="mr-4 ml-4 flex-1 sm:mr-6">
        <NavBar />
      </div>
    </div>
  );
}
