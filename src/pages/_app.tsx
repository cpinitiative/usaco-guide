import { GoogleAnalytics } from '@next/third-parties/google';
import 'easymde/dist/easymde.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'instantsearch.css/themes/algolia.css';
import 'katex/dist/katex.min.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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
import CookieConsent from '../components/CookieConsent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

function AppContent({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<unknown>;
  pageProps: Record<string, unknown>;
}) {
  const router = useRouter();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_WATCH_RELOAD !== '1') return;
    import('../utils/watchReload').then(({ initWatchReload }) => {
      initWatchReload(router);
    });
  }, []);

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
      <CookieConsent />
    </div>
  );
}

function validateEnvironment() {
  // Only validate NEXT_PUBLIC_ vars on the client — server-only vars
  // (like EDITOR_CLIENT_SECRET, ALGOLIA_APP_ID) are not available in client bundles.
  const REQUIRED_CLIENT_ENV_VARS = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_DATABASE_URL',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID',
    'NEXT_PUBLIC_ALGOLIA_INDEX_NAME',
    'NEXT_PUBLIC_ALGOLIA_API_KEY',
    'NEXT_PUBLIC_EDITOR_CLIENT_ID',
  ];

  const missing = REQUIRED_CLIENT_ENV_VARS.filter(key => !process.env[key]);

  if (missing.length > 0) {
    return (
      <div className="min-h-screen bg-red-50 p-8 dark:bg-red-900">
        <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h1 className="text-2xl font-bold text-red-800 dark:text-red-200">
            Configuration Error
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            The following required environment variables are missing:
          </p>
          <ul className="mt-2 list-inside list-disc text-red-600 dark:text-red-400">
            {missing.map(v => (
              <li key={v}>{v}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Please set these variables in your deployment environment and
            restart the application.
          </p>
        </div>
      </div>
    );
  }

  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  const missingEnv = validateEnvironment();

  return (
    missingEnv || <AppContent Component={Component} pageProps={pageProps} />
  );
}
