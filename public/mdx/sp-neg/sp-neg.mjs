"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-bellman-ford",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bellman-ford",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Bellman-Ford"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-shortest-paths",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-shortest-paths",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Shortest Paths"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Although this is a Single Source Shortest Paths problem, we can not use the known\r\nDijkstra's algorithm, because we have negative weights on edges. An alternative is\r\nto use the Bellman-Ford algorithm. The algorithm first considers all the paths\r\nwhich use 1 edge. Then it calculates all the paths with at most 2 edges, and so\r\non. If the graph has no negative cycle, then the shortest path between the source\r\nand any other vertex should have at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 42
      }, this), " edges, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 61
      }, this), " stands for the number\r\nof vertices in the graph. Because of that, the algorithm iterates through at most\r\nall edges ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 11
      }, this), " times. Hence, it runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(E \\cdot V)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 42
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If the graph has a negative cycle, we can detect a vertex in this cycle by running\r\nanother relaxation. In this problem, belonging to a negative cycle means the\r\ndistance to that point is negative infinity. Notice that all points that are reachable\r\nfrom those will also have minus infinity cost. In the solution below, we detect\r\nall the negative cycles and save the point from which we detected the cycle. We then\r\ndo a ", _jsxDEV(_components.a, {
        href: "/silver/graph-traversal",
        children: "BFS"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 6
      }, this), " with those points as sources."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
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
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\cdot M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-finding-negative-cycles",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-negative-cycles",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding Negative Cycles"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 192,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As mentioned in\r\n", _jsxDEV(_components.a, {
        href: "https://cp-algorithms.com/graph/finding-negative-cycle-in-graph.html",
        rel: "nofollow",
        target: "_blank",
        children: "cp-algorithms"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 1
      }, this), ",\r\nwe relax the edges N times. If we perform an update on the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 60
      }, this), "th iteration,\r\nthere is an negative cycle."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 194,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-simple-linear-programming",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-simple-linear-programming",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Simple Linear Programming"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 408,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["You can also use shortest path algorithms to solve the following problem (a very\r\nsimple ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Linear_programming",
        rel: "nofollow",
        target: "_blank",
        children: "linear program"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 411,
        columnNumber: 8
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 410,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["Given variables ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x_1,x_2,\\ldots,x_N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 413,
          columnNumber: 19
        }, this), " with constraints in the form\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x_i-x_j\\ge c"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 414,
          columnNumber: 3
        }, this), ", compute a feasible solution."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 413,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 413,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-resources",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resources",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 416,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
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
      lineNumber: 428,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Timeline (USACO Camp):"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 430,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["equivalent to\r\n", _jsxDEV(_components.a, {
          href: "http://www.usaco.org/index.php?page=viewproblem2&cpid=1017",
          rel: "nofollow",
          target: "_blank",
          children: "Timeline (Gold)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 433,
          columnNumber: 3
        }, this), "\r\nexcept ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N,C\\le 5000"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 434,
          columnNumber: 10
        }, this), " and negative values of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 434,
          columnNumber: 47
        }, this), " are possible."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 432,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 432,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-floyd-warshall",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-floyd-warshall",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Floyd-Warshall"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 438,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation---apsp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation---apsp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation - APSP"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 448,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 585,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-modified-dijkstra",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-modified-dijkstra",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Modified Dijkstra"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 589,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The Dijkstra code presented ", _jsxDEV(_components.a, {
        href: "/gold/shortest-paths#mathcalomlog-n-implementation",
        children: "earlier"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 593,
        columnNumber: 29
      }, this), "\r\nwill still give correct results if there are no negative cycles. However, the\r\nsame running time bound no longer applies, as demonstrated by subtasks 1-6 of\r\nthe following problem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 593,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "This problem forces you to analyze the inner workings of the three shortest-path\r\nalgorithms we presented here. It also teaches you about how problemsetters could\r\ncreate hack cases!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 600,
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
