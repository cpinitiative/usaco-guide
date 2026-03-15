// example url: https://codeforces.com/problemset/problem/1917/D
// example html: samples/cf.html (html for above url)
// example gym url: https://codeforces.com/gym/102951/problem/A
export default function parseCf(url: string, html: string) {
  const urlSplit = url.split('/');
  const contestId = urlSplit.at(
    -2 - +url.includes('gym') - +url.includes('contest')
  );
  const problemId = urlSplit.at(-1);
  const titleRegex = /<div class="title">.*?\. (.*?)<\/div>/;
  return {
    uniqueId: `cf${url.includes('gym') ? 'gym' : ''}-${contestId}${problemId}`, // e.g. cf-1917D
    name: html.match(titleRegex)?.[1] ?? 'Unknown',
    source: 'CF',
    solutionMetadata: {
      kind: 'autogen-label-from-site',
      site: 'CF',
    },
  };
}
