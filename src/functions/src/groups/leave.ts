import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import { GroupData } from '../../../models/groups/groups';
import getPermissionLevel from './utils/getPermissionLevel';
import getMembershipKey from './utils/getMembershipKey';

interface LeaveGroupArgs {
  groupId: string;
}

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(
  async ({ groupId }: LeaveGroupArgs, context) => {
    const callerUid = context.auth?.uid;
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
    }

    if (
      permissionLevel === 'OWNER' &&
      groupData.ownerIds.filter(id => id !== callerUid).length == 0
    ) {
      return {
        success: false,
        errorCode: 'SOLE_OWNER',
      };
    }
    await admin
      .firestore()
      .collection('groups')
      .doc(groupId)
      .update({
        [getMembershipKey(
          permissionLevel
        )]: admin.firestore.FieldValue.arrayRemove(callerUid),
      });

    return { success: true };
  }
);
