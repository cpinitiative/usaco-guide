import axios from 'axios';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import prettier from 'prettier';
import {
  autoGenerateSolutionMetadata,
  generateProblemUniqueId,
  ProblemMetadata,
  PROBLEM_DIFFICULTY_OPTIONS,
} from '../../models/problem';

const problemSuggestionReviewers = {
  general: [],
  bronze: [],
  silver: [],
  gold: [],
  plat: [],
  adv: [],
};

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const submitProblemSuggestion = functions.https.onCall(
  async (data, context) => {
    if (!context.auth?.uid) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'You must be logged in to suggest a problem!'
      );
    }
    const submitterName = await admin
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
      problemListName,
      source,
      filePath,
    } = data;
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

    // TODO: increase validation?
    if (filePath.indexOf('..') > -1) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'The filePath argument contained an unexpected value.'
      );
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
      difficulty,
      isStarred: false,
      tags: tagsArr,
      solutionMetadata: autoGenerateSolutionMetadata(source, name, link) || {
        kind: 'none',
      },
    };

    const body =
      `User \`${context.auth?.uid}\` suggested adding the problem [${name}](${link}) ` +
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
    const githubAPI = axios.create({
      baseURL: 'https://api.github.com',
      auth: {
        username: 'jeffkmeng',
        password: key,
      },
    });

    const masterRefsReq = await githubAPI.get(
      '/repos/cpinitiative/usaco-guide/git/refs/heads'
    );
    const masterRef = masterRefsReq.data.find(
      r => r.ref == 'refs/heads/master'
    );
    const masterHash = masterRef.object.sha;

    const branchNameBase = 'problem-suggestion/' + generatedProblemId;
    let increment = 0;
    let foundEmptyBranch = false;
    for (increment; increment < 5; increment++) {
      try {
        await githubAPI.get(
          `/repos/cpinitiative/usaco-guide/branches/${
            branchNameBase + (increment === 0 ? '' : '-' + increment)
          }`
        );
      } catch (error) {
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
    const branchName =
      branchNameBase + (increment === 0 ? '' : '-' + increment);
    await githubAPI.post('/repos/cpinitiative/usaco-guide/git/refs', {
      ref: 'refs/heads/' + branchName,
      sha: masterHash,
    });

    const oldFileDataReq = await githubAPI.get(
      `/repos/cpinitiative/usaco-guide/contents/content/${filePath.replace(
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
    parsedOldFileData[problemListName] = ([
      ...tableToEdit.map((el, i) => ({ index: i, data: el })),
      { index: tableToEdit.length, data: suggestedProblem },
    ] as { index: number; data: ProblemMetadata }[])
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
    const formattedNewContent = prettier.format(newContent, {
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
      `/repos/cpinitiative/usaco-guide/contents/content/${filePath.replace(
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
      '/repos/cpinitiative/usaco-guide/pulls',
      {
        head: branchName,
        base: 'master',
        maintainer_can_modify: true,
        title: `Problem Suggestion: Add "${name}" to ${moduleName}`,
        body: body,
      }
    );

    const reviewersReq = await githubAPI.get(
      `/repos/cpinitiative/usaco-guide/pulls/${createdPullRequestReq.data.number}/requested_reviewers`
    );

    const reviewersToRemove = reviewersReq.data.users
      .map(user => user.login)
      .filter(user => !problemSuggestionReviewers[section].includes(user));
    const keptReviewers = reviewersReq.data.users
      .map(user => user.login)
      .filter(user => problemSuggestionReviewers[section].includes(user));
    await githubAPI.delete(
      `/repos/cpinitiative/usaco-guide/pulls/${createdPullRequestReq.data.number}/requested_reviewers`,
      {
        data: {
          reviewers: reviewersToRemove,
          team_reviewers: reviewersReq.data.teams.map(team => team.slug),
        },
      }
    );
    if (
      problemSuggestionReviewers[section].filter(
        u => !keptReviewers.includes(u)
      ).length > 0
    ) {
      await githubAPI.post(
        `/repos/cpinitiative/usaco-guide/pulls/${createdPullRequestReq.data.number}/requested_reviewers`,
        {
          reviewers: problemSuggestionReviewers[section].filter(
            u => !keptReviewers.includes(u)
          ),
        }
      );
    }

    // post to /issues/ because github treats all PRs as issues, so the shared features between them (such as labels) use issue api
    await githubAPI.post(
      `/repos/cpinitiative/usaco-guide/issues/${createdPullRequestReq.data.number}/labels`,
      ['Problem Suggestion']
    );

    return createdPullRequestReq.data.html_url;
  }
);
export default submitProblemSuggestion;
