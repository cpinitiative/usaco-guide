import useFirebase from './useFirebase';
import { Simulate } from 'react-dom/test-utils';
import submit = Simulate.submit;
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
      });
    },
    [firebase]
  );
}
