import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import React, { Fragment, useId } from 'react';
import { ModuleProgress, ModuleProgressOptions } from '../../models/module';

const moduleProgressToIcon = (status: ModuleProgress): JSX.Element => {
  switch (status) {
    case 'Reading':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-yellow-300"
        >
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      );
    case 'Practicing':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-orange-500"
        >
          <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
        </svg>
      );
    case 'Complete':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-green-400"
        >
          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
        </svg>
      );
    case 'Skipped':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-blue-400"
        >
          <path
            fillRule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'Ignored':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-purple-400"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return <></>;
  }
};

const MarkCompleteButton = ({
  state,
  onChange,
  dropdownAbove,
}: {
  state: string;
  onChange: (option: ModuleProgress) => void;
  dropdownAbove?: boolean;
}): JSX.Element => {
  const menuId = useId();

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <MenuButton
              type="button"
              id={menuId}
              className={`inline-flex w-full justify-center rounded-md border border-gray-300 pr-4 shadow-sm dark:border-gray-800 ${
                state === 'Not Started' ? 'pl-4' : 'pl-3'
              } dark:focus:ring-offset-dark-surface bg-white py-2 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100`}
            >
              {moduleProgressToIcon(state as ModuleProgress)}
              <span
                className={`flex-1${state === 'Not Started' ? '' : 'ml-1.5'}`}
              >
                {state}
              </span>

              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
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
              className={`${
                dropdownAbove
                  ? 'bottom-0 mb-12 origin-bottom-right'
                  : 'origin-top-right'
              } absolute right-0 z-10 mt-2 w-36 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden dark:bg-gray-800`}
            >
              <div className="py-1">
                {ModuleProgressOptions.map(option => (
                  <MenuItem key={option}>
                    {({ active }) => (
                      <button
                        onClick={() => onChange(option)}
                        className={classNames(
                          'flex w-full items-center px-3 py-2 text-left text-sm',
                          active
                            ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
                            : 'text-gray-700 dark:text-gray-200'
                        )}
                        role="menuitem"
                      >
                        <span className="w-7">
                          {moduleProgressToIcon(option)}
                        </span>
                        <span className="flex-1">{option}</span>
                      </button>
                    )}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default MarkCompleteButton;
