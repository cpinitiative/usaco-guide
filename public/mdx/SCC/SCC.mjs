"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h1, {
      id: "user-content-strongly-connected-components-sccs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-strongly-connected-components-sccs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Strongly Connected Components (SCCs)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The definition of a kingdom in this problem is equivalent to the definition of a\r\nstrongly connected component. We can compute these components using either\r\n", _jsxDEV(_components.strong, {
        children: "Kosaraju's"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), " or ", _jsxDEV(_components.strong, {
        children: "Tarjan's"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 19
      }, this), " algorithms, both of which are described below."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-kosarajus-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-kosarajus-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Kosaraju's Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In the first phase, the algorithm performs a depth-first search (DFS) on the original graph to determine the exit times of vertices; that is, the node that is processed last will be at the top of the stack (reverse topological sort). As each vertex finishes processing, it is pushed onto a stack. In the next phase, nodes are processed off the stack in the order of their decreasing finish times. This ordering will be used in the second phase."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In the second phase, the algorithm conducts another DFS, this time on the transposed graph, where all edges are reversed. The DFS processes nodes according to the order defined by the stack from the first phase. By reversing the edges and following this specific order, each DFS run in this phase can identify all vertices of one SCC before moving on to the next."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We know that the transposed graph will have the same strongly connected components (SCCs) as the original because reversing an edge doesn't change the reachability within the components. Since each SCC is both maximal and disjoint. This means that within an SCC, every pair of vertices is mutually reachable; you can get from any vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 338
      }, this), " to any other vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 362
      }, this), ", and vice versa. The term \"maximal\" indicates that you can't add any more vertices to an SCC without losing its strongly connected property. Furthermore, SCCs are disjoint, which means that no vertex can belong to more than one SCC. If a vertex were part of two SCCs, those SCCs would actually merge into a single, larger SCC. Therefore, reversing edges doesn't affect the undirected connections in the original graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["During the second DFS, we process the vertices in the order determined by the stack from the first phase. This ensures that we start with the vertex that finished last in the initial DFS, which is guaranteed to be part of an SCC with no outgoing edges to other SCCs — essentially making it a \"", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Sink_(computing)#:~:text=In%20graph%20theory,-Main%20article%3A%20Directed&text=In%20a%20Directed%20acyclic%20graph,neural%20networks%20and%20data%20compression.",
        rel: "nofollow",
        target: "_blank",
        children: "sink"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 294
      }, this), "\" in the transposed graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By processing the vertices in this specific order, we fully explore all vertices within the current SCC before moving on to the next one. SCCs are maximal subgraphs where every vertex can reach every other vertex within the same subgraph, so the DFS will traverse through all nodes in an SCC, isolating it completely. Once the entire SCC is processed, we move to the next highest exit time vertex that hasn’t been visited yet, ensuring that each SCC is handled independently and thoroughly, so no vertices from another SCC will be mistakenly included in the current one."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For visualization, refer to the TopCoder resource mentioned ", _jsxDEV(_components.a, {
        href: "https://www.topcoder.com/thrive/articles/kosarajus-algorithm-for-strongly-connected-components",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 61
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N+M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-tarjans-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tarjans-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tarjan's Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 251,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 266,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 268,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N+M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 268,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 268,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 362,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h1, {
      id: "user-content-2-sat",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-2-sat",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "2-SAT"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 366,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 376,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 378,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The CSES problem already gives us a boolean formula in conjunctive normal form\r\n(CNF) that consists of a series of logical OR clauses ANDed together like so:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 380,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(\\lnot x_1 \\lor x_2) \\land (x_1 \\lor \\lnot x_2) \\land (\\lnot x_1 \\lor \\lnot x_2) \\land (x_1 \\lor \\lnot x_3)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 383,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Before we proceed, try linking this to graph theory. Hint: represent a variable\r\nand its negation with two nodes."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 387,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-construction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-construction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Construction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 390,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Like the hint says, we can construct a graph with each variable having two\r\nnodes: one for itself and one for its negation. We're going to try to proceed by\r\nassigning each node a truth value. Note that the value of one of the variable's\r\nnodes determines the other, since if we know the value of one node, the other is\r\nthe negation of that value."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 392,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, for each clause ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a \\lor b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 398,
        columnNumber: 22
      }, this), ", we add two directed edges:\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lnot a \\rightarrow b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 399,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\lnot b \\rightarrow a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 399,
        columnNumber: 29
      }, this), ". What this means for us is\r\nthat if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 400,
        columnNumber: 9
      }, this), " was false, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 400,
        columnNumber: 29
      }, this), " must be true, and vice versa."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 398,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "With these edges, an SCC implies a group of values that all have to have the\r\nsame truth value."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 402,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solving-the-graph",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solving-the-graph",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solving the Graph"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 405,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The only way for there to be an impossible assignment of truth values is if a\r\nnode and its negation are in the same SCC, since this means that a boolean and\r\nits negation have to both be true, which is impossible."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 407,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If the graph is consistent and there are no impossible configurations, we can\r\nstart assigning truth values, starting from the SCCs that have no outgoing edges\r\nto other SCCs and proceeding backwards. With the initial SCCs, we set them all\r\nto true. As for other SCCs, if a value has already been assigned due to its\r\nnegation being in a previously processed component, we have to assign all other\r\nvalues in the component to that value."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 411,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Due to\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/2-satisfiability#Strongly_connected_components",
        rel: "nofollow",
        target: "_blank",
        children: "certain properties about the graph we've constructed"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 419,
        columnNumber: 1
      }, this), ",\r\nwe can guarantee that the resulting assignment of the variables does not have\r\nany \"true\" SCCs leading to \"false\" SCCs. A proof of this is beyond the scope of\r\nthis module."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 418,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 424,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We use Tarjan's algorithm as it already provides us with a topological order to\r\nprocess the nodes in. However, it is also possible to use Kosaraju's algorithm."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 426,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 429,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N+M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 429,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 429,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-problems-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 587,
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
