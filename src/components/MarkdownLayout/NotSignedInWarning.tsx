import * as React from 'react';
import { useContext } from 'react';
import { SignInContext } from '../../context/SignInContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
// import styled from 'styled-components';

// const Container = styled.div`
//   @media (min-width: 1024px) {
//     left: 20rem;
//   }
// `;

export default function NotSignedInWarning() {
  const { signIn } = useContext(SignInContext);
  const { firebaseUser, isLoaded, numPageviews } = useContext(UserDataContext);

  if (isLoaded && !firebaseUser && numPageviews > 1) {
    return (
      // <Container className="fixed inset-x-0 bottom-0 z-10">
      //   <div className="bg-blue-600">
      //     <div className="py-3 px-3 sm:px-6 lg:px-8">
      //       <div className="flex items-center justify-between flex-wrap">
      //         <div className="w-0 flex-1 flex items-center">
      //           <span className="flex p-2 rounded-lg bg-blue-800">
      //             <svg
      //               className="h-6 w-6 text-white"
      //               xmlns="http://www.w3.org/2000/svg"
      //               fill="none"
      //               viewBox="0 0 24 24"
      //               stroke="currentColor"
      //             >
      //               <path
      //                 strokeLinecap="round"
      //                 strokeLinejoin="round"
      //                 strokeWidth={2}
      //                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      //               />
      //             </svg>
      //           </span>
      //           <p className="ml-3 font-medium text-white truncate">
      //             You're not signed in! Sign in to save progress and sync
      //             settings across devices.
      //           </p>
      //         </div>
      //         <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
      //           <button
      //             type="button"
      //             onClick={() => signIn()}
      //             className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
      //           >
      //             Sign In
      //           </button>
      //         </div>
      //         <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
      //           <button
      //             type="button"
      //             className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
      //           >
      //             <span className="sr-only">Dismiss</span>
      //             {/* Heroicon name: outline/x */}
      //             <svg
      //               className="h-6 w-6 text-white"
      //               xmlns="http://www.w3.org/2000/svg"
      //               fill="none"
      //               viewBox="0 0 24 24"
      //               stroke="currentColor"
      //               aria-hidden="true"
      //             >
      //               <path
      //                 strokeLinecap="round"
      //                 strokeLinejoin="round"
      //                 strokeWidth="2"
      //                 d="M6 18L18 6M6 6l12 12"
      //               />
      //             </svg>
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </Container>
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
