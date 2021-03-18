import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import { GroupData } from '../../../models/groups/groups';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(
  async (
    data: {
      groupId: string;
    },
    context
  ) => {
    const { groupId } = data;
    const callerUid = context.auth?.uid;

    if (!callerUid || !groupId) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The function was not called with the correct data, or the caller is not logged in.'
      );
    }
    const groupData = await admin
      .firestore()
      .collection('groups')
      .doc(groupId)
      .get()
      .then(snapshot => snapshot.data() as GroupData);
    if (
      !groupData.ownerIds.includes(callerUid) &&
      !groupData.adminIds.includes(callerUid) &&
      !groupData.memberIds.includes(callerUid)
    ) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'The calling user is not a member of the requested group.'
      );
    }
    const members = [
      ...groupData.ownerIds,
      ...groupData.adminIds,
      ...groupData.memberIds,
    ];
    const getUserPromises: Promise<admin.auth.GetUsersResult>[] = [];

    // getUsers limits to 100, which a group could theoretically exceed
    while (members.length > 0) {
      getUserPromises.push(
        admin.auth().getUsers(members.splice(0, 100).map(uid => ({ uid })))
      );
    }
    return (await Promise.all(getUserPromises)).flatMap(result => {
      if (result.notFound.length !== 0) {
        throw new functions.https.HttpsError(
          'internal',
          'A user ID in the firebase document could not be fetched.'
        );
      }
      return result.users;
    });
  }
);
