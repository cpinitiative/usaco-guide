import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import { Submission, SubmissionType } from '../../../models/groups/posts';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.firestore
  .document('groups/{groupId}/submissions')
  .onCreate(async (snapshot, context) => {
    const data = {
      id: snapshot.id,
      ...snapshot.data(),
    } as Submission;
    if (data.type === SubmissionType.COMPCS_API) {
      // not yet supported
      return;
    }
    const groupRef = admin
      .firestore()
      .collection('groups')
      .doc(context.params.groupId);
    const postRef = groupRef.collection('posts').doc(data.id);
    await Promise.all([
      admin.firestore().runTransaction(transaction => {
        return transaction.get(postRef).then(postDoc => {
          if (!postDoc.exists) {
            throw new Error(
              "The problem being submitted to couldn't be found."
            );
          }
          return transaction.update(postRef, {
            [`leaderboard.${data.problemId}.${data.userId}`]: data.result,
          });
        });
      }),
      admin.firestore().runTransaction(transaction => {
        return transaction.get(postRef).then(postDoc => {
          if (!postDoc.exists) {
            throw new Error(
              "The problem being submitted to couldn't be found."
            );
          }
          const oldProblemScore = postDoc.data().leaderboard[data.userId];
          return transaction.get(groupRef).then(groupDoc => {
            if (!groupDoc.exists) {
              throw new Error(
                "The problem being submitted to couldn't be found."
              );
            }
            const oldTotalScore = groupDoc.data().leaderboard[data.userId];
            return transaction.update(groupRef, {
              [`leaderboard.${data.userId}`]:
                oldTotalScore - oldProblemScore + data.result,
            });
          });
        });
      }),
    ]);
  });
