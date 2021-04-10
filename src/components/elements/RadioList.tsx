import classNames from 'classnames';
import * as React from 'react';

export default function RadioList({
  name,
  options,
  value,
  onChange,
  labelMap,
  descriptionMap,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (string) => void;
  labelMap: { [key: string]: string };
  descriptionMap: { [key: string]: string };
}) {
  return (
    <fieldset>
      <div className="bg-white dark:bg-gray-800 rounded-md -space-y-px">
        {options.map((option, idx) => (
          <div
            className={classNames(
              'relative border p-4 flex cursor-pointer',
              idx === 0 && 'rounded-tl-md rounded-tr-md',
              idx === options.length - 1 && 'rounded-bl-md rounded-br-md',
              option === value
                ? 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700 z-10'
                : 'border-gray-200 dark:border-gray-700'
            )}
            onClick={() => onChange(option)}
            key={option}
          >
            <div className="flex items-center h-5">
              <input
                id={`${option}-${name}`}
                name={name}
                type="radio"
                className="focus:ring-blue-500 dark:focus:ring-offset-gray-700 h-4 w-4 text-blue-600 cursor-pointer border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-blue-500"
                checked={option === value}
              />
            </div>
            <label
              htmlFor={`${option}-${name}`}
              className="ml-3 flex flex-col cursor-pointer"
            >
              {/* On: "text-blue-900", Off: "text-gray-900" */}
              <span
                className={classNames(
                  'block text-sm font-medium',
                  option === value
                    ? 'text-blue-900 dark:text-blue-100'
                    : 'text-gray-900 dark:text-gray-100'
                )}
              >
                {labelMap[option]}
              </span>
              {descriptionMap[option] && (
                <span
                  className={classNames(
                    'block text-sm',
                    option === value
                      ? 'text-blue-700 dark:text-blue-300'
                      : 'text-gray-500 dark:text-gray-400'
                  )}
                >
                  {descriptionMap[option]}
                </span>
              )}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
