// example url: https://codeforces.com/problemset/problem/1917/D
// example html: samples/cf.html (html for above url)
// example gym url: https://codeforces.com/gym/102951/problem/A
import { sanitizeTitle } from './sanitize';

export default function parseCf(url: string, html: string) {
  const urlSplit = url.split('/');
  const contestId = urlSplit.at(
    -2 - +url.includes('gym') - +url.includes('contest')
  );
  const problemId = urlSplit.at(-1);
  const titleRegex = /<div class="title">.*?\. (.*?)<\/div>/;
  // F-05: sanitize the extracted title before returning it
  const rawName = html.match(titleRegex)?.[1] ?? 'Unknown';
  const name = sanitizeTitle(rawName);
  return {
    uniqueId: `cf${url.includes('gym') ? 'gym' : ''}-${contestId ?? 'unknown'}${problemId ?? 'unknown'}`,
    name,
    source: 'CF',
    solutionMetadata: {
      kind: 'autogen-label-from-site',
      site: 'CF',
    },
  };
}
