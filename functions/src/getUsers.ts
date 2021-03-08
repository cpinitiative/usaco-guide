import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

export default functions.https.onCall(
  (
    data: {
      users: ({ uid: string } | { email: string })[];
    },
    context
  ) => {
    const { users } = data;
    const callerUid = context.auth?.uid;

    if (!callerUid || !users || users.length === 0) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The function was not called with the correct data, or the caller is not logged in.'
      );
    }
    return admin
      .firestore()
      .collection('classes')
      .doc('permissions')
      .get()
      .then(snapshot => snapshot.data())
      .then(permissions => {
        if (
          !permissions?.admins?.includes(callerUid) &&
          !permissions?.instructors?.includes(callerUid)
        ) {
          throw new functions.https.HttpsError(
            'permission-denied',
            'Caller is not an admin or instructor.'
          );
        } else {
          return admin.auth().getUsers(users);
        }
      });
  }
);
