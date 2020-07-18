// Section -> Category -> Module

export type SectionID = "intro" | "bronze" | "silver" | "gold" | "plat" | "adv";

export type Category = {
  name: string;
  items: string[];
}

const MODULE_ORDERING: {[key in SectionID]: Category[]} = {
  "intro": [
    {
      name: "About This Guide",
      items: [
        "using-this-guide",
        "modules",
        "code-con",
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
      name: "General",
      items: [
        "resources",
        "practicing",
        "contest-strategy",
        "contests",
        "oly",
      ]
    },
    {
      name: "Language-Specific",
      items: [
        "factors-choosing",
        "fast-io",
        "debugging",
        "cpp-tips",
      ]
    },
    {
      name: "Move to usaco.org?",
      items: [
        "proposing",
        "usaco-camp",
      ]
    },
  ],
  "bronze": [
    {
      name: "Basics",
      items: [
        "time-comp",
        "simulation",
        "rect-geo",
        "intro-greedy",
      ]
    },
    {
      name: "Data Structures",
      items: [
        "intro-ds",
        "pairs-tuples",
        "unordered",
      ]
    },
    {
      name: "Complete Search",
      items: [
        "complete-search",
        "gen-perm",
      ]
    },
    {
      name: "Graphs",
      items: [
        "intro-graphs",
      ]
    }
  ],
  "silver": [
    {
      name: "Prefix Sums",
      items: [
        "prefix-sums",
      ]
    },
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
    {
      name: "Dynamic Programming",
      items: [
        "dp",
      ]
    },
    {
      name: "Number Theory",
      items: [
        "intro-nt", // does this really belong so high up on the list??
      ]
    },
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
    {
      name: "Hashing",
      items: [
        "faster-hashmap",
        "string-hashing",
      ]
    }
  ],
  "plat": [
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
    {
      name: "Misc. Topics",
      items: [
        "bitsets",
        "fracture",
        "dyna",
      ]
    }
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
    {
      name: "Misc. Topics",
      items: [
        "critical",
        "string-suffix",
        "game-theory",
        "multiplicative",
        "matroid-isect",
      ]
    }
  ]
};

export default MODULE_ORDERING;
export const SECTIONS: SectionID[] = Object.keys(MODULE_ORDERING) as SectionID[];
export const SECTION_LABELS: {[key in SectionID]: string} = {
  "intro": "Intro",
  "bronze": "Bronze",
  "silver": "Silver",
  "gold": "Gold",
  "plat": "Platinum",
  "adv": "Advanced",
};

let moduleIDToSectionMap: {[key: string]: SectionID} = {};

SECTIONS.forEach(section => {
  MODULE_ORDERING[section].forEach(category => {
    category.items.forEach(moduleID => {
      moduleIDToSectionMap[moduleID] = section;
    })
  });
});

export { moduleIDToSectionMap };
