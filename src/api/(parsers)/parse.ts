import axios from 'axios';
import parseAc from './ac';
import parseCf from './cf';
import parseCses from './cses';
import parseUsaco from './usaco';
export const parsers = {
  'codeforces.com': parseCf,
  'usaco.org': parseUsaco,
  'cses.fi': parseCses,
  'atcoder.jp': parseAc,
};

export default async function parse(url: string) {
  let html;
  try {
    html = (await axios.get(url)).data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch html for url ${url}`);
  }
  for (const [domain, parser] of Object.entries(parsers)) {
    if (url.includes(domain)) {
      return parser(url, html);
    }
  }
  throw new Error(`No parser found for this url.
Available parsers:
${Object.keys(parsers)
  .map(key => `  - ${key}`)
  .join('\n')}`);
}
