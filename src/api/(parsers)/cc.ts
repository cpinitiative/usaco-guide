// example url: https://www.codechef.com/problems/GLADFIGHT
export default function parseCC(url: string, html: string) {
  const urlSplit = url.split('/');
  const uniqueId = urlSplit.at(4);
  const titleRegex = /<h3>(.*?)<\/h3>/;
  return {
    uniqueId: `cc-${uniqueId}`, // e.g. cc-GLADFIGHT
    name: html.match(titleRegex)?.[1] ?? 'Unknown',
    source: 'CC',
    solutionMetadata: {
      kind: 'autogen-label-from-site',
      site: 'CC',
    },
  };
}
