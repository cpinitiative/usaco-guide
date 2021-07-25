import React from 'react';
import { Toaster } from 'react-hot-toast';
import { DarkModeProvider } from './src/context/DarkModeProvider';
import { EditorContext } from './src/context/EditorContext';
import { FirebaseProvider } from './src/context/FirebaseContext';
import GlobalErrorBoundary from './src/context/GlobalErrorBoundary';
import { SignInProvider } from './src/context/SignInContext';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';
import { UserGroupsProvider } from './src/hooks/groups/useUserGroups';

export const wrapRootElement = ({ element }): JSX.Element => (
  <>
    <GlobalErrorBoundary>
      <FirebaseProvider>
        <UserDataProvider>
          <DarkModeProvider>
            <SignInProvider>
              <UserGroupsProvider>
                <EditorContext.Provider value={{ inEditor: false }}>
                  {element}
                </EditorContext.Provider>
              </UserGroupsProvider>
            </SignInProvider>
          </DarkModeProvider>
        </UserDataProvider>
      </FirebaseProvider>
    </GlobalErrorBoundary>
    <Toaster position="top-right" />
  </>
);
