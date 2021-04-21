import { Dialog, Transition } from '@headlessui/react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { Fragment } from 'react';
import { useFirebaseApp } from '../hooks/useFirebase';

export interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
}) => {
  const firebaseApp = useFirebaseApp();
  const handleSignInWithGoogle = () => {
    signInWithPopup(getAuth(firebaseApp), new GoogleAuthProvider()).then(() =>
      onClose()
    );
  };
  const handleSignInWithGithub = () => {
    console.log('signing in with github');
    onClose();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={isOpen}
        onClose={() => onClose()}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white dark:bg-dark-surface rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200"
                >
                  Sign In
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Signing in allows you to sync your data with our servers
                    (highly recommended). If this is your first time signing in,
                    you will have the option to upload your local data to the
                    server.
                  </p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 space-y-4">
                {firebaseApp ? (
                  <>
                    <button
                      type="button"
                      className="btn w-full"
                      onClick={handleSignInWithGoogle}
                    >
                      Sign in with Google
                    </button>
                    <button
                      type="button"
                      className="btn w-full"
                      onClick={handleSignInWithGithub}
                    >
                      Sign in with Github
                    </button>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
