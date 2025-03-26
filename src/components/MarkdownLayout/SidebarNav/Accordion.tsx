import clsx from 'clsx';
import * as React from 'react';
import { useEffect } from 'react';
import useStickyState from '../../../hooks/useStickyState';

export default function Accordion({ label, isActive, children }) {
  const [expanded, setExpanded] = useStickyState(
    true,
    'guide:sidebarnav:isexpanded:' + label
  );
  useEffect(() => {
    if (isActive) setExpanded(true);
  }, [isActive]);
  return (
    <div
      className={clsx(
        'border-b border-gray-200 last:border-b-0 dark:border-gray-800',
        isActive && 'bg-[#f7faff] dark:bg-[#16191f]'
      )}
    >
      <div
        className="relative flex cursor-pointer items-center px-4 py-3 text-sm leading-5 font-semibold transition duration-150 ease-in-out hover:bg-blue-50 dark:hover:bg-gray-900"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="dark:text-dark-high-emphasis flex-1 text-gray-800">
          {label}
        </span>
        <svg
          className="h-5 w-5 shrink-0 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {expanded ? (
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </div>
      {expanded && children}
    </div>
  );
}
