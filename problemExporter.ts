import allProblems, { solIdToProblemURLMap } from './problemsList';
import * as fs from 'fs';
import {
  getProblemURL,
  Problem,
  ProblemDifficulty,
} from './src/models/problem';
import extraProblems from './solutions/1_extra_usaco_probs';
const files = {};

const input = fs.readFileSync('./src/redirects.txt');

async function main() {
  await Promise.all(
    ['1_General', '2_Bronze', '3_Silver', '4_Gold', '5_Plat', '6_Advanced'].map(
      folder =>
        new Promise<void>((resolve, reject) => {
          const promises = [];
          fs.readdir('./content/' + folder, (err, filesArr) => {
            files[folder] = filesArr.map(name => name.replace(/\.mdx$/g, ''));
            Promise.all(promises).then(() => {
              resolve();
            });
          });
        })
    )
  );
  const fileWritePromises = [];
  const oldProblemIdToNewProblemIdMap = {};
  const newProblemIdToOldProblemIdMap = {};
  allProblems.data.allMdx.edges.forEach(({ node: module }) => {
    const { id, title } = module.frontmatter;
    const divisionMap = {
      general: '1_General',
      bronze: '2_Bronze',
      silver: '3_Silver',
      gold: '4_Gold',
      plat: '5_Plat',
      adv: '6_Advanced',
    };
    const division = module.fields.division;
    const problems = module.problems;

    if (!problems) return;
    const divisionFolder = divisionMap[division];
    let moduleFileName = files[divisionFolder].find(
      // find ignoring case
      name =>
        name.toLowerCase().replace(/[\- _]/g, '') ===
        id.toLowerCase().replace(/[\- _]/g, '')
    );
    if (!moduleFileName) {
      if (id === 'faster-hashmap') {
        moduleFileName = 'Faster_Hash';
      } else if (id === 'knapsack') {
        moduleFileName = 'Knapsack_DP';
      } else if (id === 'ff') {
        moduleFileName = 'Flood_Fill';
      } else if (id === 'lambda') {
        moduleFileName = 'Lambdas';
      } else if (id === 'oly') {
        moduleFileName = 'Olympiads';
      } else if (id === 'resources-learning-to-code') {
        moduleFileName = 'Learning_to_Code';
      } else if (id === 'resources-usa') {
        moduleFileName = 'Olympiads';
      } else {
        console.log({
          division,
          divisionFolder,
          moduleFileName,
          id,
          firstProblem: problems ? problems[0] : null,
          title,
        });
        throw new Error("couldn't locate problem.");
      }
    }

    extraProblems.forEach((problem: Record<string, any>) => {
      const prob = new Problem(
        problem.source,
        problem.name,
        problem.id,
        problem.difficulty as any,
        problem.starred,
        problem.tags,
        problem.solID,
        problem.solQuality as any
      );
      if (prob.solutionMetadata?.kind === 'in-module') {
        throw new Error('???');
      }
      let el = {
        uniqueId: prob.uniqueID,
        ___legacyUniqueId: problem.uniqueID,
        name: prob.name,
        url: prob.url,
        source: prob.source,
        difficulty: prob.difficulty,
        isStarred: prob.starred,
        tags: prob.tags,
        solutionMetadata: prob.solutionMetadata || {
          kind: 'none',
        },
        solId: problem.solID,
        tableId: problem.tableID,
      };

      const { tableId, ___legacyUniqueId, solId, ...problemData } = el;
      if (solId) {
        const oldUniqueId = solIdToProblemURLMap[solId];
        const newUniqueId = problemData.uniqueId;
        console.log(
          oldUniqueId +
            ' ==> ' +
            newUniqueId +
            (oldUniqueId !== newUniqueId ? '[CHANGE]' : '')
        );
        if (problemData.solutionMetadata.kind === 'internal') return;

        oldProblemIdToNewProblemIdMap[solId] = newUniqueId;
        newProblemIdToOldProblemIdMap[newUniqueId] = solId;
      }
    });

    problems.forEach((el: Record<string, any>) => {
      const { tableId, ___legacyUniqueId, solId, ...problemData } = el;
      if (solId) {
        const oldUniqueId = solIdToProblemURLMap[solId];
        const newUniqueId = problemData.uniqueId;
        console.log(
          oldUniqueId +
            ' ==> ' +
            newUniqueId +
            (oldUniqueId !== newUniqueId ? '[CHANGE]' : '')
        );
        // console.log(problemData)

        if (problemData.solutionMetadata.kind !== 'internal') return;

        oldProblemIdToNewProblemIdMap[solId] = getProblemURL(
          problemData as any
        ).replace('/problems/', '');
      }
    });

    console.log(oldProblemIdToNewProblemIdMap);
    fs.writeFileSync(
      './src/redirects.txt',
      `# FROM-URL\tTO-URL\n` +
        Object.keys(oldProblemIdToNewProblemIdMap)
          .map(
            key =>
              `/solutions/${key}\t/problems/solution/${oldProblemIdToNewProblemIdMap[key]}`
          )
          .join('\n')
    );
  });
}
main().then(() => {
  console.log('DONE');
});
