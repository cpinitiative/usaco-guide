'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.scheduledFirestoreExport = exports.getUsers = exports.incrementUsers = exports.submitProblemSuggestion = void 0;
const functions = __importStar(require('firebase-functions'));
const firestore_1 = __importDefault(require('@google-cloud/firestore'));
const firebase_admin_1 = __importDefault(require('firebase-admin'));
const core_1 = require('@octokit/core');
firebase_admin_1.default.initializeApp();
const problemSuggestionCodeowners = {
  general: ['thecodingwizard'],
  bronze: ['caoash'],
  silver: ['andrewwangva'],
  gold: ['caoash'],
  plat: ['nchn27'],
  adv: ['bqi343'],
};
exports.submitProblemSuggestion = functions.https.onCall(
  async (data, context) => {
    var _a, _b;
    if (!((_a = context.auth) === null || _a === void 0 ? void 0 : _a.uid)) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'You must be logged in to suggest a problem!'
      );
    }
    const submitterName = await firebase_admin_1.default
      .auth()
      .getUser(context.auth.uid)
      .then(userRecord => userRecord.displayName);
    const {
      name,
      moduleName,
      link,
      difficulty,
      tags,
      additionalNotes,
      problemTableLink,
      section,
    } = data;
    if (!name || !moduleName || !link || !problemTableLink || !section) {
      throw new functions.https.HttpsError(
        'failed-precondition',
        'One or more required parameters were not passed.'
      );
    }
    const octokit = new core_1.Octokit({
      auth: functions.config().problemsuggestion.issueapikey,
    });
    console.log({
      auth: functions.config().problemsuggestion.issueapikey,
    });
    const body =
      `*${submitterName}* (UID ${
        (_b = context.auth) === null || _b === void 0 ? void 0 : _b.uid
      }) suggested adding the problem [${name}](${link}) ` +
      `to the module [${moduleName}](${problemTableLink}).\n\n` +
      `**Difficulty**: ${difficulty}\n` +
      `**Tags**: ${tags}\n` +
      `**Additional Notes**:${
        additionalNotes ? '\n' + additionalNotes : ' None'
      }\n\n` +
      `*This report was automatically generated from a user submitted problem suggestion on the USACO guide.*`;
    const response = await octokit.request(
      'POST /repos/{owner}/{repo}/issues',
      {
        owner: 'cpinitiative',
        repo: 'usaco-guide',
        title: `Problem Suggestion: Add "${name}" to ${moduleName}`,
        body,
        labels: ['Problem Suggestion'],
        assignees: problemSuggestionCodeowners[section],
      }
    );
    return response.data.html_url;
  }
);
exports.incrementUsers = functions.auth.user().onCreate(() => {
  return firebase_admin_1.default
    .database()
    .ref('/num_users')
    .transaction(legacyUserCount => {
      return (legacyUserCount || 0) + 1;
    });
});
exports.getUsers = functions.https.onCall((data, context) => {
  var _a;
  const { users } = data;
  const callerUid =
    (_a = context.auth) === null || _a === void 0 ? void 0 : _a.uid;
  if (!callerUid || !users || users.length === 0) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function was not called with the correct data, or the caller is not logged in.'
    );
  }
  return firebase_admin_1.default
    .firestore()
    .collection('classes')
    .doc('permissions')
    .get()
    .then(snapshot => snapshot.data())
    .then(permissions => {
      var _a, _b;
      if (
        !((_a =
          permissions === null || permissions === void 0
            ? void 0
            : permissions.admins) === null || _a === void 0
          ? void 0
          : _a.includes(callerUid)) &&
        !((_b =
          permissions === null || permissions === void 0
            ? void 0
            : permissions.instructors) === null || _b === void 0
          ? void 0
          : _b.includes(callerUid))
      ) {
        throw new functions.https.HttpsError(
          'permission-denied',
          'Caller is not an admin or instructor.'
        );
      } else {
        return firebase_admin_1.default.auth().getUsers(users);
      }
    });
});
const backupsClient = new firestore_1.default.v1.FirestoreAdminClient();
exports.scheduledFirestoreExport = functions.pubsub
  .schedule('every 24 hours')
  .onRun(context => {
    const bucket = 'gs://backups.usaco.guide';
    const projectId = process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT;
    const databaseName = backupsClient.databasePath(projectId, '(default)');
    return backupsClient
      .exportDocuments({
        name: databaseName,
        outputUriPrefix: bucket,
        // Leave collectionIds empty to export all collections
        collectionIds: [],
      })
      .then(responses => {
        const response = responses[0];
        console.log(`Operation Name: ${response['name']}`);
      })
      .catch(err => {
        console.error(err);
        throw new Error('Export operation failed');
      });
  });
//# sourceMappingURL=index.js.map
