import {
  Dialog,
  DialogBackdrop,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { Meta, StoryFn } from '@storybook/react-webpack5';
import React from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export default {
  title: 'Modal',
  component: Dialog,
} as Meta;

const Template: StoryFn<{ isOpen?: boolean }> = args => {
  const [modalOpen, setModalOpen] = React.useState(args.isOpen ?? false);
  const darkMode = React.useContext(DarkModeContext);
  return (
    <div className="flex items-center justify-center">
      <button onClick={() => setModalOpen(true)} className="btn">
        Open Modal
      </button>
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="relative z-10"
      >
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
              className={`w-full max-w-md transform rounded-lg bg-white p-5 shadow-lg transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 dark:bg-black dark:text-white ${darkMode ? 'dark' : ''}`}
            >
              <div className="flex flex-col items-start">
                <DialogTitle as="h3" className="text-lg font-bold">
                  Modal Title
                </DialogTitle>
                <DialogDescription>Modal Description</DialogDescription>
                <button onClick={() => setModalOpen(false)} className="btn">
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export const Default = Template.bind({});
export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
