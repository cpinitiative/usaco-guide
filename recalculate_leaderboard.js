const serviceAccount = require('./service.json');
const admin = require('firebase-admin');
const fs = require('fs');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

(async function () {
  const groupID = 'UyefpawGOgGFh14ptihn';
  const group = (await db.collection('groups').doc(groupID).get()).data();

  const leaderboardData = {};
  const detailedLeaderboardData = {};

  const postsSnapshot = db
    .collection('groups')
    .doc(groupID)
    .collection('posts');
  postsSnapshot
    .get()
    .then(async resp => {
      const posts = [];
      resp.forEach(x => posts.push(x));
      for await (let postDoc of posts) {
        if (postDoc.data().type === 'assignment') {
          const problemsSnapshot = db
            .collection('groups')
            .doc(groupID)
            .collection('posts')
            .doc(postDoc.id)
            .collection('problems');
          await problemsSnapshot.get().then(async resp => {
            const problems = [];
            resp.forEach(x => problems.push(x));
            for await (let problemDoc of problems) {
              const submissionsSnapshot = db
                .collection('groups')
                .doc(groupID)
                .collection('posts')
                .doc(postDoc.id)
                .collection('problems')
                .doc(problemDoc.id)
                .collection('submissions')
                .orderBy('timestamp', 'asc');
              await submissionsSnapshot.get().then(resp => {
                const submissions = [];
                resp.forEach(x => submissions.push(x));
                for (let submissionDoc of submissions) {
                  const data = submissionDoc.data();
                  if (group.memberIds.includes(data.userId)) {
                    if (!leaderboardData.hasOwnProperty(data.userId)) {
                      leaderboardData[data.userId] = { totalPoints: 0 };
                      detailedLeaderboardData[data.userId] = {};
                    }
                    if (
                      !leaderboardData[data.userId].hasOwnProperty(postDoc.id)
                    ) {
                      leaderboardData[data.userId][postDoc.id] = {
                        totalPoints: 0,
                      };
                      detailedLeaderboardData[data.userId][postDoc.id] = {};
                    }
                    if (
                      detailedLeaderboardData[data.userId][postDoc.id][
                        data.problemId
                      ]?.bestScore ??
                      -1000 <= data.result * problemDoc.data().points
                    ) {
                      detailedLeaderboardData[data.userId][postDoc.id][
                        data.problemId
                      ] = {
                        bestScore: data.result * problemDoc.data().points,
                        bestScoreStatus: data.status,
                        bestScoreTimestamp: data.timestamp,
                        bestScoreSubmissionId: submissionDoc.id,
                      };
                    }
                    leaderboardData[data.userId][postDoc.id][
                      data.problemId
                    ] = Math.max(
                      data.result * problemDoc.data().points,
                      leaderboardData[data.userId][postDoc.id][
                        data.problemId
                      ] ?? 0
                    );
                    leaderboardData[data.userId][
                      postDoc.id
                    ].totalPoints = Object.keys(
                      leaderboardData[data.userId][postDoc.id]
                    )
                      .filter(x => x !== 'totalPoints')
                      .reduce(
                        (acc, cur) =>
                          acc + leaderboardData[data.userId][postDoc.id][cur],
                        0
                      );
                    leaderboardData[data.userId].totalPoints = Object.keys(
                      leaderboardData[data.userId]
                    )
                      .filter(x => x !== 'totalPoints')
                      .reduce(
                        (acc, cur) =>
                          acc + leaderboardData[data.userId][cur].totalPoints,
                        0
                      );
                  }
                }
              });
            }
          });
        }
      }
    })
    .then(async () => {
      async function deleteCollection(db, collectionPath, batchSize) {
        const collectionRef = db.collection(collectionPath);
        const query = collectionRef.orderBy('__name__').limit(batchSize);

        return new Promise((resolve, reject) => {
          deleteQueryBatch(db, query, resolve).catch(reject);
        });
      }

      async function deleteQueryBatch(db, query, resolve) {
        const snapshot = await query.get();

        const batchSize = snapshot.size;
        if (batchSize === 0) {
          // When there are no documents left, we are done
          resolve();
          return;
        }

        // Delete documents in a batch
        const batch = db.batch();
        snapshot.docs.forEach(doc => {
          batch.delete(doc.ref);
        });
        await batch.commit();

        // Recurse on the next process tick, to avoid
        // exploding the stack.
        process.nextTick(() => {
          deleteQueryBatch(db, query, resolve);
        });
      }

      await deleteCollection(db, `groups/${groupID}/leaderboard`, 500);

      const batch = db.batch();
      await Promise.all(
        Object.keys(leaderboardData).map(async userId => {
          const user = await admin.auth().getUser(userId);
          batch.set(
            db
              .collection('groups')
              .doc(groupID)
              .collection('leaderboard')
              .doc(userId),
            {
              ...leaderboardData[userId],
              details: detailedLeaderboardData[userId],
              userInfo: {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
              },
            }
          );
        })
      );
      await batch.commit();

      console.log(
        'Done! Updated ' + Object.keys(leaderboardData).length + ' users'
      );
    });
})();
