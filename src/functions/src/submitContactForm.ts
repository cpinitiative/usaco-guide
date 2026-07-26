import axios from 'axios';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { githubApiBase } from '../../config';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const submitContactForm = functions.https.onCall(async request => {
  const { name, email, moduleName, url, lang, topic, message } =
    request.data as {
      name: string;
      email: string;
      moduleName?: string;
      url?: string;
      lang?: string;
      topic: string;
      message: string;
    };
  if (!name || !topic || !message || !email) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'One or more required arguments were not passed.'
    );
  }

  // Enforce field length limits to prevent abuse
  if (name.length > 200) {
    throw new functions.https.HttpsError('invalid-argument', 'Name is too long.');
  }
  if (email.length > 254) {
    throw new functions.https.HttpsError('invalid-argument', 'Email is too long.');
  }
  if (topic.length > 200) {
    throw new functions.https.HttpsError('invalid-argument', 'Topic is too long.');
  }
  if (message.length > 10_000) {
    throw new functions.https.HttpsError('invalid-argument', 'Message is too long (max 10,000 characters).');
  }
  if (url && url.length > 2000) {
    throw new functions.https.HttpsError('invalid-argument', 'URL is too long.');
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new functions.https.HttpsError('invalid-argument', 'Invalid email address format.');
  }
  const body =
    `Someone submitted the contact form!\n\n` +
    `**URL**: ${url}\n` +
    `**Module**: ${moduleName ? moduleName : 'None'}\n` +
    `**Topic**: ${topic}\n` +
    `**Message**: \n${message}`;

  const key = functions.config().contactform.issueapikey;
  if (!key) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Missing GitHub API key configuration'
    );
  }
  const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `token ${key}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });
  const labels = [];
  if (
    topic.includes('Mistake') ||
    topic.includes('Unclear Explanation') ||
    topic.includes('Request')
  ) {
    labels.push('content');
    labels.push('good first issue');
  }
  if (topic.includes('Website Bug')) {
    labels.push('website');
    labels.push('bug');
  }
  if (topic.includes('Suggestion')) labels.push('enhancement');
  let title = `Contact Form Submission - ${topic}`;
  if (moduleName) {
    title += ` (${moduleName})`;
  }
  const createdIssue = await githubAPI.post(`${githubApiBase()}/issues`, {
    title: title,
    body: body,
    labels: labels,
  });

  await admin.firestore().collection('contactFormSubmissions').add({
    name: name,
    email: email,
    moduleName: moduleName,
    url: url,
    lang: lang,
    topic: topic,
    message: message,
    issueNumber: createdIssue.data.number,
  });

  return createdIssue.data.html_url;
});
export default submitContactForm;
