import * as Icons from 'heroicons-react';
import React from 'react';
import TailwindTransition from './TailwindTransition';
export default function ConfirmationModal({
  show,
  setShow,
  onConfirm,
  children,
  Icon,
  title,
  confirmButtonText,
  disabled,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
  Icon?: React.ReactNode;
  confirmButtonText: string;
  disabled?: boolean;
}) {
  return (
    <TailwindTransition show={show}>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <TailwindTransition
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </TailwindTransition>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          <TailwindTransition
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  {Icon ? (
                    /* @ts-ignore */
                    <Icon className="h-6 w-6 text-red-600" />
                  ) : (
                    <Icons.ExclamationOutline className="h-6 w-6 text-red-600" />
                  )}
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    {title}
                  </h3>
                  <div className="mt-2">{children}</div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    onClick={onConfirm}
                    type="button"
                    disabled={disabled}
                    className={
                      (disabled
                        ? 'bg-red-300'
                        : 'bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red') +
                      ' inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white shadow-sm transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                    }
                  >
                    {confirmButtonText}
                  </button>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    onClick={() => setShow(false)}
                    type="button"
                    disabled={disabled}
                    className={
                      (disabled
                        ? 'bg-gray-200'
                        : 'bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue') +
                      ' inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                    }
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </div>
          </TailwindTransition>
        </div>
      </div>
    </TailwindTransition>
  );
}
