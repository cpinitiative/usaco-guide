import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
admin.initializeApp();

export const incrementUsers = functions.auth.user().onCreate(() => {
  return admin
    .database()
    .ref('/num_users')
    .transaction(legacyUserCount => {
      return (legacyUserCount || 0) + 1;
    });
});

export const incrementPageviews = functions.https.onCall(() => {
  return admin
    .database()
    .ref('/analytics/pageviews')
    .transaction(legacyPageviews => {
      return (legacyPageviews || 0) + 1;
    });
});

export const getUsers = functions.https.onCall(
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
