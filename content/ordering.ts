const ModuleOrdering = {
  "intro": [
    "intro",
    "prereqs",
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
      ]
    },
    "simulation",
    "complete-search",
    "intro-graphs",
  ],
  "silver": [
    {
      name: "Sorting",
      items: [
        "intro-sorting",
        "sorting-custom",
        "sorting-cpp",
      ]
    },
    "binary-search",
    "2P",
    "containers-silver",
    "data-structures",
    "greedy",
    "prefix-sums",
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
    "data-structures-gold",
    "dp",
    "intro-nt",
    "hashing",
    {
      name: "Graphs",
      items: [
        "bfs",
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
        "PURS",
        "PURQ",  
      ]
    },
    {
      name: "Trees",
      items: [
        "tree-dia",
        "dp-trees",
        "merging",
        "tree-euler",
        "binjump",
      ]
    },
  ],
  "plat": [
    "oly",
    {
      name: "Range Queries",
      items: [
        "RURQ",
        "2DRQ",
      ]
    },
    {
      name: "Trees",
      items: [
        "hld",
        "centroid",
      ]
    },
    {
      name: "Dynamic Programming",
      items: [
        "dp-bitmasks",
        "dp-ranges",
        "slope",
      ]
    },
    {
      name: "Graphs",
      items: [
        "sp-neg",
        "more-dfs",
        "eulerian-tours",
        "flows",
      ]
    },
    {
      name: "Strings",
      items: [
        "tries",
        "suffix-array",
        "string-search",
      ]
    },
    "geo",
    "bitsets",
    "fracture",
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
};
