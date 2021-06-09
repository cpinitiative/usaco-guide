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
}> = ({
  className,
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
    <div
      className={classNames(
        className,
        'w-[250px] bg-[#1E1E1E] border-r border-gray-800 overflow-y-auto'
      )}
    >
      <div className="text-gray-300 text-sm font-medium border-b border-gray-800 flex items-center justify-between">
        <span className="px-4 py-2">Files</span>
        <div className="flex-shrink-0">
          <button
            className={classNames(
              'text-gray-400 hover:text-gray-300 hover:bg-gray-800 active:bg-gray-800',
              'px-3 py-2 font-medium text-sm focus:outline-none transition'
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
          className={`flex items-center hover:bg-gray-800 text-gray-400 hover:text-gray-300 transition${
            activeFile?.path === file ? ' bg-gray-900' : ''
          }`}
          key={file}
        >
          <div
            className="cursor-pointer flex-1 min-w-0 pl-4 py-1 break-all text-sm"
            onClick={() => onOpenFile(file)}
          >
            {file}
          </div>
          <button
            className="flex-shrink-0 focus:outline-none py-1 px-2 text-gray-600 hover:text-gray-300 transition"
            onClick={() => onCloseFile(file)}
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>
      ))}
      <div className="h-1" />
      <button
        className={classNames(
          'text-gray-400 hover:text-gray-300 hover:bg-gray-800 active:bg-gray-800',
          'px-4 py-2 font-medium text-sm focus:outline-none transition w-full'
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
