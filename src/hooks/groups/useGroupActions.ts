import useFirebase from '../useFirebase';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import {
  groupConverter,
  GroupData,
  GroupPermission,
} from '../../models/groups/groups';
import { postConverter, PostData } from '../../models/groups/posts';

export function useGroupActions() {
  const firebase = useFirebase();
  const { firebaseUser } = useContext(UserDataContext);

  const updateGroup = async (
    groupId: string,
    updatedData: Partial<GroupData>
  ) => {
    await firebase
      .firestore()
      .collection('groups')
      .doc(groupId)
      .withConverter(groupConverter)
      .update(updatedData);
  };

  return {
    /**
     * creates a new group and returns ID immediately, before firebase actually uploads stuff to server
     */
    createNewGroup: (): string => {
      if (!firebaseUser?.uid) {
        throw 'The user must be logged in to create a new group.';
      }

      const defaultGroup: Omit<GroupData, 'id'> = {
        name: 'New Group',
        description: '',
        ownerIds: [firebaseUser.uid],
        adminIds: [],
        memberIds: [],
        members: {
          [firebaseUser.uid]: {
            id: firebaseUser.uid,
            name: firebaseUser.displayName,
            permission: GroupPermission.OWNER,
          },
        },
      };
      const doc = firebase.firestore().collection('groups').doc();
      const docId = doc.id;

      doc.set(defaultGroup);

      return docId;
    },
    deleteGroup: async (groupId: string) => {
      await firebase.firestore().collection('groups').doc(groupId).delete();
    },
    updateGroup,
  };
}
