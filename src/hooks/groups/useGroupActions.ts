import useFirebase from '../useFirebase';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import {
  groupConverter,
  GroupData,
  GroupPermission,
  JoinGroupLink,
  joinGroupLinkConverter,
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
        leaderboard: {},
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
        await firebase.functions().httpsCallable('leaveGroup')({
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
        case 'ONLY_OWNER':
          throw new Error(
            "Since you're the only owner of this group, you are unable to leave. Try adding another owner or deleting the group instead."
          );
        case 'GROUP_NOT_FOUND': // (this shouldn't happen)
        default:
          throw new Error('Error handling error: ' + leaveResult.errorCode);
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
    updateJoinLink: async (id: string, data: Partial<JoinGroupLink>) => {
      await firebase
        .firestore()
        .collection('group-join-links')
        .doc(id)
        .withConverter(joinGroupLinkConverter)
        .update(data);
    },
    removeMemberFromGroup: async (id: string) => {
      // todo @jeffrey
    },
  };
}
