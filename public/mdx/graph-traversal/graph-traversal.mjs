"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Graph traversal algorithms visit all nodes within a graph in a certain order and can compute some information along the way.\r\nTwo common algorithms for doing this are ", _jsxDEV(_components.strong, {
        children: "depth first search (DFS)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 42
      }, this), " and ", _jsxDEV(_components.strong, {
        children: "breadth first search (BFS)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 75
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-application-connected-components",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application-connected-components",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application: Connected Components"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "connected component"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 3
      }, this), " is a maximal set of connected nodes in an undirected\r\ngraph. In other words, two nodes are in the same connected component ", _jsxDEV(_components.em, {
        children: "if and\r\nonly if"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 70
      }, this), " they can reach each other via edges in the graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In the above focus problem, the goal is to add the minimum possible number of\r\nedges such that the entire graph forms a single connected component."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-application-graph-two-coloring",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-application-graph-two-coloring",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Application: Graph Two-Coloring"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Graph two-coloring"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), " refers to assigning a boolean value to each node of the\r\ngraph, dictated by the edge configuration. The most common example of a\r\ntwo-colored graph is a ", _jsxDEV(_components.strong, {
        children: "bipartite graph"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 24
      }, this), ", in which each edge connects two\r\nnodes of opposite colors."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In the above focus problem, the goal is to assign each node (friend) of the\r\ngraph to one of two colors (teams), subject to the constraint that edges\r\n(friendships) connect two nodes of opposite colors. In other words, we need to\r\ncheck whether the input is a bipartite graph and output a valid coloring if it\r\nis."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-dfs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dfs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "DFS"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.p, {
      children: "From the second resource:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "Depth-first search (DFS) is a straightforward graph traversal technique. The\r\nalgorithm begins at a starting node, and proceeds to all other nodes that are\r\nreachable from the starting node using the edges of the graph."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 3
      }, this), "\n", _jsxDEV(_components.p, {
        children: "Depth-first search always follows a single path in the graph as long as it\r\nfinds new nodes. After this, it returns to previous nodes and begins to\r\nexplore other parts of the graph. The algorithm keeps track of visited nodes,\r\nso that it processes each node only once."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "When implementing DFS, we often use a recursive function to visit the vertices and an array to store whether we've seen a vertex before."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 81,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-bfs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bfs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "BFS"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 202,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: "In a breadth-first search, we travel through the vertices in order of their distance from the starting vertex."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 236,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-prerequisite---queues--deques",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-prerequisite---queues--deques",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Prerequisite - Queues & Deques"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 242,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-queues",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-queues",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Queues"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 249,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A queue is a First In First Out (FIFO) data structure that supports three\r\noperations, all in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 20
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 251,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-deques",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-deques",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Deques"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 325,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "deque"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 3
      }, this), " (usually pronounced \"deck\") stands for double ended queue and is a\r\ncombination of a stack and a queue, in that it supports ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 328,
        columnNumber: 57
      }, this), "\r\ninsertions and deletions from both the front and the back of the deque. Not very\r\ncommon in Bronze / Silver."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 327,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 387,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "When implementing BFS, we often use a queue to track the next vertex to visit. Like DFS, we'll also keep an array to store whether we've seen a vertex before."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 389,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---building-roads",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---building-roads",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Building Roads"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 522,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that each edge decreases the number of connected components by either zero\r\nor one. So you must add at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 525,
        columnNumber: 34
      }, this), " edges, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 525,
        columnNumber: 53
      }, this), " is the number of\r\nconnected components in the input graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 524,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 528,
        columnNumber: 12
      }, this), ", iterate through each node. If it has not been visited,\r\nvisit it and all other nodes in its connected component using\r\nDFS or BFS. Then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 530,
        columnNumber: 18
      }, this), " equals the number of times we perform the visiting\r\noperation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 528,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["There are many valid ways to pick ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 533,
        columnNumber: 35
      }, this), " new roads to build. One way is to choose\r\na single representative from each of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 534,
        columnNumber: 42
      }, this), " components and link them together\r\nin a line."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 533,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-dfs-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dfs-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "DFS Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 537,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-an-issue-with-deep-recursion",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-an-issue-with-deep-recursion",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "An Issue With Deep Recursion"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 693,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If you run the solution code locally on the line graph generated by the following Python code:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 695,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-py",
        children: "n = 100000\r\nprint(n, n - 1)\r\nfor i in range(1, n):\r\n\tprint(i, i + 1)\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 697,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 697,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-bfs-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bfs-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "BFS Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 757,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-connected-component-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-connected-component-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Connected Component Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 904,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---building-teams",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---building-teams",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Building Teams"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 908,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "For each connected component, we can arbitrarily label a node and then run DFS or BFS.\r\nEvery time we visit a new (unvisited) node, we set its color based on the edge rule.\r\nWhen we visit a previously visited node, check to see whether its color matches the edge rule."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 923,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-dfs-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dfs-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "DFS Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 927,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-bfs-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bfs-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "BFS Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The specifics of the algorithm are almost exactly the same; it's just that we\r\ndo them in an iterative rather than recursive fashion."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1122,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-graph-two-coloring-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-graph-two-coloring-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Graph Two-Coloring Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1291,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-quiz",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-quiz",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Quiz"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1295,
      columnNumber: 1
    }, this)]
  }, undefined, true, {
    fileName: "<source.js>",
    lineNumber: 1,
    columnNumber: 1
  }, this);
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsxDEV(MDXLayout, {
    ...props,
    children: _jsxDEV(_createMdxContent, {
      ...props
    }, undefined, false, {
      fileName: "<source.js>"
    }, this)
  }, undefined, false, {
    fileName: "<source.js>"
  }, this) : _createMdxContent(props);
}
return {
  default: MDXContent
};
function _missingMdxReference(id, component, place) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it." + (place ? "\nIt’s referenced in your code at `" + place + "`" : ""));
}
