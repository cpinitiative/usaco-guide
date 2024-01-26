import { Dialog } from '@headlessui/react';
import React from 'react';
import { AlgoliaEditorFile } from '../../models/algoliaEditorFile';
import Modal from '../Modal';
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
    <Modal isOpen={isOpen} onClose={onClose} bg="bg-black/60">
      <Dialog.Panel className="inline-block bg-white dark:bg-dark-surface rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:my-16 sm:align-middle sm:max-w-lg w-full self-start">
        <EditorFileModalInterface onSelect={onSelect} />
      </Dialog.Panel>
    </Modal>
  );
};
