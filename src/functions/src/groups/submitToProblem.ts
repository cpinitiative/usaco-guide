import admin from 'firebase-admin';
import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { FirebaseSubmission as Submission } from '../../../models/groups/problem';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default onDocumentWritten(
  'groups/{groupId}/posts/{postId}/problems/{problemId}/submissions/{submissionId}',
  async event => {
    const { groupId, postId, problemId, submissionId } = event.params as {
      groupId: string;
      postId: string;
      problemId: string;
      submissionId: string;
    };

    const recalculateLeaderboard = async (data: Submission) => {
      const uid = data.userID;
      const groupRef = admin.firestore().collection('groups').doc(groupId);
      const userRef = groupRef.collection('leaderboard').doc(uid);
      const problemRef = groupRef
        .collection('posts')
        .doc(postId)
        .collection('problems')
        .doc(problemId);
      const groupDoc = await groupRef.get();
      const groupData = groupDoc.data();

      if (groupData && groupData.memberIds.includes(uid)) {
        const problemDoc = await problemRef.get();
        const userAuth = await admin.auth().getUser(uid);
        await admin.firestore().runTransaction(async transaction => {
          const userDoc = await transaction.get(userRef);
          if (!problemDoc.exists) {
            throw new Error(
              "The post, group, or problem being submitted to couldn't be found."
            );
          }
          if (!userDoc.exists) transaction.set(userRef, {});

          const oldProblemScore = userDoc.data()?.[postId]?.[problemId] || 0;
          const points = data.score * problemDoc.data().points;
          if (points < oldProblemScore) {
            return;
          }
          const userData = userDoc.data() || {};

          if (!userData[postId]) {
            userData[postId] = {
              totalPoints: 0,
            };
          }
          userData[postId][problemId] = points;
          userData[postId].totalPoints = Object.keys(userData[postId])
            .filter(x => x !== 'totalPoints')
            .reduce((acc, cur) => acc + userData[postId][cur], 0);
          userData.totalPoints = Object.keys(userData)
            .filter(
              x => x !== 'totalPoints' && x !== 'details' && x !== 'userInfo'
            )
            .reduce((acc, cur) => acc + userData[cur].totalPoints, 0);

          transaction.update(userRef, {
            [`details.${postId}.${problemId}`]: {
              bestScore: points,
              bestScoreStatus: data.verdict,
              bestScoreTimestamp: data.timestamp,
              bestScoreSubmissionId: submissionId,
            },
            [`${postId}.${problemId}`]: points,
            totalPoints: userData.totalPoints,
            [`${postId}.totalPoints`]: userData[postId].totalPoints,
            userInfo: {
              uid: userAuth.uid,
              displayName: userAuth.displayName ?? '',
              photoURL: userAuth.photoURL,
            },
          });
        });
      }
    };

    const afterData = event.data?.after.data() as Submission | undefined;
    const beforeData = event.data?.before.data() as Submission | undefined;

    if (
      afterData &&
      ((afterData.type === 'Online Judge' && afterData.problemID) ||
        afterData.type === 'submission-link')
    ) {
      // check if result changed
      if (beforeData?.score !== afterData.score) {
        // if result changed, recalculate leaderboard
        await recalculateLeaderboard(afterData);
      }
    }
  }
);
