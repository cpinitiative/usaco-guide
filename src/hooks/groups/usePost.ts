import { useActiveGroup } from './useActiveGroup';

export function usePost(postId: string) {
  const activeGroup = useActiveGroup();
  return activeGroup.posts?.find(post => post.id === postId);
}
