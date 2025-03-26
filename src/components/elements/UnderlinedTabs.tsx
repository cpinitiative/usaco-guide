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
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-hidden sm:text-sm dark:border-gray-700 dark:bg-gray-900 dark:focus:border-blue-500"
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
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300') +
                  ' border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap focus:outline-hidden'
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
