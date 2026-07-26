"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O((K + N) \\sqrt N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 22
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's consider two naive solutions and try to combine them! (In general, this is\r\na good idea for square-root-decomposition problems.)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-naive-solution-1---slow-update-fast-query",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-naive-solution-1---slow-update-fast-query",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Naive solution 1 - slow update; fast query"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Keep an array that stores the number of containers on each position. When we\r\nprocess a crane, we can simply increment the positions that it puts containers\r\non."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Querying the final answer only takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 38
      }, this), " time, but processing all of\r\nthe cranes can potentially take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(KN)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 33
      }, this), " time in total."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This solution would work well if ", _jsxDEV(_components.strong, {
        children: ["all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 40
        }, this), " were large"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 34
      }, this), ", as processing each\r\ncrane takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N / d_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 13
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-naive-solution-2---fast-update-slow-query",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-naive-solution-2---fast-update-slow-query",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Naive solution 2 - fast update; slow query"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[x][y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 5
      }, this), " denote the prefix sum of the number of cranes with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_i = y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 67
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\equiv a_i \\pmod{y}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), ". When we process a crane, we change exactly two values\r\nin the DP array. The answer for position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 42
      }, this), " is simply"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{y = 0}^{\\max(d_i)} \\sum_{x \\leq p \\land x \\equiv p \\pmod{y}}dp[x][y]."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Processing all of the cranes now only takes only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(K)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 50
      }, this), " time, but\r\nquerying the final answer can potentially take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(NK)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 48
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This solution would work well if ", _jsxDEV(_components.strong, {
        children: ["all ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d_i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 32,
          columnNumber: 40
        }, this), " were small"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 34
      }, this), ", as we querying the\r\nsolution takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\cdot \\max(d_i))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 16
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-model-solution---fastish-update-fastish-query",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-model-solution---fastish-update-fastish-query",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Model solution - fast(ish) update; fast(ish) query"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d_i \\geq \\sqrt N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 6
      }, this), ", then apply solution 1. Otherwise, apply solution 2."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "After processing all the cranes, we can simply add the results from the two\r\nsolutions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\n#define FOR(i, x, y) for (int i = x; i < y; i++)\r\nusing namespace std;\r\n\r\nconst int sqrt_n = 300;\r\nint containers[100001];\r\nint dp[100001 + sqrt_n][sqrt_n];\r\n\r\nint main() {\r\n\tiostream::sync_with_stdio(false);\r\n\tcin.tie(0);\r\n\tint n, k;\r\n\tcin >> n >> k;\r\n\twhile (k--) {\r\n\t\tint a, l, d;\r\n\t\tcin >> a >> l >> d;\r\n\t\tif (d >= sqrt_n) FOR(i, 0, l) containers[a + i * d]++;\r\n\t\telse {\r\n\t\t\tdp[a][d]++;\r\n\t\t\tdp[a + (l * d)][d]--;\r\n\t\t}\r\n\t}\r\n\r\n\tFOR(j, 1, sqrt_n) FOR(i, j, n + 1) dp[i][j] += dp[i - j][j];\r\n\r\n\tFOR(i, 1, n + 1) {\r\n\t\tFOR(j, 1, sqrt_n) containers[i] += dp[i][j];\r\n\t\tcout << containers[i] << ' ';\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 42,
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
