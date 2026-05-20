// example url: https://atcoder.jp/contests/arc084/tasks/arc084_b
export default function parseAc(url: string, html: string) {
  const titleRegex = /<span class="h2">[\r\n\t]+(.*?)[\r\n\t]+/;
  const name = html.match(titleRegex)?.[1].split('-', 2)[1] ?? 'Unknown';
  const uniqueId = `ac-${name.replace(/ /g, '').toLowerCase()}`;
  return {
    uniqueId,
    name,
    source: 'AC',
    solutionMetadata: { kind: 'none' },
  };
}
