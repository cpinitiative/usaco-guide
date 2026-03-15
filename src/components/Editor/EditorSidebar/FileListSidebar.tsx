import { XIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import React, { useState } from 'react';
import { AlgoliaEditorFile } from '../../../models/algoliaEditorFile';
import { EditorFileModal } from '../EditorFileModal';

export const FileListSidebar: React.FC<{
  className?: string;
  activeFile: { path: string } | null;
  files: string[];
  onOpenFile: (filePath: string) => void;
  onCloseFile: (filePath: string) => void;
  onCloseAllFiles: () => void;
  onNewFile: (file: AlgoliaEditorFile) => void;
  token: string;
}> = ({
  files,
  activeFile,
  onOpenFile,
  onCloseFile,
  onCloseAllFiles,
  onNewFile,
}) => {
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const handleFileSelect = (file: AlgoliaEditorFile) => {
    setIsFileModalOpen(false);
    onNewFile(file);
  };

  return (
    <div className={`w-full overflow-y-auto`}>
      <div className="flex items-center justify-between border-b border-gray-200 text-sm font-medium text-gray-300 dark:border-gray-800">
        <span className="px-4 py-2 text-gray-600 dark:text-gray-300">
          Files
        </span>
        <div className="shrink-0">
          <button
            className={classNames(
              'text-gray-500 hover:bg-gray-200 hover:text-gray-600 active:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
              'px-3 py-2 text-sm font-medium transition focus:outline-hidden'
            )}
            onClick={() => onCloseAllFiles()}
          >
            Close All
          </button>
        </div>
      </div>
      <div className="h-1" />
      {files.map(file => (
        <div
          className={`flex items-center text-gray-500 transition hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-400 ${
            activeFile?.path === file ? 'bg-gray-100 dark:bg-gray-900' : ''
          }`}
          key={file}
        >
          <div
            className="min-w-0 flex-1 cursor-pointer py-1 pl-4 text-sm break-all"
            onClick={() => onOpenFile(file)}
          >
            {file}
          </div>
          <button
            className="shrink-0 px-2 py-1 text-gray-400 transition hover:text-gray-700 focus:outline-hidden dark:text-gray-600 dark:hover:text-gray-300"
            onClick={() => onCloseFile(file)}
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>
      ))}
      <div className="h-1" />
      <button
        className={classNames(
          'text-gray-500 hover:bg-gray-200 hover:text-gray-600 active:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-400 dark:active:bg-gray-800',
          'w-full px-4 py-2 text-sm font-medium transition focus:outline-hidden'
        )}
        onClick={() => setIsFileModalOpen(true)}
      >
        Open File
      </button>
      <EditorFileModal
        isOpen={isFileModalOpen}
        onClose={() => setIsFileModalOpen(false)}
        onSelect={handleFileSelect}
      />
    </div>
  );
};
