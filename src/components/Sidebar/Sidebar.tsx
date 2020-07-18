import * as React from 'react';
import Transition from '../Transition';
import { Link } from 'gatsby';
import { SidebarNav } from '../ModuleLayout/SidebarNav/SidebarNav';
// @ts-ignore
import logo from '../../assets/logo.svg';
import { createContext, useState } from 'react';

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
  children,
}) {
  return (
    <>
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
              {mobileSidebarContent}
            </Transition>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </div>
      </Transition>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        {desktopSidebarContent}
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">{children}</div>
    </>
  );
}
