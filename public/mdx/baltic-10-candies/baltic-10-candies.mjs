"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://boi.cses.fi/files/boi2010_solutions.zip",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The official solution runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(BN^2 \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 31
      }, this), " time, but we can use\r\nbitsets to solve this problem in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(BN^3 / 64)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 34
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Firstly, instead of changing the number of candies in a package, we can say that\r\nKristian first discards a package and then adds a new one."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-observation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-observation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Observation 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After discarding a package, if Kristian can fulfill ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 53
      }, this), " distinct orders, he can\r\nadd a package so that he can fulfill ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 38
      }, this), " distinct orders."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Why is this true?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Think about what happens when we use a bitset to do knapsack DP. Imagine the\r\ncurrent bitset storing which orders Kristian can fulfill is ", _jsxDEV(_components.code, {
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 61
      }, this), " and we're at a\r\npackage with ", _jsxDEV(_components.code, {
        children: "a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 14
      }, this), " candies."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To transition, we simply do ", _jsxDEV(_components.code, {
        children: "B |= B << a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 29
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, if the added ", _jsxDEV(_components.code, {
        children: "a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 20
      }, this), " is sufficiently large, Kristian can double the number\r\nof orders he can fulfill."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This means that the package discarded must be the one that yields the most\r\norders Kristian can fulfill when it's discarded."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can do knapsack DP ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 23
      }, this), " times (considering discarding each package) to find\r\nthis package in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(BN^3 / 64)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 17
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-observation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-observation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Observation 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If there are 2 subsets of candies ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 35
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 43
      }, this), ", the new package can't have\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i \\in A} i - \\sum_{i \\in B} i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), " candies, since the number of packages\r\nKristian can fulfill won't double in that case. Note that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 59
      }, this), " can be the empty\r\nset."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The number of candies in the new package must therefore be the smallest positive\r\ninteger that can't be expressed as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sum_{i \\in A} i - \\sum_{i \\in B} i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 36
      }, this), " for two\r\nsubsets of candies ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 20
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "B"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 28
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To find this number, we can do knapsack DP again, but this time using both\r\n", _jsxDEV(_components.code, {
        children: "a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        children: "-a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 12
      }, this), " instead of just ", _jsxDEV(_components.code, {
        children: "a[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 36
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This knapsack DP runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(BN^3 / 64)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 26
      }, this), " as well, which is fast enough\r\nfor 100 points."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
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
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\n#define FOR(i, x, y) for (int i = x; i < y; i++)\r\nusing namespace std;\r\n\r\nint a[100];\r\n\r\nint main() {\r\n\tiostream::sync_with_stdio(false);\r\n\tcin.tie(0);\r\n\tint n;\r\n\tcin >> n;\r\n\tfor (int i = 0; i < n; i++) cin >> a[i];\r\n\tsort(a, a + n, greater<int>());\r\n\r\n\tpair<int, int> best = {0, -1};\r\n\tfor (int i = 0; i < n; i++) {\r\n\t\tbitset<700000> dp;\r\n\t\tdp[0] = 1;\r\n\t\tfor (int j = 0; j < n; j++) {\r\n\t\t\tif (j == i) continue;\r\n\t\t\tdp |= dp << a[j];\r\n\t\t}\r\n\t\tbest = max(best, {dp.count(), i});\r\n\t}\r\n\r\n\tbitset<1400000> dp;\r\n\tdp[700000] = 1;\r\n\tfor (int i = 0; i < n; i++) {\r\n\t\tif (i == best.second) continue;\r\n\t\tdp |= (dp << a[i]) | (dp >> a[i]);\r\n\t}\r\n\r\n\tcout << a[best.second] << ' ';\r\n\tfor (int i = 1; i < 70000; i++)\r\n\t\tif (!dp[700000 + i]) return cout << i, 0;\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
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
