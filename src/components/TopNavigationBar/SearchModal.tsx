import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, Suspense } from 'react';

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
  const loadingFocusRef = React.useRef();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        // z-20 is on the top navigation bar
        className="fixed z-30 inset-0 overflow-y-auto"
        open={isOpen}
        onClose={() => onClose()}
        initialFocus={loadingFocusRef}
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
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
