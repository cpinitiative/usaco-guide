import { readFileSync, writeFileSync } from 'fs';
import * as readline from 'readline';
readline
  .createInterface(process.stdin, process.stdout)
  .question('Enter USACO ID: ', id => {
    const newEntry = {
      uniqueId: `usaco-${id}`,
      name: 'Equal Sum Subarrays',
      url: `http://usaco.org/index.php?page=viewproblem2&cpid=${id}`,
      source: 'Gold',
      difficulty: 'Easy',
      isStarred: false,
      tags: ['Brute Force'],
      solutionMetadata: {
        kind: 'USACO',
        usacoId: id,
      },
    };
    const extraProblems = JSON.parse(
      readFileSync('./content/extraProblems.json')
    );
    console.log(extraProblems);
    extraProblems.EXTRA_PROBLEMS.push(newEntry);
    writeFileSync(
      './content/extraProblems.json',
      JSON.stringify(extraProblems, null, '\t'),
      'utf8'
    );
    console.log('Problem added!');
  });
