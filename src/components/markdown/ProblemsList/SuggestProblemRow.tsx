import { globalHistory } from '@reach/router';
import * as React from 'react';
import { useContext } from 'react';
import { EditorContext } from '../../../context/EditorContext';
import ProblemSuggestionModalContext from '../../../context/ProblemSuggestionModalContext';

export default function SuggestProblemRow({ listName }: { listName: string }) {
  const context = useContext(ProblemSuggestionModalContext);
  const { inEditor } = useContext(EditorContext);
  const path = globalHistory.location.pathname || '';
  return (
    <tr>
      <td colSpan={10}>
        <button
          className="w-full py-2 text-center text-sm font-medium text-gray-600 uppercase hover:text-blue-700 hover:underline dark:text-gray-300 dark:hover:text-blue-200"
          onClick={() => context.openProblemSuggestionModal(listName)}
        >
          + {inEditor ? 'Add a Problem' : 'Suggest a Problem'}
        </button>
      </td>
    </tr>
  );
}
