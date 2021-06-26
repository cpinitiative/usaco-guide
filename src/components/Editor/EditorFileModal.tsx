import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { AlgoliaEditorFile } from '../../models/algoliaEditorFile';
import EditorFileModalInterface from './EditorFileModalInterface';

export interface EditorFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (file: AlgoliaEditorFile) => void;
}

export const EditorFileModal: React.FC<EditorFileModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={isOpen}
        onClose={() => onClose()}
      >
        <div className="min-h-screen text-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block bg-white dark:bg-dark-surface rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:my-16 sm:align-middle sm:max-w-lg w-full">
              <EditorFileModalInterface onSelect={onSelect} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
