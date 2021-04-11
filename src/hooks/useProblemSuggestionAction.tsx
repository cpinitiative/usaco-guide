import { useCallback } from 'react';
import useFirebase from './useFirebase';

export default function useProblemSuggestionAction() {
  const firebase = useFirebase();

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
      if (!firebase) {
        alert('Too fast! Please wait ten seconds and try again.');
        return;
      }
      const submitProblemSuggestion = firebase
        .functions()
        .httpsCallable('submitProblemSuggestion');
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
    [firebase]
  );
}
