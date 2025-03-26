import * as React from 'react';
import { useSignIn } from '../../context/SignInContext';
import { useLastVisitInfo } from '../../context/UserDataContext/properties/lastVisit';
import {
  useFirebaseUser,
  useIsUserDataLoaded,
} from '../../context/UserDataContext/UserDataContext';
// import styled from 'styled-components';

// const Container = styled.div`
//   @media (min-width: 1024px) {
//     left: 20rem;
//   }
// `;

export default function NotSignedInWarning() {
  const { signIn } = useSignIn();
  const firebaseUser = useFirebaseUser();
  const isLoaded = useIsUserDataLoaded();
  const { numPageviews } = useLastVisitInfo();

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
      //         <div className="order-3 mt-2 shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
      //           <button
      //             type="button"
      //             onClick={() => signIn()}
      //             className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
      //           >
      //             Sign In
      //           </button>
      //         </div>
      //         <div className="order-2 shrink-0 sm:order-3 sm:ml-3">
      //           <button
      //             type="button"
      //             className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-hidden focus:ring-2 focus:ring-white sm:-mr-2"
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
