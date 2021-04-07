import * as React from 'react';
import { useContext, useState } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

export default function UserData() {
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
      setFile(e.target.result as any);
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
    <>
      <div>
        <div className="space-y-1">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
            Export User Data
          </h3>
        </div>
        <div className="h-4" />
        <button
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
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
              ? 'text-gray-700 dark:text-gray-200 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150'
              : 'text-gray-300 dark:text-gray-600 cursor-default'
          } inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-md bg-white dark:bg-gray-800`}
          disabled={!file}
          onClick={handleImportUserData}
        >
          Import User Data
        </button>
      </div>
    </>
  );
}
