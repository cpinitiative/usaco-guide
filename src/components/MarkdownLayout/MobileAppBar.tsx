import * as React from 'react';
import { useMarkdownLayout } from '../../context/MarkdownLayoutContext';
import NavBar from './NavBar';

export default function MobileAppBar() {
  const { setIsMobileNavOpen } = useMarkdownLayout();

  return (
    <div className="sticky top-0 inset-x-0 bg-white dark:bg-dark-surface z-10 shadow lg:hidden pl-1 pt-1 flex items-center">
      <button
        className="mobile-menu-button-container flex-shrink-0 -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center"
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
      <div className="flex-1 ml-4 mr-4 sm:mr-6">
        <NavBar />
      </div>
    </div>
  );
}
