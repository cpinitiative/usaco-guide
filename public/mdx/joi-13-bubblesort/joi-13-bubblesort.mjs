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
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In this problem, we're asked to find the maximum decrease in the number of\r\ninversions of the array."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Firstly, unless the array is already sorted, we can always decrease the number\r\nof inversions. We can also assume that we only ever swap ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 58
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 68
      }, this), "\r\n(", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i < j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 2
      }, this), ") if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i > a_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 14
      }, this), ". (Could you prove this formally?)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["After playing around with some swaps and arrays, we find that the only array\r\nelements that contribute to that change if we swap ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 52
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 62
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i < j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 69
      }, this), ") are\r\nthe ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 5
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i \\leq k \\leq j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 21
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i \\geq a_k \\geq a_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 43
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This condition feels similar to the inequalities defining a rectangle. Could we\r\npossibly find a geometric interpretation of this problem?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-turning-the-problem-into-geometry",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-turning-the-problem-into-geometry",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Turning the Problem into Geometry"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Plot the points ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i, a_i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 17
      }, this), " on the Cartesian plane."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice how if we swap ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 23
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 33
      }, this), " (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i < j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 40
      }, this), "), the change in the number of\r\ninversions is equal to:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(\\text{No. of points strictly inside the rectangle }(i, a_i, j, a_j)) + (\\text{No. of points in or on the rectangle }(i, a_i, j, a_j)) - 1"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["From this, we also find that if we have ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x < y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 41
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_x \\geq a_y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 53
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 74
      }, this), "\r\ncan't be the left index in the optimal swap."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This means that we can simply consider a set of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 49
      }, this), " with strictly increasing\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), " as candidates for the left index in the optimal swap!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-using-the-dc-optimization",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-using-the-dc-optimization",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Using the D&C Optimization"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "opt_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 5
      }, this), " be the index such that if we must swap ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 52
      }, this), " with something to its\r\nright, then swapping it with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_{opt_i}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 30
      }, this), " is optimal."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 7
      }, this), " is strictly increasing in our set of candidates, we can prove that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "opt_i \\geq opt_{i - 1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 34
      }, this), " in our set."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This means that we can use the D&C optimization to find all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "opt_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 61
      }, this), "!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can use a BIT or any other suitable data structure to query the number of\r\npoints in a rectangle efficiently."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
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
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log^2 N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\n#define FOR(i, x, y) for (int i = x; i < y; i++)\r\ntypedef long long ll;\r\nusing namespace std;\r\n\r\nll ans = 0, bit[100001];\r\nint n, a[100001], b[100001];\r\nvector<int> cand;\r\n\r\nvoid update(int pos, ll val) {\r\n\tfor (; pos <= n; pos += pos & (-pos)) bit[pos] += val;\r\n}\r\n\r\nll query(int x, int y) {\r\n\tll ans = 0;\r\n\tfor (; y; y -= y & (-y)) ans += bit[y];\r\n\tfor (x--; x; x -= x & (-x)) ans -= bit[x];\r\n\treturn ans;\r\n}\r\n\r\nvoid divide_conquer(int l = 0, int r = cand.size() - 1, int l_opt = 0,\r\n                    int r_opt = n - 1) {\r\n\tint mid = (l + r) / 2, opt = -1;\r\n\tll best_delta = 1;\r\n\tFOR(i, max(l_opt, cand[mid]), r_opt + 1) {\r\n\t\tupdate(a[i], 1);\r\n\t\tint inv = 1 - query(a[i] + 1, a[cand[mid]] - 1) - query(a[i], a[cand[mid]]);\r\n\t\tif (inv <= best_delta) best_delta = inv, opt = i;\r\n\t}\r\n\tans = min(ans, best_delta);\r\n\r\n\tif (mid != r) {\r\n\t\tFOR(i, cand[mid], cand[(mid + r + 1) / 2]) update(a[i], -1);\r\n\t\tFOR(i, max(opt, cand[(mid + r + 1) / 2]), r_opt + 1) update(a[i], -1);\r\n\t\tdivide_conquer(mid + 1, r, opt, r_opt);\r\n\t\tFOR(i, cand[mid], cand[(mid + r + 1) / 2]) update(a[i], 1);\r\n\t\tFOR(i, max(opt, cand[(mid + r + 1) / 2]), r_opt + 1) update(a[i], 1);\r\n\t}\r\n\r\n\tif (mid != l) {\r\n\t\tFOR(i, cand[(mid + l - 1) / 2], min(l_opt, cand[mid])) update(a[i], 1);\r\n\t\tFOR(i, max(l_opt, cand[mid]), r_opt + 1) update(a[i], -1);\r\n\t\tdivide_conquer(l, mid - 1, l_opt, opt);\r\n\t\tFOR(i, cand[(mid + l - 1) / 2], min(l_opt, cand[mid])) update(a[i], -1);\r\n\t\tFOR(i, max(l_opt, cand[mid]), r_opt + 1) update(a[i], 1);\r\n\t}\r\n\r\n\tFOR(i, max(l_opt, cand[mid]), r_opt + 1) update(a[i], -1);\r\n}\r\n\r\nint main() {\r\n\tios_base::sync_with_stdio(0);\r\n\tcin.tie(0);\r\n\tcin >> n;\r\n\tbool sorted = true, distinct = true;\r\n\tFOR(i, 0, n) {\r\n\t\tcin >> a[i];\r\n\t\tb[i] = a[i];\r\n\t\tif (i) sorted &= (a[i] >= a[i - 1]), distinct &= (a[i] != a[i - 1]);\r\n\t}\r\n\tif (sorted) return cout << distinct << '\\n', 0;\r\n\r\n\tsort(b, b + n);\r\n\tFOR(i, 0, n) {\r\n\t\ta[i] = lower_bound(b, b + n, a[i]) - b + 1;\r\n\t\tif (!i || a[i] > a[cand.back()]) cand.push_back(i);\r\n\t}\r\n\r\n\tdivide_conquer();\r\n\tfor (int i = n - 1; ~i; i--) {\r\n\t\tupdate(a[i], 1);\r\n\t\tans += query(1, a[i] - 1);\r\n\t}\r\n\tcout << ans << '\\n';\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 54,
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
