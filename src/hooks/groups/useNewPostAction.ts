import useFirebase from '../useFirebase';
import { PostData } from '../../models/groups/posts';

export function useNewPostAction(groupId: string) {
  const firebase = useFirebase();

  return {
    createNewPost: async () => {
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
  };
}
