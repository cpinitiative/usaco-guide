import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import updateLiveMailingList from './utils/updateLiveMailingList';
import { classRegistrationAdministrators } from './utils/permissions';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.https.onCall(
  async (
    { registrationId, email, firstName, lastName, preferredLanguage, level },
    context
  ) => {
    if (
      !context.auth ||
      !classRegistrationAdministrators.includes(context.auth.uid)
    ) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Insufficient Permissions.'
      );
    }

    await Promise.all([
      updateLiveMailingList({
        email,
        firstName,
        lastName,
        preferredLanguage,
        ip: context.rawRequest.ip,
        level,
        fullFinancialAid: true,
      }),
      admin
        .firestore()
        .collection('classes-registration')
        .doc('2022january')
        .collection('registrations')
        .doc(registrationId)
        .update({
          status: 'ACCEPTED',
          acceptedBy: context.auth.uid,
          acceptedTimestamp: admin.firestore.FieldValue.serverTimestamp(),
        }),
    ]);
  }
);
