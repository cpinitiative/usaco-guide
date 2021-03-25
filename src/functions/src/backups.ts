import firestore from '@google-cloud/firestore';
import * as functions from 'firebase-functions';

const backupsClient = new firestore.v1.FirestoreAdminClient();

export default functions.pubsub.schedule('every 24 hours').onRun(context => {
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
