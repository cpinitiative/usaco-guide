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
        className="fixed inset-0 bg-gray-500/75 dark:bg-gray-900/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-30 w-screen">
        <div className="absolute inset-y-0 pl-16 max-w-xl right-0 flex">
          <DialogPanel
            transition
            className="transform ease-in-out duration-500 sm:duration-700 data-[closed]:translate-x-full"
          >
            <form
              className="h-full flex flex-col bg-white dark:bg-dark-surface shadow-xl"
              onSubmit={props.onSubmit}
            >
              <div className="flex-1 h-0 overflow-y-auto">
                <header className="space-y-1 py-6 px-4 bg-blue-700 dark:bg-blue-900 sm:px-6">
                  <div className="flex items-center justify-between space-x-3">
                    <DialogTitle className="text-lg leading-7 font-medium text-white">
                      {props.title}
                    </DialogTitle>
                    <div className="h-7 flex items-center">
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
                <div className="flex-1 flex flex-col justify-between">
                  {props.children}
                </div>
              </div>
              <div className="shrink-0 px-4 py-4 space-x-4 flex justify-end border-t border-gray-200 dark:border-gray-800">
                {props.footerButtons}
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
