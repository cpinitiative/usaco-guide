import parseCf from './cf';
import parseUsaco from './usaco';
export const parsers = {
  'codeforces.com': parseCf,
  'usaco.org': parseUsaco,
};
export default function parse(url: string, html: string) {
  for (const [domain, parser] of Object.entries(parsers)) {
    if (url.includes(domain)) {
      return parser(url, html);
    }
  }
  throw new Error('No parser found for this URL');
}
