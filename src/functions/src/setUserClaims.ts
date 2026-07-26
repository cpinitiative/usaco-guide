import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(async request => {
  const { target, claims, merge } = request.data as {
    target: string;
    merge?: boolean;
    claims: Record<string, any>;
  };
  const callerUid = request.auth?.uid;

  if (!callerUid) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'Not authenticated!'
    );
  }

  const caller = await admin.auth().getUser(callerUid);
  if (!caller.customClaims?.isAdmin) {
    throw new functions.https.HttpsError('permission-denied', 'Not an admin!');
  }

  let newClaims;
  if (merge) {
    const targetUser = await admin.auth().getUser(target);
    const oldClaims = targetUser.customClaims;
    newClaims = {
      ...oldClaims,
      ...claims,
    };
  } else {
    newClaims = claims;
  }
  await admin.auth().setCustomUserClaims(target, newClaims);
});
