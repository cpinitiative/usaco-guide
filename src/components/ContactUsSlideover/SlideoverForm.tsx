import { Transition } from '@headlessui/react';
import * as React from 'react';
import { FormEvent } from 'react';

type SlideoverProps = {
  isOpen: boolean;
  onClose: Function;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children: React.ReactNode;
  footerButtons: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function SlideoverForm(props: SlideoverProps) {
  return (
    <Transition
      show={props.isOpen}
      className="fixed inset-0 overflow-hidden z-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Transition.Child
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity"
          onClick={() => props.onClose()}
        />

        <section className="absolute inset-y-0 max-w-full right-0 flex">
          <Transition.Child
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            className="w-screen max-w-md"
          >
            <form
              className="h-full flex flex-col bg-white dark:bg-dark-surface shadow-xl"
              onSubmit={props.onSubmit}
            >
              <div className="flex-1 h-0 overflow-y-auto">
                <header className="space-y-1 py-6 px-4 bg-blue-700 dark:bg-blue-900 sm:px-6">
                  <div className="flex items-center justify-between space-x-3">
                    <h2 className="text-lg leading-7 font-medium text-white">
                      {props.title}
                    </h2>
                    <div className="h-7 flex items-center">
                      <button
                        type="button"
                        aria-label="Close panel"
                        className="text-blue-200 hover:text-white"
                        onClick={() => props.onClose()}
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
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
        </section>
      </div>
    </Transition>
  );
}
