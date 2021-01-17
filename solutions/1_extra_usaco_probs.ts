import { Problem } from '../content/models';

// add information for problems not associated with any module

// take some stuff from https://github.com/bqi343/USACO/blob/2d1d50f10d0a489b98b64e60eca70442b6f843f4/Contests/USACO%20Links/Division-Specific/Platinum.md
// to be included in USACO division table

export default [
  new Problem(
    'Plat',
    'Cave Paintings',
    '996',
    'Normal',
    false,
    ['DSU', 'DP'],
    ''
  ),
  new Problem(
    'Plat',
    'Sprinklers 2',
    '1044',
    'Normal',
    false,
    ['Prefix Sums', 'DP'],
    'usaco-1044'
  ),
  new Problem('Plat', 'Exercise', '1045', 'Hard', false, null, 'usaco-1045'),
];
