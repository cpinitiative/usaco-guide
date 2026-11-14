import admin from 'firebase-admin';
import { onDocumentUpdated } from 'firebase-functions/v2/firestore';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

// Keys on a leaderboard doc that aren't post IDs.
// Keep in sync with recalculateLeaderboard in submitToProblem.ts
const NON_POST_KEYS = new Set(['totalPoints', 'details', 'userInfo']);

/**
 * Removes the points a member earned from a deleted post (or a single deleted
 * problem within a post) from every leaderboard entry in the group, then
 * recomputes the affected totals.
 *
 * Leaderboard entries live at groups/{groupId}/leaderboard/{uid} and look like
 * { [postId]: { [problemId]: points, totalPoints }, totalPoints, details, userInfo }.
 * See https://github.com/cpinitiative/usaco-guide/issues/3123
 */
async function removePointsFromLeaderboard(
  groupId: string,
  postId: string,
  problemId?: string
) {
  const leaderboardRef = admin
    .firestore()
    .collection('groups')
    .doc(groupId)
    .collection('leaderboard');
  const entries = await leaderboardRef.get();

  await Promise.all(
    entries.docs.map(entry =>
      admin.firestore().runTransaction(async transaction => {
        const snapshot = await transaction.get(entry.ref);
        const data = snapshot.data();
        if (!data || typeof data[postId] !== 'object' || data[postId] === null)
          return;
        if (problemId !== undefined && !(problemId in data[postId])) return;

        const updates: Record<string, unknown> = {};
        const postScores: Record<string, number> = { ...data[postId] };

        if (problemId === undefined) {
          delete data[postId];
          updates[postId] = admin.firestore.FieldValue.delete();
          updates[`details.${postId}`] = admin.firestore.FieldValue.delete();
        } else {
          delete postScores[problemId];
          postScores.totalPoints = Object.keys(postScores)
            .filter(x => x !== 'totalPoints')
            .reduce((acc, cur) => acc + (postScores[cur] || 0), 0);
          data[postId] = postScores;
          updates[`${postId}.${problemId}`] =
            admin.firestore.FieldValue.delete();
          updates[`${postId}.totalPoints`] = postScores.totalPoints;
          updates[`details.${postId}.${problemId}`] =
            admin.firestore.FieldValue.delete();
        }

        updates.totalPoints = Object.keys(data)
          .filter(x => !NON_POST_KEYS.has(x))
          .reduce((acc, cur) => acc + (data[cur]?.totalPoints || 0), 0);

        transaction.update(entry.ref, updates);
      })
    )
  );
}

export const onPostDeleted = onDocumentUpdated(
  'groups/{groupId}/posts/{postId}',
  async event => {
    const before = event.data?.before.data();
    const after = event.data?.after.data();
    if (!after?.isDeleted || before?.isDeleted) return;

    const { groupId, postId } = event.params;
    await removePointsFromLeaderboard(groupId, postId);
  }
);

export const onProblemDeleted = onDocumentUpdated(
  'groups/{groupId}/posts/{postId}/problems/{problemId}',
  async event => {
    const before = event.data?.before.data();
    const after = event.data?.after.data();
    if (!after?.isDeleted || before?.isDeleted) return;

    const { groupId, postId, problemId } = event.params;
    await removePointsFromLeaderboard(groupId, postId, problemId);
  }
);
