import { ProblemInfo } from '../../../../models/problem';

export type DivisionProblemInfo = ProblemInfo & {
  percentageSolved: number;
  problemLink: string;
};