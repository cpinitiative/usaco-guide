import * as React from 'react';
import { Problem } from '../../../models/problem';
import { useContext } from 'react';
import ProblemSuggestionModalContext from '../../../context/ProblemSuggestionModalContext';

export default function SuggestProblemRow({
  problems,
}: {
  problems: Problem[];
}) {
  const context = useContext(ProblemSuggestionModalContext);

  // probably in a class or something; suggesting problems shouldn't be allowed
  if (!context) return null;

  return (
    <tr>
      <td colSpan={10}>
        <button
          className="w-full text-center text-sm uppercase font-medium py-2 text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-200 hover:underline"
          onClick={() => context.openProblemSuggestionModal(problems)}
        >
          + Suggest a Problem
        </button>
      </td>
    </tr>
  );
}
