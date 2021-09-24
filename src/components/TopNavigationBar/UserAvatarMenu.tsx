import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import type { User } from 'firebase/auth';
import { Link } from 'gatsby';
import React from 'react';
import Transition from '../Transition';

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
            <Menu.Button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none dark:focus:border-white focus:border-blue-500 transition">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={props.firebaseUser.photoURL}
                alt="User photo URL"
              />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/settings"
                      className={classNames(
                        active && 'bg-gray-100 dark:bg-gray-700',
                        'block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-100 focus:outline-none'
                      )}
                    >
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        props.onSignOut();
                      }}
                      className={classNames(
                        active && 'bg-gray-100 dark:bg-gray-700',
                        'block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-100 focus:outline-none'
                      )}
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
