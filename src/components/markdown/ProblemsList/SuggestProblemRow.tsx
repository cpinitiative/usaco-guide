import { globalHistory } from '@reach/router';
import { Link } from 'gatsby';
import * as React from 'react';
import { useContext } from 'react';
import { EditorContext } from '../../../context/EditorContext';
import ProblemSuggestionModalContext from '../../../context/ProblemSuggestionModalContext';

export default function SuggestProblemRow({ listName }: { listName: string }) {
  // const context = useContext(ProblemSuggestionModalContext);
  const { inEditor } = useContext(EditorContext);
  const path = globalHistory.location.pathname || '';
  return (
    <tr>
      <td colSpan={10}>
        <a
          href={`https://docs.google.com/forms/d/e/1FAIpQLScSnHRAV1ybiwHMBH-byqhAijRlpNKLnxzpMLYUK8mUXyMyEg/viewform?usp=pp_url&entry.1983837292=${path}`}
          target="_blank"
        >
          <button
            className="w-full text-center text-sm uppercase font-medium py-2 text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-200 hover:underline"
            // onClick={() => context.openProblemSuggestionModal(listName)}
          >
            + {inEditor ? 'Add a Problem' : 'Suggest a Problem'}
          </button>
        </a>
      </td>
    </tr>
  );
}
