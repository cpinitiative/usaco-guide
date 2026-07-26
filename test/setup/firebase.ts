import { initializeApp, cert, type ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// Initialize Firebase Admin SDK to connect to the emulators.
// We assume the emulators are already running on the default ports.
// See firebase.json for the ports.

// In a test environment, we can use a service account for the admin SDK.
// Since we are using the emulator, we can use a dummy service account.
const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID || 'demo-project',
  // The following values are not used in the emulator, but are required.
  privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD...\\n-----END PRIVATE KEY-----\n',
  clientEmail: 'firebase-adminsdk-xyz@demo-project.iam.gserviceaccount.com',
};

// Initialize the app with a service account, granting admin privileges.
export const adminApp = initializeApp({
  credential: cert(serviceAccount),
  // The Firebase Admin SDK will automatically detect the emulator host
  // if the FIREBASE_EMULATOR_HOST environment variable is set.
  // However, we can also set it explicitly via the databaseURL and other settings.
  // We'll rely on the environment variables set by the emulator.
});

// Export Firestore and Auth instances for use in tests.
export const db = getFirestore(adminApp);
export const auth = getAuth(adminApp);

// Also, we can initialize the Firebase JS SDK for client-side testing if needed.
// But for now, we only need the admin SDK for testing functions that use admin.

// Note: The functions themselves should be initialized to use the emulators.
// We can set the environment variables for the functions in the test setup.
// However, the functions are deployed separately. In the emulator, the functions
// will automatically connect to the emulators for Firestore and Auth if they are
// running on the same machine and the functions are started via the emulator.
// We are relying on the fact that when we run the functions via the emulator,
// they will use the emulated Firestore and Auth.

// We do not need to initialize the Firebase JS SDK here.