import { defineSecret } from 'firebase-functions/params';

// Single GitHub token used to open issues/PRs on this repo, stored in
// Secret Manager rather than the deprecated Runtime Config
// (functions.config()). Set it with:
//   firebase functions:secrets:set GITHUB_ISSUE_TOKEN
export const githubIssueToken = defineSecret('GITHUB_ISSUE_TOKEN');
