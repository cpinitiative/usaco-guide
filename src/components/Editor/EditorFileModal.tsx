import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React from "react";
import { AlgoliaEditorFile } from "../../models/algoliaEditorFile";
import AddFileModal from "./AddFileModal";
import EditorFileModalInterface from "./EditorFileModalInterface";

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
      <Dialog open={isOpen} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-700/75"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:p-0">
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <DialogPanel
              transition
              className="dark:bg-dark-surface my-8 inline-block w-full transform self-start overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-16 sm:max-w-lg sm:align-middle data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <EditorFileModalInterface
                onSelect={onSelect}
                openAddFile={() => setAddFileOpen(true)}
              />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <AddFileModal
        isOpen={addFileOpen}
        onClose={() => setAddFileOpen(false)}
      />
    </>
  );
};
