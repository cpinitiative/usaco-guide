import axios from 'axios';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';

if (admin.apps.length === 0) {
  admin.initializeApp();
}
export async function createDiscussion(topic: string, body: string) {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });


  const { data } = await client.mutate({
    mutation: gql`
    {
       # input type: CreateDiscussionInput
        createDiscussion(input: {repositoryId: "MDEwOlJlcG9zaXRvcnkyNjg2NzA0NjY=", categoryId: "DIC_kwDOEAOWAs4COX3q", body: "${body}", title: "${topic}"}) {
          clientMutationId
       }
   }
  `
  });
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

  if(topic==='Suggestion'||topic==='Other'){
    await createDiscussion(topic, body);
    await admin.firestore().collection('contactFormSubmissions').add({
      name: name,
      email: email,
      moduleName: moduleName,
      url: url,
      lang: lang,
      topic: topic,
      message: message,
    });

    return "https://github.com/cpinitiative/usaco-guide/discussions/";
  }else {
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
