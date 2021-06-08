import { useAtom } from 'jotai';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import * as React from 'react';
import {
  activeFileAtom,
  closeFileAtom,
  createNewInternalSolutionFileAtom,
  filesListAtom,
  openOrCreateExistingFileAtom,
} from '../../../atoms/editor';
import {
  AlgoliaEditorFile,
  AlgoliaEditorSolutionFile,
} from '../../../models/algoliaEditorFile';
import { FileListSidebar } from './FileListSidebar';

export const EditorSidebar = (props): JSX.Element => {
  const files = useAtomValue(filesListAtom);
  const [activeFile, setActiveFile] = useAtom(activeFileAtom);
  const openOrCreateExistingFile = useUpdateAtom(openOrCreateExistingFileAtom);
  const createNewInternalSolutionFile = useUpdateAtom(
    createNewInternalSolutionFileAtom
  );
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

  const handleCloseAllFiles = () => {
    if (
      confirm(
        "Are you sure you want to close all files? You'll lose all your changes."
      )
    ) {
      for (const file of files) closeFile(file);
    }
  };

  const handleNewFile = (file: AlgoliaEditorFile) => {
    if (file.path) {
      // this file already exists
      openOrCreateExistingFile(file.path);
    } else {
      // the user is trying to create a new internal solution
      createNewInternalSolutionFile(file as AlgoliaEditorSolutionFile);
    }
  };

  return (
    <FileListSidebar
      {...props}
      activeFile={activeFile}
      files={files || []}
      onOpenFile={handleOpenFile}
      onCloseFile={handleCloseFile}
      onCloseAllFiles={handleCloseAllFiles}
      onNewFile={handleNewFile}
    />
  );
};
