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
        <Dialog.Panel className="dark:bg-dark-surface my-8 inline-block w-full transform self-start overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-16 sm:max-w-lg sm:align-middle">
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
