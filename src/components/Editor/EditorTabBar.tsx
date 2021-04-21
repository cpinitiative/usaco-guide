import classNames from 'classnames';
import React from 'react';

export interface EditorTab {
  label: string;
  value: string;
}

export interface EditorTabBarProps {
  tabs: EditorTab[];
  /**
   * Value of the active tab.
   */
  activeTab: string;
  onTabSelect: (tab: EditorTab) => void;
}

const EditorTabBar: React.FC<EditorTabBarProps> = ({
  tabs,
  activeTab,
  onTabSelect,
}) => {
  return (
    <div className="flex bg-gray-300 dark:bg-gray-900">
      {tabs.map(tab => (
        <button
          key={tab.value}
          className={classNames(
            tab.value === activeTab
              ? 'dark:bg-gray-900 dark:text-gray-200 text-gray-700 bg-white'
              : 'dark:text-gray-400 dark:hover:bg-gray-800 text-gray-600 hover:bg-gray-200 active:bg-gray-100 dark:active:bg-gray-900',
            'px-4 py-2 font-medium text-sm focus:outline-none'
          )}
          onClick={() => onTabSelect(tab)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default EditorTabBar;
