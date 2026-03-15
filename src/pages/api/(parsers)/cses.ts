// example url: https://cses.fi/problemset/task/1083
export default function parseCses(url: string, html: string) {
  const urlSplit = url.split('/');
  const problemId = urlSplit.at(-1);
  const titleRegex = /<h1>(.*?)<\/h1>/;
  return {
    uniqueId: `cses-${problemId}`, // e.g. cses-1083
    name: html.match(titleRegex)?.[1] ?? 'Unknown',
    source: 'CSES',
    solutionMetadata: { kind: 'none' },
  };
}
