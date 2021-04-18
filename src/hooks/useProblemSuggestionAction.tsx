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
        alert(
          "Please select a source (You can select 'other' if you can't find the correct source)"
        );
        return;
      }
      if (!difficulty) {
        alert('Please select a difficulty');
        return;
      }
      if (!firebaseApp) {
        alert('Too fast! Please wait ten seconds and try again.');
        return;
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
