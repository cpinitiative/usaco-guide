import classNames from 'classnames';
import React from 'react';
import { useQuizOpen } from '../../context/QuizGeneratorContext';

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
  const { setOpen } = useQuizOpen();
  return (
    <>
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
      </div>
      <div className={'flex bg-gray-900'}>
        <button
          className={
            'text-gray-400 hover:text-gray-300 hover:bg-gray-800 active:bg-gray-800 px-3 py-2 text-sm font-medium focus:outline-none transition'
          }
          onClick={() => setOpen(true)}
          type={'button'}
        >
          Generate Quiz
        </button>
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
    </>
  );
};

export default EditorTabBar;
