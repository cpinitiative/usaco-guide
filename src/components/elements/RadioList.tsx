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
      <div className="-space-y-px rounded-md bg-white dark:bg-gray-800">
        {options.map((option, idx) => (
          <RadioGroup.Option
            key={option}
            value={option}
            className={({ checked }) =>
              classNames(
                'relative flex cursor-pointer border p-4 focus:outline-hidden',
                idx === 0 && 'rounded-tl-md rounded-tr-md',
                idx === options.length - 1 && 'rounded-br-md rounded-bl-md',
                checked
                  ? 'z-10 border-blue-200 bg-blue-50 dark:border-blue-700 dark:bg-blue-900'
                  : 'border-gray-200 dark:border-gray-700'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked
                      ? 'border-transparent bg-blue-600 dark:bg-blue-500'
                      : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700',
                    active
                      ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-700'
                      : '',
                    'mt-0.5 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border'
                  )}
                  aria-hidden="true"
                >
                  {checked && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
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
