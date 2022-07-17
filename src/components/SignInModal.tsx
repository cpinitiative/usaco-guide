import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import {
  AuthCredential,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  linkWithCredential,
  signInWithCredential,
  signInWithPopup,
} from 'firebase/auth';
import React, { Fragment, useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import { useFirebaseApp } from '../hooks/useFirebase';
import { LoadingSpinner } from './elements/LoadingSpinner';

export interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
}) => {
  const firebaseApp = useFirebaseApp();
  const { triggerUserDataContextRerender } = useContext(UserDataContext);
  const [isSigningIn, setIsSigningIn] = React.useState(false);
  const [isLinking, setIsLinking] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [credential, setCredential] = React.useState<AuthCredential>(null);

  const diffCredentialMessage = 'auth/account-exists-with-different-credential';
  const handleSignInWithGoogle = () => {
    setIsSigningIn(true);
    setError(null);
    signInWithPopup(getAuth(firebaseApp), new GoogleAuthProvider())
      .then(() => {
        setIsSigningIn(false);
        onClose();
      })
      .catch(e => {
        if (e.code === diffCredentialMessage) {
          setIsLinking(true);
          const credential = GoogleAuthProvider.credentialFromError(e);
          setEmail(e.customData.email);
          setCredential(credential);
        } else {
          setError(e);
        }
      })
      .finally(() => {
        setIsSigningIn(false);
      });
  };
  const handleSignInWithGithub = () => {
    setIsSigningIn(true);
    setError(null);
    signInWithPopup(getAuth(firebaseApp), new GithubAuthProvider())
      .then(() => {
        onClose();
      })
      .catch(e => {
        if (e.code === diffCredentialMessage) {
          setIsLinking(true);
          const credential = GithubAuthProvider.credentialFromError(e);
          setEmail(e.customData.email);
          setCredential(credential);
        } else {
          setError(e);
        }
      })
      .finally(() => {
        setIsSigningIn(false);
      });
  };

  // links account from credential with the account from other provider (either Google or Github)
  const handleLinkAccounts = async () => {
    try {
      let otherProvider: GoogleAuthProvider | GithubAuthProvider;
      if (credential.signInMethod === 'github.com') {
        otherProvider = new GoogleAuthProvider();
      } else if (credential.signInMethod === 'google.com') {
        otherProvider = new GithubAuthProvider();
      } else {
        throw new Error('Unsupported sign in method');
      }
      otherProvider.setCustomParameters({ login_hint: email });
      await signInWithPopup(getAuth(firebaseApp), otherProvider);
      await linkWithCredential(getAuth(firebaseApp).currentUser, credential);
      await signInWithCredential(getAuth(firebaseApp), credential);

      // At this point, getAuth(firebaseApp).currentUser is updated with the latest credentials
      // However, onAuthStateChanged() is not called, so we need to manually notify React
      // that firebaseUser has changed and we should rerender things that depend on it.
      // In particular, without this, the "Linked Providers" section under "Sign In Methods"
      // in Settings will not update until the page is reloaded.
      triggerUserDataContextRerender();

      onClose();
    } catch (e) {
      setError(e);
      console.log(e);
    } finally {
      setIsLinking(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) setError(null);
  }, [isOpen]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        // navbar has z-20
        className="fixed z-30 inset-0 overflow-y-auto"
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
            <div className="inline-block align-bottom bg-white dark:bg-dark-surface rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
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
                <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
                  <button
                    type="button"
                    className="btn pl-3"
                    onClick={handleSignInWithGoogle}
                    disabled={!firebaseApp || isSigningIn}
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 48 48"
                      className="abcRioButtonSvg"
                    >
                      <g>
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        />
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                        <path fill="none" d="M0 0h48v48H0z" />
                      </g>
                    </svg>
                    <span className="ml-3">Sign In With Google</span>
                  </button>
                  <button
                    type="button"
                    className="btn pl-3"
                    onClick={handleSignInWithGithub}
                    disabled={!firebaseApp || isSigningIn}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/sv"
                      viewBox="0 0 120 120"
                      version="1.1"
                      className="h-5 w-5"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g transform="translate(-332.000000, -120.000000)">
                          <g transform="translate(332.000000, 120.000000)">
                            <path
                              d="M0,60 C0,71.0416667 2.6875,81.0625 8.0625,90.0625 C13.4375,99.3541667 20.7291667,106.666667 29.9375,112 C39.1458333,117.333333 49.1666667,120 60,120 C70.875,120 80.9375,117.333333 90.1875,112 C99.4375,106.625 106.71875,99.3229167 112.03125,90.09375 C117.34375,80.8645833 120,70.8333333 120,60 C120,49 117.333333,38.9375 112,29.8125 C106.625,20.5625 99.3229167,13.28125 90.09375,7.96875 C80.8645833,2.65625 70.8333333,0 60,0 C48.9583333,0 38.9375,2.6875 29.9375,8.0625 C20.6458333,13.4375 13.3333333,20.7291667 8,29.9375 C2.66666667,39.1458333 1.33469435e-14,49.1666667 1.4560302e-14,60 L0,60 Z M10,60 C10,53.3333333 11.3125,46.8958333 13.9375,40.6875 C16.5625,34.4791667 20.1458333,29.125 24.6875,24.625 C29.2291667,20.0833333 34.5833333,16.5104167 40.75,13.90625 C46.9166667,11.3020833 53.3333333,10 60,10 C66.6666667,10 73.1041667,11.3020833 79.3125,13.90625 C85.5208333,16.5104167 90.8958333,20.0833333 95.4375,24.625 C99.9375,29.125 103.489583,34.4791667 106.09375,40.6875 C108.697917,46.8958333 110,53.3333333 110,60 C110,67.1666667 108.53125,74 105.59375,80.5 C102.65625,87 98.53125,92.6145833 93.21875,97.34375 C87.90625,102.072917 81.8333333,105.5 75,107.625 L75,90 C75,85.625 73.2083333,82.2083333 69.625,79.75 C78.4166667,78.9583333 84.84375,76.7291667 88.90625,73.0625 C92.96875,69.3958333 95,63.5833333 95,55.625 C95,49.4583333 93.1041667,44.2708333 89.3125,40.0625 C90.0625,37.8125 90.4375,35.6458333 90.4375,33.5625 C90.4375,30.4791667 89.7291667,27.6458333 88.3125,25.0625 C85.5208333,25.0625 83.0208333,25.5208333 80.8125,26.4375 C78.6041667,27.3541667 75.8958333,28.9375 72.6875,31.1875 C68.8125,30.3125 64.8125,29.875 60.6875,29.875 C55.9791667,29.875 51.5833333,30.3541667 47.5,31.3125 C44.375,29.0208333 41.6770833,27.40625 39.40625,26.46875 C37.1354167,25.53125 34.5625,25.0625 31.6875,25.0625 C30.3125,27.6875 29.625,30.5208333 29.625,33.5625 C29.625,35.7291667 29.9791667,37.9166667 30.6875,40.125 C26.8958333,44.2083333 25,49.375 25,55.625 C25,63.5833333 27.0208333,69.375 31.0625,73 C35.1041667,76.625 41.5833333,78.8541667 50.5,79.6875 C48.125,81.2708333 46.4791667,83.5833333 45.5625,86.625 C43.5208333,87.3333333 41.3958333,87.6875 39.1875,87.6875 C37.5208333,87.6875 36.0833333,87.3125 34.875,86.5625 C34.5,86.3541667 34.15625,86.1354167 33.84375,85.90625 C33.53125,85.6770833 33.2083333,85.3958333 32.875,85.0625 C32.5416667,84.7291667 32.2708333,84.46875 32.0625,84.28125 C31.8541667,84.09375 31.5833333,83.7708333 31.25,83.3125 C30.9166667,82.8541667 30.6979167,82.5625 30.59375,82.4375 C30.4895833,82.3125 30.2395833,81.9791667 29.84375,81.4375 C29.4479167,80.8958333 29.2291667,80.6041667 29.1875,80.5625 C27.2291667,77.9791667 24.8958333,76.6875 22.1875,76.6875 C20.7291667,76.6875 20,77 20,77.625 C20,77.875 20.3541667,78.2916667 21.0625,78.875 C22.3958333,80.0416667 23.1041667,80.6666667 23.1875,80.75 C24.1875,81.5416667 24.75,82.0416667 24.875,82.25 C26.0833333,83.75 27,85.3958333 27.625,87.1875 C29.9583333,92.3958333 33.9583333,95 39.625,95 C40.5416667,95 42.3333333,94.7916667 45,94.375 L45,107.625 C38.1666667,105.5 32.09375,102.072917 26.78125,97.34375 C21.46875,92.6145833 17.34375,87 14.40625,80.5 C11.46875,74 10,67.1666667 10,60 L10,60 Z"
                              fill="currentColor"
                            />
                            <path d="M0,0 L120,0 L120,120 L0,120 L0,0 Z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="ml-3">Sign In With Github</span>
                  </button>
                  {isSigningIn && <LoadingSpinner />}
                </div>
                {error && (
                  <div>
                    <p className="text-red-700 dark:text-red-300">
                      Error: {error.code}
                    </p>
                  </div>
                )}
                {isLinking && (
                  <div>
                    <p className="text-red-700 dark:text-red-300">
                      An account with this email already exists, please sign in
                      with Google to link the two accounts:
                    </p>
                    <button
                      type="button"
                      className="btn pl-3 mt-3"
                      onClick={handleLinkAccounts}
                      // disabled={!firebaseApp || isSigningIn}
                    >
                      Link Accounts
                    </button>
                  </div>
                )}
              </div>
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white dark:bg-dark-surface rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-surface focus:ring-blue-500"
                  onClick={() => {
                    setIsLinking(false);
                    onClose();
                  }}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
