import useFirebase from '../useFirebase';
import { useQuery } from 'react-query';
import firebaseType from 'firebase';
import { groupConverter } from '../../models/groups/groups';

const getGroup = async (firebase: typeof firebaseType, groupId: string) => {
  const snapshot = await firebase
    .firestore()
    .collection('groups')
    .doc(groupId)
    .withConverter(groupConverter)
    .get();

  return snapshot.data();
};

export function useGroup(groupId) {
  const firebase = useFirebase();

  return useQuery(['group', groupId], () => getGroup(firebase, groupId), {
    enabled: !!firebase && !!groupId,
  });
}
