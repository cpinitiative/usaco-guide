import { useAtom } from 'jotai';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import * as React from 'react';
import {
  activeFileAtom,
  createNewFileAtom,
  filesListAtom,
} from '../../../atoms/editor';
import { FileListSidebar } from './FileListSidebar';

export const EditorSidebar = props => {
  const files = useAtomValue(filesListAtom);
  const [activeFile, setActiveFile] = useAtom(activeFileAtom);
  const createNewFile = useUpdateAtom(createNewFileAtom);

  const handleOpenFile = (file: string) => {
    setActiveFile(file);
  };

  return (
    <FileListSidebar
      {...props}
      activeFile={activeFile}
      files={files || []}
      onOpenFile={handleOpenFile}
      onNewFile={f => createNewFile(f.path)}
    />
  );
};
