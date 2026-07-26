// example url: https://cses.fi/problemset/task/1083
import { sanitizeTitle } from './sanitize';

export default function parseCses(url: string, html: string) {
  const urlSplit = url.split('/');
  const problemId = urlSplit.at(-1);
  const titleRegex = /<h1>(.*?)<\/h1>/;
  // F-05: sanitize the extracted title before returning it
  const rawName = html.match(titleRegex)?.[1] ?? 'Unknown';
  const name = sanitizeTitle(rawName);
  return {
    uniqueId: `cses-${problemId}`, // e.g. cses-1083
    name,
    source: 'CSES',
    solutionMetadata: { kind: 'none' },
  };
}
