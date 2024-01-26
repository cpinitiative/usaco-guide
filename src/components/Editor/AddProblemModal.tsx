import { Dialog, Transition } from '@headlessui/react';
import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';
import React, { useRef, useState } from 'react';
import CopyButton from './CopyButton';
import parse from './parsers/parse';
async function getHtml(url: string): Promise<string> {
  const res = await fetch('/api/fetch-html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  }).then(res => res.json());
  return res.data;
}
async function addProblem(
  url: string,
  setMetadata: (metadata: string) => void,
  setStatus: (status: string) => void
) {
  try {
    setStatus('Fetching metadata...');
    const html = await getHtml(url);
    const parsed = parse(url, html);
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
    console.log(metadata);
    setMetadata(
      await prettier.format(JSON.stringify(metadata), {
        parser: 'json',
        plugins: [babelParser],
      })
    );
    setStatus('Get Metadata');
  } catch (e) {
    alert(e);
    setStatus('Get Metadata');
  }
}
export default function AddProblemModal({ isOpen, onClose }) {
  const linkRef = useRef<HTMLInputElement>(null);
  const [metadata, setMetadata] = useState('// metadata will appear here');
  const [status, setStatus] = useState('Get Metadata');
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black text-white p-6 text-left align-middle shadow-xl transition-all">
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
                  <pre className="bg-gray-900 p-4 rounded-md text-white text-xs whitespace-pre-wrap">
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
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
