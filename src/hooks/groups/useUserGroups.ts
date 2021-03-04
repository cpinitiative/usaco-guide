import useFirebase from '../useFirebase';
import { useQuery } from 'react-query';
import firebaseType from 'firebase';
import { groupConverter } from '../../models/groups/groups';

const getUserGroups = async (firebase: typeof firebaseType, userId: string) => {
  const snapshot = await Promise.all(
    ['ownerIds', 'memberIds', 'adminIds'].map(key =>
      firebase
        .firestore()
        .collection('groups')
        .where(key, 'array-contains', userId)
        .withConverter(groupConverter)
        .get()
    )
  );

  return snapshot.map(snap => snap.docs.map(doc => doc.data())).flat();
};

export function useUserGroups(userId) {
  const firebase = useFirebase();
  return useQuery(
    ['userGroups', userId],
    () => getUserGroups(firebase, userId),
    { enabled: !!firebase && !!userId }
  );
}
