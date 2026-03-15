import { Switch as HeadlessUISwitch } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';

export interface SwitchProps {
  /**
   * Whether or not the switch is checked.
   */
  checked: boolean;
  /**
   * Called when the user toggles the switch.
   * @param checked The new state of the switch: true if checked, false if unchecked.
   */
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => (
  <HeadlessUISwitch
    checked={checked}
    onChange={onChange}
    className={classNames(
      checked ? 'bg-blue-500 dark:bg-blue-600' : 'bg-gray-200 dark:bg-gray-700',
      'dark:focus:ring-offset-dark-surface relative ml-4 inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-hidden dark:focus:ring-sky-400'
    )}
  >
    <span
      aria-hidden="true"
      className={classNames(
        checked ? 'translate-x-5' : 'translate-x-0',
        'inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out dark:bg-gray-300'
      )}
    />
  </HeadlessUISwitch>
);

export default Switch;
