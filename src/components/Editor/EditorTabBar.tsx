import { Buffer } from 'buffer';
import classNames from 'classnames';
import { useAtomValue, useSetAtom } from 'jotai';
import React, { useCallback, useState } from 'react';
import {
  branchAtom,
  githubInfoAtom,
  octokitAtom,
  saveFileAtom,
  tabAtom,
  trueFileAtom,
  trueFilePathAtom,
} from '../../atoms/editor';
import { useQuizOpen } from '../../context/QuizGeneratorContext';
import AddProblemModal from './AddProblemModal';

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
  const [pullState, setPullState] = useState('Pull Code');
  const filePath = useAtomValue(trueFilePathAtom);
  const file = useAtomValue(trueFileAtom);
  const saveFile = useSetAtom(saveFileAtom);
  const tab = useAtomValue(tabAtom);
  const [dialogOpen, setDialogOpen] = useState(false);
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
  const pullCode = useCallback(async () => {
    if (!octokit || !githubInfo || !branch) return;
    setPullState('Pulling...');
    const response = (
      await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: githubInfo.login,
        repo: 'usaco-guide',
        path: filePath,
        ref: branch,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
    ).data;
    if (!('type' in response) || response.type !== 'file') return; // should not happen
    saveFile({
      path: filePath,
      update(f) {
        if (tab == 'content') {
          return {
            ...f,
            markdown: Buffer.from(response.content, 'base64').toString('utf-8'),
          };
        } else {
          return {
            ...f,
            problems: Buffer.from(response.content, 'base64').toString('utf-8'),
          };
        }
      },
    });
    setPullState('Pull Code');
  }, [octokit, githubInfo, branch, filePath, tab, saveFile]);
  return (
    <>
      <div className="flex bg-gray-50 dark:bg-gray-950">
        <div className="flex-1">
          {tabs.map(tab => (
            <button
              key={tab.value}
              className={classNames(
                tab.value === activeTab
                  ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                  : 'text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 active:bg-gray-100 dark:active:bg-gray-900',
                'px-4 py-2 font-medium text-sm focus:outline-none transition'
              )}
              onClick={() => onTabSelect(tab)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div
        className={
          'flex bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400'
        }
      >
        <button
          className={classNames(
            'hover:text-gray-800 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-800',
            'px-3 py-2 text-sm font-medium focus:outline-none transition'
          )}
          onClick={() => setOpen(true)}
          type="button"
        >
          Generate Quiz
        </button>
        <button
          className={classNames(
            'hover:text-gray-800 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-800',
            'px-3 py-2 font-medium text-sm focus:outline-none transition'
          )}
          onClick={() => onFormatCode()}
        >
          Format Code
        </button>
        {useAtomValue(tabAtom) === 'problems' && (
          <button
            className={classNames(
              'hover:text-gray-800 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-800',
              'px-3 py-2 font-medium text-sm focus:outline-none transition'
            )}
            onClick={() => setDialogOpen(true)}
          >
            Add Problem
          </button>
        )}
        {githubInfo && octokit && file && branch && (
          <button
            className={classNames(
              'hover:text-gray-800 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-800',
              'px-3 py-2 font-medium text-sm focus:outline-none transition'
            )}
            onClick={() => updateFile(file)}
          >
            {commitState}
          </button>
        )}
        {githubInfo && octokit && file && branch && (
          <button
            className={classNames(
              'hover:text-gray-800 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-800',
              'px-3 py-2 font-medium text-sm focus:outline-none transition'
            )}
            onClick={() => pullCode()}
          >
            {pullState}
          </button>
        )}
      </div>
      <AddProblemModal
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
};

export default EditorTabBar;
