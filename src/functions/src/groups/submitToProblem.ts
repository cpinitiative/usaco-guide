import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import { Submission, SubmissionType } from '../../../models/groups/problem';

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
      submissionId: string;
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
    const problemRef = postRef.collection('submissions').doc(problemId);
    console.log(context.params);
    console.log(data);
    await Promise.all([
      problemRef.update({
        status: data.result === 100 ? 'AC' : 'WA',
      }),

      admin.firestore().runTransaction(async transaction => {
        const postDoc = await transaction.get(postRef);
        const groupDoc = await transaction.get(groupRef);

        if (!postDoc.exists || !groupDoc.exists) {
          throw new Error(
            "The post or group being submitted to couldn't be found."
          );
        }

        const oldProblemScore =
          (postDoc.data()?.leaderboard &&
            postDoc.data()?.leaderboard[data.problemId] &&
            postDoc.data()?.leaderboard[data.problemId][data.userId]) ||
          0;
        const oldTotalScore =
          groupDoc.data()?.leaderboard ||
          groupDoc.data()?.leaderboard[data.userId] ||
          0;

        await Promise.all([
          ...(data.result > oldProblemScore
            ? [
                transaction.update(postRef, {
                  [`leaderboard.${problemId}.${data.userId}`]: {
                    bestScore: data.result,
                    bestScoreStatus: data.status,
                    bestScoreTimestamp: data.timestamp,
                  },
                }),
              ]
            : []),
          transaction.update(groupRef, {
            [`leaderboard.${data.userId}`]:
              oldTotalScore - oldProblemScore + data.result,
          }),
        ]);
      }),
    ]);
  });
