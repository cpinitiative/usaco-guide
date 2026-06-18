import { getFunctions, httpsCallable } from 'firebase/functions';
import { useCallback } from 'react';
import { useFirebaseApp } from './useFirebase';

export default function useContactFormAction() {
  const firebaseApp = useFirebaseApp();

  return useCallback(
    async ({ name, email, moduleName, url, lang, topic, message }) => {
      if (!name) {
        throw new Error('Please enter your name.');
      }
      if (!email) {
        throw new Error('Please enter your email.');
      }
      if (!topic) {
        throw new Error('Please select a topic');
      }
      if (!message) {
        throw new Error('Please enter a message.');
      }
      if (!firebaseApp) {
        throw new Error('Too fast! Please wait ten seconds and try again.');
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
