import { InformationCircleIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import React, { useContext } from 'react';
import { activeFileAtom, saveFileAtom } from '../../atoms/editor';
import { useDarkMode } from '../../context/DarkModeContext';
import {
  Language,
  LANGUAGE_LABELS,
} from '../../context/UserDataContext/properties/userLang';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import LogoSquare from '../LogoSquare';
import { fetchFileContent } from './editorUtils';

export const EditorTopNav = (): JSX.Element => {
  const activeFile = useAtomValue(activeFileAtom);
  const saveFile = useUpdateAtom(saveFileAtom);
  const userSettings = useContext(UserDataContext);
  const isDarkMode = useDarkMode();

  const handleReloadContent = async () => {
    if (confirm('Reload file from Github? Your local changes will be lost.')) {
      const data = await fetchFileContent(activeFile.path);
      // note: we can't use setMarkdown / setProblems in sequence because setProblems would override setMarkdown
      saveFile({
        ...activeFile,
        markdown: data.markdown,
        problems: data.problems,
      });
    }
  };

  return (
    <div className="block px-4 border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 whitespace-nowrap flex-nowrap py-2 mr-8">
          <div className="h-8 w-8 flex-shrink-0">
            <LogoSquare />
          </div>
          <span className="font-medium text-xl tracking-tight">
            Guide Editor
          </span>
        </div>
        {/*<button className="inline-flex items-center space-x-2 text-gray-600 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 font-medium text-sm rounded-md focus:outline-none transition">*/}
        {/*  /!*<ArchiveIcon className="h-4 w-4" />*!/*/}
        {/*  <span>History</span>*/}
        {/*</button>*/}
        {/*<button className="inline-flex items-center space-x-2 text-gray-600 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 font-medium text-sm rounded-md focus:outline-none transition">*/}
        {/*  /!*<ShareIcon className="h-4 w-4" />*!/*/}
        {/*  <span>Share</span>*/}
        {/*</button>*/}
        {/*<button*/}
        {/*  className="inline-flex items-center space-x-2 text-gray-600 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 font-medium text-sm rounded-md focus:outline-none transition"*/}
        {/*  onClick={async () => {*/}
        {/*    const db = getFirestore(firebaseApp);*/}
        {/*    try {*/}
        {/*      const docCollection = collection(*/}
        {/*        doc(db, 'editor-documents', id),*/}
        {/*        'edits'*/}
        {/*      );*/}
        {/*      // await runTransaction(*/}
        {/*      //   getFirestore(firebaseApp),*/}
        {/*      //   async transaction => {*/}
        {/*      //     const v = await transaction;*/}
        {/*      //     if (!v.exists()) {*/}
        {/*      //       transaction.set(docRef, {});*/}
        {/*      //     }*/}
        {/*      //     const newPopulation = doc.data().population + 1;*/}
        {/*      //     transaction.update(docRef, { population: newPopulation });*/}
        {/*      //   }*/}
        {/*      // );*/}
        {/*      console.log('Transaction successfully committed!');*/}
        {/*    } catch (e) {*/}
        {/*      console.log('Transaction failed: ', e);*/}
        {/*    }*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Save*/}
        {/*</button>*/}

        {activeFile?.path && (
          <button
            className="inline-flex items-center space-x-2 text-gray-600 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 font-medium text-sm rounded-md focus:outline-none transition"
            onClick={handleReloadContent}
          >
            Reload Content from Github
          </button>
        )}
        {activeFile?.path && (
          <a
            href={`https://github.com/cpinitiative/usaco-guide/blob/master/${encodeURI(
              activeFile?.path
            )}`}
            target="_blank"
            className="inline-flex items-center space-x-2 text-gray-600 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 font-medium text-sm rounded-md focus:outline-none transition"
            rel="noreferrer"
          >
            View File on Github &rarr;
          </a>
        )}
      </div>
      <div className="flex items-center">
        <nav className="flex space-x-1" aria-label="Tabs">
          {['cpp', 'java', 'py'].map((tab: Language) => (
            <button
              key={tab}
              className={classNames(
                tab === userSettings.lang
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
                'px-3 py-2 font-medium text-sm rounded-md focus:outline-none transition'
              )}
              onClick={() => userSettings.setLang(tab)}
            >
              {LANGUAGE_LABELS[tab]}
            </button>
          ))}
        </nav>

        <div className="mx-4 block border-l border-gray-200 dark:border-gray-700 h-6 self-center" />

        <a
          href="/general/adding-solution"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200 inline-flex items-center space-x-2 font-medium text-sm group transition"
        >
          <InformationCircleIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition" />
          <span>Documentation</span>
        </a>

        <div className="mx-4 block border-l border-gray-200 dark:border-gray-700 h-6 self-center" />

        <button
          onClick={() => userSettings.setTheme(isDarkMode ? 'light' : 'dark')}
          className="-mx-1 p-1 border-2 border-transparent text-gray-400 dark:text-gray-400 rounded-full hover:text-gray-300 dark:hover:text-dark-high-emphasis focus:outline-none focus:text-gray-500 focus:bg-gray-100 dark:focus:bg-gray-700 transition"
        >
          {isDarkMode ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
