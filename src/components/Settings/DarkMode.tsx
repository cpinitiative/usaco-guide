import * as React from 'react';
import classNames from 'classnames';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import RadioList from '../elements/RadioList';

export default function DarkMode() {
  const { darkMode, setDarkMode } = React.useContext(UserDataContext);

  return (
    <div>
      <div className="space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          Theme
        </h3>
      </div>
      <div className="h-4" />
      <RadioList
        name="dark_mode"
        options={['light', 'dark']}
        value={darkMode ? 'dark' : 'light'}
        onChange={newValue => {
          setDarkMode(newValue === 'dark');
        }}
        labelMap={{ light: 'Light Mode', dark: 'Dark Mode' }}
        descriptionMap={{}}
      />
    </div>
  );
}
