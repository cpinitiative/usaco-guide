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
  onFormatCode: () => void;
}

const EditorTabBar: React.FC<EditorTabBarProps> = ({
  tabs,
  activeTab,
  onTabSelect,
  onFormatCode,
}) => {
  return (
    <div className="flex bg-gray-900">
      <div className="flex-1">
        {tabs.map(tab => (
          <button
            key={tab.value}
            className={classNames(
              tab.value === activeTab
                ? 'bg-[#1E1E1E] text-gray-200'
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800 active:bg-gray-800',
              'px-4 py-2 font-medium text-sm focus:outline-none transition'
            )}
            onClick={() => onTabSelect(tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex-shrink-0">
        <button
          className={classNames(
            'text-gray-400 hover:text-gray-300 hover:bg-gray-800 active:bg-gray-800',
            'px-3 py-2 font-medium text-sm focus:outline-none transition'
          )}
          onClick={() => onFormatCode()}
        >
          Format Code
        </button>
      </div>
    </div>
  );
};

export default EditorTabBar;
