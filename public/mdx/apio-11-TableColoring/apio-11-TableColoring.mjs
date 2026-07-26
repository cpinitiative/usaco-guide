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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
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
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-tldr",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tldr",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "TL;DR"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we view the grid as a graph, we get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 40
      }, this), " connected components. The answer is\r\nthen either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{K - 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 13
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 28
      }, this), " and we use DSU or DFS to determine which one it\r\nis."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-intuition",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-intuition",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Intuition"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(x, y) = 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 5
      }, this), " if the cell ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 31
      }, this), " is blue and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 52
      }, this), " otherwise. For\r\nconvenience, also add a row 0 and column 0."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Firstly, notice that if we already know the color of 3 cells in a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2 \\times 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 67
      }, this), "\r\ntable, then we also know the last color."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "From this, we get the recurrence"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(x, y) = \\lnot (c(x - 1, y - 1) \\oplus c(x - 1, y) \\oplus c(x, y - 1))"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x, y > 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 9
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "After analysing this recurrence, we find that we actually have"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "c(x, y) = (c(0, 0) \\oplus c(0, y) \\oplus c(x, 0) \\oplus ((x \\cdot y) \\% 2))"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["I made a\r\n", _jsxDEV(_components.a, {
        href: "https://docs.google.com/spreadsheets/d/1cSNyb3wBq39R2FsSD-kuPpfBsLXCVxSXKsqllo2sUs0/edit?usp=sharing",
        rel: "nofollow",
        target: "_blank",
        children: "helpful spreadsheet"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), "\r\nfor you to visualise this."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-counting-the-colorings",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-counting-the-colorings",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Counting the colorings"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Without loss of generality, let the cell ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(0, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 42
      }, this), " be red (since its color\r\ndoesn't change the answer). This means that without any already-colored cells,\r\nall cells ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 11
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(0, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 24
      }, this), " are independent."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, an already-colored cell ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 34
      }, this), " makes the 2 cells ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 61
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(0, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this), " depend on each other."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "View the grid as a graph:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["All cells ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(x, 0)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 47,
          columnNumber: 13
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(0, y)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 47,
          columnNumber: 26
        }, this), " are nodes."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["For each already-colored cell ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(x, y)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 33
        }, this), ", add an edge between ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(x, 0)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 63
        }, this), " and\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(0, y)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 3
        }, this), " with weight ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "c(x, 0) \\oplus c(0, y)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 24
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This creates ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 14
      }, this), " connected components. The answer is thus either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^{K - 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 66
      }, this), " or\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 1
      }, this), ". This is because each node in a connected component is dependent on the\r\nother nodes in that component and all connected components are independent. If\r\nit simply isn't possible to color the table, the answer is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 60
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-checking-whether-the-answer-is-0",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-checking-whether-the-answer-is-0",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Checking Whether the Answer is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 36
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This problem then becomes checking whether there is an cycle with odd weight\r\nin the resulting graph, which we can answer efficiently using DSU or DFS."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["One way to implement this is as follows. Since each already-colored cell\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 1
      }, this), " determines whether the colors of the cells ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(x, 0)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 53
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(0, y)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 66
      }, this), " are\r\nthe same, we can instead split each node in our graph into 2 nodes (one for\r\neach color) and create edges between nodes with consistent colors.\r\nThe answer is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 15
      }, this), " if two new nodes corresponding to the same original node\r\nare in the same connected component."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+M+K)\\log (N+M+K))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
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
