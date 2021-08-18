import { Transition } from '@headlessui/react';
import { EditorState } from 'draft-js';
import * as React from 'react';

export default function TakeProblemNotesModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (editorState: any) => void;
}) {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setLoading(false);
    }
  }, [isOpen]);

  return (
    <Transition
      show={isOpen}
      className="fixed z-30 inset-0 h-full overflow-y-auto"
    >
      <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
        <button
          type="button"
          onClick={() => onClose(editorState)} // pass in the current problem note state
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
      Take some notes!
    </Transition>
  );
}
