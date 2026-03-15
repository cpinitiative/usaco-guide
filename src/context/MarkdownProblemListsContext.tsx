import * as React from 'react';
import { ProblemInfo } from '../models/problem';

/**
 * This stores the problem lists *for the active module only*.
 *
 * ProblemsList uses this to show problems
 * ModuleHeaders uses this to display progress
 */
const MarkdownProblemListsContext = React.createContext<
  | {
      listId: string;
      problems: ProblemInfo[];
    }[]
  | null
>(null);

export const MarkdownProblemListsProvider =
  MarkdownProblemListsContext.Provider;

export function useMarkdownProblemLists() {
  const problems = React.useContext(MarkdownProblemListsContext);
  return problems;
}

export function useMarkdownProblems() {
  const lists = useMarkdownProblemLists();
  const problems = React.useMemo(() => {
    let all: ProblemInfo[] = [];
    lists?.forEach(list => {
      all = [...all, ...list.problems];
    });
    return all;
  }, [lists]);
  return problems;
}
