import classNames from 'classnames';
import * as React from 'react';

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
  <button
    type="button"
    className={classNames(
      checked ? 'bg-blue-500 dark:bg-blue-600' : 'bg-gray-200 dark:bg-gray-700',
      'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-surface focus:ring-light-blue-500 dark:focus:ring-light-blue-400'
    )}
    onClick={() => onChange(!checked)}
  >
    <span
      className={classNames(
        checked ? 'translate-x-5' : 'translate-x-0',
        'inline-block h-5 w-5 rounded-full bg-white dark:bg-gray-300 shadow transform ring-0 transition ease-in-out duration-200'
      )}
    />
  </button>
);

export default Switch;
