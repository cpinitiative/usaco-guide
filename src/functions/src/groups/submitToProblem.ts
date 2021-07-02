import admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { Submission, SubmissionType } from '../../../models/groups/problem';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.firestore
  .document(
    'groups/{groupId}/posts/{postId}/problems/{problemId}/submissions/{submissionId}'
  )
  .onCreate(async (snapshot, context) => {
    const { groupId, postId, problemId, submissionId } = context.params as {
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
    const userRef = groupRef.collection('leaderboard').doc(data.userId);
    const problemRef = groupRef.collection('posts').doc(postId).collection('problems').doc(problemId);
    const submissionRef = problemRef
      .collection('submissions')
      .doc(submissionId);
    const status = data.result === 1 ? 'AC' : 'WA';
    await Promise.all([
      submissionRef.update({
        status: status,
      }),

      admin.firestore().runTransaction(async transaction => {
        const problemDoc = await transaction.get(problemRef);
        const userDoc = await transaction.get(userRef);
        if (!problemDoc.exists) {
          throw new Error(
            "The post, group, or problem being submitted to couldn't be found."
          );
        }

        const oldProblemScore = userDoc.data()?.[postId]?.[problemId] || 0;
        const points = data.result * problemDoc.data().points;
        if (points < oldProblemScore) {
          return;
        }
        const userData = userDoc.data() || {};

        if (!userData[postId]) {
          userData[postId] = {
            totalPoints: 0
          };
        }
        userData[postId][problemId] = points;
        userData[postId].totalPoints = Object.keys(userData[postId])
          .filter(x => x !== 'totalPoints')
          .reduce(
            (acc, cur) =>
              acc + userData[postId][cur],
            0
          );
        userData.totalPoints = Object.keys(userData)
          .filter(x => x !== 'totalPoints')
          .reduce(
            (acc, cur) =>
              acc + userData[cur].totalPoints,
            0
          );

        await transaction.update(userRef, {
          [`details.${postId}.${problemId}`]: {
            bestScore: points,
            bestScoreStatus: status,
            bestScoreTimestamp: data.timestamp,
            bestScoreSubmissionId: submissionId,
          },
          [`${postId}.${problemId}`]: points,
          totalPoints: userData.totalPoints,
          [`${postId}.totalPoints`]: userData[postId].totalPoints,
        });
      }),
    ]);
  });
