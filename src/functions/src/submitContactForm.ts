import axios from 'axios';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const submitContactForm = functions.https.onCall(async data => {
  const { name, moduleName, topic, message } = data;
  if (!name || !topic || !message) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'One or more required arguments were not passed.'
    );
  }
  const body =
    `Someone submitted the contact form!\n\n` +
    `**Module**: ${moduleName ? moduleName : 'None'}\n` +
    `**Topic**: ${topic}\n` +
    `**Message**: \n${message}`;

  const key = functions.config().contactform.issueapikey;
  const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
    auth: {
      username: 'maggieliu05',
      password: key,
    },
  });

  const createdIssue = await githubAPI.post(
    '/repos/cpinitiative/usaco-guide/issues',
    {
      title: `Contact Form Submission`,
      body: body,
    }
  );

  return {
    url: createdIssue.data.html_url,
    number: createdIssue.data.number,
  };
});
export default submitContactForm;
