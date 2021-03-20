import * as React from 'react';

const MarkdownProblemListsContext = React.createContext<
  [
    {
      listId: string;
      problems: any[];
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
