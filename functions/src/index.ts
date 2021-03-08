import * as functions from 'firebase-functions';
import firestore from '@google-cloud/firestore';
import admin from 'firebase-admin';
import { Octokit } from '@octokit/core';
admin.initializeApp();

export const submitProblemSuggestion = functions.https.onCall(
  async (data, context) => {
    if (!context.auth?.uid) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'You must be logged in to suggest a problem!'
      );
    }
    const submitterName = await admin
      .auth()
      .getUser(context.auth.uid)
      .then(userRecord => userRecord.displayName);
    const {
      name,
      moduleName,
      link,
      difficulty,
      tags,
      additionalNotes,
      problemTableLink,
    } = data;
    if (!name || !moduleName || !link || !problemTableLink) {
      throw new functions.https.HttpsError(
        'failed-precondition',
        'One or more required parameters were not passed.'
      );
    }
    const octokit = new Octokit({
      auth: functions.config().problemsuggestion.issueapikey,
    });
    console.log({
      auth: functions.config().problemsuggestion.issueapikey,
    });

    const body =
      `*${submitterName}* (UID ${context.auth?.uid}) suggested adding the problem [${name}](${link}) ` +
      `to the module [${moduleName}](${problemTableLink}).\n\n` +
      `**Difficulty**: ${difficulty}\n` +
      `**Tags**: ${tags}\n` +
      `**Additional Notes**:${
        additionalNotes ? '\n' + additionalNotes : 'None'
      }\n\n` +
      `*This report was automatically generated from a user submitted problem suggestion on the USACO guide.*`;

    const response = await octokit.request(
      'POST /repos/{owner}/{repo}/issues',
      {
        owner: 'cpinitiative',
        repo: 'usaco-guide',
        title: `Problem Suggestion: Add "${name}" to ${moduleName}`,
        body,
        labels: ['Problem Suggestion'],
      }
    );

    return response.data.html_url;
  }
);

export const incrementUsers = functions.auth.user().onCreate(() => {
  return admin
    .database()
    .ref('/num_users')
    .transaction(legacyUserCount => {
      return (legacyUserCount || 0) + 1;
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

const backupsClient = new firestore.v1.FirestoreAdminClient();

export const scheduledFirestoreExport = functions.pubsub
  .schedule('every 24 hours')
  .onRun(context => {
    const bucket = 'gs://backups.usaco.guide';
    const projectId = process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT;
    const databaseName = backupsClient.databasePath(projectId, '(default)');

    return backupsClient
      .exportDocuments({
        name: databaseName,
        outputUriPrefix: bucket,
        // Leave collectionIds empty to export all collections
        collectionIds: [],
      })
      .then(responses => {
        const response = responses[0];
        console.log(`Operation Name: ${response['name']}`);
      })
      .catch(err => {
        console.error(err);
        throw new Error('Export operation failed');
      });
  });
