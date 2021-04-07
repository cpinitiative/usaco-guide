import { Link } from 'gatsby';
import * as React from 'react';
import { SECTIONS, SECTION_LABELS } from '../../content/ordering';
import Transition from './Transition';

export default function SectionsDropdown({
  currentSection = null,
  sidebarNav = false,
  onSelect = null,
  noDarkMode = false,
}) {
  const [isActive, setIsActive] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    const handleClick = e => {
      if (ref.current.contains(e.target)) return;
      setIsActive(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="inline-flex items-center" ref={ref}>
      <div className="relative">
        {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
        <button
          type="button"
          className={`group ${
            isActive || sidebarNav ? 'text-gray-900' : 'text-gray-500'
          } inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 ${
            !noDarkMode && 'dark:text-dark-high-emphasis'
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          <span>
            {currentSection ? SECTION_LABELS[currentSection] : 'Sections'}
          </span>
          <svg
            className={`${
              isActive ? 'text-gray-600' : 'text-gray-400'
            } h-5 w-5 group-hover:text-gray-500 transition ease-in-out duration-150 ${
              !noDarkMode &&
              'dark:text-dark-med-emphasis dark:group-hover:text-dark-med-emphasis'
            }`}
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

        <Transition
          show={isActive}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="origin-top-left absolute z-20 left-0 mt-2 w-56 -ml-4">
            <div className="rounded-lg bg-white shadow-lg">
              <div className="rounded-lg shadow-xs overflow-hidden">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {SECTIONS.map(section =>
                    section === currentSection ? (
                      <span
                        className="block px-4 py-2 text-base font-medium leading-6 text-gray-400 relative"
                        role="menuitem"
                        key={section}
                      >
                        {SECTION_LABELS[section]}

                        <span className="text-gray-300 absolute inset-y-0 right-0 flex items-center pr-4">
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
                    ) : sidebarNav ? (
                      <button
                        onClick={() => {
                          onSelect(section);
                          setIsActive(false);
                        }}
                        className="w-full text-left block px-4 py-2 text-base font-medium leading-6 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition ease-in-out duration-150 relative"
                        role="menuitem"
                        key={section}
                      >
                        {SECTION_LABELS[section]}
                      </button>
                    ) : (
                      <Link
                        to={`/${section}/`}
                        className="block px-4 py-2 text-base font-medium leading-6 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition ease-in-out duration-150 relative"
                        role="menuitem"
                        key={section}
                      >
                        {SECTION_LABELS[section]}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
