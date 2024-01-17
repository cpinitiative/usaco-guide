import { Buffer } from 'buffer';
import classNames from 'classnames';
import { useAtomValue } from 'jotai';
import React, { useCallback, useState } from 'react';
import {
  branchAtom,
  githubInfoAtom,
  octokitAtom,
  trueFileAtom,
  trueFilePathAtom,
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
  const octokit = useAtomValue(octokitAtom);
  const branch = useAtomValue(branchAtom);
  const [commitState, setCommitState] = useState('Commit Code');
  const filePath = useAtomValue(trueFilePathAtom);
  const file = useAtomValue(trueFileAtom);
  const updateFile = useCallback(
    async file => {
      if (!octokit || !githubInfo || !branch) return;
      setCommitState('Committing...');
      let fileSha = undefined;
      try {
        fileSha = (
          (await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: githubInfo.login,
            repo: 'usaco-guide',
            path: filePath,
            ref: branch,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
            },
          })) as any
        ).data.sha;
      } catch {
        console.log("file doesn't exist yet");
      }
      const response = await octokit.request(
        'PUT /repos/{owner}/{repo}/contents/{path}',
        {
          owner: githubInfo.login,
          repo: 'usaco-guide',
          path: filePath,
          message: `Update ${filePath}`,
          branch: branch,
          sha: fileSha,
          content: Buffer.from(file ?? '').toString('base64'),
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }
      );
      console.log('response: ', response);
      window.open(response.data.commit.html_url, '_blank');
      setCommitState('Commit Code');
    },
    [octokit, githubInfo, branch, filePath]
  );
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
        {githubInfo && octokit && file && branch && (
          <button
            className={classNames(
              'text-gray-400 hover:text-gray-300 hover:bg-gray-800 active:bg-gray-800',
              'px-3 py-2 font-medium text-sm focus:outline-none transition'
            )}
            onClick={() => updateFile(file)}
          >
            {commitState}
          </button>
        )}
      </div>
    </>
  );
};

export default EditorTabBar;
