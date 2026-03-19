import { GoogleAnalytics } from '@next/third-parties/google';
import 'easymde/dist/easymde.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'instantsearch.css/themes/algolia.css';
import 'katex/dist/katex.min.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import 'react-calendar-heatmap/dist/styles.css';
import { Toaster } from 'react-hot-toast';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import '../components/Dashboard/heatmap-styles.css';
import { BlindModeProvider } from '../context/BlindModeContext';
import { DarkModeProvider } from '../context/DarkModeProvider';
import { EditorContext } from '../context/EditorContext';
import { FirebaseProvider } from '../context/FirebaseContext';
import GlobalErrorBoundary from '../context/GlobalErrorBoundary';
import { SignInProvider } from '../context/SignInContext';
import { UserDataProvider } from '../context/UserDataContext/UserDataContext';
import { UserGroupsProvider } from '../hooks/groups/useUserGroups';
import '../styles/flatpickr-custom.css';
import '../styles/main.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-1JGYFFBHXN';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      <GlobalErrorBoundary>
        <FirebaseProvider>
          <UserDataProvider>
            <DarkModeProvider>
              <SignInProvider>
                <UserGroupsProvider>
                  <BlindModeProvider>
                    <EditorContext.Provider value={{ inEditor: false }}>
                      <Component {...pageProps} />
                    </EditorContext.Provider>
                  </BlindModeProvider>
                </UserGroupsProvider>
              </SignInProvider>
            </DarkModeProvider>
          </UserDataProvider>
        </FirebaseProvider>
      </GlobalErrorBoundary>
      <Toaster position="top-right" />
    </div>
  );
}
