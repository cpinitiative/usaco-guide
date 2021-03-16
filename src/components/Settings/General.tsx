import * as React from 'react';
import Switch from '../elements/Switch';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

export default function General() {
  const {
    showIgnored,
    setShowIgnored,
    hideTagsAndDifficulty,
    setHideTagsAndDifficulty,
  } = React.useContext(UserDataContext);
  return (
    <div>
      <div className="space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          Options
        </h3>
      </div>
      <div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-1-label"
              >
                Hide Difficulty & Tags on Problem Lists
              </p>
            </div>
            <Switch
              checked={hideTagsAndDifficulty}
              onChange={b => setHideTagsAndDifficulty(b)}
            />
          </li>
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-2-label"
              >
                Show ignored problems & modules on Dashboard
              </p>
            </div>
            <Switch checked={showIgnored} onChange={b => setShowIgnored(b)} />
          </li>
        </ul>
      </div>
    </div>
  );
}
