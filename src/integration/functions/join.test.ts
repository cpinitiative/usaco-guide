import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { join } from '@/functions/src/groups/join';
import { getApps } from 'firebase-admin/app';

// Initialize admin app to connect to emulators
let adminApp: any;
let db: any;
let auth: any;

// We'll use a test project ID
const PROJECT_ID = 'usaco-guide-test';

// Set up the admin SDK to point to the emulators
beforeAll(() => {
  // If there's already an app, use it
  if (getApps().length) {
    adminApp = getApps()[0];
  } else {
    adminApp = initializeApp({
      projectId: PROJECT_ID,
    });
  }

  // Point to the emulators (assuming they are running on localhost:8080 for Firestore and localhost:9099 for Auth)
  // These are the default ports from firebase.json
  // Note: The admin SDK will automatically detect the emulators if the following env vars are set:
  // FIREBASE_AUTH_EMULATOR_HOST, FIREBASE_FIRESTORE_EMULATOR_HOST, etc.
  // We'll set them here to be safe.
  process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099';
  process.env.FIREBASE_FIRESTORE_EMULATOR_HOST = 'localhost:8080';
  process.env.FIREBASE_FUNCTIONS_EMULATOR_HOST = 'localhost:5001';

  db = getFirestore(adminApp);
  auth = getAuth(adminApp);
});

afterAll(async () => {
  // Clean up: delete any test data we created
  // We could delete the entire database, but that's heavy.
  // Instead, we'll delete documents we know we created.
  // For simplicity, we'll just delete the test collection we use.
  // But note: we are sharing the emulator instance, so we should clean up.
  // We'll delete the 'groups' collection and 'users' collection for our test user IDs.
  // However, to avoid interfering with other tests, we'll use a unique test prefix.
  // We'll do the cleanup in afterEach instead.
  // For now, we'll just delete the app.
  if (adminApp) {
    await adminApp.delete();
  }
});

beforeEach(async () => {
  // Clear the Firestore database between tests
  // We'll delete all documents in the collections we use
  const collections = ['groups', 'users', 'groupJoinLinks'];
  const promises = collections.map(async (col) => {
    const snapshot = await db.collection(col).get();
    const batch = db.batch();
    snapshot.docs.forEach((doc: any) => batch.delete(doc.ref));
    await batch.commit();
  });
  await Promise.all(promises);
});

afterEach(async () => {
  // Additional cleanup if needed
});

describe('Join function', () => {
  it('should allow a user to join a group using a valid join link', async () => {
    // Arrange: Create a group and a join link
    const groupId = 'test-group-id';
    const joinLinkId = 'test-join-link-id';
    const userId = 'test-user-id';

    // Create a group document
    await db.collection('groups').doc(groupId).set({
      name: 'Test Group',
      ownerIds: [userId], // The user creating the group is the owner
      adminIds: [],
      memberIds: [],
      createdAt: FieldValue.serverTimestamp(),
    });

    // Create a join link document
    await db.collection('groupJoinLinks').doc(joinLinkId).set({
      groupId,
      createdBy: userId,
      expiresAt: Date.now() + 1000 * 60 * 60, // 1 hour from now
      maxUses: 10,
      currentUses: 0,
    });

    // Act: Call the join function
    // The join function expects: { groupJoinLinkId: string }
    const result = await join({
      groupJoinLinkId: joinLinkId,
    }, {
      auth: {
        uid: userId,
        // We can also add custom claims if needed
        token: {
          // For example, if the function checks for isAdmin, etc.
        }
      } as any,
    });

    // Assert: The function should return successfully
    expect(result).toBeDefined();

    // Also, we should check that the user was added to the group's memberIds
    const groupDoc = await db.collection('groups').doc(groupId).get();
    const groupData = groupDoc.data();
    expect(groupData?.memberIds).toContain(userId);

    // And the join link's currentUses should be incremented
    const joinLinkDoc = await db.collection('groupJoinLinks').doc(joinLinkId).get();
    const joinLinkData = joinLinkDoc.data();
    expect(joinLinkData?.currentUses).toBe(1);
  });
});