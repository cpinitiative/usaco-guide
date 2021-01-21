import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

export default function NotSignedInWarning() {
  const { signIn, firebaseUser, isLoaded, numPageviews } = useContext(
    UserDataContext
  );

  if (isLoaded && !firebaseUser && numPageviews > 1) {
    return (
      <>
        <div className="bg-gray-50 dark:bg-gray-900 sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">
              You're not signed in!
            </h3>
            <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500 dark:text-dark-med-emphasis">
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
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-dark-high-emphasis bg-white dark:bg-gray-800 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
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
