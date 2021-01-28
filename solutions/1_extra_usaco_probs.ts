import { Problem } from '../content/models';

// add information for problems not associated with any module

// take some stuff from https://github.com/bqi343/USACO/blob/2d1d50f10d0a489b98b64e60eca70442b6f843f4/Contests/USACO%20Links/Division-Specific/Platinum.md
// to be included in USACO division table

export default [
  new Problem('Silver', 'Spaced Out', '1088', 'Normal', false, ['Greedy'], ''),
  new Problem(
    'Silver',
    'No Time To Paint',
    '1087',
    'Normal',
    false,
    ['Prefix Sums'],
    ''
  ),
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
  new Problem('Plat', 'Spaceship', '1069', 'Hard', false, ['Matrix'], ''),
  new Problem('Plat', 'Sleeping Cows', '1068', 'Normal', false, ['DP'], ''),
  new Problem(
    'Plat',
    'Sum of Distances',
    '1092',
    'Normal',
    false,
    ['BFS', 'PIE'],
    ''
  ),
  new Problem(
    'Plat',
    'Minimum Cost Paths',
    '1093',
    'Normal',
    false,
    ['Convex'],
    ''
  ),
  new Problem(
    'Plat',
    'Help Yourself',
    '1022',
    'Very Hard',
    false,
    ['Lazy Segment Tree'],
    ''
  ),
  new Problem('Plat', 'Redistricting', '900', 'Normal', false, ['Deque'], ''),
  new Problem('Plat', 'Circus', '1046', 'Very Hard', false, ['Tree'], ''),
];
