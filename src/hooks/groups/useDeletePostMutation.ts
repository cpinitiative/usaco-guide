import useFirebase from '../useFirebase';
import { useMutation, useQueryClient } from 'react-query';
import { postConverter, PostData } from '../../models/groups/posts';

export function useDeletePostMutation(groupId: string, postId: string) {
  const firebase = useFirebase();
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .doc(postId)
        .delete();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts', groupId]);
      },
    }
  );
}
