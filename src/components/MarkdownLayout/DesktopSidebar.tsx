import { Link } from 'gatsby';
import * as React from 'react';
import Logo from '../Logo';
import SidebarBottomButtons from './SidebarBottomButtons';
import { SidebarNav } from './SidebarNav/SidebarNav';

export default function DesktopSidebar() {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 z-10 hidden lg:block"
      style={{ width: '20rem' }}
    >
      <div
        className="dark:bg-dark-surface flex h-screen flex-col border-r border-gray-200 bg-white dark:border-gray-800"
        style={{ width: '20rem' }}
      >
        <div className="flex h-0 grow flex-col pt-5">
          <Link
            className="flex shrink-0 items-center px-4 pb-2"
            to="/dashboard/"
          >
            <Logo />
          </Link>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <SidebarNav />
        </div>
        <SidebarBottomButtons />
      </div>
    </div>
  );
}
