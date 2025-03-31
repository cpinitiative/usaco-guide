import * as React from 'react';

export default function Tabs({
  options,
  labelMap,
  value,
  onChange,
}: {
  options: string[];
  labelMap?: { [key: string]: string };
  value: string;
  onChange: (newValue: string) => void;
}) {
  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="question-tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="question-tabs"
          className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 focus:border-sky-500 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-sky-500"
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          {options.map(option => (
            <option value={option} key={option}>
              {labelMap ? labelMap[option] : option}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow-sm dark:divide-gray-600">
          {options.map((option, idx) => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 ${
                idx === 0 ? 'rounded-l-lg' : ''
              } ${
                idx === options.length - 1 ? 'rounded-r-lg' : ''
              } group relative min-w-0 flex-1 overflow-hidden bg-white px-2 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10 focus:outline-hidden dark:bg-gray-800`}
            >
              <span>{labelMap ? labelMap[option] : option}</span>
              <span
                aria-hidden="true"
                className={`${
                  option === value ? 'bg-sky-500' : 'bg-transparent'
                } absolute inset-x-0 bottom-0 h-0.5`}
              />
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
