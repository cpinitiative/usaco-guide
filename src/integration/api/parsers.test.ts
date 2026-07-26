import { describe, expect, it } from 'vitest';
import { parsers } from '../../pages/api/(parsers)/parse';

describe('parsers registry', () => {
  it('maps the five supported domains', () => {
    expect(Object.keys(parsers)).toEqual([
      'codeforces.com',
      'usaco.org',
      'cses.fi',
      'atcoder.jp',
      'codechef.com',
    ]);
  });
});
