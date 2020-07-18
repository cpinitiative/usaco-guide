import * as React from 'react';
import Transition from '../Transition';
import { Link } from 'gatsby';
import { ModuleSidebarNav } from '../ModuleLayout/ModuleSidebarNav/ModuleSidebarNav';
// @ts-ignore
import logo from '../../assets/logo.svg';
import { createContext, useState } from 'react';
import SidebarBottomButtons from './SidebarBottomButtons';
import ContactUsSlideover from '../ContactUsSlideover/ContactUsSlideover';
import ModuleLayoutContext from '../../context/ModuleLayoutContext';

export const SidebarLogo = () => {
  return (
    <Link className="flex-shrink-0 flex items-center px-4" to="/">
      <img className="h-12 w-auto" src={logo} alt="USACO Guide" />
    </Link>
  );
};

export default function Sidebar({
  isMobileNavOpen,
  onMobileNavStateChange,
  mobileSidebarContent,
  desktopSidebarContent,
  activeModule = null,
  children,
}) {
  const [isContactUsActive, setIsContactUsActive] = useState(false);

  return (
    <>
      <ContactUsSlideover
        isOpen={isContactUsActive}
        onClose={() => setIsContactUsActive(false)}
        activeModule={activeModule}
      />

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
                onClick={() => onMobileNavStateChange(false)}
              >
                <div className="absolute inset-0 bg-gray-600 opacity-75" />
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
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <div className="absolute top-0 right-0 -mr-14 p-1">
                  <button
                    className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                    aria-label="Close sidebar"
                    onClick={() => onMobileNavStateChange(false)}
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
                <div className="flex-1 h-0 pt-5 overflow-y-auto">
                  {mobileSidebarContent}
                </div>
              </div>
            </Transition>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </div>
      </Transition>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div
          className="flex flex-col border-r border-gray-200 bg-white"
          style={{ width: '20rem' }}
        >
          <div className="flex flex-col py-2 overflow-y-auto">
            <SidebarLogo />
          </div>
          <nav className="flex-1">{desktopSidebarContent}</nav>
          <SidebarBottomButtons
            onContactUs={() => setIsContactUsActive(true)}
          />
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">{children}</div>
    </>
  );
}
