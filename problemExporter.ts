import allProblems, { solIdToProblemURLMap } from './problemsList';
import * as fs from 'fs';
import { Problem, ProblemDifficulty } from './src/models/problem';
import extraProblems from './solutions/1_extra_usaco_probs';
const files = {};
async function main() {
  await Promise.all(
    ['1_General', '2_Bronze', '3_Silver', '4_Gold', '5_Plat', '6_Advanced'].map(
      folder =>
        new Promise<void>((resolve, reject) => {
          const promises = [];
          fs.readdir('./content/' + folder, (err, filesArr) => {
            filesArr.forEach(name => {
              if (name.slice(-5) === '.json') {
                promises.push(
                  new Promise<void>((res, rej) =>
                    fs.unlink(`./content/${folder}/${name}`, () => {
                      res();
                    })
                  )
                );
              }
            });
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
    extraProblems
      .map(prob => {
        return {
          uniqueId: prob.uniqueID,
          name: prob.name,
          url: prob.url,
          source: prob.source,
          difficulty: prob.difficulty,
          isStarred: prob.starred,
          tags: prob.tags,
          solutionMetadata: prob.solutionMetadata || {
            kind: 'none',
          },
          solId: prob.solID,
        };
      })
      .forEach((el: Record<string, any>) => {
        const { tableID, ___legacyUniqueId, ...problemData } = el;
        if (problemData.solId) {
          const oldUniqueId = solIdToProblemURLMap[problemData.solId];
          const newUniqueId = problemData.uniqueId;
          console.log(
            oldUniqueId +
              ' ==> ' +
              newUniqueId +
              (oldUniqueId !== newUniqueId ? '[CHANGE]' : '')
          );

          oldProblemIdToNewProblemIdMap[oldUniqueId] = newUniqueId;
          newProblemIdToOldProblemIdMap[newUniqueId] = oldUniqueId;
        }
      });
    fileWritePromises.push(
      new Promise<void>((resolve, reject) => {
        fs.writeFile(
          `./content/${divisionFolder}/${moduleFileName}.json`,
          JSON.stringify(
            problems.reduce(
              (acc: Record<string, any>, el: Record<string, any>) => {
                const { tableID, ___legacyUniqueId, ...problemData } = el;
                if (problemData.solId) {
                  const oldUniqueId = solIdToProblemURLMap[problemData.solId];
                  const newUniqueId = problemData.uniqueId;
                  console.log(
                    oldUniqueId +
                      ' ==> ' +
                      newUniqueId +
                      (oldUniqueId !== newUniqueId ? '[CHANGE]' : '')
                  );

                  oldProblemIdToNewProblemIdMap[
                    problemData.solId
                  ] = newUniqueId;
                  newProblemIdToOldProblemIdMap[newUniqueId] =
                    problemData.solId;
                }
                if (acc[tableID]) {
                  acc[tableID].push(problemData);
                } else {
                  acc[tableID] = [problemData];
                }
                return acc;
              },
              {
                MODULE_ID: id,
              }
            ),
            null,
            '\t'
          ),
          () => resolve()
        );
      })
    );
  });
  await Promise.all(fileWritePromises);
  fs.writeFileSync(
    './oldToNewProblemId.json',
    JSON.stringify(oldProblemIdToNewProblemIdMap, null, 2)
  );
  fs.writeFileSync(
    './newToOldProblemId.json',
    JSON.stringify(newProblemIdToOldProblemIdMap, null, 2)
  );
  fs.writeFileSync(
    './src/redirects.txt',
    `# FROM-URL\tTO-URL\n` +
      Object.keys(oldProblemIdToNewProblemIdMap)
        .map(
          key =>
            `/solutions/${key}\t/problem/solution/${oldProblemIdToNewProblemIdMap[key]}`
        )
        .join('\n')
  );
  fs.readdir('./solutions/', async (err, filesArr) => {
    console.log(filesArr);
    await Promise.all(
      filesArr.map(name => {
        if (name.slice(-4) === '.mdx') {
          return new Promise((resolve, reject) =>
            fs.readFile('./solutions/' + name, (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            })
          ).then(data => {
            const lines = (data + '').split(/\r?\n/);
            if (lines[0] !== '---' || lines[5] !== '---') {
              console.log(`${name}: unexpected frontmatter`);
              return Promise.reject();
            }
            if (lines[1].substring(0, 4) !== 'id: ') {
              console.log(`${name}: unexpected frontmatter ID value`);
              return Promise.reject();
            }
            const frontMatterId = lines[1].replace('id: ', '');
            // TODO @thecodingwizard
            console.log(
              frontMatterId +
                ' >>> ' +
                oldProblemIdToNewProblemIdMap[frontMatterId] +
                (frontMatterId === oldProblemIdToNewProblemIdMap[frontMatterId]
                  ? 'X'
                  : '[CHANGE]')
            );
            if (oldProblemIdToNewProblemIdMap[frontMatterId]) {
              // lines[1] = 'id: ' + oldProblemIdToNewProblemIdMap[frontMatterId];
            }
            return new Promise<void>((res, rej) => {
              fs.writeFile('./solutions/' + name, lines.join('\n'), err => {
                if (err) {
                  rej(err);
                } else {
                  res();
                }
              });
            });
          });
        }
        return Promise.resolve();
      })
    );
  });
}
main().then(() => {
  console.log('DONE');
});
