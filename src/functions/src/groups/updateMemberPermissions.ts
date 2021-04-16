import admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { GroupData } from '../../../models/groups/groups';
import getMembershipKey from './utils/getMembershipKey';
import getPermissionLevel from './utils/getPermissionLevel';
interface UpdateMemberPermissionsArgs {
  groupId: string;
  targetUid: string;
  newPermissionLevel: 'OWNER' | 'ADMIN' | 'MEMBER';
}

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(
  async (
    { groupId, targetUid, newPermissionLevel }: UpdateMemberPermissionsArgs,
    context
  ) => {
    const callerUid = context.auth?.uid;

    if (targetUid === callerUid) {
      return {
        success: false,
        errorCode: 'UPDATING_SELF',
      };
    } else if (!['OWNER', 'ADMIN', 'MEMBER'].includes(newPermissionLevel)) {
      return {
        success: false,
        errorCode: 'INVALID_NEW_PERMISSION_LEVEL',
      };
    }

    const groupDataSnapshot = await admin
      .firestore()
      .collection('groups')
      .doc(groupId)
      .get();
    if (!groupDataSnapshot.exists) {
      return {
        success: false,
        errorCode: 'GROUP_NOT_FOUND',
      };
    }
    const groupData = groupDataSnapshot.data() as GroupData;
    const permissionLevel = getPermissionLevel(callerUid, groupData);

    if (permissionLevel === 'NOT_MEMBER') {
      return {
        success: false,
        errorCode: 'GROUP_NOT_FOUND',
      };
    } else if (permissionLevel !== 'OWNER') {
      return {
        success: false,
        errorCode: 'PERMISSION_DENIED',
      };
    }

    const targetPermissionLevel = getPermissionLevel(targetUid, groupData);

    if (targetPermissionLevel === 'NOT_MEMBER') {
      return {
        success: false,
        errorCode: 'MEMBER_NOT_FOUND',
      };
    } else if (targetPermissionLevel === newPermissionLevel) {
      return {
        success: false,
        errorCode: 'ALREADY_NEW_PERMISSION_LEVEL',
      };
    }

    await admin
      .firestore()
      .collection('groups')
      .doc(groupId)
      .update({
        [getMembershipKey(
          targetPermissionLevel
        )]: admin.firestore.FieldValue.arrayRemove(targetUid),

        [getMembershipKey(
          newPermissionLevel
        )]: admin.firestore.FieldValue.arrayUnion(targetUid),
      });

    return { success: true };
  }
);
