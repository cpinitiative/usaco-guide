import { GroupProblemData } from '../../models/groups/problem';
import { useActivePostProblems } from './useActivePostProblems';

export function useProblem(problemId: string): GroupProblemData {
  const { problems } = useActivePostProblems();
  return problems?.find(problem => problem.id === problemId);
}
