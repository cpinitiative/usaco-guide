import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';
import { SECTIONS, SECTION_LABELS } from '../../content/ordering';

export default function SectionsDropdown({
  currentSection = null,
  sidebarNav = false,
  onSelect = null,
  noDarkMode = false,
}) {
  return (
    <Menu as="div" className="inline-flex items-center">
      {({ open }) => (
        <div className="relative">
          <div>
            <Menu.Button
              className={`group ${
                open || sidebarNav ? 'text-gray-900' : 'text-gray-500'
              } inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 ${
                !noDarkMode && 'dark:text-dark-high-emphasis'
              }`}
            >
              <span>
                {currentSection ? SECTION_LABELS[currentSection] : 'Sections'}
              </span>
              <ChevronDownIcon
                className={`${
                  open ? 'text-gray-600' : 'text-gray-400'
                } h-5 w-5 group-hover:text-gray-500 transition ease-in-out duration-150 ${
                  !noDarkMode &&
                  'dark:text-dark-med-emphasis dark:group-hover:text-dark-med-emphasis'
                }`}
                aria-hidden="true"
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
              className="origin-top-left absolute z-20 left-0 mt-2 w-56 -ml-4 rounded-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 shadow-lg focus:outline-none"
            >
              <div className="py-1">
                {SECTIONS.map(section =>
                  section === currentSection ? (
                    <Menu.Item key={section} disabled>
                      <span className="block px-4 py-2 text-base font-medium leading-6 text-gray-400 dark:text-dark-med-emphasis relative">
                        {SECTION_LABELS[section]}

                        <span className="text-gray-300 dark:text-dark-med-emphasis absolute inset-y-0 right-0 flex items-center pr-4">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </span>
                    </Menu.Item>
                  ) : sidebarNav ? (
                    <Menu.Item key={section}>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            onSelect(section);
                          }}
                          className={classNames(
                            'w-full text-left block px-4 py-2 text-base font-medium leading-6 focus:outline-none',
                            active
                              ? 'bg-gray-100 text-gray-900 dark:text-gray-100 dark:bg-gray-700'
                              : 'text-gray-700 dark:text-gray-100'
                          )}
                        >
                          {SECTION_LABELS[section]}
                        </button>
                      )}
                    </Menu.Item>
                  ) : (
                    <Menu.Item key={section}>
                      {({ active }) => (
                        <Link
                          to={`/${section}/`}
                          className={classNames(
                            'block px-4 py-2 text-base font-medium leading-6 focus:outline-none',
                            active
                              ? 'bg-gray-100 text-gray-900 dark:text-gray-100 dark:bg-gray-700'
                              : 'text-gray-700 dark:text-gray-100'
                          )}
                        >
                          {SECTION_LABELS[section]}
                        </Link>
                      )}
                    </Menu.Item>
                  )
                )}
              </div>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}
