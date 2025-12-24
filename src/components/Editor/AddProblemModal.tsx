import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import React, { useState } from 'react';
import { formatMetadata } from '../../utils/prettierFormatter';
import Modal from '../Modal';
import CopyButton from './CopyButton';

async function addProblem(
  url: string,
  setMetadata: (metadata: string) => void,
  setStatus: (status: 'Get Metadata' | 'Fetching metadata...') => void,
  setShowError: (show: boolean) => void
) {
  const createUnknownMetadata = () => ({
    uniqueId: 'unknown',
    name: 'unknown',
    url,
    source: 'unknown',
    difficulty: 'N/A',
    isStarred: false,
    tags: ['Add Tags'],
    solutionMetadata: {
      kind: 'none',
    },
  });

  try {
    setStatus('Fetching metadata...');

    let response;
    try {
      response = await fetch('/api/fetch-metadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
    } catch (e) {
      // Network error
      console.error('Network error:', e);
      const metadata = createUnknownMetadata();
      setMetadata(await formatMetadata(JSON.stringify(metadata, null, 2)));
      setStatus('Get Metadata');
      setShowError(true);
      return;
    }

    let result;
    try {
      result = await response.json();
    } catch (e) {
      // Invalid JSON response
      console.error('Invalid JSON response:', e);
      const metadata = createUnknownMetadata();
      setMetadata(await formatMetadata(JSON.stringify(metadata, null, 2)));
      setStatus('Get Metadata');
      setShowError(true);
      return;
    }

    if (!response.ok) {
      // API returned an error status code
      console.error('API error:', result.error || 'Unknown error');
      const metadata = createUnknownMetadata();
      setMetadata(await formatMetadata(JSON.stringify(metadata, null, 2)));
      setStatus('Get Metadata');
      setShowError(true);
      return;
    }

    // If we get here, the request was successful
    const parsed = result.data;
    const metadata = {
      uniqueId: parsed.uniqueId,
      name: parsed.name,
      url,
      source: parsed.source,
      difficulty: 'N/A',
      isStarred: false,
      tags: ['Add Tags'],
      solutionMetadata: parsed.solutionMetadata || { kind: 'none' },
    };

    setMetadata(await formatMetadata(JSON.stringify(metadata, null, 2)));
    setStatus('Get Metadata');
  } catch (e) {
    // This catch block is a final safety net for any unexpected errors
    console.error('Unexpected error:', e);
    const metadata = createUnknownMetadata();
    setMetadata(await formatMetadata(JSON.stringify(metadata, null, 2)));
    setStatus('Get Metadata');
    setShowError(true);
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
  const [showError, setShowError] = useState(false);
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
                onClick={() =>
                  addProblem(link, setMetadata, setStatus, setShowError)
                }
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

      <Modal isOpen={showError} onClose={() => setShowError(false)}>
        <div className="text-center">
          <DialogTitle
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
          >
            Error Processing Request
          </DialogTitle>
          <div className="mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              There was an error while processing your request. You can manually
              edit the data.
            </p>
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800"
              onClick={() => setShowError(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </Dialog>
  );
}
