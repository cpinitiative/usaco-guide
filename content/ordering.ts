// Section -> Chapter -> Module

export type SectionID = 'intro' | 'bronze' | 'silver' | 'gold' | 'plat' | 'adv';

export type Chapter = {
  name: string;
  items: string[];
  description?: string;
};

const MODULE_ORDERING: { [key in SectionID]: Chapter[] } = {
  intro: [
    {
      name: 'About This Guide',
      description:
        "In this first chapter, you'll learn about how this guide is structured and how best to use this guide.",
      items: ['using-this-guide', 'modules', 'contributing'],
    },
    {
      name: 'Getting Started',
      description: "Start here if you're new to competitive programming.",
      items: [
        'intro',
        'choosing-lang',
        'running-code',
        'data-types',
        'io',
        'expected',
        'code-con',
      ],
    },
    {
      name: 'General',
      items: ['resources', 'practicing', 'contest-strategy', 'contests', 'oly'],
    },
    {
      name: 'Language-Specific',
      items: [
        'factors-choosing',
        'fast-io',
        'debugging',
        'generic',
        'cpp-tips',
      ],
    },
    {
      name: 'USACO',
      items: ['usaco-month', 'usaco-camp'],
    },
  ],
  bronze: [
    {
      name: 'Basics',
      items: ['time-comp', 'simulation', 'rect-geo'],
    },
    {
      name: 'Data Structures',
      items: ['intro-ds', 'pairs-tuples', 'intro-sets'],
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
      name: 'Prefix Sums',
      items: ['prefix-sums'],
    },
    {
      name: 'Sorting',
      items: ['binary-search-sorted', 'sorting-custom', 'greedy'],
    },
    {
      name: 'Two Pointers',
      items: ['2P'],
    },
    {
      name: 'Binary Search',
      items: ['binary-search-ans'],
    },
    {
      name: 'Sets & Maps',
      description: 'Maintaining collections of distinct elements.',
      items: ['intro-ordered', 'custom-cpp-stl'],
    },
    {
      name: 'Graphs',
      items: ['dfs', 'intro-tree', 'bipartite', 'ff', 'func-graphs'],
    },
  ],
  gold: [
    {
      name: 'Data Structures',
      items: ['stacks', 'sliding', 'queues'],
    },
    {
      name: 'Dynamic Programming',
      items: ['intro-dp', 'dp-trees'],
    },
    {
      name: 'Number Theory',
      items: [
        'intro-nt', // does this really belong so high up on the list??
      ],
    },
    {
      name: 'Graphs',
      items: ['bfs', 'toposort', 'cyc', 'sp'],
    },
    {
      name: 'Range Queries',
      items: ['SRQ', 'springboards', 'PURS'],
    },
    {
      name: 'Trees',
      items: ['dsu', 'mst', 'tree-euler'],
    },
    {
      name: 'Hashing',
      items: ['unordered', 'faster-hashmap', 'string-hashing'],
    },
  ],
  plat: [
    {
      name: 'Range Queries',
      items: ['seg-ext', 'RURQ', '2DRQ', 'sqrt'],
    },
    {
      name: 'Trees',
      items: ['bin-jump', 'merging', 'hld', 'centroid'],
    },
    {
      name: 'Dynamic Programming',
      items: ['dp-bitmasks', 'dp-ranges', 'comb-sub', 'dp-more'],
    },
    {
      name: 'Graphs',
      items: [
        'sp-neg',
        'BCC-2CC',
        'SCC',
        'eulerian-tours',
        'offline-del',
        'eulers-formula',
        'max-flow',
        'min-cut',
      ],
    },
    {
      name: 'Strings',
      items: ['string-search', 'suffix-array'],
    },
    {
      name: 'Convexity',
      items: [
        'geo-pri',
        'sweep-line',
        'convex-hull',
        'cht',
        'LC',
        'lagrange',
        'slope',
      ],
    },
    {
      name: 'Misc. Topics',
      items: ['bitsets', 'fracture', 'mat-exp'],
    },
  ],
  adv: [
    {
      name: 'Data Structures',
      items: ['treaps', 'persistent', 'segtree-beats', 'LCT'],
    },
    {
      name: 'Flows',
      items: ['flow-lb', 'min-cost-flow'],
    },
    {
      name: 'Polynomials',
      items: ['fft', 'fft-ext'],
    },
    {
      name: 'Misc. Topics',
      items: [
        'extend-euclid',
        'xor-basis',
        'critical',
        'string-suffix',
        'game-theory',
        'multiplicative',
        'matroid-isect',
      ],
    },
  ],
};

export default MODULE_ORDERING;
export const SECTIONS: SectionID[] = Object.keys(
  MODULE_ORDERING
) as SectionID[];
export const SECTION_LABELS: { [key in SectionID]: string } = {
  intro: 'Intro',
  bronze: 'Bronze',
  silver: 'Silver',
  gold: 'Gold',
  plat: 'Platinum',
  adv: 'Advanced',
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
