import { readFileSync, writeFileSync } from 'fs';
import * as readline from 'readline';
import axios from 'axios';
readline
  .createInterface(process.stdin, process.stdout)
  .question('Enter USACO ID: ', id => {
    const url = `http://usaco.org/index.php?page=viewproblem2&cpid=${id}`;
    axios
      .get(url)
      .then(response => {
        const htmlContent = response.data;
        console.log(htmlContent);
        console.log(typeof htmlContent);
        // const re = /<h2> Problem \d. (.*) <\/h2>/;
        const title = htmlContent.match(/<h2> Problem \d. (.*) <\/h2>/)[1];
        const division = htmlContent.match(
          /<h2> USACO \d+ (?:December|January|February|(?:US Open)) Contest, (\w+) <\/h2>/
        )[1];
        console.log(title, division);
        console.log('Problem added!');
        process.exit();
      })
      .catch(error => {
        console.error('Error retrieving HTML content:', error);
      });
    // const newEntry = {
    //   uniqueId: `usaco-${id}`,
    //   name: 'Equal Sum Subarrays',
    //   url: `http://usaco.org/index.php?page=viewproblem2&cpid=${id}`,
    //   source: 'Gold',
    //   difficulty: 'Easy',
    //   isStarred: false,
    //   tags: ['Brute Force'],
    //   solutionMetadata: {
    //     kind: 'USACO',
    //     usacoId: id,
    //   },
    // };
    // const extraProblems = JSON.parse(
    //   readFileSync('./content/extraProblems.json')
    // );
    // console.log(extraProblems);
    // extraProblems.EXTRA_PROBLEMS.push(newEntry);
    // writeFileSync(
    //   './content/extraProblems.json',
    //   JSON.stringify(extraProblems, null, '\t'),
    //   'utf8'
    // );
  });
