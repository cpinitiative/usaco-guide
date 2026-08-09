# Firebase Cloud Functions API

This document describes the Firebase Cloud Functions exposed by the project
under `src/functions/src`. It explains each function, usage details, security
assumptions, and the developer's responsibilities when maintaining or extending
the API.

## Overview

The Firebase functions are mostly `https.onCall` callable functions, with
additional triggers for Firestore writes, scheduled execution, and auth user
creation.

They are used for admin operations, group management and join logic, user data
access, problem suggestion automation, contact form support, and scheduled
backups.

The main function exports are found in `src/functions/src/index.ts`.

## Function list

- `getUsers`
- `submitContactForm`
- `submitProblemSuggestion`
- `setUserClaims`
- `incrementUsers`
- `scheduledFirestoreExport`
- Group functions:
  - `getJoinKeyInfo`
  - `getMembers`
  - `join`
  - `leave`
  - `removeMember`
  - `submitToProblem`
  - `updateMemberPermissions`

---

## 1. getUsers

### File

- `src/functions/src/getUsers.ts`

### Purpose

Returns Firebase Authentication user records for a list of requested users. This
is primarily used by admin or instructor-facing pages that need to inspect user
details.

### Trigger type

- `functions.https.onCall`

### Input shape

```ts
{
	users: Array<{ uid: string } | { email: string }>;
}
```

### Behavior

- Validates request and checks that the caller is authenticated.
- Checks whether the caller is an admin or instructor by looking at Firestore
  permissions.
- Fetches users using `admin.auth().getUsers()` in batches of up to 100.
- Returns a combined result object:

```ts
{
  notFound: admin.auth.UserIdentifier[];
  users: admin.auth.UserRecord[];
}
```

### Security

- Caller must be authenticated.
- Caller must be an admin or instructor.
- If the caller is unauthorized, the function throws `permission-denied`.

### Notes

- This is not a public REST endpoint; it is callable from client SDKs.
- The function uses `admin.auth().getUsers()` and may be rate-limited by
  Firebase.

---

## 2. submitContactForm

### File

- `src/functions/src/submitContactForm.ts`

### Purpose

Handles contact form submissions, posts them to GitHub Issues, and saves them to
Firestore.

### Trigger type

- `functions.https.onCall`

### Input shape

```ts
{
  name: string;
  email: string;
  topic: string;
  message: string;
  moduleName?: string;
  url?: string;
  lang?: string;
}
```

### Behavior

- Validates `name`, `email`, `topic`, and `message`.
- Builds a GitHub issue title and body.
- Uses GitHub API authentication via
  `functions.config().contactform.issueapikey`.
- Creates a GitHub issue in `cpinitiative/usaco-guide`.
- Writes the submission into Firestore collection `contactFormSubmissions` with
  the created issue number.
- Returns the issue HTML URL.

### Security

- No authenticated user check is enforced.
- The function is likely exposed to the public client.
- The GitHub token is stored in Firebase functions config, not in client code.

### Notes

- Topic-based issue labels are applied automatically.
- The function is intended for website feedback, bug reports, and content
  suggestions.

---

## 3. submitProblemSuggestion

### File

- `src/functions/src/submitProblemSuggestion.ts`

### Purpose

Allows authenticated users to suggest new problems by creating an automatic
GitHub PR with updated JSON content.

### Trigger type

- `functions.https.onCall`

### Input shape

```ts
{
  name: string;
  moduleName: string;
  link: string;
  difficulty: string;
  tags: string;
  additionalNotes?: string;
  problemTableLink: string;
  section: string;
  problemListName: string;
  source: string;
  filePath: string;
}
```

### Behavior

- Requires authenticated user (`request.auth.uid`).
- Extracts the submitter’s display name from Firebase Auth.
- Validates required arguments.
- Generates a unique problem ID using `generateProblemUniqueId`.
- Builds a suggested problem object and inserts it into the target module’s
  `.problems.json` content.
- Uses the GitHub API to:
  - create a branch
  - read an existing `.problems.json` file
  - update the file with the new problem
  - create a pull request
- Returns the GitHub pull request creation result.

### Security

- Must be called by an authenticated user.
- It uses the GitHub token from
  `functions.config().problemsuggestion.issueapikey`.

### Notes

- If the problem source is `other`, the function inserts a warning into the PR
  description.
- The function retries branch names until a unique one is found.
- This function performs live GitHub operations and is therefore sensitive to
  API rate limits and permission issues.

---

## 4. setUserClaims

### File

- `src/functions/src/setUserClaims.ts`

### Purpose

Sets custom claims on Firebase Auth users, optionally merging with existing
claims.

### Trigger type

- `functions.https.onCall`

### Input shape

```ts
{
  target: string;
  claims: Record<string, any>;
  merge?: boolean;
}
```

### Behavior

- Validates the caller is authenticated.
- Fetches the caller’s user record.
- Ensures the caller is admin by checking `caller.customClaims.isAdmin` or
  explicit UID allowlist.
- Sets custom claims on the target user.
- If `merge` is omitted or true, existing claims are merged with the new claims.

### Security

- Admin-only.
- Throws `permission-denied` for non-admin callers.

### Notes

- This is a sensitive operation: only use it when managing privileged users.
- The admin check includes a fallback hard-coded allowlist of UIDs.

---

## 5. incrementUsers

### File

- `src/functions/src/incrementUsers.ts`

### Purpose

Keeps a running count of registered users in Realtime Database.

### Trigger type

- `functions.auth.user().onCreate`

### Behavior

- Triggers whenever a Firebase Auth user is created.
- Runs a transaction on Realtime Database path `/num_users`.
- Increments the count by 1.

### Security

- Triggered automatically by Firebase Auth; no client input.

### Notes

- This is a legacy style function using RTDB rather than Firestore.
- Ensure that user creation flows converge correctly if multiple users are
  created in parallel.

---

## 6. scheduledFirestoreExport

### File

- `src/functions/src/backups.ts`

### Purpose

Creates a daily Firestore export to a Google Cloud Storage bucket.

### Trigger type

- `onSchedule` scheduler function (`every 24 hours`)

### Behavior

- Runs on a daily schedule.
- Exports all Firestore collections to `gs://backups.usaco.guide`.
- Uses `FirestoreAdminClient.exportDocuments()`.

### Environment dependencies

- `GCP_PROJECT` or `GCLOUD_PROJECT` environment variable
- Write access to the configured Cloud Storage bucket

### Notes

- This is a maintenance function, not a client-facing API.
- Check scheduler logs if exports fail.

---

## 7. Group Management APIs

This section covers group-related functions used by group features in the app.

### 7.1 getJoinKeyInfo

- File: `src/functions/src/groups/getJoinKeyInfo.ts`
- Purpose: validate a group join key and return the linked group’s name.
- Trigger: `functions.https.onCall`
- Input: `{ key: string }`
- Output:
  `{ success: boolean; name?: string; errorCode?: string; message?: string }`

### 7.2 getMembers

- File: `src/functions/src/groups/getMembers.ts`
- Purpose: return group member details for a given group.
- Trigger: `functions.https.onCall`
- Input: `{ groupId: string }`
- Output: user profiles of members, admins, and owners.
- Security: any member, admin, or owner of the group can request this
  information.

### 7.3 join

- File: `src/functions/src/groups/join.ts`
- Purpose: adds the current authenticated user to a group via join key.
- Trigger: `functions.https.onCall`
- Input: `{ key: string }`
- Output: success state and group ID.
- Notes: updates both the group document and the join link usage counters.

### 7.4 leave

- File: `src/functions/src/groups/leave.ts`
- Purpose: removes the current user from a group.
- Trigger: `functions.https.onCall`
- Input: `{ groupId: string }`
- Output: success state.
- Notes: prevents the last owner from leaving if they are sole owner.

### 7.5 removeMember

- File: `src/functions/src/groups/removeMember.ts`
- Purpose: remove a member from a group.
- Trigger: `functions.https.onCall`
- Input: `{ groupId: string; targetUid: string }`
- Output: success state.
- Security: only the owner can remove members.

### 7.6 submitToProblem

- File: `src/functions/src/groups/submitToProblem.ts`
- Purpose: listen for submission updates in a group problem and recalculate
  leaderboard data when the score changes.
- Trigger: Firestore event trigger (`onDocumentWritten`) on the submissions
  path.
- Input: none directly; it reacts to a submission document write.
- Output: none directly; it updates the relevant group leaderboard document.
- Notes: this is not a callable endpoint. It only processes submissions whose
  type is `Online Judge` with a problem ID, or `submission-link`, and only when
  the score changes.

### 7.7 updateMemberPermissions

- File: `src/functions/src/groups/updateMemberPermissions.ts`
- Purpose: change a member’s group role.
- Trigger: `functions.https.onCall`
- Input:
  `{ groupId: string; targetUid: string; newPermissionLevel: 'OWNER' | 'ADMIN' | 'MEMBER' }`
- Output: success state or error code.
- Security: only the owner can change permissions.

---

## Developer guidance

### Adding or modifying functions

- Keep business logic out of the route file when possible.
- New callable functions should validate input strictly.
- Prefer throwing `functions.https.HttpsError` for client-facing validation
  errors.
- Avoid exposing sensitive environment secrets in returned payloads.

### Deploy notes

- The functions code is under `src/functions/src`; deploy from the project’s
  Firebase functions config.
- Ensure `firebase-admin` initialization uses a single app instance.
- Confirm `functions.config().contactform.issueapikey` and
  `functions.config().problemsuggestion.issueapikey` are configured in Firebase.

### Security review

- Review admin-only checks carefully.
- Do not add new `https.onCall` functions without explicit auth or proper
  security rules.
- Be careful with any public-facing endpoint that writes to GitHub or Firestore.

### Logging and debugging

- Most functions log errors using `console.error`.
- For API errors or GitHub failures, inspect Firebase logs.
- Make sure any new error handling preserves enough information for debugging
  without leaking user data.

## Summary

The Firebase functions provide the backend API for:

- user administration
- contact form and issue creation
- problem suggestion automation
- group join/leave/permission flows
- scheduled Firestore backups
- user count tracking

These are the core backend APIs for the collaboration and admin features in the
app.
