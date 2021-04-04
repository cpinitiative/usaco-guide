import { useActivePostProblems } from './useActivePostProblems';
import { GroupProblemData } from '../../models/groups/problem';

export function useProblem(problemId: string): GroupProblemData {
  const { problems } = useActivePostProblems();
  return problems?.find(problem => problem.id === problemId);
}
