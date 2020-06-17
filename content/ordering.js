const ModuleOrdering = {
  "intro": [
    "getting-started",
    "prereqs",
    "running-cpp",
    "data-types",
    "io",
    "ex-prob",
    "practicing",
  ],
  "general": [
    "resources",
    "contests",
    "contest-strategy",
    "proposing",
    "why-cpp",
    "macros",
    "debugging",
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
    "containers-silver"
    "greedy",
    "prefix-sums",
    {
      name: "Graphs",
      items: [
        "dfs",
        "cyc",
      ]
    }
  ],
  "gold": [
    {
      name: "Graphs",
      items: [
        "bfs",
        "toposort",
        "sp",
        "mst"
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
    "intro-nt",
    "bit",
  ],
  "plat": [
    "oly",
    {
      name: "Range Queries",
      items: [
        "1DRQ",
        "2DRQ",
      ]
    },
    {
      name: "Graphs",
      items: [
        "trees",
        "graphs",
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
