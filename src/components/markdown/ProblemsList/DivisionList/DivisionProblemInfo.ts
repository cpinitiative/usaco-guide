import { ProblemInfo } from '../../../../models/problem';

export type DivisionProblemInfo = Pick<
  ProblemInfo,
  'name' | 'uniqueId' | 'solution' | 'url' | 'source' | 'tags'
> & {
  moduleLink: string;
  percentageSolved: number;
};
