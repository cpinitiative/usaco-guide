"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-slow-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-slow-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Slow Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["See ", _jsxDEV(_components.a, {
        href: "/gold/paths-grids#solution---longest-common-subsequence",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 5
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-efficient-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-efficient-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Efficient Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 8
      }, this), " solution, we increase the DP array only if\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[i] = b[j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), ", but since both arrays are permutations of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 65
      }, this), ", for each\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), ", there must be only one matching element in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 52
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let us create an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "pos"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 24
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "pos[x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 36
      }, this), " is the index of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 61
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 68
      }, this), "\r\n(", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[pos[x]] = x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 2
      }, this), "). Then, we can create another array, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 55
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 65
      }, this), " stores\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "pos[b[i]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice that every increasing subsequence ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x_{1 \\dots k}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 42
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 61
      }, this), " corresponds to a\r\ncommon subsequence between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 28
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 36
      }, this), ". Increasing subsequence\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c[x_1], c[x_2], \\dots c[x_k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), " corresponds to the the common subsequence\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b[x_1], b[x_2], \\dots b[x_k]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), ", which is equivalent to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a[c[x_1]], a[c[x_2]], \\dots a[c[x_k]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), ". Thus, the length of the longest common\r\nsubsequence between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 21
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 29
      }, this), " is the longest increasing subsequence of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 74
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
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
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
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
