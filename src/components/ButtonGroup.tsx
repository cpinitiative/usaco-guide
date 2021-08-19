import classNames from 'classnames';
import * as React from 'react';

export default function ButtonGroup({
  options,
  value,
  onChange,
  labelMap,
  disabled,
}: {
  options: string[];
  value: string;
  onChange: (string) => void;
  labelMap?: { [key: string]: string };
  disabled?: boolean;
}): JSX.Element {
  const leftButtonClasses = 'rounded-l-md';
  const middleButtonClasses = '-ml-px';
  const rightButtonClasses = '-ml-px rounded-r-md';
  const baseClasses =
    'relative inline-flex items-center px-4 py-2 border text-sm leading-5 font-medium focus:z-10 focus:outline-none focus:border-blue-300 dark:focus:border-blue-600 focus:shadow-outline-blue transition ease-in-out duration-150';
  const activeClasses = 'border-blue-600 bg-blue-600 text-white';
  const inactiveClasses =
    'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-100 active:bg-gray-100 active:text-gray-700';

  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      {options.map((option, index) => (
        <button
          type="button"
          className={classNames(baseClasses, {
            [leftButtonClasses]: index === 0,
            [middleButtonClasses]: index !== 0 && index !== options.length - 1,
            [rightButtonClasses]: index === options.length - 1,
            [activeClasses]: option === value,
            [inactiveClasses]: option !== value,
          })}
          disabled={disabled}
          onClick={() => onChange(option)}
          key={option}
        >
          {labelMap ? labelMap[option] : option}
        </button>
      ))}
    </span>
  );
}
