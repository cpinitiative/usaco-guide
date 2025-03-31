import * as React from 'react';
import { useSignIn } from '../../context/SignInContext';
import { useLastVisitInfo } from '../../context/UserDataContext/properties/lastVisit';
import {
  useFirebaseUser,
  useIsUserDataLoaded,
} from '../../context/UserDataContext/UserDataContext';

export default function NotSignedInWarning() {
  const { signIn } = useSignIn();
  const firebaseUser = useFirebaseUser();
  const isLoaded = useIsUserDataLoaded();
  const { numPageviews } = useLastVisitInfo();

  if (isLoaded && !firebaseUser && numPageviews > 1) {
    return (
      <>
        <div className="bg-gray-50 sm:rounded-lg dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="dark:text-dark-high-emphasis text-lg leading-6 font-medium text-gray-900">
              You're not signed in!
            </h3>
            <div className="dark:text-dark-med-emphasis mt-2 max-w-xl text-sm leading-5 text-gray-500">
              <p>
                Sign in to save your progress and sync your settings across
                devices.
              </p>
            </div>
            <div className="mt-5">
              <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={() => signIn()}
                  className="dark:text-dark-high-emphasis focus:shadow-outline-blue inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-hidden active:bg-gray-50 active:text-gray-800 dark:border-gray-700 dark:bg-gray-800"
                >
                  Sign in
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="h-8" />
      </>
    );
  }
  return null;
}
