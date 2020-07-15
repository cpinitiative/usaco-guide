export type ModuleOrderingID = string;
export type ModuleOrderingGroup = {
  name: string;
  items: ModuleOrderingItem[];
};
export type ModuleOrderingItem = ModuleOrderingID | ModuleOrderingGroup;
export const isModuleOrderingGroup = (x: ModuleOrderingItem): x is ModuleOrderingGroup => x.hasOwnProperty("name");

const ModuleOrdering: {[key: string]: ModuleOrderingItem[]} = {
  "intro": [
    {
      name: "About This Guide",
      items: [
        "using-this-guide",
        "modules",
      ]
    },
    {
      name: "Getting Started",
      items: [
        "intro",
        "choosing-lang",
        "running-code",
        "data-types",
        "io",
        "expected",
      ]
    },
    {
      name: "Language-Specific",
      items: [
        "factors-choosing",
        "fast-io",
        "shorten-cpp",
        "debugging",
      ]
    },
    {
      name: "General",
      items: [
        "practicing",
        "contest-strategy",
        "resources",
        "contests",
      ]
    },
    {
      name: "Move to usaco.org?",
      items: [
        "proposing",
      ]
    },
  ],
  "bronze": [
    "time-comp",
    "simulation",
    "rect-geo",
    "ad-hoc",
    {
      name: "Data Structures",
      items: [
        "intro-ds",
        "unordered",
        "pairs-tuples",
      ]
    },
    {
      name: "Complete Search",
      items: [
        "complete-search",
        "gen-perm",
      ]
    },
    "intro-graphs",
  ],
  "silver": [
    "prefix-sums",
    {
      name: "Binary Search",
      items: [
        "binary-search-sorted",
        "binary-search-ans",
      ]
    },
    {
      name: "Sorting",
      items: [
        "sorting-methods",
        "sorting-custom",
        "greedy",
      ]
    },
    {
      name: "Ordered Sets & Maps",
      items: [
        "intro-ordered",
        "custom-cpp-stl",
        "harder-ordered",
      ]
    },
    {
      name: "Stacks & Queues",
      items: [
        "stacks-queues",
        "sliding",
      ]
    },
    {
      name: "Graphs",
      items: [
        "dfs",
        "ff",
        "func-graphs",
      ]
    },
  ],
  "gold": [
    "dp",
    "intro-nt",
    {
      name: "Graphs",
      items: [
        "bfs",
        "toposort",
        "cyc",
        "sp",
      ]
    },
    {
      name: "Range Queries",
      items: [
        "SRQ",
        "springboards",
        "PURS",
        "PURQ",  
      ]
    },
    {
      name: "Trees",
      items: [
        "dsu",
        "mst",
        "dp-trees",
        "tree-euler",
      ]
    },
    "hashing",
  ],
  "plat": [
    "oly",
    {
      name: "Range Queries",
      items: [
        "seg-ext",
        "RURQ",
        "2DRQ",
        "sqrt",
      ]
    },
    {
      name: "Trees",
      items: [
        "bin-jump",
        "merging",
        "hld",
        "centroid",
      ]
    },
    {
      name: "Dynamic Programming",
      items: [
        "dp-bitmasks",
        "dp-ranges",
        "dp-more",
      ]
    },
    {
      name: "Graphs",
      items: [
        "sp-neg",
        "BCC-2CC",
        "SCC",
        "eulers-formula",
        "max-flow",
        "eulerian-tours",
      ]
    },
    {
      name: "Strings",
      items: [
        "string-search",
        "suffix-array",
      ]
    },
    {
      name: "Geometry",
      items: [
        "geo-pri",
        "sweep-line",
        "hull",
        "LC",
        "lagrange",
        "slope",
      ]
    },
    "bitsets",
    "fracture",
    "dyna",
  ],
  "adv": [
    {
      name: "Data Structures",
      items: [
        "treaps",
        "persistent",
        "segtree-beats",
        "LCT",
      ]
    },
    {
      name: "Flows",
      items: [
        "more-flows",
        "min-cost-flow",
      ]
    },
    {
      name: "Polynomials",
      items: [
        "fft",
        "fft-ext",
      ]
    },
    "critical",
    "string-suffix",
    "game-theory",
    "multiplicative",
    "matroid-isect",
  ]
};

export default ModuleOrdering;
export const divisions = Object.keys(ModuleOrdering);
export const divisionLabels = {
  "intro": "Intro",
  "general": "General",
  "bronze": "Bronze",
  "silver": "Silver",
  "gold": "Gold",
  "plat": "Platinum",
  "adv": "Advanced",
};

const moduleIDToDivisionMap = {};

Object.keys(ModuleOrdering).forEach(division => {
  const process = module => {
    if (module.hasOwnProperty('name')) {
      return module.items.forEach(process);
    }
    moduleIDToDivisionMap[module] = division;
  };
  ModuleOrdering[division].forEach(process);
});

export { moduleIDToDivisionMap };
