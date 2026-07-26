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
    children: [_jsxDEV(_components.h2, {
      id: "user-content-unweighted-shortest-path",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-unweighted-shortest-path",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Unweighted Shortest Path"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---message-route",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---message-route",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Message Route"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(V+E)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can observe is that there are many possible shortest paths to output.\r\nFortunately, the problem states that we can print any valid solution. Notice\r\nthat like every other BFS problem, the distance of each node increases by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 75
      }, this), "\r\nwhen we travel to the next level of unvisited nodes. However, the problem\r\nrequires that we add additional information - in this case, the path. When we\r\ntraverse from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 20
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 27
      }, this), ", we can set the parent of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 57
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 64
      }, this), ". After the\r\nBFS is complete, this allows us to backtrack through the parents which\r\nultimately leads us to our starting node. We know to terminate at node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 72
      }, this), "\r\nbecause it's the starting node. If there is no path to our end node, then its\r\ndistance will remain at\r\n", _jsxDEV(_components.a, {
        href: "https://en.cppreference.com/w/c/types/limits",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "INT_MAX"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 2
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For the test input, we start with the following parent array."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["After visiting children of node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 33
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["After visiting node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 21
      }, this), " from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 35
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["To determine the path, we can backtrack from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n \\rightarrow 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 121,
        columnNumber: 51
      }, this), ", in this\r\ncase ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5 \\rightarrow 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 6
      }, this), ", pushing each value that we backtrack into a vector. The\r\npath we take is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "5 \\rightarrow \\texttt{parent}[5]=4 \\rightarrow \\texttt{parent}[4] =1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 1
      }, this), " which\r\ncorresponds to the vector ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[5, 4, 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 27
      }, this), ". We break at node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 57
      }, this), " because it was the\r\ninitial starting node. Finally, we reverse the vector and print out its length\r\n(in this case, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 16
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 121,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-extension---01-bfs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-extension---01-bfs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Extension - 0/1 BFS"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 297,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A 0/1 BFS finds the shortest path in a graph where the weights on the edges can\r\nonly be 0 or 1, and runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(V + E)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 302,
        columnNumber: 29
      }, this), " using a deque. Read the\r\nresource below for an explanation of how the algorithm works."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 301,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---tracks-in-the-snow",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---tracks-in-the-snow",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Tracks in the Snow"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 311,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 313,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(NM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 313,
        columnNumber: 17
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 313,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can use the following greedy strategy to find our answer:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 315,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Run flood fill to find each connected component with the same tracks."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 317,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Construct a graph where the nodes are the connected components and there are\r\nedges between adjacent connected components."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 318,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The answer is the maximum distance from the node containing ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(1, 1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 320,
          columnNumber: 63
        }, this), " to\r\nanother node. We can use BFS to find this distance."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 320,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 317,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For a detailed proof of why this works, see\r\n", _jsxDEV(_components.a, {
        href: "https://boi.cses.fi/tasks.php",
        rel: "nofollow",
        target: "_blank",
        children: "the official editorial"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 324,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 323,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Although this gives us an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(NM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 326,
        columnNumber: 27
      }, this), " solution, there is a simpler solution\r\nusing 0/1 BFS!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 326,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider the graph with an edge between each pair of adjacent cells with tracks,\r\nwhere the weight is 0 if the tracks are the same and 1 otherwise. The answer is\r\nsimply the longest shortest-path from the top left cell. This is because going\r\nfrom one track to another same one is like not leaving a node (hence the cost is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 333,
        columnNumber: 1
      }, this), "), while going from one track to a different one is like traversing the edge\r\nbetween two nodes (hence the cost is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 334,
        columnNumber: 38
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 329,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since the weight of each edge is either 0 or 1 and we want the shortest paths\r\nfrom the top left cell to each other cell, we can apply 0/1 BFS. The time\r\ncomplexity of this solution is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(NM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 338,
        columnNumber: 32
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 336,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 543,
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
