const ModuleOrdering = {
  "intro": [
    "getting-started",
    "about-this",
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
    "time-comp",
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
    "bitset",
    "fracture",
  ]
};

export default ModuleOrdering;