import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import React, { useState } from 'react';
import { formatMetadata } from '../../utils/prettierFormatter';
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
    setMetadata(await formatMetadata(JSON.stringify(metadata, null, 2)));
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
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-700/75"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:p-0">
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <DialogPanel
            transition
            className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle text-gray-900 shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:align-middle data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 dark:bg-black dark:text-white"
          >
            <DialogTitle as="h3" className="text-lg leading-6 font-medium">
              Add Problem
            </DialogTitle>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-900"
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
            <div className="relative mt-4">
              <pre className="rounded-md bg-gray-900 p-4 text-sm whitespace-pre-wrap text-white">
                {metadata}
              </pre>
              <CopyButton
                className="btn absolute top-2 right-2"
                onClick={() => {
                  navigator.clipboard.writeText(metadata);
                }}
              />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
