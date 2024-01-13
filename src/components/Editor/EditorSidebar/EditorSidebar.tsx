import { useAtom } from 'jotai';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import React, { useRef } from 'react';
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
  const branchNameInput = useRef<HTMLInputElement>(null);
  return (
    <div className="flex-col w-[250px]">
      <FileListSidebar
        {...props}
        activeFile={activeFile}
        files={files || []}
        onOpenFile={handleOpenFile}
        onCloseFile={handleCloseFile}
        onCloseAllFiles={handleCloseAllFiles}
        onNewFile={handleNewFile}
      />
      <div className="px-4 py-4">
        {props.user ? (
          <p>{`Logged in as: ${props.user}`}</p>
        ) : props.loading ? (
          <p>Logging in...</p>
        ) : (
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.GATSBY_EDITOR_CLIENT_ID}&redirect_uri=http://localhost:8000/editor`}
            className="btn"
          >
            Login with GitHub &rarr;
          </a>
        )}
        {props.user && (
          <div className="flex flex-col items-start">
            <input className="input" ref={branchNameInput} />
            <button
              onClick={() =>
                props.handleCreateBranch(branchNameInput.current?.value)
              }
            >
              Create Branch
            </button>
            <button className="btn" onClick={props.handleLogOut}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
