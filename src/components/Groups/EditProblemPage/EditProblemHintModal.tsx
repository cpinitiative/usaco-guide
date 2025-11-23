import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProblemHint } from '../../../models/groups/problem';
import MarkdownEditor from '../MarkdownEditor';

export default function EditProblemHintModal({
  isOpen,
  onClose,
  onSave,
  hint: initialHint,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (hint: ProblemHint | null) => any;
  hint: ProblemHint | null;
}) {
  const defaultHint: ProblemHint = {
    id: uuidv4(),
    name: '',
    body: '',
  };
  const [hint, setHint] = React.useState<ProblemHint>(defaultHint);
  const [isFullyOpen, setIsFullyOpen] = React.useState(false);

  React.useEffect(() => {
    setHint(initialHint || defaultHint);
  }, [initialHint]);

  React.useEffect(() => {
    if (isOpen) {
      // Delay rendering the editor until the modal is fully open
      const timer = setTimeout(() => setIsFullyOpen(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsFullyOpen(false);
    }
  }, [isOpen]);

  const editHint = (updates: Partial<ProblemHint>) => {
    setHint({
      ...hint,
      ...updates,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(hint);
    setHint(defaultHint);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-700/75"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <form
          className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
          onSubmit={handleSubmit}
        >
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <DialogPanel
            transition
            className="dark:bg-dark-surface inline-block w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 sm:align-middle data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <DialogTitle
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
                id="modal-headline"
              >
                {initialHint ? 'Edit Hint' : 'Add New Hint'}
              </DialogTitle>
              <div className="mt-4 space-y-6">
                <div>
                  <label
                    htmlFor="hint_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="hint_name"
                      id="hint_name"
                      value={hint.name}
                      onChange={e => editHint({ name: e.target.value })}
                      className="input"
                      placeholder="Optional"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Publicly visible hint name.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Content
                  </label>
                  <div className="mt-1">
                    {isFullyOpen ? (
                      <MarkdownEditor
                        value={hint.body}
                        onChange={value => editHint({ body: value })}
                      />
                    ) : (
                      <textarea
                        value={hint.body}
                        onChange={e => editHint({ body: e.target.value })}
                        className="input min-h-[200px]"
                        placeholder="Enter hint content..."
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between space-x-4 sm:mt-6">
              <div className="space-x-4">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden sm:col-start-2 sm:text-sm"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden sm:col-start-1 sm:mt-0 sm:text-sm"
                  onClick={() => onClose()}
                >
                  Cancel
                </button>
              </div>
              {initialHint && (
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden sm:col-start-1 sm:mt-0 sm:text-sm"
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this hint?')) {
                      onSave(null);
                      onClose();
                    }
                  }}
                >
                  Delete Hint
                </button>
              )}
            </div>
          </DialogPanel>
        </form>
      </div>
    </Dialog>
  );
}
