import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import { Submission, SubmissionType } from '../../../models/groups/posts';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.firestore
  .document(
    'groups/{groupId}/posts/{postId}/problems/{problemId}/submissions/{submissionId}'
  )
  .onCreate(async (snapshot, context) => {
    const { groupId, postId, problemId } = context.params as {
      groupId: string;
      postId: string;
      problemId: string;
    };
    const data = {
      ...snapshot.data(),
      id: context.params.submissionId,
    } as Submission;
    if (data.type === SubmissionType.COMPCS_API) {
      // not yet supported
      return;
    }
    const groupRef = admin.firestore().collection('groups').doc(groupId);
    const postRef = groupRef.collection('posts').doc(postId);
    console.log(context.params);
    console.log(data);
    await Promise.all([
      admin.firestore().runTransaction(transaction => {
        return transaction.get(postRef).then(postDoc => {
          if (!postDoc.exists) {
            throw new Error(
              "The post being submitted to couldn't be found (while updating post leaderboard)."
            );
          }
          return transaction.update(postRef, {
            [`leaderboard.${problemId}.${data.userId}`]: data.result,
          });
        });
      }),
      admin.firestore().runTransaction(transaction => {
        return transaction.get(postRef).then(postDoc => {
          if (!postDoc.exists) {
            throw new Error(
              "The post being submitted to couldn't be found (while updating group leaderboard)."
            );
          }
          const oldProblemScore = postDoc.data().leaderboard[data.userId];
          return transaction.get(groupRef).then(groupDoc => {
            if (!groupDoc.exists) {
              throw new Error(
                "The group being submitted to couldn't be found."
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
