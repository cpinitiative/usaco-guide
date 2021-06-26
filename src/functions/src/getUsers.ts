import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(
  async (
    data: {
      users: ({ uid: string } | { email: string })[];
    },
    context
  ) => {
    const { users } = data;
    const callerUid = context.auth?.uid;
    const caller = await admin.auth().getUser(callerUid);

    if (!callerUid || !users || users.length === 0) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The function was not called with the correct data, or the caller is not logged in.'
      );
    }
    const classesPermissions = await admin
      .firestore()
      .collection('classes')
      .doc('permissions')
      .get()
      .then(snapshot => snapshot.data());
    if (
      !caller.customClaims.isAdmin &&
      !classesPermissions?.admins?.includes(callerUid) &&
      !classesPermissions?.instructors?.includes(callerUid)
    ) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Caller is not an admin or instructor.'
      );
    }
    const getUserPromises: Promise<admin.auth.GetUsersResult>[] = [];
    while (users.length > 0) {
      getUserPromises.push(admin.auth().getUsers(users.splice(0, 100)));
    }
    return (await Promise.all(getUserPromises)).reduce(
      (acc, el) => {
        return {
          notFound: [...acc.notFound, ...el.notFound],
          users: [
            ...acc.users,
            ...el.users.map(
              ({
                customClaims,
                uid,
                email,
                displayName,
                photoURL,
                disabled,
                metadata,
                providerData,
              }) => ({
                customClaims,
                uid,
                email,
                displayName,
                photoURL,
                disabled,
                metadata,
                providerData,
              })
            ),
          ],
        };
      },
      {
        notFound: [],
        users: [],
      }
    );
  }
);
