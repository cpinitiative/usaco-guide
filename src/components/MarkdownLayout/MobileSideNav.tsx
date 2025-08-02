import { Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import * as React from 'react';
import { Fragment } from 'react';
import { useMarkdownLayout } from '../../context/MarkdownLayoutContext';
import Logo from '../Logo';
import Breadcrumbs from './Breadcrumbs';
import SidebarBottomButtons from './SidebarBottomButtons';
import { SidebarNav } from './SidebarNav/SidebarNav';

export default function MobileSideNav() {
  const { isMobileNavOpen, setIsMobileNavOpen } = useMarkdownLayout();

  return (
    <Transition show={isMobileNavOpen} as={Fragment}>
      <div className="lg:hidden">
        <div className="fixed inset-0 z-40 flex">
          <Transition
            show={isMobileNavOpen}
            as={Fragment}
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
              <div className="absolute inset-0 bg-gray-600 opacity-75 dark:bg-gray-800" />
            </div>
          </Transition>

          <Transition
            show={isMobileNavOpen}
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="dark:bg-dark-surface relative flex w-full max-w-xs flex-1 flex-col bg-white">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                <button
                  className="flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-hidden"
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
              <div className="flex h-0 flex-1 flex-col pt-5">
                <Link
                  className="flex shrink-0 items-center px-4"
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
          <div className="w-14 shrink-0">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>
    </Transition>
  );
}
