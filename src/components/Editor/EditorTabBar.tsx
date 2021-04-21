import classNames from 'classnames';
import React from 'react';

export interface EditorTab {
  label: string;
}

export interface EditorTabBarProps {
  tabs: EditorTab[];
  // currently matches based on label for now
  activeTab: string;
  onTabSelect: (tab: EditorTab) => void;
}

const EditorTabBar: React.FC<EditorTabBarProps> = ({
  tabs,
  activeTab,
  onTabSelect,
}) => {
  return (
    <div className="flex bg-gray-900">
      {tabs.map(tab => (
        <button
          key={tab.label}
          className={classNames(
            tab.label === activeTab
              ? 'bg-[#1E1E1E] text-gray-200'
              : 'text-gray-400 hover:text-gray-200',
            'px-4 py-2 font-medium text-sm rounded-md focus:outline-none'
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
