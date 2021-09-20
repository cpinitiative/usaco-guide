import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import updateMailingList from './utils/updateMailingList';
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

    // create bronze class join link
    const joinLinkRef = admin.firestore().collection('group-join-links').doc();
    await joinLinkRef.set({
      groupId: 'd7eYGfddXq3m2trXG2xt',
      revoked: false,
      numUses: 0,
      maxUses: 1,
      expirationTime: null,
      usedBy: [],
      author: 'REGISTRATION_' + email,
      id: joinLinkRef.id,
    });

    await Promise.all([
      updateMailingList({
        email,
        firstName,
        lastName,
        preferredLanguage,
        ip: context.rawRequest.ip,
        level,
        fullFinancialAid: true,
        joinLink: `https://usaco.guide/groups/join?key=${joinLinkRef.id}`,
      }),
      admin
        .firestore()
        .collection('classes-registration')
        .doc('usacobronze')
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
