import axios from 'axios';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const submitContactForm = functions.https.onCall(async data => {
  const { name, email, moduleName, url, lang, topic, message } = data;
  if (!name || !topic || !message || !email) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'One or more required arguments were not passed.'
    );
  }
  const body =
    `Someone submitted the contact form!\n\n` +
    `**URL**: ${url}\n` +
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

  let posturl:string='/repos/cpinitiative/usaco-guide/issues';
  if(topic=='Suggestion'||topic==='Other'){posturl='/repos/cpinitiative/usaco-guide/discussions';}

  const createdPost = await githubAPI.post(
    posturl,
    {
      title: `Contact Form Submission - ${topic}`,
      body: body,
    }
  );
  await admin.firestore().collection('contactFormSubmissions').add({
    name: name,
    email: email,
    moduleName: moduleName,
    url: url,
    lang: lang,
    topic: topic,
    message: message,
    issueNumber: createdPost.data.number,
  });

  return createdPost.data.html_url;
});
export default submitContactForm;
