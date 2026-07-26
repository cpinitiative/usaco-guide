"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
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
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_{i,j}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 5
      }, this), " be the maximum number of continuous free cells on line ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 70
      }, this), " starting from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 88
      }, this), " to the right.\r\nThis can be precomputed.\r\nSimilarly to ", _jsxDEV(_components.a, {
        href: "https://cses.fi/problemset/task/1147",
        rel: "nofollow",
        target: "_blank",
        children: "Maximum Building I"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 14
      }, this), ", we can also apply monotonic stacks to find"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "u_{i, j}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 4
        }, this), ", the last line above ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 36
        }, this), " with cell ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(x, j)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 50
        }, this), " such that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r_{x, j} > r_{i, j}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 69
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "d_{i, j}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 4
        }, this), ", the last line under ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 36
        }, this), " with cell ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(y, j)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 50
        }, this), " such that ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r_{y, j} \\ge r_{i, j}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 69
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can efficiently update the answer matrix with ", _jsxDEV(_components.a, {
        href: "/silver/more-prefix-sums#2d-prefix-sums",
        children: "prefix sums"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 50
      }, this), "\r\nand ", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/78762",
        rel: "nofollow",
        target: "_blank",
        children: "difference arrays"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 5
      }, this), ".\r\nHaving ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_{i,j}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 8
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u_{i,j}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 19
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_{i,j}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 33
      }, this), " precomputed, we know the upper bound\r\nand the lower bound of the rectangle of width ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_{i,j}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 47
      }, this), ",\r\ni.e. how much it can expand above and below line ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 50
      }, this), " maintaining width ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r_{i, j}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 72
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We'll do difference arrays on each column independently.\r\nAccordingly, the updates of the answer matrix look like this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["increment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{ans}[1][r_{i,j}]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 13
        }, this), " by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 43
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["decrement ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{ans}[i - u_{i, j} + 2][r_{i,j}]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 13
        }, this), " by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 58
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["decrement ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{ans}[d_{i,j} - i + 2][r_{i, j}]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 13
        }, this), " by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 58
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["increment ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{ans}[d_{i,j} - u_{i,j} + 3][r_{i,j}]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 13
        }, this), " by ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 63
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finally, we add ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ans[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 17
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ans[i][j-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 32
      }, this), " i.e. a submatrix of size\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\times j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), " contains a submatrix of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\times (j-1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 43
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
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
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\cdot M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
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
