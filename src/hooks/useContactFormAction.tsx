import { getFunctions, httpsCallable } from 'firebase/functions';
import { useCallback } from 'react';
import { useFirebaseApp } from './useFirebase';

export default function useContactFormAction() {
  const firebaseApp = useFirebaseApp();

  return useCallback(
    async ({
      name,
      email,
      moduleName,
      url,
      lang,
      topic,
      message,
    }: {
      name: string;
      email: string;
      moduleName: string;
      url: string;
      lang: string;
      topic: string;
      message: string;
    }) => {
      if (!firebaseApp) {
        throw new Error('Firebase is not initialized yet. Please try again.');
      }
      const submitProblemSuggestion = httpsCallable(
        getFunctions(firebaseApp),
        'submitContactForm'
      );

      return submitProblemSuggestion({
        name,
        email,
        moduleName,
        url,
        lang,
        topic,
        message,
      });
    },
    [firebaseApp]
  );
}
