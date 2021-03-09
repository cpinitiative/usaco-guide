import * as React from 'react';
import { useContext, useState } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import { Transition } from '@headlessui/react';
import ButtonGroup from './ButtonGroup';
import { LANGUAGE_LABELS } from '../context/UserDataContext/properties/userLang';

const UserAuthButton = props => {
  const { firebaseUser, signIn, signOut } = useContext(UserDataContext);
  return (
    <button {...props} onClick={() => (firebaseUser ? signOut() : signIn())}>
      {firebaseUser ? 'Logout' : 'Login'}
    </button>
  );
};

export default function SettingsModal({ isOpen, onClose }) {
  const userSettings = useContext(UserDataContext);

  const handleExportUserData = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(userSettings.getDataExport())
    )}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'usacoguide-userdata.json');
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const [file, setFile] = useState('');
  const [resetInput, setResetInput] = useState(0);

  // https://stackoverflow.com/questions/61707105/react-app-upload-and-read-json-file-into-variable-without-a-server
  const handleUpload = e => {
    const file = e.target.files[0];
    console.log('FOUND', file);
    if (file.type !== 'application/json') {
      alert('Must upload a JSON file.');
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = e => {
      // console.log("e.target.result", e.target.result);
      setFile(e.target.result);
    };
  };

  const handleImportUserData = e => {
    if (file === '') return;
    try {
      const data = JSON.parse(file);
      if (userSettings.importUserData(data)) {
        setFile('');
        setResetInput(resetInput + 1); // clears file input
      }
    } catch (e) {
      alert(e);
      console.error(e);
    }
  };

  return (
    <Transition
      show={isOpen}
      className="fixed z-30 inset-0 h-full overflow-y-auto"
    >
      <div className="flex items-end justify-center min-h-full pt-4 px-4 pb-12 text-center sm:block sm:p-0">
        <Transition.Child
          className="fixed inset-0 transition-opacity"
          onClick={onClose}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-700 dark:opacity-75" />
        </Transition.Child>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
        &#8203;
        <Transition.Child
          className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-600 dark:text-blue-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="mt-3 sm:ml-4 sm:mt-1">
                <h3
                  className="text-xl font-medium text-gray-900 dark:text-gray-100 text-center sm:text-left"
                  id="modal-headline"
                >
                  Settings
                </h3>
                <div className="mt-3">
                  <ButtonGroup
                    options={['cpp', 'java', 'py']}
                    value={userSettings.lang}
                    onChange={v => userSettings.setLang(v)}
                    labelMap={LANGUAGE_LABELS}
                  />

                  <label className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      onChange={() =>
                        userSettings.setDarkMode(!userSettings.darkMode)
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:ring-offset-gray-900 dark:focus:ring-blue-400 dark:border-gray-600 rounded"
                      checked={userSettings.darkMode}
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      Dark mode
                    </span>
                  </label>

                  <label className="flex items-center mt-3">
                    <input
                      type="checkbox"
                      onChange={() =>
                        userSettings.setHideTagsAndDifficulty(
                          !userSettings.hideTagsAndDifficulty
                        )
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:ring-offset-gray-900 dark:focus:ring-blue-400 dark:border-gray-600 rounded"
                      checked={userSettings.hideTagsAndDifficulty}
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      Hide difficulty and tags
                    </span>
                  </label>

                  <label className="flex items-center mt-3">
                    <input
                      type="checkbox"
                      onChange={() =>
                        userSettings.setShowIgnored(!userSettings.showIgnored)
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:ring-offset-gray-900 dark:focus:ring-blue-400 dark:border-gray-600 rounded"
                      checked={userSettings.showIgnored}
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      Show ignored problems & modules on dashboard
                    </span>
                  </label>

                  <div className="h-3" />

                  <UserAuthButton className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150" />

                  <div className="h-3" />

                  <button
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                    onClick={handleExportUserData}
                  >
                    Export User Data
                  </button>

                  <div className="h-3" />

                  <button
                    className={`${
                      file !== ''
                        ? 'text-gray-700 dark:text-gray-200 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150'
                        : 'text-gray-300 dark:text-gray-600 cursor-default'
                    } inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-md bg-white dark:bg-gray-800`}
                    disabled={!file}
                    onClick={handleImportUserData}
                  >
                    Import User Data
                  </button>

                  {/* https://stackoverflow.com/questions/38731271/clear-an-input-field-with-reactjs */}
                  {/* https://stackoverflow.com/questions/42192346/how-to-reset-reactjs-file-input */}
                  <input
                    className="py-2 text-sm"
                    type="file"
                    accept="application/json"
                    onChange={handleUpload}
                    key={resetInput}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-dark-surface px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-800 text-base leading-6 font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Done
              </button>
            </span>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
}
