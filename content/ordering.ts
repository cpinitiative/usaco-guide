// Section -> Chapter -> Module

export type SectionID =
  | 'general'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'plat'
  | 'adv';

export type Chapter = {
  name: string;
  items: string[];
  description?: string;
};

const MODULE_ORDERING: { [key in SectionID]: Chapter[] } = {
  general: [
    {
      name: 'About This Guide',
      description:
        "In this first chapter, you'll learn about how this guide is structured and how best to use this guide.",
      items: ['using-this-guide', 'modules', 'contributing', 'code-con'],
    },
    {
      name: 'Getting Started',
      description: "Start here if you're new to competitive programming.",
      items: [
        'intro',
        'choosing-lang',
        'resources-learning-to-code',
        'running-code-online',
        'data-types',
        'io',
        'expected',
      ],
    },
    {
      name: 'General',
      description: 'Useful for competitors of all levels.',
      items: [
        'practicing',
        'contest-strategy',
        'resources-cp',
        'contests',
        'oly',
      ],
    },
    {
      name: 'Language-Specific',
      items: [
        'factors-choosing',
        'running-code-locally',
        'cpp-command',
        'debugging',
        'fast-io',
        'generic',
        'lambda',
      ],
    },
    {
      name: 'USA',
      description:
        'Information specific to USACO as well as USA camps and contests.',
      items: ['usaco-month', 'usaco-camp', 'resources-usa'],
    },
  ],
  bronze: [
    {
      name: 'Basics',
      items: [
        'time-comp',
        'intro-ds',
        'simulation',
        'rect-geo',
        'intro-sorting',
        'intro-sets',
      ],
    },
    {
      name: 'Complete Search',
      description:
        'Solving bronze problems by checking all possible cases in the solution space.',
      items: ['intro-complete', 'complete-rec'],
    },
    {
      name: 'Unusual',
      items: ['ad-hoc', 'intro-greedy', 'intro-graphs'],
    },
  ],
  silver: [
    {
      name: 'Sorting & Sets',
      items: [
        'binary-search-sorted',
        'sorting-custom',
        'intro-ordered',
        'custom-cpp-stl',
      ],
    },
    {
      name: 'Misc. Topics',
      description:
        'Most of these require sorting and/or sets as a prerequisite.',
      items: [
        'prefix-sums',
        '2P',
        'binary-search-ans',
        'greedy',
        'intro-bitwise',
      ],
    },
    {
      name: 'Graphs',
      description:
        'Every (?) Silver - Plat contest has at least one graph problem.',
      items: ['dfs', 'bipartite', 'ff', 'intro-tree', 'func-graphs'],
    },
  ],
  gold: [
    {
      name: 'Introductory Number Theory',
      items: ['divis', 'modular'],
    },
    {
      name: 'Dynamic Programming',
      description:
        'Every (?) Gold and Platinum contest has at least one DP problem.',
      items: ['intro-dp', 'knapsack', 'paths-grids', 'lis', 'dp-nt'],
    },
    {
      name: 'Graphs',
      items: ['bfs', 'dsu', 'toposort', 'sp', 'mst'],
    },
    {
      name: 'Data Structures',
      items: ['stacks', 'sliding', 'PURS'],
    },
    {
      name: 'Trees',
      items: ['tree-euler', 'dp-trees', 'all-roots'],
    },
    {
      name: 'Hashing',
      description: 'Rarely required at this level, but still good to know.',
      items: ['string-hashing', 'unordered', 'faster-hashmap'],
    },
  ],
  plat: [
    {
      name: 'Range Queries',
      description:
        'It seems that no Platinum contest is complete without a segment tree ...',
      items: [
        'seg-ext',
        'range-sweep',
        'RURQ',
        'sparse-seg',
        '2DRQ',
        'DC-SRQ',
        'sqrt',
      ],
    },
    {
      name: 'Trees',
      description: '... or a tree!',
      items: ['bin-jump', 'merging', 'hld', 'centroid'],
    },
    {
      name: 'Convex Hull',
      description: 'Most Platinum geometry problems.',
      items: ['geo-pri', 'sweep-line', 'convex-hull', 'cht'],
    },
    {
      name: 'Dynamic Programming',
      items: ['dp-bitmasks', 'dp-ranges', 'DC-DP'],
    },
    {
      name: 'Misc. Topics',
      items: ['mat-exp', 'bitsets'],
    },
  ],
  adv: [
    {
      name: 'Data Structures',
      items: [
        'springboards',
        'wavelet',
        'CntMin',
        'segtree-beats',
        'persistent',
        'treaps',
      ],
    },
    {
      name: 'Convexity',
      items: ['LC', 'lagrange', 'slope'],
    },
    {
      name: 'Graphs',
      items: [
        'sp-neg',
        'eulerian-tours',
        'BCC-2CC',
        'SCC',
        'offline-del',
        'eulers-formula',
        'critical',
        'LCT',
      ],
    },
    {
      name: 'Dynamic Programming',
      items: ['comb-sub', 'dp-more', 'dp-sos'],
    },
    {
      name: 'Flows',
      items: ['max-flow', 'min-cut', 'flow-lb', 'min-cost-flow'],
    },
    {
      name: 'Polynomials',
      items: ['fft', 'fft-ext'],
    },
    {
      name: 'Strings',
      items: ['string-search', 'suffix-array', 'string-suffix'],
    },
    {
      name: 'Misc. Topics',
      items: [
        'extend-euclid',
        'xor-basis',
        'fracture',
        'game-theory',
        'multiplicative',
        'matroid-isect',
        'interactive',
        'vectorization',
      ],
    },
  ],
};

export default MODULE_ORDERING;
export const SECTIONS: SectionID[] = Object.keys(
  MODULE_ORDERING
) as SectionID[];
export const SECTION_LABELS: { [key in SectionID]: string } = {
  general: 'General',
  bronze: 'Bronze',
  silver: 'Silver',
  gold: 'Gold',
  plat: 'Platinum',
  adv: 'Advanced',
};
export const SECTION_SEO_DESCRIPTION: { [key in SectionID]: string } = {
  general:
    'General information for USACO and Competitive Programming. Includes resources to pick a language, set up an IDE, practice tips, and more!',
  bronze:
    'Topics for USACO Bronze include time complexity, data structures, sorting, simulation, complete search, ad hoc, greedy, graphs, rectangle geometry, sets and maps, and recursion.',
  silver:
    'Topics for USACO Silver include binary search on the answer, prefix sums, two pointers, dfs, floodfill, trees, custom comparators, greedy with sorting, and more!',
  gold:
    'Topics for USACO Gold include dynamic programming, union-find, shortest paths, point update range sum, topological sort, minimum spanning trees, euler tour, string hashing, and more!',
  plat:
    'Topics for USACO Platinum include segment trees, advanced tree techniques, advanced dynamic programming, computational geometry, matrix exponentiation, and more!',
  adv:
    'Topics usually outside the scope of most USACO contests include segment tree beats, treaps, slope trick, strongly connected components, max-flow, suffix arrays, fast fourier transform, and more!',
};
export const SECTION_SEO_TITLES: { [key in SectionID]: string } = {
  general: 'General USACO Information',
  bronze: 'USACO Bronze Topics',
  silver: 'USACO Silver Topics',
  gold: 'USACO Gold Topics',
  plat: 'USACO Platinum Topics',
  adv: 'Advanced USACO Topics',
};

let moduleIDToSectionMap: { [key: string]: SectionID } = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToSectionMap[moduleID] = section;
    });
  });
});

export { moduleIDToSectionMap };

let moduleIDToURLMap: { [key: string]: string } = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToURLMap[moduleID] = `/${section}/${moduleID}`;
    });
  });
});

export { moduleIDToURLMap };
