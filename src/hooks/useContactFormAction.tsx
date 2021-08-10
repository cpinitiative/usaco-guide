import { addDoc, collection, getFirestore } from 'firebase/firestore';
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
      const response = await submitProblemSuggestion({
        name,
        moduleName,
        topic,
        message,
      });
      await addDoc(
        collection(getFirestore(firebaseApp), 'contactFormSubmissions'),
        {
          name: name,
          email: email,
          moduleName: moduleName,
          url: url,
          lang: lang,
          topic: topic,
          message: message,
          issueNumber: (response.data as any).number,
        }
      );
      return (response.data as any).url;
    },
    [firebaseApp]
  );
}
