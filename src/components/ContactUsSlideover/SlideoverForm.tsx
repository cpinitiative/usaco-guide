import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import React, { FormEvent } from 'react';

type SlideoverProps = {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children: React.ReactNode;
  footerButtons: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function SlideoverForm(props: SlideoverProps): JSX.Element {
  return (
    <Dialog
      // z-20 is on the top navigation bar
      className="relative z-30"
      open={props.isOpen}
      onClose={() => props.onClose()}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-900/75"
      />

      <div className="fixed inset-0 z-30 w-screen">
        <div className="absolute inset-y-0 right-0 flex max-w-xl pl-16">
          <DialogPanel
            transition
            className="transform duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
          >
            <form
              className="dark:bg-dark-surface flex h-full flex-col bg-white shadow-xl"
              onSubmit={props.onSubmit}
            >
              <div className="h-0 flex-1 overflow-y-auto">
                <header className="space-y-1 bg-blue-700 px-4 py-6 sm:px-6 dark:bg-blue-900">
                  <div className="flex items-center justify-between space-x-3">
                    <DialogTitle className="text-lg leading-7 font-medium text-white">
                      {props.title}
                    </DialogTitle>
                    <div className="flex h-7 items-center">
                      <button
                        type="button"
                        className="text-blue-200 hover:text-white"
                        onClick={() => props.onClose()}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm leading-5 text-blue-300">
                      {props.subtitle}
                    </p>
                  </div>
                </header>
                <div className="flex flex-1 flex-col justify-between">
                  {props.children}
                </div>
              </div>
              <div className="flex shrink-0 justify-end space-x-4 border-t border-gray-200 px-4 py-4 dark:border-gray-800">
                {props.footerButtons}
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
