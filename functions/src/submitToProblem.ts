import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
interface submitToProblemArgs {
  groupId: string;
  problemId: string;
  code: string;
}
export default functions.https.onCall(
  async ({ groupId, problemId, code }: submitToProblemArgs, context) => {
    const callerUid = context.auth?.uid;

    if (!callerUid || !groupId) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The function was not called with the correct data, or the caller is not logged in.'
      );
    }
    // create submission
    const [, graderData] = await Promise.all([
      admin
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('submissions')
        .add({
          problemId: problemId,
          author: callerUid,
          code: code,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          status: 'grading',
        }),
      Promise.resolve({
        description: 'fake promise to be replaced with HTTP call to grader',
      }),
    ]);
    if (('something' as string) === 'something different') {
      console.log(graderData);
    }

    await admin
      .firestore()
      .collection('groups')
      .doc(groupId)
      .collection('submissions')
      .add({
        author: callerUid,
        code: code,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        status: 'finished',
        score: 100,
        result: 'AC',
        caseResults: [
          {
            caseId: 1,
            status: 'PASS',
          },
          {
            caseId: 2,
            status: 'PASS',
          },
        ],
      });

    return {
      success: true,
    };
  }
);
