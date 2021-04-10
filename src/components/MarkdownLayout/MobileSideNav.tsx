import { Link } from 'gatsby';
import * as React from 'react';
import { useContext } from 'react';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import Logo from '../Logo';
import Transition from '../Transition';
import Breadcrumbs from './Breadcrumbs';
import SidebarBottomButtons from './SidebarBottomButtons';
import { SidebarNav } from './SidebarNav/SidebarNav';

export default function MobileSideNav() {
  const { isMobileNavOpen, setIsMobileNavOpen } = useContext(
    MarkdownLayoutContext
  );

  return (
    <Transition show={isMobileNavOpen} timeout={300}>
      <div className="lg:hidden">
        <div className="fixed inset-0 flex z-40">
          <Transition
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <div className="absolute inset-0 bg-gray-600 dark:bg-gray-800 opacity-75" />
            </div>
          </Transition>

          <Transition
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-dark-surface">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                <button
                  className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 flex flex-col">
                <Link
                  className="flex-shrink-0 flex items-center px-4"
                  to="/dashboard/"
                >
                  <Logo />
                </Link>
                <div className="px-4">
                  <Breadcrumbs />
                </div>
                <SidebarNav />
              </div>
              <SidebarBottomButtons />
            </div>
          </Transition>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>
    </Transition>
  );
}
