import * as React from 'react';
import { DarkModeProvider } from './src/context/DarkModeProvider';
import { EditorContext } from './src/context/EditorContext';
import { FirebaseProvider } from './src/context/FirebaseContext';
import GlobalErrorBoundary from './src/context/GlobalErrorBoundary';
import { NotificationSystemProvider } from './src/context/NotificationSystemContext';
import { SignInProvider } from './src/context/SignInContext';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';
import { UserGroupsProvider } from './src/hooks/groups/useUserGroups';

export const wrapRootElement = ({ element }) => (
  <NotificationSystemProvider>
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
  </NotificationSystemProvider>
);
