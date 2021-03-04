import * as React from 'react';
import { FirebaseProvider } from './src/context/FirebaseContext';
import MDXProvider from './src/components/markdown/MDXProvider';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    <MDXProvider>
      <UserDataProvider>
        <QueryClientProvider client={queryClient}>
          {element}
        </QueryClientProvider>
      </UserDataProvider>
    </MDXProvider>
  </FirebaseProvider>
);
