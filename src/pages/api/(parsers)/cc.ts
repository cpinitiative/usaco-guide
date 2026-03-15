// example url: https://www.codechef.com/problems/GLADFIGHT
export default function parseCC(url: string, html: string) {
  const urlSplit = url.split('/');
  const uniqueId = urlSplit.at(-1);
  const titleRegex = /<title>(.*?)<\/title>/;
  const titleMatch = html.match(titleRegex);
  const title = titleMatch
    ? titleMatch[1].split(' Practice')[0]
    : 'Problem Name Here.';
  return {
    uniqueId: `cc-${uniqueId}`, // e.g. cc-GLADFIGHT
    name: title,
    source: 'CC',
    solutionMetadata: {
      kind: 'autogen-label-from-site',
      site: 'CC',
    },
  };
}
