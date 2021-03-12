import useFirebase from './useFirebase';
import { useCallback } from 'react';

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
    }) => {
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
      });
    },
    [firebase]
  );
}
