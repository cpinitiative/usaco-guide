import { Transition } from '@headlessui/react';
import * as React from 'react';
import { connectAutoComplete, InstantSearch } from 'react-instantsearch-dom';
import { AlgoliaProblemInfo } from '../../models/problem';
import { searchClient } from '../../utils/algoliaSearchClient';
import { ProblemAutocomplete } from './ProblemAutocomplete';

const CustomProblemAutocomplete = connectAutoComplete(ProblemAutocomplete);

const indexName =
  process.env.NODE_ENV === 'production' ? 'prod_problems' : 'dev_problems';

export interface ProblemAutocompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProblemSelect: (problem: AlgoliaProblemInfo) => void;
}

const ProblemAutocompleteModal = ({
  isOpen,
  onClose,
  onProblemSelect,
}: ProblemAutocompleteModalProps): JSX.Element => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Transition
      show={isOpen}
      className="fixed z-30 inset-0 h-full overflow-y-auto"
    >
      <form
        className="flex items-end justify-center min-h-full pt-4 px-4 pb-12 text-center sm:block"
        onSubmit={handleSubmit}
      >
        <Transition.Child
          className="fixed inset-0 transition-opacity"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75" />
        </Transition.Child>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <Transition.Child
          className="w-full inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white dark:bg-dark-surface px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                onClick={() => onClose()}
                className="bg-white dark:bg-dark-surface rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
              >
                <span className="sr-only">Close</span>
                {/* Heroicon name: x */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
              Problem Search
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              You can search for any problem on the USACO Guide and the problem
              information will be auto-filled. Furthermore, progress tracking
              will be linked for students.
            </p>
            <div className="mt-6 space-y-6">
              {/* Remount component to trigger autofocus when opening modal */}

              <InstantSearch indexName={indexName} searchClient={searchClient}>
                <CustomProblemAutocomplete
                  onProblemSelect={onProblemSelect}
                  modalIsOpen={isOpen}
                />
              </InstantSearch>
            </div>
            <div className="h-2" />
          </div>
        </Transition.Child>
      </form>
    </Transition>
  );
};

export default ProblemAutocompleteModal;
