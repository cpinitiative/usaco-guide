// run `node usaco_util.mjs`
import { writeFileSync } from 'fs';
import * as readline from 'readline';
import axios from 'axios';
import extraProblems from './content/extraProblems.json' assert { type: 'json' };
import div_to_probs from './src/components/markdown/ProblemsList/DivisionList/div_to_probs.json' assert { type: 'json' };
import id_to_sol from './src/components/markdown/ProblemsList/DivisionList/id_to_sol.json' assert { type: 'json' };
import * as prettier from 'prettier';
import { config } from 'dotenv';
import algoliasearch from 'algoliasearch';
config({
  path: '.env.production',
});

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const index = client.initIndex('dev_problems');

const objects = [
  {
    objectID: 'usaco-1307',
  },
];

index.search('', { filters: `objectID: usaco-1306` }).then(({ hits }) => {
  console.log('here');
  console.log(hits);
  console.log(!hits.length);
});

const { hits } = await index.search('', { filters: `objectID: usaco-1305` });
console.log(hits);

for (const division in div_to_probs) {
  for (const [id, contest, title] of div_to_probs[division]) {
    const { hits } = await index.search('', {
      filters: `objectID: usaco-${id}`,
    });
    if (!hits.length) {
      console.log(`adding problem ${id}`);
      extraProblems.EXTRA_PROBLEMS.push({
        uniqueId: `usaco-${id}`,
        name: title,
        url: `http://usaco.org/index.php?page=viewproblem2&cpid=${id}`,
        source: division,
        difficulty: 'Easy',
        isStarred: false,
        tags: [],
        solutionMetadata: {
          kind: 'USACO',
          usacoId: id,
        },
      });
    }
  }
}
writeFileSync(
  './content/extraProblems.json',
  await prettier.format(JSON.stringify(extraProblems, null, '\t'), {
    parser: 'json',
  }),
  'utf8'
);
