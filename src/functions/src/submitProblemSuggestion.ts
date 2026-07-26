import axios from 'axios';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import prettier from 'prettier';
import { GITHUB_DEFAULT_BRANCH, githubApiBase } from '../../config';
import {
  autoGenerateSolutionMetadata,
  generateProblemUniqueId,
  PROBLEM_DIFFICULTY_OPTIONS,
  ProblemDifficulty,
  ProblemMetadata,
} from '../../models/problem';

const problemSuggestionReviewers: Record<Section, string[]> = {
  general: [],
  bronze: [],
  silver: [],
  gold: [],
  plat: [],
  adv: [],
};
type Section = 'general' | 'bronze' | 'silver' | 'gold' | 'plat' | 'adv';

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const submitProblemSuggestion = functions.https.onCall(async request => {
  if (!request.auth?.uid) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'You must be logged in to suggest a problem!'
    );
  }
  // const submitterName = await admin
  //   .auth()
  //   .getUser(request.auth.uid)
  //   .then(userRecord => userRecord.displayName);

  const {
    name,
    moduleName,
    link,
    difficulty,
    tags,
    additionalNotes,
    problemTableLink,
    section,
    problemListName,
    source,
    filePath,
  } = request.data as {
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
  };
  if (
    !name ||
    !moduleName ||
    !link ||
    !problemTableLink ||
    !section ||
    !filePath
  ) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'One or more required arguments were not passed.'
    );
  }

  if (filePath.indexOf('..') > -1) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The filePath argument contained an unexpected value.'
    );
  }

  // Stricter path validation: only allow alphanumeric, underscores, hyphens, slashes, dots for extension
  if (!/^[\w\-/]+\.mdx$/.test(filePath)) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The filePath argument contained invalid characters.'
    );
  }

  // Validate link is a proper HTTP/HTTPS URL
  try {
    const parsedLink = new URL(link);
    if (parsedLink.protocol !== 'http:' && parsedLink.protocol !== 'https:') {
      throw new Error('Only http/https URLs are allowed');
    }
  } catch {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The link argument must be a valid HTTP/HTTPS URL.'
    );
  }

  // Enforce field length limits
  if (name.length > 500) {
    throw new functions.https.HttpsError('invalid-argument', 'Problem name is too long.');
  }
  if (additionalNotes && additionalNotes.length > 5000) {
    throw new functions.https.HttpsError('invalid-argument', 'Additional notes are too long (max 5,000 characters).');
  }
  const tagsArr = tags
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0);
  const generatedProblemId = generateProblemUniqueId(source, name, link);
  const suggestedProblem: ProblemMetadata = {
    uniqueId: generatedProblemId,
    name,
    url: link,
    source,
    difficulty: difficulty as ProblemDifficulty,
    isStarred: false,
    tags: tagsArr,
    solutionMetadata: autoGenerateSolutionMetadata(source, name, link) || {
      kind: 'none',
    },
  };

  const body =
    `User \`${request.auth?.uid}\` suggested adding the problem [${name}](${link}) ` +
    `to the \`${problemListName}\` table of the module [${moduleName}](${problemTableLink}).\n\n` +
    `**Automatically Generated JSON:**\n` +
    '```json\n' +
    JSON.stringify(suggestedProblem, null, 2) +
    '\n```\n' +
    `**Additional Notes**:${
      additionalNotes ? '\n' + additionalNotes : ' None'
    }\n\n` +
    (source === 'other'
      ? `**Warning: The source of this problem is currently set to \`other\`. You must correct the problem source and the solution before merging.**\n`
      : '') +
    `*This PR was automatically generated from a user-submitted problem suggestion on the USACO guide.*`;
  const key = functions.config().problemsuggestion.issueapikey;
  if (!key) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Missing GitHub API key configuration'
    );
  }
  const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `token ${key}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });

  const masterRefsReq = await githubAPI.get(
    `${githubApiBase()}/git/refs/heads`
  );
  const masterRef = (masterRefsReq.data as any[]).find(
    (r: any) => r.ref === 'refs/heads/' + GITHUB_DEFAULT_BRANCH
  );
  if (!masterRef) {
    throw new functions.https.HttpsError(
      'not-found',
      `Default branch "${GITHUB_DEFAULT_BRANCH}" not found in repository refs.`
    );
  }
  const masterHash = masterRef.object.sha;

  const branchNameBase = 'problem-suggestion/' + generatedProblemId;
  let increment = 0;
  let foundEmptyBranch = false;
  for (increment; increment < 5; increment++) {
    try {
      await githubAPI.get(
        `${githubApiBase()}/branches/${
          branchNameBase + (increment === 0 ? '' : '-' + increment)
        }`
      );
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        foundEmptyBranch = true;
        break;
      }
    }
  }
  if (!foundEmptyBranch) {
    throw new functions.https.HttpsError(
      'already-exists',
      'More than five suggestions with the same generated problem ID already exist.'
    );
  }
  const branchName = branchNameBase + (increment === 0 ? '' : '-' + increment);
  await githubAPI.post(`${githubApiBase()}/git/refs`, {
    ref: 'refs/heads/' + branchName,
    sha: masterHash,
  });

  const oldFileDataReq = await githubAPI.get(
    `${githubApiBase()}/contents/content/${filePath.replace(
      /\.mdx$/,
      '.problems.json'
    )}?ref=${branchName}`
  );
  const oldFileHash = oldFileDataReq.data.sha;
  const oldFileData = Buffer.from(
    oldFileDataReq.data.content,
    'base64'
  ).toString();

  const parsedOldFileData = JSON.parse(oldFileData);
  const tableToEdit = parsedOldFileData[problemListName];

  // sort the table such that the suggested problem is inserted below the bottommost
  // problem with the same difficulty as the suggested problem.
  parsedOldFileData[problemListName] = (
    [
      ...tableToEdit.map((el: any, i: number) => ({ index: i, data: el })),
      { index: tableToEdit.length, data: suggestedProblem },
    ] as { index: number; data: ProblemMetadata }[]
  )
    .sort((a, b) => {
      const difficultyDiff =
        PROBLEM_DIFFICULTY_OPTIONS.indexOf(a.data.difficulty) -
        PROBLEM_DIFFICULTY_OPTIONS.indexOf(b.data.difficulty);
      return difficultyDiff !== 0 ? difficultyDiff : a.index - b.index;
    })
    .map(prob => prob.data);

  // Use pretty JSON.stringify because it inserts a newline before all objects, which forces prettier to then convert
  // these objects into multiline ones.
  const newContent = JSON.stringify(parsedOldFileData, null, 2) + '\n';
  const formattedNewContent = await prettier.format(newContent, {
    endOfLine: 'lf',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'es5',
    arrowParens: 'avoid',
    parser: 'json',
  });

  await githubAPI.put(
    `${githubApiBase()}/contents/content/${filePath.replace(
      /\.mdx$/,
      '.problems.json'
    )}`,
    {
      content: Buffer.from(formattedNewContent).toString('base64'),
      message: `Feat: add suggested problem '${name}'`,
      branch: branchName,
      sha: oldFileHash,
    }
  );

  const createdPullRequestReq = await githubAPI.post(
    `${githubApiBase()}/pulls`,
    {
      head: branchName,
      base: GITHUB_DEFAULT_BRANCH,
      maintainer_can_modify: true,
      title: `Problem Suggestion: Add "${name}" to ${moduleName}`,
      body: body,
    }
  );

  const useProblemSuggestionReviewers = false;
  if (useProblemSuggestionReviewers) {
    const reviewersReq = await githubAPI.get(
      `${githubApiBase()}/pulls/${createdPullRequestReq.data.number}/requested_reviewers`
    );
    const reviewersToRemove = reviewersReq.data.users
      .map((user: any) => user.login)
      .filter((user: string) => !(problemSuggestionReviewers as Record<string, string[]>)[section].includes(user));
    const keptReviewers = reviewersReq.data.users
      .map((user: any) => user.login)
      .filter((user: string) => (problemSuggestionReviewers as Record<string, string[]>)[section].includes(user));
    await githubAPI.delete(
      `${githubApiBase()}/pulls/${createdPullRequestReq.data.number}/requested_reviewers`,
      {
        data: {
          reviewers: reviewersToRemove,
          team_reviewers: reviewersReq.data.teams.map((team: any) => team.slug),
        },
      }
    );
    if (
      (problemSuggestionReviewers as Record<string, string[]>)[section].filter(
        (u: string) => !keptReviewers.includes(u)
      ).length > 0
    ) {
      await githubAPI.post(
        `${githubApiBase()}/pulls/${createdPullRequestReq.data.number}/requested_reviewers`,
        {
          reviewers: (problemSuggestionReviewers as Record<string, string[]>)[section].filter(
            (u: string) => !keptReviewers.includes(u)
          ),
        }
      );
    }
  }

  // post to /issues/ because github treats all PRs as issues, so the shared features between them (such as labels) use issue api
  await githubAPI.post(
    `${githubApiBase()}/issues/${createdPullRequestReq.data.number}/labels`,
    ['Problem Suggestion']
  );

  return createdPullRequestReq.data.html_url;
});
export default submitProblemSuggestion;
