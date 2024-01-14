import { Buffer } from 'buffer';
import classNames from 'classnames';
import { useAtomValue } from 'jotai';
import React from 'react';
import {
  activeFileAtom,
  branchAtom,
  githubInfoAtom,
  octokitAtom,
} from '../../atoms/editor';
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
  const githubInfo = useAtomValue(githubInfoAtom);
  const activeFile = useAtomValue(activeFileAtom);
  const octokit = useAtomValue(octokitAtom);
  const branch = useAtomValue(branchAtom);
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
        {githubInfo && octokit && activeFile && branch && (
          <button
            className={classNames(
              'text-gray-400 hover:text-gray-300 hover:bg-gray-800 active:bg-gray-800',
              'px-3 py-2 font-medium text-sm focus:outline-none transition'
            )}
            onClick={() => {
              octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
                owner: githubInfo.login,
                repo: 'usaco-guide',
                path: activeFile.path,
                message: `Update ${activeFile.path}`,
                branch: branch,
                committer: {
                  name: githubInfo.name ?? 'editor',
                  email: githubInfo.email ?? 'editor@noreply.com',
                },
                content: Buffer.from(activeFile.markdown).toString('base64'),
                headers: {
                  'X-GitHub-Api-Version': '2022-11-28',
                },
              });
            }}
          >
            Commit Code
          </button>
        )}
      </div>
    </>
  );
};

export default EditorTabBar;
