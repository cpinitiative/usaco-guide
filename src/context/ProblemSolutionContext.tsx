import * as React from 'react';
import { ProblemInfo } from '../models/problem';

const ProblemSolutionContext = React.createContext<{
  problem: Pick<ProblemInfo, 'uniqueId' | 'url'>;
  modulesThatHaveProblem: { id: string; title: string }[];
} | null>(null);

export function useProblemSolutions() {
  const context = React.useContext(ProblemSolutionContext);
  if (!context) {
    throw new Error(
      'useProblemSolutions must be used within a ProblemSolutionProvider'
    );
  }
  return context;
}

export { ProblemSolutionContext };
