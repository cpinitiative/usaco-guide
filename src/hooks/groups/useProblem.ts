import { usePost } from './usePost';

export function useProblem(postId: string, problemId: string) {
  const post = usePost(postId);
  return post?.problems[problemId];
}
