export type ModuleOrderingID = string;
export type ModuleOrderingGroup = {
  name: string;
  items: ModuleOrderingItem[];
};
export type ModuleOrderingItem = ModuleOrderingID | ModuleOrderingGroup;
export const isModuleOrderingGroup = (x: ModuleOrderingItem): x is ModuleOrderingGroup => x.hasOwnProperty("name");

const ModuleOrdering: {[key: string]: ModuleOrderingItem[]} = {
  "intro": [
    "intro",
    "lang",
    "running-cpp",
    "data-types",
    "io",
    "ex-prob",
  ],
  "general": [
    "resources",
    "practicing",
    "contests",
    "contest-strategy",
    "proposing",
    {
      name: "Language-Specific",
      items: [
        "why-cpp",
        "macros",
        "debugging",
      ]
    },
  ],
  "bronze": [
    "time-comp",
    "rect-geo",
    {
      name: "Data Structures",
      items: [
        "collections",
        "containers",
        "pairs-tuples",
        "ds",
        "intro-sorting",
      ]
    },
    "simulation",
    "complete-search",
    "intro-graphs",
  ],
  "silver": [
    "prefix-sums",
    {
      name: "Sorting",
      items: [
        "sorting-custom",
        "sorting-cpp",
      ]
    },
    {
      name: "Data Structures",
      items: [
        "stacks-queues",
        "amortized",
        "maps-sets",
      ]
    },
    "binary-search",
    "greedy",
    {
      name: "Graphs",
      items: [
        "dfs",
        "ff",
        "func-graphs",
        "bfs",
      ]
    },
  ],
  "gold": [
    "dp",
    "intro-nt",
    {
      name: "Graphs",
      items: [
        "toposort",
        "cyc",
        "dsu",
        "sp",
        "mst",
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
      ]
    },
    {
      name: "Trees",
      items: [
        "merging",
        "bin-jump",
        "hld",
        "centroid",
      ]
    },
    {
      name: "Dynamic Programming",
      items: [
        "dp-bitmasks",
        "dp-ranges",
      ]
    },
    {
      name: "Graphs",
      items: [
        "sp-neg",
        "more-dfs",
        "eulerian-tours",
        "eulers-formula",
        "max-flow",
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
  ],
  "adv": [
    "treaps",
    "persistent",
    "min-cost-flow",
    "critical",
    "LCT",
    "string-suffix",
    "fft",
    "fft-ext",
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