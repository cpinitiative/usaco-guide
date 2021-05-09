import classNames from 'classnames';
import React, { useState } from 'react';
import { AlgoliaEditorFile } from '../../models/algoliaEditorFile';
import { EditorFileModal } from './EditorFileModal';

export const EditorSidebar: React.FC<{
  className?: string;
  files: { path: string }[];
  onOpenFile: (file: { path: string }) => void;
  onNewFile: (file: AlgoliaEditorFile) => void;
}> = ({ className, files, onOpenFile, onNewFile }) => {
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
        {/* todo: hide icon? */}
        {/*<div className="flex-shrink-0">*/}
        {/*  <button*/}
        {/*    className={classNames(*/}
        {/*      'text-gray-400 hover:text-gray-300 hover:bg-gray-800 active:bg-gray-800',*/}
        {/*      'px-3 py-2 font-medium text-sm focus:outline-none transition'*/}
        {/*    )}*/}
        {/*    onClick={() => console.log('new file')}*/}
        {/*  >*/}
        {/*    New File*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
      <div className="h-1" />
      {files.map(file => (
        <div
          className="px-4 py-1 group hover:bg-gray-800 transition"
          key={file.path}
        >
          <div className="cursor-pointer" onClick={() => onOpenFile(file)}>
            <span className="text-gray-400 group-hover:text-gray-300 text-sm transition">
              {file.path}
            </span>
          </div>
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
