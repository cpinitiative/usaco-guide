import { Dialog } from '@headlessui/react';
import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';
import React, { useState } from 'react';
import Modal from '../Modal';
import CopyButton from './CopyButton';
async function addProblem(
  url: string,
  setMetadata: (metadata: string) => void,
  setStatus: (status: 'Get Metadata' | 'Fetching metadata...') => void
) {
  try {
    setStatus('Fetching metadata...');
    const parsed = (
      await fetch('/api/fetch-metadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      }).then(res => res.json())
    ).data;
    const metadata = {
      uniqueId: parsed.uniqueId,
      name: parsed.name,
      url,
      source: parsed.source,
      difficulty: 'N/A',
      isStarred: false,
      tags: ['Add Tags'],
      solutionMetadata: parsed.solutionMetadata,
    };
    setMetadata(
      await prettier.format(JSON.stringify(metadata, null, 2), {
        parser: 'json',
        plugins: [babelParser],
      })
    );
    setStatus('Get Metadata');
  } catch (e) {
    setMetadata(e.toString());
    setStatus('Get Metadata');
  }
}
export default function AddProblemModal(props: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [link, setLink] = useState('');
  const [metadata, setMetadata] = useState('// metadata will appear here');
  const [status, setStatus] = useState<'Get Metadata' | 'Fetching metadata...'>(
    'Get Metadata'
  );
  return (
    <Modal {...props}>
      <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-black text-white p-6 text-left align-middle shadow-xl transition-all">
        <Dialog.Title as="h3" className="text-lg font-medium leading-6">
          Add Problem
        </Dialog.Title>
        <div className="mt-2 relative rounded-md shadow-sm">
          <input
            type="text"
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
            placeholder="Enter Problem URL"
            onChange={e => setLink(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <button
            className="btn"
            disabled={status === 'Fetching metadata...'}
            onClick={() => addProblem(link, setMetadata, setStatus)}
          >
            {status}
          </button>
        </div>
        <div className="mt-4 relative">
          <pre className="bg-gray-900 p-4 rounded-md text-white text-sm whitespace-pre-wrap">
            {metadata}
          </pre>
          <CopyButton
            className="btn absolute top-2 right-2"
            onClick={() => {
              navigator.clipboard.writeText(metadata);
            }}
          />
        </div>
      </Dialog.Panel>
    </Modal>
  );
}
