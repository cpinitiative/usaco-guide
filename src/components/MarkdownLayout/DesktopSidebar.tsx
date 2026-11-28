import Link from 'next/link';
import { useMarkdownLayout } from '../../context/MarkdownLayoutContext';
import Logo from '../Logo';
import SidebarBottomButtons from './SidebarBottomButtons';
import { SidebarNav } from './SidebarNav/SidebarNav';

export default function DesktopSidebar() {
  const { isDesktopSidebarHidden, setIsDesktopSidebarHidden } =
    useMarkdownLayout();

  if (isDesktopSidebarHidden) {
    return (
      <button
        className="dark:bg-dark-surface fixed top-2 left-2 z-10 hidden rounded-md border border-gray-200 bg-white p-2 text-gray-400 shadow-sm transition duration-150 ease-in-out hover:text-gray-600 lg:block dark:border-gray-800 dark:hover:text-gray-300"
        aria-label="Show sidebar (Ctrl + Shift + S)"
        title="Show sidebar (Ctrl + Shift + S)"
        onClick={() => setIsDesktopSidebarHidden(false)}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>
    );
  }

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
          <div className="flex shrink-0 items-center px-4 pb-2">
            <Link className="flex flex-1 items-center" href="/dashboard/">
              <Logo />
            </Link>
            <button
              className="rounded-md p-1 text-gray-400 transition duration-150 ease-in-out hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              aria-label="Hide sidebar (Ctrl + Shift + S)"
              title="Hide sidebar (Ctrl + Shift + S)"
              onClick={() => setIsDesktopSidebarHidden(true)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <SidebarNav />
        </div>
        <SidebarBottomButtons />
      </div>
    </div>
  );
}
