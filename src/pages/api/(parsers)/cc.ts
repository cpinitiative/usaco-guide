// example url: https://www.codechef.com/problems/GLADFIGHT
import { sanitizeTitle } from './sanitize';

export default function parseCC(url: string, html: string) {
  const urlSplit = url.split('/');
  // F-14-style: derive uniqueId from URL path, not the problem name
  const uniqueId = urlSplit.at(-1);
  const titleRegex = /<title>(.*?)<\/title>/;
  const titleMatch = html.match(titleRegex);
  // F-05: sanitize the extracted title before returning it
  const rawTitle = titleMatch ? titleMatch[1].split(' Practice')[0] : 'Problem Name Here.';
  const name = sanitizeTitle(rawTitle);
  return {
    uniqueId: `cc-${uniqueId}`, // e.g. cc-GLADFIGHT
    name,
    source: 'CC',
    solutionMetadata: {
      kind: 'autogen-label-from-site',
      site: 'CC',
    },
  };
}
