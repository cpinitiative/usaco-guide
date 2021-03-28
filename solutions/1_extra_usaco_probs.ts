import { Problem } from '../content/models';

// add information for problems not associated with any module

// take some stuff from https://github.com/bqi343/USACO/blob/2d1d50f10d0a489b98b64e60eca70442b6f843f4/Contests/USACO%2Links/Division-Specific/Platinum.md
// to be included in USACO division table

export default [
  new Problem(
    'Silver',
    'Secret Cow Code',
    '692',
    'Normal',
    false,
    ['Recursion'],
    ''
  ),
  new Problem(
    'Plat',
    'Greedy Gift Takers',
    '770',
    'Normal',
    false,
    ['Binary Search'],
    ''
  ),
  new Problem('Plat', 'Lifeguards', '792', 'Normal', false, ['DP'], ''),
  new Problem('Plat', 'Sprinklers', '794', 'Easy', false, ['2P'], ''),
  new Problem(
    'Silver',
    'Teleportation',
    '812',
    'Very Hard',
    false,
    ['Ordered Set'],
    ''
  ),
  new Problem('Plat', 'Redistricting', '900', 'Normal', false, ['Deque'], ''),
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
    'Help Yourself',
    '1022',
    'Very Hard',
    false,
    ['Lazy Segment Tree'],
    ''
  ),
  new Problem('Plat', 'Circus', '1046', 'Very Hard', false, ['Tree'], ''),
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
    'Silver',
    'No Time To Paint',
    '1087',
    'Normal',
    false,
    ['Prefix Sums'],
    ''
  ),
  new Problem(
    'Bronze',
    'Comfortable Cows',
    '1108',
    'Normal',
    false,
    ['Simulation'],
    ''
  ),
  new Problem(
    'Bronze',
    'Clockwise Fence',
    '1109',
    'Normal',
    false,
    ['Geometry'],
    ''
  ),
  new Problem(
    'Silver',
    'Year of the Cow',
    '1111',
    'Normal',
    false,
    ['Sorting', 'Greedy'],
    ''
  ),
  new Problem(
    'Silver',
    'Just Green Enough',
    '1112',
    'Normal',
    false,
    ['Prefix Sums'],
    ''
  ),
  new Problem(
    'Gold',
    'Just Green Enough',
    '1113',
    'Normal',
    false,
    ['Prefix Sums', 'Game'],
    ''
  ),
  new Problem('Plat', 'No Time to Dry', '1116', 'Normal', false, ['1DRQ'], ''),
  new Problem(
    'Plat',
    'Minimizing Edges',
    '1117',
    'Normal',
    false,
    ['BFS', 'Greedy'],
    ''
  ),
  new Problem(
    'Plat',
    'Counting Graphs',
    '1118',
    'Normal',
    false,
    ['BFS', 'Combinatorics', 'PIE'],
    ''
  ),
];
