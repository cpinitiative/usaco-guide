import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { Link } from 'gatsby';
import * as React from 'react';
import { SECTIONS, SECTION_LABELS } from '../../content/ordering';
import { ClientOnly } from './ClientOnly';

export default function SectionsDropdown({
  currentSection = null as string | null,
  sidebarNav = false,
  onSelect = null as ((section: string) => void) | null,
}): JSX.Element {
  return (
    <ClientOnly>
      <Menu as="div">
        {({ open }) => (
          <div className="relative h-full">
            <MenuButton
              className={clsx(
                'group dark:text-dark-high-emphasis inline-flex h-full items-center space-x-2 text-base leading-6 font-medium transition duration-160 ease-in-out hover:text-gray-900 focus:text-gray-900 focus:outline-hidden',
                open || sidebarNav ? 'text-gray-900' : 'text-gray-500',
                !sidebarNav &&
                  'border-b-2 border-transparent pt-0.5 hover:border-gray-300 focus:border-gray-300 dark:hover:border-gray-500 dark:focus:border-gray-500'
              )}
            >
              <span>
                {currentSection ? SECTION_LABELS[currentSection] : 'Sections'}
              </span>
              <ChevronDownIcon
                className={`${
                  open ? 'text-gray-500' : 'text-gray-400'
                } h-5 w-5 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500 ${'dark:text-dark-med-emphasis dark:group-hover:text-dark-med-emphasis dark:group-focus:text-dark-med-emphasis'}`}
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              anchor="top start"
              className={`absolute left-0 z-[100] -ml-4 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800 ${
                sidebarNav ? 'mt-2' : '-mt-2'
              } transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in`}
              style={{ zIndex: 9999 }}
            >
              <div className="py-1">
                {SECTIONS.map(section => {
                  const className =
                    'w-full text-left block px-4 py-2 text-base font-medium leading-6 focus:outline-hidden text-gray-700 dark:text-gray-100 data-[active]:bg-gray-100 data-[active]:text-gray-900 dark:data-[active]:bg-gray-700 dark:data-[active]:text-gray-100 data-[disabled]:text-gray-400 dark:data-[disabled]:text-dark-med-emphasis relative';
                  const children = (
                    <>
                      {SECTION_LABELS[section]}
                      {section === currentSection && (
                        <span className="dark:text-dark-med-emphasis absolute inset-y-0 right-0 flex items-center pr-4 text-gray-300">
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
                      )}
                    </>
                  );
                  return (
                    <MenuItem
                      key={section}
                      disabled={section === currentSection}
                    >
                      {section === currentSection ? (
                        <span className={className}>{children}</span>
                      ) : onSelect ? (
                        <button
                          className={className}
                          onClick={() => onSelect(section)}
                        >
                          {children}
                        </button>
                      ) : (
                        <Link className={className} to={`/${section}/`}>
                          {children}
                        </Link>
                      )}
                    </MenuItem>
                  );
                })}
              </div>
            </MenuItems>
          </div>
        )}
      </Menu>
    </ClientOnly>
  );
}
