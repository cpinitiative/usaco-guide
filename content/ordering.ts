const ModuleOrdering = {
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
        "maps-sets",
      ]
    },
    "binary-search",
    "amortized",
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
    "ds-gold",
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
        "merging",
        "bin-jump",
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
    {
      name: "Geometry",
      items: [
        "geo-pri",
        "hull",
      ]
    },
    "bitsets",
    "fracture",
    "fft",
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
