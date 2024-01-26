import parseCf from './cf';
import parseUsaco from './usaco';

export default function parse(url: string, html: string) {
  if (url.includes('codeforces.com')) {
    return parseCf(url, html);
  } else if (url.includes('usaco.org')) {
    return parseUsaco(url, html);
  } else {
    throw new Error(`Problem source not supported yet :(`);
  }
}
