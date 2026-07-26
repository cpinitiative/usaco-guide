"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "To review a couple of terms:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["An ", _jsxDEV(_components.strong, {
          children: "undirected edge"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 6
        }, this), " is an edge that goes both ways"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "connected graph"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 5
        }, this), " is a graph of vertices such that each vertex can reach\r\nevery other vertex using undirected edges."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "spanning tree"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 5
        }, this), " is a set of edges that forms a tree and contains every\r\nvertex in the original graph"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "minimum spanning tree"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 5
        }, this), " is a spanning tree such that the sum of edge\r\nweights are minimized"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-kruskals",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-kruskals",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Kruskal's"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Kruskal's Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), " finds the MST by greedily adding edges. For all edges\r\nnot yet in the MST, we can repeatedly add the edge of minimum weight to the MST\r\nexcept when adding edges that would forms a cycle. This can be done by sorting\r\nthe edges in order of non-decreasing weight."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Furthermore, we can determine whether adding an edge will create a cycle in\r\nconstant time using a ", _jsxDEV(_components.a, {
        href: "/gold/dsu",
        children: "DSU"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 23
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that since the most expensive operation is sorting the edges,\r\nthe computational complexity of Kruskal's Algorithm is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(E \\log E)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 56
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's an animation of how the algorithm works:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---road-reparation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---road-reparation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Road Reparation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice that the road that allows for a \"decent route between any two cities,\"\r\nwith cost \"as small as possible\" is the definition of a minimum spanning tree.\r\nThus, we can use our favorite minimum spanning tree algorithm to determine the\r\ncost of such a tree by calculating ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 36
      }, this), " for all edges included in the tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, we must also account for the impossible case, which occurs when any\r\nnodes cannot be connected to the tree. Recall that the minimum spanning tree\r\nmust contain a total of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 25
      }, this), " edges, so we can use a variable ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "cnt"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 63
      }, this), " that is\r\nincremented every time we add an edge to the minimum spanning tree. After\r\nrunning Kruskal's, if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "cnt \\ne n-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 23
      }, this), ", then we know that we failed to built the\r\ntree properly. Furthermore, since our minimum spanning tree algorithm guarantees\r\nno edges are counted twice, we cannot \"accidentally\" count ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 60
      }, this), " edges."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-prims",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-prims",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Prim's"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 305,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Similar to Dijkstra's, ", _jsxDEV(_components.strong, {
        children: "Prim's algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 317,
        columnNumber: 24
      }, this), " greedily adds vertices. On each\r\niteration, we add the vertex that is closest to the current MST (instead of\r\nclosest to the source in Dijkstra's) until all vertices have been added."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 317,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The process of finding the closest vertex to the MST can be done efficiently\r\nusing a priority queue. After removing a vertex, we add all of its neighbors\r\nthat are not yet in the MST to the priority queue and repeat. To begin the\r\nalgorithm, we simply add any vertex to the priority queue."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 321,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-complexity",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-complexity",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Complexity"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 326,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Our implementation has complexity ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(E \\log E)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 328,
        columnNumber: 35
      }, this), " since in the worst\r\ncase every edge will be checked and its corresponding vertex will be added to\r\nthe priority queue."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 328,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Alternatively, we may linearly search for the closest vertex instead of using a\r\npriority queue. Each linear pass runs in time ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(V)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 333,
        columnNumber: 47
      }, this), ", and this must be\r\nrepeated ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 334,
        columnNumber: 10
      }, this), " times. Thus, this version of Prim's algorithm has complexity\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(V^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 335,
        columnNumber: 1
      }, this), ". As with Dijkstra, this complexity is preferable for dense\r\ngraphs (in which ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E \\approx V^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 336,
        columnNumber: 18
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 332,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---road-reparation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---road-reparation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Road Reparation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 338,
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
      lineNumber: 549,
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
