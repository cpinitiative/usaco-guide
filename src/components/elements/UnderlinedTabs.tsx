import * as React from 'react';

export default function UnderlinedTabs({
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
        <label htmlFor="selected-tab" className="sr-only">
          Select a tab
        </label>
        <select
          id="selected-tab"
          name="selected-tab"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-900"
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
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            {options.map(option => (
              <button
                key={option}
                onClick={() => onChange(option)}
                className={
                  (value === option
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-300') +
                  ' whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none'
                }
              >
                {labelMap ? labelMap[option] : option}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
