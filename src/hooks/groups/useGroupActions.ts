import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import {
  groupConverter,
  GroupData,
  JoinGroupLink,
  joinGroupLinkConverter,
} from '../../models/groups/groups';
import useFirebase from '../useFirebase';
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
        leaderboard: {},
      };
      const doc = firebase.firestore().collection('groups').doc();
      const docId = doc.id;

      await doc.set(defaultGroup).then(() => invalidateData());

      return docId;
    },
    deleteGroup: async (groupId: string) => {
      const batch = firebase.firestore().batch();

      const posts = await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .get();
      posts.docs.forEach(doc => batch.delete(doc.ref));
      await Promise.all(
        posts.docs.map(async doc => {
          const problems = await firebase
            .firestore()
            .collection('groups')
            .doc(groupId)
            .collection('posts')
            .doc(doc.id)
            .collection('problems')
            .get();
          problems.docs.forEach(doc => batch.delete(doc.ref));
          await Promise.all(
            problems.docs.map(async problemDoc => {
              const submissions = await firebase
                .firestore()
                .collection('groups')
                .doc(groupId)
                .collection('posts')
                .doc(doc.id)
                .collection('problems')
                .doc(problemDoc.id)
                .collection('submissions')
                .get();
              submissions.docs.forEach(doc => batch.delete(doc.ref));
            })
          );
        })
      );
      batch.delete(firebase.firestore().collection('groups').doc(groupId));

      await batch.commit();
      invalidateData();
    },
    updateGroup,
    leaveGroup: async (groupId: string, userId: string) => {
      const leaveResult = ((
        await firebase.functions().httpsCallable('groups-leave')({
          groupId,
        })
      ).data as never) as
        | { success: true }
        | { success: false; errorCode: string };
      console.log(leaveResult);
      // === typeguard check
      if (leaveResult.success === true) {
        invalidateData();
        return;
      }
      switch (leaveResult.errorCode) {
        case 'SOLE_OWNER':
          throw new Error(
            "Since you're the sole owner of this group, you are unable to leave. Try adding another owner or deleting the group instead."
          );
        case 'GROUP_NOT_FOUND':
          throw new Error('The group to be left could not be found');
        default:
          throw new Error('Error: ' + leaveResult.errorCode);
      }
    },
    createJoinLink: async (groupId: string): Promise<JoinGroupLink> => {
      const defaultJoinLink: Omit<JoinGroupLink, 'id'> = {
        groupId,
        revoked: false,
        numUses: 0,
        maxUses: null,
        expirationTime: null,
        usedBy: [],
        author: firebaseUser.uid,
      };
      const doc = firebase.firestore().collection('group-join-links').doc();
      const docId = doc.id;

      await doc.set(defaultJoinLink);

      return {
        ...defaultJoinLink,
        id: docId,
      };
    },
    updateJoinLink: async (
      id: string,
      data: Partial<JoinGroupLink>
    ): Promise<void> => {
      await firebase
        .firestore()
        .collection('group-join-links')
        .doc(id)
        .withConverter(joinGroupLinkConverter)
        .update(data);
    },
    removeMemberFromGroup: async (
      groupId: string,
      targetUid: string
    ): Promise<void> => {
      const removeResult = ((
        await firebase.functions().httpsCallable('groups-removeMember')({
          groupId,
          targetUid,
        })
      ).data as never) as
        | { success: true }
        | { success: false; errorCode: string };
      if (removeResult.success === true) {
        invalidateData();
        return;
      }
      switch (removeResult.errorCode) {
        case 'REMOVING_SELF':
          throw new Error(
            'You cannot remove yourself from the group. Try leaving or deleting the group instead.'
          );
        case 'PERMISSION_DENIED':
          throw new Error('Only group owners can remove members.');
        case 'MEMBER_NOT_FOUND':
          throw new Error('The member to be removed could not be found.');
        case 'GROUP_NOT_FOUND':
          throw new Error('The group to be modified could not be found');
        default:
          throw new Error('Error: ' + removeResult.errorCode);
      }
    },
    updateMemberPermissions: async (
      groupId: string,
      targetUid: string,
      newPermissionLevel: 'OWNER' | 'ADMIN' | 'MEMBER'
    ): Promise<void> => {
      const updateResult = ((
        await firebase
          .functions()
          .httpsCallable('groups-updateMemberPermissions')({
          groupId,
          targetUid,
          newPermissionLevel,
        })
      ).data as never) as
        | { success: true }
        | { success: false; errorCode: string };
      if (updateResult.success === true) {
        invalidateData();
        return;
      }
      switch (updateResult.errorCode) {
        case 'UPDATING_SELF':
          throw new Error('You cannot update your own permissions.');
        case 'PERMISSION_DENIED':
          throw new Error('Only group owners can remove members.');
        case 'ALREADY_NEW_PERMISSION_LEVEL':
          throw new Error(
            'The member to be updated is already that permission level!'
          );
        case 'MEMBER_NOT_FOUND':
          throw new Error('The member to be removed could not be found.');
        case 'INVALID_NEW_PERMISSION_LEVEL':
          throw new Error('An invalid new permission level was provided.');
        case 'GROUP_NOT_FOUND':
          throw new Error('The group to be modified could not be found');
        default:
          throw new Error('Error: ' + updateResult.errorCode);
      }
    },
  };
}
