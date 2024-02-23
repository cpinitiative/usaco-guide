import { Dialog } from '@headlessui/react';
import { useSetAtom } from 'jotai';
import React, { useState } from 'react';
import { createNewInternalSolutionFileAtom } from '../../atoms/editor';
import { AlgoliaEditorSolutionFile } from '../../models/algoliaEditorFile';
import Modal from '../Modal';
import Select from '../Select';
const divisions = [
  'General',
  'Bronze',
  'Silver',
  'Gold',
  'Platinum',
  'Advanced',
] as const; // hack to allow typeof divisions[number] by marking array as readonly
export default function AddFileModal(props) {
  const [division, setDivision] =
    useState<(typeof divisions)[number]>('General');
  const [fileStatus, setFileStatus] = useState<
    'Create File' | 'Creating File...'
  >('Create File');
  const [fileURL, setFileURL] = useState('');
  const createSol = useSetAtom(createNewInternalSolutionFileAtom);
  return (
    <Modal {...props}>
      <Dialog.Panel className="bg-white dark:bg-black w-full max-w-xl dark:text-white p-5 rounded-lg shadow-lg flex flex-col items-start">
        <h3 className="text-lg font-bold">Enter Problem URL</h3>
        <input
          type="url"
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
          placeholder="e.g. https://codeforces.com/contest/1920/problem/C"
          onChange={e => setFileURL(e.target.value)}
        />
        <p className="mt-2">Problem Division</p>
        <div className="mt-2 relative w-full dark:bg-black rounded-md shadow-sm">
          <Select
            options={[
              'General',
              'Bronze',
              'Silver',
              'Gold',
              'Platinum',
              'Advanced',
            ].map(div => ({
              label: div,
              value: div.toLowerCase(),
            }))}
            onChange={e => setDivision(e.value)}
          />
        </div>
        <button
          className="btn mt-2"
          disabled={fileStatus === 'Creating File...'}
          onClick={async () => {
            try {
              setFileStatus('Creating File...');
              const info = (
                await fetch('/api/fetch-metadata', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ url: fileURL }),
                }).then(res => res.json())
              ).data;
              props.onClose();
              createSol({
                id: info.uniqueId,
                title: info.name,
                source: info.source,
                division,
                problemModules: [],
              } as unknown as AlgoliaEditorSolutionFile);
              setFileStatus('Create File');
            } catch (e) {
              setFileStatus('Create File');
              props.onClose();
              alert(e);
            }
          }}
        >
          {fileStatus}
        </button>
      </Dialog.Panel>
    </Modal>
  );
}
