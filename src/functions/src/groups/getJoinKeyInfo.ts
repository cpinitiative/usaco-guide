import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
interface submitToProblemArgs {
  key: string;
}

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(
  async ({ key }: submitToProblemArgs, context) => {
    const callerUid = context.auth?.uid;

    if (!callerUid || !key) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The function was not called with the correct data, or the caller is not logged in.'
      );
    }

    const keyData = await admin
      .firestore()
      .collection('group-join-links')
      .doc(key)
      .get()
      .then(
        s =>
          s.data() as {
            groupId: string;
            revoked: boolean;
            numUses?: number;
            maxUses?: number;
            expirationTime?: admin.firestore.Timestamp;
            usedBy: string[];
            author: string;
          } | null
      );
    if (!keyData) {
      return {
        success: false,
        errorCode: 'KEY_NOT_FOUND',
        message: 'The given key does not exist.',
      };
    }
    if (
      keyData.revoked ||
      (keyData.maxUses && keyData.numUses >= keyData.maxUses) ||
      (keyData.expirationTime &&
        keyData.expirationTime.toMillis() < new Date().getMilliseconds())
    ) {
      return {
        success: false,
        errorCode: 'INVALID_KEY',
        message: 'The given key is no longer valid.',
      };
    }
    const snapshot = await admin
      .firestore()
      .collection('groups')
      .doc(keyData.groupId)
      .get();
    return {
      success: true,
      name: snapshot.data().name,
    };
  }
);
