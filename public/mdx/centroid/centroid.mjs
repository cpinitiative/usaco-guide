"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
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
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-centroids",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-centroids",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Centroids"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "centroid"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 3
      }, this), " of a tree is defined as a node such that when the tree is rooted\r\nat it, no other nodes have a subtree of size greater than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{N}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 59
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["We can find a centroid in a tree by starting at the root. Each step, loop\r\nthrough all of its children. If all of its children have subtree size less than\r\nor equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{N}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 13
      }, this), ", then it is a centroid. Otherwise, move to the child\r\nwith a subtree size that is more than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{N}{2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 39
      }, this), " and repeat until you find a\r\ncentroid."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-centroid-decomposition",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-centroid-decomposition",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Centroid decomposition"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 205,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Centroid Decomposition"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 1
      }, this), " is a divide and conquer technique for trees.\r\n", _jsxDEV(_components.strong, {
        children: "Centroid Decomposition"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 210,
        columnNumber: 1
      }, this), " works by repeated splitting the tree and each of the\r\nresulting subgraphs at the centroid, producing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 48
      }, this), " layers of\r\nsubgraphs."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 209,
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
      lineNumber: 281,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "General centroid code is shown below."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 283,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---xenia--tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---xenia--tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Xenia & Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 398,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For every node, there are at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\log N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 400,
        columnNumber: 35
      }, this), " centroid components that include this\r\nnode, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 401,
        columnNumber: 13
      }, this), " denotes the number of nodes. Let's call the centroid whose\r\ncomponent contains one node the centroid ancestor of this node. Also note that\r\nthe path between every two nodes in the tree must include one of their common\r\ncentroid ancestors, since the tree is being split into subtrees with the\r\ncentroids as their respective roots. If we store the distance to the nearest red\r\nnode for every centroid, we can query the minimal distance between any node and\r\nthe nearest red node by calculating the minimum distance between the node and\r\none of its centroid ancestors with the minimal distance from that centroid to a\r\nred node. To paint a node red, we just update all centroid ancestors of this\r\nnode. Both operations can be done in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O} (\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 410,
        columnNumber: 38
      }, this), " time, as there are\r\nat most that many centroid ancestors for one node."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 400,
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
      lineNumber: 551,
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
