import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import type { User } from "firebase/auth";
import Link from "next/link";
import React from "react";

export interface UserAvatarMenuProps {
  firebaseUser: User;
  onSignOut: () => void;
}

export const UserAvatarMenu: React.FC<UserAvatarMenuProps> = (props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <MenuButton className="flex rounded-full border-2 border-transparent text-sm transition focus:border-blue-500 focus:outline-hidden dark:focus:border-white">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={props.firebaseUser.photoURL ?? undefined}
                alt="User photo URL"
              />
            </MenuButton>
          </div>

          {/* Remove <Transition> and use transition prop on MenuItems */}
          <MenuItems
            transition
            className="absolute right-0 z-30 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition ease-out focus:outline-hidden data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 dark:bg-gray-800"
          >
            <div className="py-1">
              <MenuItem>
                {({ focus }) => (
                  <span
                    className={`block w-full px-4 py-2 text-left text-sm leading-5 focus:outline-hidden ${
                      focus
                        ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
                        : "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    }`}
                  >
                    <Link
                      href="/settings"
                      className="block w-full text-inherit"
                    >
                      Settings
                    </Link>
                  </span>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={() => {
                      props.onSignOut();
                    }}
                    role="menuitem"
                    className={`block w-full px-4 py-2 text-left text-sm leading-5 focus:outline-hidden ${
                      focus
                        ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
                        : "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    }`}
                  >
                    Sign out
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </>
      )}
    </Menu>
  );
};
