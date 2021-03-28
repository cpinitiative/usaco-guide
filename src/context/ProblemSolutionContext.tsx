import * as React from 'react';
import { ProblemInfo } from '../models/problem';

const ProblemSolutionContext = React.createContext<{
  problem: Pick<ProblemInfo, 'uniqueId' | 'url'>;
  modulesThatHaveProblem: { id: string; title: string }[];
}>(null);

export { ProblemSolutionContext };
