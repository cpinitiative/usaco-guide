import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';
import { SECTIONS, SECTION_LABELS } from '../../content/ordering';

export default function SectionsDropdown({
  currentSection = null,
  sidebarNav = false,
  onSelect = null,
  noDarkMode = false,
}): JSX.Element {
  return (
    <Menu as="div">
      {({ open }) => (
        <div className="relative h-full">
          <Menu.Button className="group text-center w-24 h-full text-[#eee] hover:text-white bg-[#139] hover:bg-[#47f] small-caps">
            <span className="mt-0.5">Sections</span>
          </Menu.Button>
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
              className={`origin-top-left absolute z-20 left-0 w-56 -ml-4 bg-white shadow-lg focus:outline-none`}
            >
              <div className="py-1">
                {SECTIONS.map(section => (
                  <Menu.Item key={section}>
                    {({ active }) => (
                      <Link
                        to={`/${section}/`}
                        className={classNames(
                          'block px-4 py-2 focus:outline-none',
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        )}
                      >
                        {SECTION_LABELS[section]}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}
