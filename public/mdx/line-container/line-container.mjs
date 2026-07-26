"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-half-plane-intersection",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-half-plane-intersection",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Half-Plane Intersection"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-linecontainer-aka-mathcalon-log-n-cht",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-linecontainer-aka-mathcalon-log-n-cht",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "LineContainer (aka ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 23
      }, this), " CHT)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-example-problem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-problem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example Problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-analysis",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-analysis",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Analysis"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Instead of focusing on the pillars that should be destroyed, let's instead focus\r\non the pillars that remain."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The total cost consists of the cost due to height differences plus the cost of\r\ndestroying unused pillars. The latter cost is equal to the cost to destroy all\r\npillars minus the cost to destroy the remaining pillars."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since the cost to destroy all pillars is constant, we can thus turn the problem\r\ninto one about building pillars instead of destroying them!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["From this, we get a basic DP recurrence. Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 46
      }, this), " be the minimum cost to\r\nbuild the bridge so that the last build pillar is pillar ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 58
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[1] = -w_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 1
      }, this), " and the following recurrence holds:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\begin{aligned}\r\n\tdp[i] &= \\min_{j < i}(dp[j] + (h_j - h_i)^2 - w_i)\\\\\r\n\t\t  &= \\min_{j < i}(dp[j] + h_j^2 - 2h_ih_j) + h_i^2 - w_i\r\n\\end{aligned}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Notice how"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[j] + h_j^2 - 2h_ih_j"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["effectively describes a linear function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y = mx + c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 41
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m = -2h_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 61
      }, this), ",\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x = h_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 1
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c = dp[j] + h_j^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 16
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 90,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This means that we can use CHT to compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 43
      }, this), " efficiently!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 16
      }, this), " is not monotonic, we can't use linear CHT using a deque, so\r\nwe must settle with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 21
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["I implemented CHT using a ", _jsxDEV(_components.code, {
        children: "std::set"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 27
      }, this), " here, but other implementations using\r\nthings like the Li-Chao tree should work similarly."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 98,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\ntypedef long long ll;\r\nusing namespace std;\r\n\r\nstruct Line {\r\n\tbool type;\r\n\tdouble x;\r\n\tll m, c;\r\n};\r\n\r\nbool operator<(Line l1, Line l2) {\r\n\tif (l1.type || l2.type) return l1.x < l2.x;\r\n\treturn l1.m > l2.m;\r\n}\r\n\r\nset<Line> cht;\r\nll h[100001], w[100001], tot = 0, dp[100001];\r\n\r\nbool has_prev(set<Line>::iterator it) { return it != cht.begin(); }\r\nbool has_next(set<Line>::iterator it) {\r\n\treturn it != cht.end() && next(it) != cht.end();\r\n}\r\n\r\ndouble intersect(set<Line>::iterator l1, set<Line>::iterator l2) {\r\n\treturn (double)(l1->c - l2->c) / (l2->m - l1->m);\r\n}\r\n\r\nvoid calc_x(set<Line>::iterator it) {\r\n\tif (has_prev(it)) {\r\n\t\tLine l = *it;\r\n\t\tl.x = intersect(prev(it), it);\r\n\t\tcht.insert(cht.erase(it), l);\r\n\t}\r\n}\r\n\r\nbool bad(set<Line>::iterator it) {\r\n\tif (has_next(it) && next(it)->c <= it->c) return true;\r\n\treturn (has_prev(it) && has_next(it) &&\r\n\t        intersect(prev(it), next(it)) <= intersect(prev(it), it));\r\n}\r\n\r\nvoid add_line(ll m, ll c) {\r\n\tset<Line>::iterator it;\r\n\r\n\tit = cht.lower_bound({0, 0, m, c});\r\n\tif (it != cht.end() && it->m == m) {\r\n\t\tif (it->c <= c) return;\r\n\t\tcht.erase(it);\r\n\t}\r\n\r\n\tit = cht.insert({0, 0, m, c}).first;\r\n\tif (bad(it)) cht.erase(it);\r\n\telse {\r\n\t\twhile (has_prev(it) && bad(prev(it))) cht.erase(prev(it));\r\n\t\twhile (has_next(it) && bad(next(it))) cht.erase(next(it));\r\n\r\n\t\tif (has_next(it)) calc_x(next(it));\r\n\t\tcalc_x(it);\r\n\t}\r\n}\r\n\r\nll query(ll h) {\r\n\tLine l = *prev(cht.upper_bound({1, (double)h, 0, 0}));\r\n\treturn l.m * h + l.c;\r\n}\r\n\r\nint main() {\r\n\tios_base::sync_with_stdio(0);\r\n\tcin.tie(0);\r\n\tint n;\r\n\tcin >> n;\r\n\tfor (int i = 1; i <= n; i++) cin >> h[i];\r\n\tfor (int i = 1; i <= n; i++) {\r\n\t\tcin >> w[i];\r\n\t\ttot += w[i];\r\n\t}\r\n\r\n\tdp[1] = -w[1];\r\n\tfor (int i = 2; i <= n; i++) {\r\n\t\tadd_line(-2 * h[i - 1], dp[i - 1] + h[i - 1] * h[i - 1]);\r\n\t\tdp[i] = query(h[i]) - w[i] + h[i] * h[i];\r\n\t}\r\n\r\n\tcout << tot + dp[n];\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 101,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 190,
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
