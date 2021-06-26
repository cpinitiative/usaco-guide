import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(
  async (
    {
      target,
      claims,
      merge,
    }: {
      target: string;

      // default true
      merge?: boolean;
      claims: Record<string, any>;
    },
    context
  ) => {
    const callerUid = context.auth?.uid;

    const caller = await admin.auth().getUser(callerUid);
    if (
      !caller.customClaims.isAdmin &&
      ![
        'BKFOe33Ym7Pc7aQuET57MiljpF03',
        'v8NK8mHCZnbPQKaPnEs5lKNc3rv2',
      ].includes(callerUid)
    ) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Not an admin!'
      );
    }

    let newClaims;
    if (merge !== false) {
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
  }
);
