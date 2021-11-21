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
      name: 'Getting Started',
      description: "Start here if you're new to competitive programming.",
      items: [
        'using-this-guide',
        'intro-cp',
        'choosing-lang',
        'resources-learning-to-code',
        'running-code-online',
        'data-types',
        'input-output',
        'expected-knowledge',
      ],
    },
    {
      name: 'Contributing',
      description: 'How you can add content to the guide.',
      items: ['contributing', 'adding-solution', 'modules', 'working-mdx'],
    },
    {
      name: 'General Resources',
      description: 'Useful for competitors of all levels.',
      items: [
        'debugging-general',
        'practicing',
        'contest-strategy',
        'resources-cp',
        'contests',
        'olympiads',
      ],
    },
    {
      name: 'Language-Specific',
      description:
        'Setup instructions and discussion of language-specific features.',
      items: [
        'running-code-locally',
        'cpp-command',
        'debugging-lang',
        'fast-io',
        'generic-code',
        'lambda-funcs',
        'notes-cpp-ds',
      ],
    },
    {
      name: 'USA',
      description:
        'Information specific to USACO as well as USA camps and contests.',
      items: ['usaco-faq', 'usaco-monthlies', 'usaco-camp', 'resources-usa'],
    },
  ],
  bronze: [
    {
      name: 'Getting Started',
      items: ['time-comp', 'rect-geo', 'intro-ds', 'simulation'],
    },
    {
      name: 'Complete Search',
      description:
        'Solving Bronze problems by checking all possible cases in the solution space.',
      items: ['intro-complete', 'complete-rec'],
    },
    {
      name: 'Sorting & Sets',
      description: '',
      items: ['intro-sorting', 'intro-sets'],
      // It's not strictly necessary to know any data structures aside from arrays for Bronze, but it definitely helps.
    },
    {
      name: 'Additional',
      description: 'Topics not strictly necessary to know to pass Bronze.',
      items: ['ad-hoc', 'intro-greedy', 'intro-graphs'],
    },
    {
      name: 'Conclusion',
      items: ['bronze-conclusion'],
    },
  ],
  silver: [
    {
      name: 'Prefix Sums',
      items: ['prefix-sums', 'more-prefix-sums'],
    },
    {
      name: 'Sorting & Searching',
      items: [
        'sorting-custom',
        'two-pointers',
        'intro-sorted-sets',
        'custom-cpp-stl',
        'greedy-sorting',
        'binary-search',
      ],
    },
    {
      name: 'Graphs',
      description:
        'Every (?) Silver - Plat contest has at least one graph problem.',
      items: ['dfs', 'flood-fill', 'intro-tree', 'func-graphs'],
    },
    {
      name: 'Conclusion',
      items: ['silver-conclusion'],
    },
  ],
  gold: [
    {
      name: 'Introductory Number Theory',
      items: ['divisibility', 'modular'],
    },
    {
      name: 'Dynamic Programming',
      description:
        'Every (?) Gold and Platinum contest has at least one DP problem.',
      items: [
        'intro-dp',
        'knapsack',
        'paths-grids',
        'lis',
        'dp-bitmasks',
        'dp-ranges',
      ],
    },
    {
      name: 'Graphs',
      items: ['bfs', 'dsu', 'toposort', 'shortest-paths', 'mst'],
    },
    {
      name: 'Data Structures',
      items: ['stacks', 'sliding-window', 'PURS'],
    },
    {
      name: 'Trees',
      items: ['tree-euler', 'dp-trees', 'all-roots'],
    },
    {
      name: 'Hashing',
      description: 'Rarely required at this level, but still good to know.',
      items: ['string-hashing', 'unordered-map', 'faster-hashmap'],
    },
    {
      name: 'Misc. Topics',
      items: ['intro-bitwise'],
    },
    {
      name: 'Conclusion',
      items: ['gold-conclusion'],
    },
  ],
  plat: [
    {
      name: 'Range Queries',
      description:
        'It seems that no Platinum contest is complete without a segment tree ...',
      items: [
        'segtree-ext',
        'range-sweep',
        'RURQ',
        'sparse-segtree',
        '2DRQ',
        'DC-SRQ',
        'sqrt',
      ],
    },
    {
      name: 'Trees',
      description: '... or a tree!',
      items: ['binary-jump', 'merging', 'hld', 'centroid'],
    },
    {
      name: 'Geometry',
      description: 'More advanced concepts in computational geometry.',
      items: ['geo-pri', 'sweep-line', 'convex-hull', 'convex-hull-trick'],
    },
    {
      name: 'Misc. Topics',
      items: ['matrix-expo', 'bitsets', 'DC-DP'],
    },
    {
      name: 'Conclusion',
      items: ['plat-conclusion'],
    },
  ],
  adv: [
    {
      name: 'Data Structures',
      items: [
        'springboards',
        'wavelet',
        'count-min',
        'segtree-beats',
        'persistent',
        'treaps',
      ],
    },
    {
      name: 'Convexity',
      items: ['line-container', 'lagrange', 'slope-trick'],
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
        'link-cut-tree',
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
        'fracturing-search',
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

const moduleIDToSectionMap: { [key: string]: SectionID } = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToSectionMap[moduleID] = section;
    });
  });
});

export { moduleIDToSectionMap };
export { moduleIDToURLMap };

const moduleIDToURLMap: { [key: string]: string } = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToURLMap[moduleID] = `/${section}/${moduleID}`;
    });
  });
});
