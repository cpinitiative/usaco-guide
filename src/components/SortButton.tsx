import { Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export const SortButton = ({
  options,
  state,
  onChange,
  dropdownAbove,
}: {
  options: string[];
  state: string;
  onChange: (option: string) => void;
  dropdownAbove?: boolean;
}) => {
  const [show, setShow] = React.useState(false);
  const handleSelect = (option) => {
    setShow(false);
    onChange(option);
  };
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleClick = (e) => {
      if (ref.current?.contains(e.target)) return;
      setShow(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-gray-300 px-4 dark:border-gray-800 dark:text-dark-high-emphasis dark:hover:text-dark-high-emphasis focus:shadow-outline-blue bg-white py-2 text-sm leading-5 font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-hidden dark:bg-gray-900"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setShow(!show)}
            disabled={options.length === 1}
          >
            <span className="flex-1 text-left">{state}</span>

            <svg
              className="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      <Transition
        show={show}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={`${
            dropdownAbove
              ? 'bottom-0 mb-12 origin-bottom-right'
              : 'origin-top-right'
          } absolute right-0 z-10 mt-2 rounded-md shadow-lg`}
        >
          <div className="rounded-md bg-white shadow-xs dark:bg-gray-900">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="dark:text-dark-high-emphasis dark:hover:text-dark-high-emphasis flex w-full items-center px-3 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden dark:hover:bg-gray-700"
                  role="menuitem"
                >
                  <span className="flex-1">{option}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};
