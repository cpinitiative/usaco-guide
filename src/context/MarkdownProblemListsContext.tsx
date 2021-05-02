import * as React from 'react';
import { ProblemInfo } from '../models/problem';

/**
 * This stores the problem lists *for the active module only*.
 *
 * ProblemsList uses this to show problems
 * ModuleHeaders uses this to display progress
 */
const MarkdownProblemListsContext = React.createContext<
  {
    listId: string;
    problems: ProblemInfo[];
  }[]
>(null);

export const MarkdownProblemListsProvider =
  MarkdownProblemListsContext.Provider;

export function useMarkdownProblemLists() {
  const problems = React.useContext(MarkdownProblemListsContext);
  if (!problems) {
    throw new Error(
      'useMarkdownProblems() must be used within a MarkdownProblemListsProvider.'
    );
  }
  return problems;
}

export function useMarkdownProblems() {
  const lists = useMarkdownProblemLists();
  const problems: ProblemInfo[] = React.useMemo(() => {
    let all = [];
    lists.forEach(list => {
      all = [...all, ...list.problems];
    });
    return all;
  }, [lists]);
  return problems;
}
