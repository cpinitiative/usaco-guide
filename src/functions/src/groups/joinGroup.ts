import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
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
    await Promise.all([
      admin
        .firestore()
        .collection('groups')
        .doc(keyData.groupId)
        .update({
          memberIds: admin.firestore.FieldValue.arrayUnion([callerUid]),
        }),
      admin
        .firestore()
        .collection('group-join-links')
        .doc(key)
        .update({
          usedBy: admin.firestore.FieldValue.arrayUnion([callerUid]),
          numUses: admin.firestore.FieldValue.increment(1),
        }),
    ]);
    return { success: true, groupId: keyData.groupId };
  }
);
