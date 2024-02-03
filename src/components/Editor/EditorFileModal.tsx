import { Dialog } from '@headlessui/react';
import React from 'react';
import { AlgoliaEditorFile } from '../../models/algoliaEditorFile';
import Modal from '../Modal';
import AddFileModal from './AddFileModal';
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
  const [addFileOpen, setAddFileOpen] = React.useState(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} bg="bg-black/60">
        <Dialog.Panel className="inline-block bg-white dark:bg-dark-surface rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:my-16 sm:align-middle sm:max-w-lg w-full self-start">
          <EditorFileModalInterface
            onSelect={onSelect}
            openAddFile={() => setAddFileOpen(true)}
          />
        </Dialog.Panel>
      </Modal>
      <AddFileModal
        isOpen={addFileOpen}
        onClose={() => setAddFileOpen(false)}
      />
    </>
  );
};
