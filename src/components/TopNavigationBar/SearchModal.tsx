import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import React, { Suspense } from 'react';

const SearchModalInterface = React.lazy(() => import('./SearchModalInterface'));

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Dialog throws an error if there isn't something to focus on initially
  // But since we're lazy loading search modal, there will be a period of time
  // where we have to focus the loading text until the modal loads (and auto focuses the input).
  const loadingFocusRef = React.useRef(null);

  return (
    <Dialog
      // z-20 is on the top navigation bar
      className="relative z-30"
      open={isOpen}
      onClose={() => onClose()}
      initialFocus={loadingFocusRef}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-900/75"
      />

      <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
        <div className="mx-4 my-8 sm:my-16">
          <DialogPanel
            transition
            className="dark:bg-dark-surface relative mx-auto transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <Suspense
              fallback={
                <p
                  className="px-5 py-4 text-gray-700 dark:text-gray-300"
                  ref={loadingFocusRef}
                >
                  Loading Search...
                </p>
              }
            >
              <SearchModalInterface />
            </Suspense>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
