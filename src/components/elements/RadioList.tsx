import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';

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
    <RadioGroup value={value} onChange={onChange}>
      <div className="bg-white dark:bg-gray-800 rounded-md -space-y-px">
        {options.map((option, idx) => (
          <RadioGroup.Option
            key={option}
            value={option}
            className={({ checked }) =>
              classNames(
                'relative border p-4 flex cursor-pointer focus:outline-none',
                idx === 0 && 'rounded-tl-md rounded-tr-md',
                idx === options.length - 1 && 'rounded-bl-md rounded-br-md',
                checked
                  ? 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700 z-10'
                  : 'border-gray-200 dark:border-gray-700'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked
                      ? 'bg-blue-600 dark:bg-blue-500 border-transparent'
                      : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600',
                    active
                      ? 'ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-gray-700'
                      : '',
                    'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                  )}
                  aria-hidden="true"
                >
                  {checked && (
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  )}
                </span>
                <div className="ml-3 flex flex-col">
                  {/* On: "text-blue-900", Off: "text-gray-900" */}
                  <RadioGroup.Label
                    as="span"
                    className={classNames(
                      'block text-sm font-medium',
                      checked
                        ? 'text-blue-900 dark:text-blue-100'
                        : 'text-gray-900 dark:text-gray-100'
                    )}
                  >
                    {labelMap[option]}
                  </RadioGroup.Label>
                  {descriptionMap[option] && (
                    <RadioGroup.Description
                      as="span"
                      className={classNames(
                        'block text-sm',
                        checked
                          ? 'text-blue-700 dark:text-blue-300'
                          : 'text-gray-500 dark:text-gray-400'
                      )}
                    >
                      {descriptionMap[option]}
                    </RadioGroup.Description>
                  )}
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
