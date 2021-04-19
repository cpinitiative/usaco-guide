import { getFunctions, httpsCallable } from 'firebase/functions';
import { useCallback } from 'react';
import { useFirebaseApp } from './useFirebase';

export default function useProblemSuggestionAction() {
  const firebaseApp = useFirebaseApp();

  return useCallback(
    async ({
      name,
      link,
      difficulty,
      tags,
      additionalNotes,
      problemTableLink,
      moduleName,
      section,
      problemListName,
      source,
      filePath,
    }) => {
      if (!source) {
        throw new Error(
          "Please select a source (You can select 'other' if you can't find the correct source)"
        );
      }
      if (!difficulty) {
        throw new Error('Please select a difficulty');
      }
      if (!firebaseApp) {
        throw new Error('Too fast! Please wait ten seconds and try again.');
      }
      const submitProblemSuggestion = httpsCallable(
        getFunctions(firebaseApp),
        'submitProblemSuggestion'
      );
      return submitProblemSuggestion({
        name,
        link,
        difficulty,
        tags,
        additionalNotes,
        problemTableLink,
        moduleName,
        section,
        problemListName,
        source,
        filePath,
      });
    },
    [firebaseApp]
  );
}
