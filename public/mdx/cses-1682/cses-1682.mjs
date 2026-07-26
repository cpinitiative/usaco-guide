"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h1, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The theorem being used here is that if one vertex can both reach and ", _jsxDEV(_components.strong, {
        children: "be reached"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 70
      }, this), " by\r\nall others, then every vertex in this graph can reach all others."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's say ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{can[u][v]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 11
      }, this), " is true if you can go from vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 66
      }, this), " to vertex\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), " through a series of edges. Additionally, let's define the directed graph\r\ngiven in the statement as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 27
      }, this), " and the reverse of it (where an edge\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u \\rightarrow v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), " becomes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v \\rightarrow u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 27
      }, this), ") as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 49
      }, this), ". Then, if\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{can[1][x]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq x \\leq n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 26
      }, this), " in both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 52
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 60
      }, this), ", the answer is\r\n\"YES\"."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{can[1][x]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 12
      }, this), ", we can run a dfs from from vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 68
      }, this), " and check\r\nif you can reach vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 25
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\leq x \\leq n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 37
      }, this), ". If we can't, then print\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 5
      }, this), " if you're running the DFS on ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 38
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 46
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 50
      }, this), " otherwise."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-proof",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-proof",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Proof"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's do a proof by contradiction. Assume that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{can[1][x]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 48
      }, this), " is true for\r\nall vertices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 14
      }, this), " in both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 26
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 34
      }, this), ", and there exists a pair of vertices\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u, v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{can[u][v]} = \\texttt{false}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 18
      }, this), ". Since\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{can[1][u]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), " is true in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 33
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{can[u][1]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 44
      }, this), " must be true in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), ". Additionally, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{can[1][v]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 20
      }, this), " must be true in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 57
      }, this), ". So, you can travel\r\nfrom ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u \\rightarrow 1 \\rightarrow v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 6
      }, this), ", which contradicts the statement that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{can[u][v]} = \\texttt{false}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), ". Thus, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{can[u][v]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 46
      }, this), " is true for\r\nall vertices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u, v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 14
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h1, {
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
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The problem can also be solved using ", _jsxDEV(_components.a, {
        href: "/adv/SCC",
        children: "strongly connected components (SCC)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 221,
        columnNumber: 38
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 221,
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
