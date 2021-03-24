import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.auth.user().onCreate(() => {
  return admin
    .database()
    .ref('/num_users')
    .transaction(legacyUserCount => {
      return (legacyUserCount || 0) + 1;
    });
});
