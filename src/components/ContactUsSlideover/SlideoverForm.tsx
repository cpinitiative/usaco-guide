import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import React, { FormEvent, Fragment } from 'react';

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
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-20 inset-0 overflow-hidden"
        open={props.isOpen}
        onClose={() => props.onClose()}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 pl-16 max-w-xl right-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <form
                className="h-full flex flex-col bg-white dark:bg-dark-surface shadow-xl"
                onSubmit={props.onSubmit}
              >
                <div className="flex-1 h-0 overflow-y-auto">
                  <header className="space-y-1 py-6 px-4 bg-blue-700 dark:bg-blue-900 sm:px-6">
                    <div className="flex items-center justify-between space-x-3">
                      <Dialog.Title className="text-lg leading-7 font-medium text-white">
                        {props.title}
                      </Dialog.Title>
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
                <div className="flex-shrink-0 px-4 py-4 space-x-4 flex justify-end border-t border-gray-200 dark:border-gray-800">
                  {props.footerButtons}
                </div>
              </form>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
