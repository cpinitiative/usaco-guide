import admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import getJoinKeyData from './utils/getJoinKeyData';
interface submitToProblemArgs {
  key: string;
}

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(
  async ({ key }: submitToProblemArgs, context) => {
    const callerUid = context.auth?.uid;

    let keyData;
    try {
      keyData = await getJoinKeyData(key);
    } catch (e) {
      return {
        success: false,
        ...e,
      };
    }
    const groupData = await admin
      .firestore()
      .collection('groups')
      .doc(keyData.groupId)
      .get()
      .then(snapshot => snapshot.data());
    if (!groupData) {
      return {
        success: false,
        errorCode: 'GROUP_NOT_FOUND',
        message:
          'We were unable to find the requested group. It may have been deleted.',
      };
    } else if (
      groupData.memberIds.includes(callerUid) ||
      groupData.adminIds.includes(callerUid) ||
      groupData.ownerIds.includes(callerUid)
    ) {
      return {
        success: false,
        errorCode: 'ALREADY_IN_GROUP',
        message: "You're already in this group, so you can't join it again.",
        groupId: keyData.groupId,
      };
    }
    await Promise.all([
      admin
        .firestore()
        .collection('groups')
        .doc(keyData.groupId)
        .update({
          memberIds: admin.firestore.FieldValue.arrayUnion(callerUid),
        }),
      admin
        .firestore()
        .collection('group-join-links')
        .doc(key)
        .update({
          usedBy: admin.firestore.FieldValue.arrayUnion(callerUid),
          numUses: admin.firestore.FieldValue.increment(1),
        }),
    ]);
    return { success: true, groupId: keyData.groupId };
  }
);
