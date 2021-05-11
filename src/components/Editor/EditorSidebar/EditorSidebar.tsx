import { useAtom } from 'jotai';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import * as React from 'react';
import {
  activeFileAtom,
  closeFileAtom,
  createNewFileAtom,
  filesListAtom,
} from '../../../atoms/editor';
import { FileListSidebar } from './FileListSidebar';

export const EditorSidebar = props => {
  const files = useAtomValue(filesListAtom);
  const [activeFile, setActiveFile] = useAtom(activeFileAtom);
  const createNewFile = useUpdateAtom(createNewFileAtom);
  const closeFile = useUpdateAtom(closeFileAtom);

  const handleOpenFile = (file: string) => {
    setActiveFile(file);
  };

  const handleCloseFile = (file: string) => {
    if (
      confirm(
        "Are you sure you want to close this file? You'll lose your changes."
      )
    ) {
      closeFile(file);
    }
  };

  return (
    <FileListSidebar
      {...props}
      activeFile={activeFile}
      files={files || []}
      onOpenFile={handleOpenFile}
      onCloseFile={handleCloseFile}
      onNewFile={f => createNewFile(f.path)}
    />
  );
};
