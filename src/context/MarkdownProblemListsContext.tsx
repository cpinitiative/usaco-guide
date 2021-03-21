import * as React from 'react';
import { ProblemInfo } from '../models/problem';

const MarkdownProblemListsContext = React.createContext<
  [
    {
      listId: string;
      problems: ProblemInfo[];
    }
  ]
>(null);

export const MarkdownProblemListsProvider =
  MarkdownProblemListsContext.Provider;

export function useMarkdownProblemLists() {
  const problems = React.useContext(MarkdownProblemListsContext);
  if (!problems) {
    throw new Error(
      'useMarkdownProblems() must be used within a MarkdownProblemsProvider.'
    );
  }
  return problems;
}
