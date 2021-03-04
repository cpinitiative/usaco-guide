import useFirebase from '../useFirebase';
import { useQuery } from 'react-query';
import firebaseType from 'firebase';
import { postConverter } from '../../models/groups/posts';

const getPosts = async (firebase: typeof firebaseType, groupId: string) => {
  const snapshot = await firebase
    .firestore()
    .collection('groups')
    .doc(groupId)
    .collection('posts')
    .withConverter(postConverter)
    .get();

  return snapshot.docs.map(doc => doc.data());
};

export function usePosts(groupId) {
  const firebase = useFirebase();

  return useQuery(['posts', groupId], () => getPosts(firebase, groupId), {
    enabled: !!firebase && !!groupId,
  });
}
