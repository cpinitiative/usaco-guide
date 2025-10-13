// example url: https://www.codechef.com/problems/GLADFIGHT
export default function parseCC(url: string, html: string) {
  const urlSplit = url.split('/');
  const uniqueId = urlSplit.at(4);

  return {
    uniqueId: `cc-${uniqueId}`, // e.g. cc-GLADFIGHT
    name: 'PASTE PROBLEM NAME HERE',
    source: 'CC',
    solutionMetadata: {
      kind: 'autogen-label-from-site',
      site: 'CC',
    },
  };
}
