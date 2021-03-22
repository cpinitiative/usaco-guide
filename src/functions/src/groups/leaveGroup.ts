import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
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
    const groupData = groupDataSnapshot.data();

    const permissionLevel = groupData.ownerIds.includes(callerUid)
      ? 'OWNER'
      : groupData.adminIds.includes(callerUid)
      ? 'ADMIN'
      : groupData.memberIds.includes(callerUid)
      ? 'MEMBER'
      : 'NOT_MEMBER';
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
        errorCode: 'ONLY_OWNER',
      };
    }
    await admin
      .firestore()
      .collection('groups')
      .doc(groupId)
      .update({
        [permissionLevel == 'OWNER'
          ? 'ownerIds'
          : permissionLevel == 'ADMIN'
          ? 'adminIds'
          : 'memberIds']: admin.firestore.FieldValue.arrayRemove(callerUid),
      });

    return { success: true };
  }
);
