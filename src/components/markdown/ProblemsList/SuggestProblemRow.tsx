import * as React from 'react';
import { useContext } from 'react';
import { EditorContext } from '../../../context/EditorContext';
import ProblemSuggestionModalContext from '../../../context/ProblemSuggestionModalContext';

export default function SuggestProblemRow({ listName }: { listName: string }) {
  const context = useContext(ProblemSuggestionModalContext);
  const { inEditor } = useContext(EditorContext);
  return (
    <tr>
      <td colSpan={10}>
        <button
          className="w-full text-center text-sm uppercase font-medium py-2 text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-200 hover:underline"
          onClick={() => context.openProblemSuggestionModal(listName)}
        >
          + {inEditor ? 'Add a Problem' : 'Suggest a Problem'}
        </button>
      </td>
    </tr>
  );
}
