import admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import {
  ExecutionStatus,
  Submission,
  SubmissionType,
  TestResultError,
} from '../../../models/groups/problem';
import axios from 'axios';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

export default functions.firestore
  .document(
    'groups/{groupId}/posts/{postId}/problems/{problemId}/submissions/{submissionId}'
  )
  .onWrite(async (change, context) => {
    const { groupId, postId, problemId, submissionId } = context.params as {
      groupId: string;
      postId: string;
      problemId: string;
      submissionId: string;
    };

    const recalculateLeaderboard = async (data: Submission) => {
      const groupRef = admin.firestore().collection('groups').doc(groupId);
      const userRef = groupRef.collection('leaderboard').doc(data.userId);
      const problemRef = groupRef
        .collection('posts')
        .doc(postId)
        .collection('problems')
        .doc(problemId);
      const submissionRef = problemRef
        .collection('submissions')
        .doc(submissionId);
      const groupDoc = await groupRef.get();

      let status: ExecutionStatus;
      if (data.type === SubmissionType.SELF_GRADED) {
        status = data.result === 1 ? ExecutionStatus.AC : ExecutionStatus.WA;
      } else if (data.type === SubmissionType.ONLINE_JUDGE) {
        if (data.gradingStatus !== 'done') {
          throw new Error(
            'recalculateLeaderboard should only be called once the online judge has finished grading.'
          );
        }
        if (data.compilationError === true) {
          status = ExecutionStatus.CE;
        } else if (data.compilationError === false) {
          status = data.testCases?.reduce((oldStatus, r) => {
            if (r.pass === true || oldStatus !== ExecutionStatus.AC) {
              return oldStatus;
            }
            switch (r.error) {
              case TestResultError.COMPILE_ERROR:
              case TestResultError.COMPILE_TIMEOUT:
                return ExecutionStatus.CE;
              case TestResultError.RUNTIME_ERROR:
                return ExecutionStatus.RTE;
              case TestResultError.TIME_LIMIT_EXCEEDED:
                return ExecutionStatus.TLE;
              case TestResultError.EMPTY_MISSING_OUTPUT:
              case TestResultError.WRONG_ANSWER:
                return ExecutionStatus.WA;
              case TestResultError.INTERNAL_ERROR:
                return ExecutionStatus.INTERNAL_ERROR;
              default:
                throw new Error(
                  'this should never happen either. recalculateLeaderboard should only be called once the execution finishes.'
                );
            }
          }, ExecutionStatus.AC);
        } else {
          throw new Error(
            'this should never happen. gradingstatus is done but compilationError is neither true nor false.'
          );
        }
      } else {
        throw new Error(
          // @ts-ignore should never happen...
          "recalculateLeaderboard can't figure out submission type " + data.type
        );
      }

      if (groupDoc.data().memberIds.includes(data.userId)) {
        const problemDoc = await problemRef.get();
        const userAuth = await admin.auth().getUser(data.userId);
        await admin.firestore().runTransaction(async transaction => {
          const userDoc = await transaction.get(userRef);
          if (!problemDoc.exists) {
            throw new Error(
              "The post, group, or problem being submitted to couldn't be found."
            );
          }
          if (!userDoc.exists) transaction.set(userRef, {});

          const oldProblemScore = userDoc.data()?.[postId]?.[problemId] || 0;
          const points = data.result * problemDoc.data().points;
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
              bestScoreStatus: status,
              bestScoreTimestamp: data.timestamp,
              bestScoreSubmissionId: submissionId,
            },
            [`${postId}.${problemId}`]: points,
            totalPoints: userData.totalPoints,
            [`${postId}.totalPoints`]: userData[postId].totalPoints,
            userInfo: {
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoURL: userAuth.photoURL,
            },
          });
          transaction.update(submissionRef, {
            status: status,
          });
        });
      } else {
        await submissionRef.update({
          status: status,
        });
      }
    };

    if (change.after.data().type === SubmissionType.ONLINE_JUDGE) {
      if (change.before.exists) {
        // check if result changed
        if (change.before.data().result !== change.after.data().result) {
          // if result changed, recalculate leaderboard
          await recalculateLeaderboard(change.after.data() as Submission);
        } else if (
          change.before.data().gradingStatus !==
            change.after.data().gradingStatus &&
          change.after.data().gradingStatus === 'error'
        ) {
          await change.after.ref.update({
            status: ExecutionStatus.INTERNAL_ERROR,
          });
        }
      } else {
        // submit submission
        try {
          const res = await axios.post('https://judge.usaco.guide/grade', {
            groupId,
            postId,
            problemId,
            submissionId,
          });
          if (res.status !== 200 || !res.data.success) {
            // unable to start grading because of malformed post request or malformed submission
            await change.after.ref.update({
              gradingStatus: 'error',
              errorMessage: 'Malformed POST request or malformed submission?',
            });
          } else {
            // started grading (if there's a compilation error or runtime error, etc, success is still true
          }
        } catch (e) {
          console.error(e);
          // server probably down
          await change.after.ref.update({
            gradingStatus: 'error',
            errorMessage:
              'The server is currently unavailable. Please try again later, or contact us at onlinejudge@joincpi.org.',
          });
        }
      }
    } else if (change.after.data().type === SubmissionType.SELF_GRADED) {
      if (change.before.exists) return;

      const data = {
        ...change.after.data(),
        id: context.params.submissionId,
      } as Submission;
      if (data.type === SubmissionType.ONLINE_JUDGE) {
        await axios.post('https://judge.usaco.guide/grade', {
          groupId,
          postId,
          problemId,
          submissionId,
        });
        return;
      }

      await recalculateLeaderboard(data);
    } else {
      console.error(
        'Unknown submission type ' +
          change.after.data().type +
          ' for submission ' +
          submissionId
      );
    }
  });
