import * as React from 'react';
import { useContext } from 'react';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import MobileMenuButtonContainer from '../MobileMenuButtonContainer';
import NavBar from './NavBar';

export default function MobileAppBar() {
  const { setIsMobileNavOpen } = useContext(MarkdownLayoutContext);

  return (
    <div className="sticky top-0 inset-x-0 bg-white dark:bg-dark-surface z-10 shadow lg:hidden pl-1 pt-1 flex items-center">
      <MobileMenuButtonContainer
        className="flex-shrink-0 -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center"
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
      </MobileMenuButtonContainer>
      <div className="flex-1 ml-4 mr-4 sm:mr-6">
        <NavBar />
      </div>
    </div>
  );
}
