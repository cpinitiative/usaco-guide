import allProblems from './problemsList';
import * as fs from 'fs';

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
    const moduleFileName = files[divisionFolder].find(
      // find ignoring case
      name =>
        name.toLowerCase().replace(/[\- _]/g, '') ===
        id.toLowerCase().replace(/[\- _]/g, '')
    );
    fileWritePromises.push(
      new Promise<void>((resolve, reject) => {
        fs.writeFile(
          `./content/${divisionFolder}/${moduleFileName}.json`,
          JSON.stringify(
            problems.reduce(
              (acc: Record<string, any>, el: Record<string, any>) => {
                const { tableID, ...problemData } = el;
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
}
main().then(() => {
  console.log('DONE');
});
