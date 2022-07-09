import axios from 'axios';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { ApolloClient, HttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

if (admin.apps.length === 0) {
  admin.initializeApp();
}
const key = functions.config().contactform.issueapikey;

export async function createDiscussion(topic: string, body: string) {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: key ? `Token ${key}` : null,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(
      new HttpLink({ uri: "https://api.github.com/graphql" })
    ),
    cache: new InMemoryCache(),
  });

  client
    .mutate({
      mutation: gql`
        mutation cd {
             createDiscussion(input: {repositoryId: "MDEwOlJlcG9zaXRvcnkyNjg2NzA0NjY=", categoryId: "DIC_kwDOEAOWAs4COX3q", body: "${body}", title: "${topic}"}) {
              clientMutationId
            }
         }
      `,
    })
    .then((resp) => console.log(resp.data.viewer.login))
    .catch((error) => console.error(error));
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

  console.log(topic);
  if(topic==='Suggestion'||topic==='Other'){
    console.log("Topic");
    await createDiscussion(topic, body);
    await admin.firestore().collection('contactFormSubmissions').add({
      name: name,
      email: email,
      moduleName: moduleName,
      url: url,
      lang: lang,
      topic: topic,
      message: message,
      issueNumber: 0,
    });

    return "https://github.com/cpinitiative/usaco-guide/discussions/";
  }else {
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
      issueNumber: createdIssue.data.number,
    });

    return createdIssue.data.html_url;
  }
});
export default submitContactForm;
