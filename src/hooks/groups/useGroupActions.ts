import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { GroupData, JoinGroupLink } from '../../models/groups/groups';
import { useFirebaseApp } from '../useFirebase';
import { useUserGroups } from './useUserGroups';

export function useGroupActions() {
  const firebaseApp = useFirebaseApp();
  const { firebaseUser } = useContext(UserDataContext);
  const { invalidateData } = useUserGroups();

  const updateGroup = async (
    groupId: string,
    updatedData: Partial<GroupData>
  ) => {
    const { id, ...data } = updatedData;
    await updateDoc(doc(getFirestore(firebaseApp), 'groups', groupId), {
      ...data,
    });
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
        postOrdering: [],
      };
      const groupDoc = doc(collection(getFirestore(firebaseApp), 'groups'));
      const group: GroupData = {
        ...defaultGroup,
        id: groupDoc.id,
      };

      await setDoc(groupDoc, group).then(() => invalidateData());

      return groupDoc.id;
    },
    deleteGroup: async (groupId: string) => {
      const firestore = getFirestore(firebaseApp);
      // oops this batch should really be a transaction todo
      const batch = writeBatch(firestore);

      const posts = await getDocs(
        collection(firestore, 'groups', groupId, 'posts')
      );
      posts.docs.forEach(doc => batch.delete(doc.ref));
      await Promise.all(
        posts.docs.map(async doc => {
          const problems = await getDocs(
            collection(
              firestore,
              'groups',
              groupId,
              'posts',
              doc.id,
              'problems'
            )
          );
          problems.docs.forEach(doc => batch.delete(doc.ref));
          await Promise.all(
            problems.docs.map(async problemDoc => {
              const submissions = await getDocs(
                collection(
                  firestore,
                  'groups',
                  groupId,
                  'posts',
                  doc.id,
                  'problems',
                  problemDoc.id,
                  'submissions'
                )
              );
              submissions.docs.forEach(doc => batch.delete(doc.ref));
            })
          );
        })
      );
      batch.delete(doc(firestore, 'groups', groupId));

      await batch.commit();
      invalidateData();
    },
    updateGroup,
    leaveGroup: async (groupId: string, userId: string) => {
      const leaveResult = ((
        await httpsCallable(
          getFunctions(firebaseApp),
          'groups-leave'
        )({
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
      const linkDoc = doc(
        collection(getFirestore(firebaseApp), 'group-join-links')
      );
      const docId = linkDoc.id;

      await setDoc(linkDoc, defaultJoinLink);

      return {
        ...defaultJoinLink,
        id: docId,
      };
    },
    updateJoinLink: async (
      id: string,
      linkData: Partial<JoinGroupLink>
    ): Promise<void> => {
      const { id: _, ...data } = linkData;
      await updateDoc(
        doc(getFirestore(firebaseApp), 'group-join-links', id),
        // no clue why this throws a typescript error without it...
        data as any
      );
    },
    updatePostOrdering: async (groupId: string, ordering: string[]) => {
      await updateDoc(doc(getFirestore(firebaseApp), 'groups', groupId), {
        postOrdering: ordering,
      });
    },
    removeMemberFromGroup: async (
      groupId: string,
      targetUid: string
    ): Promise<void> => {
      const removeResult = ((
        await httpsCallable(
          getFunctions(firebaseApp),
          'groups-removeMember'
        )({
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
        await httpsCallable(
          getFunctions(firebaseApp),
          'groups-updateMemberPermissions'
        )({
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
