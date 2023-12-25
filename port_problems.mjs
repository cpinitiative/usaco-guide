// run `node usaco_util.mjs`
import algoliasearch from 'algoliasearch';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';
import * as prettier from 'prettier';
import extraProblems from './content/extraProblems.json' assert { type: 'json' };
import div_to_probs from './src/components/markdown/ProblemsList/DivisionList/div_to_probs.json' assert { type: 'json' };
config();

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const index = client.initIndex('dev_problems');

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
        difficulty: 'N/A',
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
