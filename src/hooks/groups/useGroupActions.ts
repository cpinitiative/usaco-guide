import useFirebase from '../useFirebase';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import {
  groupConverter,
  GroupData,
  GroupPermission,
} from '../../models/groups/groups';
import { useUserGroups } from './useUserGroups';

export function useGroupActions() {
  const firebase = useFirebase();
  const { firebaseUser } = useContext(UserDataContext);
  const { invalidateData } = useUserGroups();

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
    invalidateData();
  };

  return {
    createNewGroup: async () => {
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

      await doc.set(defaultGroup).then(() => invalidateData());

      return docId;
    },
    deleteGroup: async (groupId: string) => {
      let batch = firebase.firestore().batch();

      const posts = await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .get();
      posts.docs.forEach(doc => {
        batch.delete(
          firebase
            .firestore()
            .collection('groups')
            .doc(groupId)
            .collection('posts')
            .doc(doc.id)
        );
      });
      const submissions = await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('submissions')
        .get();
      submissions.docs.forEach(doc => {
        batch.delete(
          firebase
            .firestore()
            .collection('groups')
            .doc(groupId)
            .collection('submissions')
            .doc(doc.id)
        );
      });
      batch.delete(firebase.firestore().collection('groups').doc(groupId));

      await batch.commit();
      invalidateData();
    },
    updateGroup,
    leaveGroup: async (groupId: string, userId: string) => {
      // @jeffrey todo implement this
      let leftSuccessfully = false;
      if (leftSuccessfully) {
        return;
      }
      throw new Error(
        "Since you're the only owner of this group, you are unable to leave. Try adding another owner or deleting the group instead."
      );
    },
  };
}
