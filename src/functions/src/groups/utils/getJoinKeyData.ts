import admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { JoinGroupLink } from '../../../../models/groups/groups';

export default async function getJoinKeyData(
  key: string
): Promise<JoinGroupLink> {
  if (!key) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The caller is not logged in.'
    );
  }

  const keyData = await admin
    .firestore()
    .collection('group-join-links')
    .doc(key)
    .get()
    .then(snapshot => snapshot.data() as JoinGroupLink | null);
  if (!keyData) {
    return Promise.reject({
      errorCode: 'KEY_NOT_FOUND',
      message: 'The given key does not exist.',
    });
  }
  if (
    keyData.revoked ||
    (keyData.maxUses && keyData.numUses >= keyData.maxUses) ||
    (keyData.expirationTime &&
      keyData.expirationTime.toMillis() < new Date().getMilliseconds())
  ) {
    return Promise.reject({
      errorCode: 'INVALID_KEY',
      message: 'The given key is no longer valid.',
    });
  }
  return keyData;
}
