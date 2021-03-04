import useFirebase from '../useFirebase';
import { useMutation, useQueryClient } from 'react-query';
import { postConverter, PostData } from '../../models/groups/posts';

export function useNewPostMutation() {
  const firebase = useFirebase();
  const queryClient = useQueryClient();

  return useMutation(
    async (groupId: string) => {
      const defaultPost: PostData = {
        name: 'Untitled Post',
        timestamp: firebase.firestore.Timestamp.now(),
        dueTimestamp: firebase.firestore.Timestamp.now(),
        isPublished: false,
        isPinned: false,
        body: '',
        problems: {},
      };
      const doc = await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .add(defaultPost);
      return doc.id;
    },
    {
      onSuccess: (data, groupId) => {
        queryClient.invalidateQueries(['posts', groupId]);
      },
    }
  );
}
