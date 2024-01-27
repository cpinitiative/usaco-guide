import { Dialog } from '@headlessui/react';
import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';
import React, { useRef, useState } from 'react';
import Modal from '../Modal';
import CopyButton from './CopyButton';
import parse, { parsers } from './parsers/parse';
async function addProblem(
  url: string,
  setMetadata: (metadata: string) => void,
  setStatus: (status: string) => void
) {
  try {
    setStatus('Fetching metadata...');
    const parsed = await parse(url);
    const metadata = {
      uniqueId: parsed.uniqueId,
      name: parsed.name,
      url,
      source: parsed.source,
      difficulty: 'N/A',
      isStarred: false,
      tags: ['Add Tags'],
      solutionMetadata: { kind: 'internal' },
    };
    console.log(metadata);
    setMetadata(
      await prettier.format(JSON.stringify(metadata, null, 2), {
        parser: 'json',
        plugins: [babelParser],
      })
    );
    setStatus('Get Metadata');
  } catch (e) {
    setMetadata(
      `No parser found for this url.
Available parsers:
${Object.keys(parsers)
  .map(key => `  - ${key}`)
  .join('\n')}`
    );
    setStatus('Get Metadata');
  }
}
export default function AddProblemModal(props: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const linkRef = useRef<HTMLInputElement>(null);
  const [metadata, setMetadata] = useState('// metadata will appear here');
  const [status, setStatus] = useState('Get Metadata');
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
            onChange={e => console.log(e.target.value)}
            ref={linkRef}
          />
        </div>

        <div className="mt-4">
          <button
            className="btn"
            onClick={() =>
              linkRef.current &&
              addProblem(linkRef.current.value, setMetadata, setStatus)
            }
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
