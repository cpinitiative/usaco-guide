"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://boi.cses.fi/files/boi2015_solutions.zip",
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
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In this problem, we're asked to play a game where players take turns claiming\r\nunclaimed elements in a circular array that are adjacent to one of their\r\npreviously claimed elements (or any unclaimed element on their first turns).\r\nBoth players try to maximize the sum of values of their chosen elements."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "After playing around with the game, we can make some important observations."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Since each player can only choose an element not adjacent to any other element\r\nonce (the first move), the elements each player claims must form a subarray.\r\nAlso, notice that any move made by either player will increase the length of the\r\nsubarray they control by one, and both players will always have a valid move.\r\nTherefore, because the first player moves first, the subarray they control will\r\nbe of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\left \\lceil{\\frac{n}{2}}\\right \\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 14
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Consider the following strategy: for some move by the first player extending to\r\nthe left or right, make the opposite move."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Using this strategy, the second player can force the first player to control any\r\nsubarray of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\left \\lceil{\\frac{n}{2}}\\right \\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 20
      }, this), " containing the first\r\nplayers first move depending on the second players first move."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-computing-the-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-computing-the-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Computing the Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Using these observations, the answer equals:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\max_{1 \\leq x \\leq n}\\min_{v \\in S_x}v"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 7
      }, this), " represents a set of sums for all subarrays of length\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\left \\lceil{\\frac{n}{2}}\\right \\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 1
      }, this), " containing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 53
      }, this), " in the circular array,\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{c}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-transforming-the-circular-array",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-transforming-the-circular-array",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Transforming the Circular Array"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, to deal with the circular aspect of the array, let's concatenate it onto\r\nitself to create an array of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 37
      }, this), " and call it ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 54
      }, this), ". Now, we only\r\nneed to compute subarrays on a linear array, where\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_x = S'_x \\cup S'_{x + n} (1 \\leq x \\leq n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 1
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S'_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 54
      }, this), " represents the set\r\nof subarrays containing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 25
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 32
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-using-a-sorted-set",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-using-a-sorted-set",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Using A Sorted Set"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we iterate over ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 20
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(1 \\leq x \\leq 2n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 24
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{a}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 48
      }, this), ", then we can store\r\nthe running sorted set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S'_x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 24
      }, this), " and use it to update ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_{x \\bmod n}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 52
      }, this), ". For\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\geq 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 1
      }, this), ", add the sum over the subarray\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x, x + \\left \\lceil{\\frac{n}{2}}\\right \\rceil - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S'x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 58
      }, this), " (you can compute\r\nthis using prefix sums). Additionally, if\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\geq \\left \\lceil{\\frac{n}{2}}\\right \\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 1
      }, this), ", remove the sum over\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x - \\left \\lceil{\\frac{n}{2}}\\right \\rceil + 1, x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 1
      }, this), ". Then, we can compute the\r\nminimum value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S'x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 18
      }, this), " for some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 33
      }, this), " by querying for the smallest value in the\r\nsorted set."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
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
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\n\r\nusing vi = vector<int>;\r\n#define pb push_back\r\n#define rsz resize\r\n#define all(x) begin(x), end(x)\r\n#define sz(x) (int)(x).size()\r\n\r\nusing pi = pair<int, int>;\r\n#define f first\r\n#define s second\r\n#define mp make_pair\r\n\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(0);\r\n\tint n;\r\n\tcin >> n;\r\n\tvi a(2 * n + 1);\r\n\ta[0] = 0;\r\n\tmultiset<int> vals;\r\n\tint SZ = (n + 1) / 2;\r\n\tfor (int i = 1; i <= n; i++) {\r\n\t\tcin >> a[i];\r\n\t\ta[n + i] = a[i];\r\n\t}\r\n\tfor (int i = 1; i <= 2 * n; i++) { a[i] += a[i - 1]; }\r\n\tint ans = 0;\r\n\tvi ret(n + 1, INT_MAX);\r\n\tfor (int i = 1; i <= 2 * n; i++) {\r\n\t\tif (i + SZ - 1 <= 2 * n) { vals.insert(a[i + SZ - 1] - a[i - 1]); }\r\n\t\tif (i > SZ) { vals.erase(vals.find(a[i - 1] - a[i - 1 - SZ])); }\r\n\t\tint prev = ((i - 1) % n) + 1;\r\n\t\tret[prev] = min(ret[prev], *vals.begin());\r\n\t}\r\n\tfor (int i = 1; i <= n; i++) { ans = max(ans, ret[i]); }\r\n\tcout << ans << '\\n';\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 90,
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
