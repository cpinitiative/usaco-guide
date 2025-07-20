import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import classNames from 'classnames';
import type { User } from 'firebase/auth';
import { Link } from 'gatsby';
import React, { Fragment } from 'react';

export interface UserAvatarMenuProps {
  firebaseUser: User;
  onSignOut: () => void;
}

export const UserAvatarMenu: React.FC<UserAvatarMenuProps> = props => {
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

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems
              static
              className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden dark:bg-gray-800"
            >
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/settings"
                      className={classNames(
                        active && 'bg-gray-100 dark:bg-gray-700',
                        'block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 focus:outline-hidden dark:text-gray-100'
                      )}
                    >
                      Settings
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        props.onSignOut();
                      }}
                      className={classNames(
                        active && 'bg-gray-100 dark:bg-gray-700',
                        'block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 focus:outline-hidden dark:text-gray-100'
                      )}
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  );
};
