import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import {
  connectFirestoreEmulator,
  getFirestore,
  initializeFirestore,
} from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import * as React from 'react';
import { createContext } from 'react';

export const FirebaseAppContext = createContext<FirebaseApp | null>(null);

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
};

/**
 * F-12: Initialize Firebase synchronously at module level (SSR-guarded) rather
 * than inside a useEffect.
 *
 * The useEffect approach leaves a window between the initial render and when
 * the effect fires where FirebaseAppContext is null.  Any consumer that calls
 * getFirestore(null) during that window throws an unhandled Firebase SDK error.
 *
 * Initializing at module evaluation time (which only runs on the client because
 * this module is not imported by getStaticProps / getServerSideProps) eliminates
 * the null window entirely: the context value is non-null on the very first
 * render and never changes.
 *
 * The `typeof window !== 'undefined'` guard keeps SSR safe — Next.js may
 * evaluate module-level code on the server during pre-rendering.
 */
let initializedApp: FirebaseApp | null = null;

if (typeof window !== 'undefined') {
  initializedApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  // Firestore settings must be called before any Firestore operation
  try {
    if (localStorage.getItem('USACO_GUIDE_LONG_POLLING') === 'true') {
      initializeFirestore(initializedApp, {
        experimentalForceLongPolling: true,
      });
    } else {
      initializeFirestore(initializedApp, {});
    }
  } catch {
    // initializeFirestore throws if called more than once per app instance
    // (e.g. hot-reload in development). Swallow the error — Firestore is
    // already configured.
  }

  const shouldUseEmulator =
    process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true';
  if (shouldUseEmulator) {
    try {
      connectAuthEmulator(getAuth(initializedApp), 'http://localhost:9099');
      connectFirestoreEmulator(getFirestore(initializedApp), 'localhost', 8080);
      connectFunctionsEmulator(getFunctions(initializedApp), 'localhost', 5001);
    } catch {
      // Already connected (hot-reload). Safe to ignore.
    }
  }
}

export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // F-12: context value is set synchronously from the module-level initializedApp,
  // so consumers never receive null during the render cycle.
  return (
    <FirebaseAppContext.Provider value={initializedApp}>
      {children}
    </FirebaseAppContext.Provider>
  );
};
