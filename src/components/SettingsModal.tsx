import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import { Transition } from '@headlessui/react';

const UserAuthButton = props => {
  const { firebaseUser, signIn, signOut } = useContext(UserDataContext);
  return (
    <button {...props} onClick={() => (firebaseUser ? signOut() : signIn())}>
      {firebaseUser ? 'Logout' : 'Login'}
    </button>
  );
};

export default function SettingsModal({ isOpen, onClose }) {
  const userSettings = useContext(UserDataContext);

  return (
    <Transition
      show={isOpen}
      className="fixed z-30 inset-0 h-full overflow-y-auto"
    >
      <div className="flex items-end justify-center min-h-full pt-4 px-4 pb-12 text-center sm:block sm:p-0">
        <Transition.Child
          className="fixed inset-0 transition-opacity"
          onClick={onClose}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </Transition.Child>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
        &#8203;
        <Transition.Child
          className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="mt-3 sm:ml-4 sm:mt-1">
                <h3
                  className="text-xl font-medium text-gray-900 text-center sm:text-left"
                  id="modal-headline"
                >
                  Settings
                </h3>
                <div className="mt-3">
                  <span className="relative z-0 inline-flex shadow-sm rounded-md">
                    <button
                      type="button"
                      onClick={() => userSettings.setLang('cpp')}
                      className={`relative inline-flex items-center px-4 py-2 rounded-l-md border text-sm leading-5 font-medium ${
                        userSettings.lang === 'cpp'
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:text-gray-500 active:bg-gray-100 active:text-gray-700'
                      } focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150`}
                    >
                      C++
                    </button>
                    <button
                      type="button"
                      onClick={() => userSettings.setLang('java')}
                      className={`-ml-px relative inline-flex items-center px-4 py-2 border text-sm leading-5 font-medium ${
                        userSettings.lang === 'java'
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:text-gray-500 active:bg-gray-100 active:text-gray-700'
                      } focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150`}
                    >
                      Java
                    </button>
                    <button
                      type="button"
                      onClick={() => userSettings.setLang('py')}
                      className={`-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border text-sm leading-5 font-medium ${
                        userSettings.lang === 'py'
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:text-gray-500 active:bg-gray-100 active:text-gray-700'
                      } focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150`}
                    >
                      Python
                    </button>
                  </span>

                  <label className="flex items-center mt-3">
                    <input
                      type="checkbox"
                      onChange={() => userSettings.setHide(!userSettings.hide)}
                      className="form-checkbox h-5 w-5 text-gray-600"
                      checked={userSettings.hide}
                    />
                    <span className="ml-2 text-gray-700">
                      Hide tags & solutions
                    </span>
                  </label>
                  <label className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      onChange={() =>
                        userSettings.setDarkMode(!userSettings.darkMode)
                      }
                      className="form-checkbox h-5 w-5 text-gray-600"
                      checked={userSettings.darkMode}
                    />
                    <span className="ml-2 text-gray-700">Dark mode</span>
                  </label>

                  <div className="h-3" />

                  <UserAuthButton className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Done
              </button>
            </span>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
}
