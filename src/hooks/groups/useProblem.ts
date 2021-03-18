import { useActivePostProblems } from './useActivePostProblems';

export function useProblem(problemId: string) {
  const { problems } = useActivePostProblems();
  return problems?.find(problem => problem.id === problemId);
}
