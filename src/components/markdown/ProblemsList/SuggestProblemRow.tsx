import * as React from 'react';
import { useContext } from 'react';
import ProblemSuggestionModalContext from '../../../context/ProblemSuggestionModalContext';

export default function SuggestProblemRow({ listName }: { listName: string }) {
  const context = useContext(ProblemSuggestionModalContext);

  return (
    <tr>
      <td colSpan={10}>
        <button
          className="w-full text-center text-sm uppercase font-medium py-2 text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-200 hover:underline"
          onClick={() => context.openProblemSuggestionModal(listName)}
        >
          + Suggest a Problem
        </button>
      </td>
    </tr>
  );
}
