"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "Suppose we want to support the following operations on a tree:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Update all nodes along the path from node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 47
        }, this), " to node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 4,
          columnNumber: 59
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Query the sum, maximum, minimum, or any other operation that satisfies the associative property along the path from node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 126
        }, this), " to node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 5,
          columnNumber: 138
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Heavy Light Decomposition (HLD) supports both of these operations efficiently. Naively performing these operations can be slow on large trees, but HLD decomposes the tree into paths to allow updates and queries in logarithmic time."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-tutorial",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-definitions",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-definitions",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Definitions"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "heavy child"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 39,
          columnNumber: 5
        }, this), " of a node is the child with the largest subtree size rooted\r\nat the child."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "light child"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 5
        }, this), " of a node is any child that is not the ", _jsxDEV(_components.strong, {
          children: "heavy child"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 60
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "heavy edge"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 5
        }, this), " connects a node to its ", _jsxDEV(_components.strong, {
          children: "heavy child"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 43
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "light edge"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 43,
          columnNumber: 5
        }, this), " connects a node to any of its ", _jsxDEV(_components.strong, {
          children: "light children"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 43,
          columnNumber: 50
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "heavy path"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 5
        }, this), " is a ", _jsxDEV(_components.strong, {
          children: "maximal"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 25
        }, this), " and contiguous path formed by ", _jsxDEV(_components.strong, {
          children: "only heavy edges"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 67
        }, this), ". The set of all ", _jsxDEV(_components.strong, {
          children: "heavy paths"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 44,
          columnNumber: 104
        }, this), " spans every node in the tree.\r\n", _jsxDEV(_components.em, {
          children: ["Note that there is no notion of ", _jsxDEV(_components.strong, {
            children: "\"light paths\""
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 45,
            columnNumber: 34
          }, this), " in HLD; ", _jsxDEV(_components.strong, {
            children: "light edges"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 45,
            columnNumber: 60
          }, this), " simply connect heavy paths to each other."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 1
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-properties",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-properties",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Properties"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["Any path from node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 22
        }, this), " to node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 34
        }, this), " on the tree can pass through at most\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(\\log N)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 3
        }, this), " light edges."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["A heavy path can only be broken by crossing a light edge; otherwise, the heavy path would simply continue on. Because of this, we know there are at most ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 154
      }, this), " heavy paths on\r\nany path from an arbitrary node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 33
      }, this), " to an arbitrary node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 58
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Additionally, by using a ", _jsxDEV(_components.a, {
        href: "/gold/PURS#segment-tree",
        children: "Segment Tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 26
      }, this), " (or similar structure), we can process queries on a contiguous segment of any heavy chain in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 159
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since the process requires performing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 39
      }, this), " Segment Tree operations, the total time for a path query or update is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log N) \\times \\mathcal{O}(\\log N) = \\mathcal{O}(\\log^2 N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 131
      }, this), ".\r\nTherefore, we can answer ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Q"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 26
      }, this), " queries in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(Q \\log^2 N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 41
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's an animation of how the algorithm works:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 69,
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
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Below is an example implementation of Heavy Light Decomposition based on the resources above. See the solution below, as well as the solutions for ", _jsxDEV(_components.a, {
        href: "/problems/hr-subtrees--paths/solution",
        children: "Subtrees & Paths"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 148
      }, this), " and ", _jsxDEV(_components.a, {
        href: "/problems/spoj-query-on-a-tree-again/solution",
        children: "Query on a tree again!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 210
      }, this), ", for examples of how this implementation can be used."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-path-queries-ii",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-path-queries-ii",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Path Queries II"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 187,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can label each edge as either heavy or light, then use a segment tree to keep track of the maximum value in each heavy chain."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 189,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, to change the value at node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 34
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 41
      }, this), ", we can just update the value in the segment tree. To query the maximum value in the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 140
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 147
      }, this), ", we first find the ", _jsxDEV(_components.a, {
        href: "/gold/tree-euler#lca",
        children: "Lowest Common Ancestor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 170
      }, this), ". We combine the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 243
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "lca(a,b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 250
      }, this), " and the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 279
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "lca(a,b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 286
      }, this), " to find our answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 191,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 193,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 22
      }, this), " per query"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 195,
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
      lineNumber: 340,
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
