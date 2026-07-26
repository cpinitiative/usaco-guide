"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://usaco.org/current/data/sol_cownav_gold_jan17.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (Java)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In this problem, Bessie stands on a grid and wants to go from the lower left\r\ncorner to upper-right corner in as few moves as possible. An initial idea could\r\nbe to model the grid as a graph, where adjacent cells are connected by edges,\r\nand run a BFS to find the shortest path."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "However, two additional constraints play a role in this problem: Bessie must be\r\nable to reach the destination regardless of which direction she starts in, and\r\nshe can only move in the direction she is facing."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's imagine now that there are two cows standing on the cell ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1, 1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 64
      }, this), ", and\r\nboth of them move the same way on each operation. Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N \\leq 20"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 57
      }, this), ", we can\r\nmodify the original graph to support this new problem. Let's create a new graph\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), " as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For each pair of cells in the grid, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 37
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x_2, y_2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 50
      }, this), ", add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "16"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 68
      }, this), " nodes in\r\nthe graph storing six parameters each:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 3
        }, this), " coordinate of cow ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 23,
          columnNumber: 25
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 3
        }, this), " coordinate of cow ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 25
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 3
        }, this), " coordinate of cow ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 25
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 3
        }, this), " coordinate of cow ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 25
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["direction of cow ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 20
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["direction of cow ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 20
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4 ^ 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 9
      }, this), " directions each cow could be facing."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Given this new graph, we add edges between two \"states\" which are reachable from\r\neach other. For example, if we apply the \"turn left\" operation, we add an edge\r\nto the state where both cows directions turn left."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["On this new graph, we can directly run a BFS, and retrieve the answer at the\r\nstate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\{N, N, N, N, x, y\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 7
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 36
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 44
      }, this), " represent directions."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^{4})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
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
