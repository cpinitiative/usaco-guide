import admin from "firebase-admin";
import * as functions from "firebase-functions";

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(async (request) => {
  const { users } = request.data as {
    users: ({ uid: string } | { email: string })[];
  };
  const callerUid = request.auth?.uid;
  const caller = await admin.auth().getUser(callerUid);

  if (!callerUid || !users || users.length === 0) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The function was not called with the correct data, or the caller is not logged in.",
    );
  }
  const classesPermissions = await admin
    .firestore()
    .collection("classes")
    .doc("permissions")
    .get()
    .then((snapshot) => snapshot.data());
  if (
    !caller.customClaims.isAdmin &&
    !classesPermissions?.admins?.includes(callerUid) &&
    !classesPermissions?.instructors?.includes(callerUid)
  ) {
    throw new functions.https.HttpsError(
      "permission-denied",
      "Caller is not an admin or instructor.",
    );
  }
  const getUserPromises: Promise<admin.auth.GetUsersResult>[] = [];
  while (users.length > 0) {
    getUserPromises.push(admin.auth().getUsers(users.splice(0, 100)));
  }
  const results = await Promise.all(getUserPromises);
  return results.reduce(
    (acc, el) => {
      return {
        notFound: [...acc.notFound, ...el.notFound],
        users: [...acc.users, ...el.users],
      };
    },
    {
      notFound: [] as admin.auth.UserIdentifier[],
      users: [] as admin.auth.UserRecord[],
    },
  );
});
