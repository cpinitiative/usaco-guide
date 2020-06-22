const ModuleOrdering = {
  "intro": [
    "intro",
    "getting-started",
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
    "rect-geo",
    "time-comp",
    {
      name: "Data Structures",
      items: [
        "collections",
        "containers",
        "pairs",
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
    "data-structures",
    "containers-silver",
    "greedy",
    "prefix-sums",
    {
      name: "Graphs",
      items: [
        "dfs",
        "ff",
      ]
    }
  ],
  "gold": [
    "intro-nt",
    {
      name: "Graphs",
      items: [
        "bfs",
        "toposort",
        "cyc",
        "dsu",
        "sp",
        "mst",
        "sp-neg",
      ]
    },
    {
      name: "Dynamic Programming",
      items: [
        "dp",
        "dp-trees"
      ]
    },
    "data-structures-gold",
    "bit",
  ],
  "plat": [
    "oly",
    {
      name: "Range Queries",
      items: [
        "1DSRQ",
        "1DPURQ",
        "1DRURQ",
        "2DRQ",
      ]
    },
    {
      name: "Trees",
      items: [
        "tree-dia",
        "binjump",
        "tree-euler",
        "small-to-large",
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
    "graphs",
    "geo",
    "strings",
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
