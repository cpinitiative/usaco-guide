import * as React from 'react';
import { useState } from 'react';
import {
  useImportUserDataAction,
  useUserData,
} from '../../context/UserDataContext/UserDataContext';

export default function UserData() {
  const userData = useUserData();
  const importUserData = useImportUserDataAction();

  const handleExportUserData = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(userData)
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
    if (file.type !== 'application/json') {
      alert('Must upload a JSON file.');
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = e => {
      setFile(e.target?.result as any);
    };
  };

  const handleImportUserData = e => {
    if (file === '') return;
    try {
      const data = JSON.parse(file);
      if (importUserData(data)) {
        setFile('');
        setResetInput(resetInput + 1); // clears file input
      }
    } catch (e) {
      alert(e);
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <div className="space-y-1">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
            Export User Data
          </h3>
        </div>
        <div className="h-4" />
        <button
          className="focus:shadow-outline-blue inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-hidden active:bg-gray-50 active:text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
          onClick={handleExportUserData}
        >
          Export User Data
        </button>
      </div>

      <div>
        <div className="space-y-1">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
            Import User Data
          </h3>
          <p className="max-w-2xl text-sm text-gray-500">
            Note that this will permanently override all existing user data. Use
            at your own risk!
          </p>
        </div>

        <div className="h-4" />

        <div>
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

        <button
          className={`${
            file !== ''
              ? 'focus:shadow-outline-blue text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-hidden active:bg-gray-50 active:text-gray-800 dark:text-gray-200'
              : 'cursor-default text-gray-300 dark:text-gray-600'
          } inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 font-medium dark:border-gray-600 dark:bg-gray-800`}
          disabled={!file}
          onClick={handleImportUserData}
        >
          Import User Data
        </button>
      </div>
    </>
  );
}
