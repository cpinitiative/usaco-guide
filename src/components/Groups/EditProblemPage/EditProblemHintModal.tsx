import { Transition } from '@headlessui/react';
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

  React.useEffect(() => {
    setHint(initialHint || defaultHint);
  }, [initialHint]);

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
    <Transition show={isOpen} className="fixed z-10 inset-0 overflow-y-auto">
      <form
        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        onSubmit={handleSubmit}
      >
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 dark:bg-gray-700 opacity-75" />
        </Transition.Child>
        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          className="inline-block align-bottom bg-white dark:bg-dark-surface rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <h3
              className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
              id="modal-headline"
            >
              {initialHint ? 'Edit Hint' : 'Add New Hint'}
            </h3>
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
                  <MarkdownEditor
                    value={hint.body}
                    onChange={value => editHint({ body: value })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 space-x-4 flex justify-between items-center">
            <div className="space-x-4">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
              >
                Save
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                onClick={() => onClose()}
              >
                Cancel
              </button>
            </div>
            {initialHint && (
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
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
        </Transition.Child>
      </form>
    </Transition>
  );
}
