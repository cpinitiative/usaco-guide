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
      children: ["First, find the maximum profit of each footpath by comparing the buying and\r\nselling prices of the endpoints for each of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 49
      }, this), " items. We now have a\r\ndirected graph where each edge has a profit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 45
      }, this), " and a time to traverse ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 72
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Ratios are inconvenient, so let's consider a simpler problem: given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 69
      }, this), ", can we\r\nfind a profit cycle with profit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 33
      }, this), " and time ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 46
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P/T \\geq R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 60
      }, this), "?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is convenient because we can make it linear: this problem is equivalent to\r\nchecking whether we can find a profit cycle with profit ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 57
      }, this), " and time ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 70
      }, this), " such\r\nthat ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P - TR \\geq 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 6
      }, this), ". If we weight each edge as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p - tR"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 49
      }, this), ", this is equivalent to\r\nchecking whether a non-negative cycle exists in the graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 7
      }, this), " is good if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 22
      }, this), " is good, we can binary search for the largest good\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), ". We can then use Floyd-Warshall to check whether there is a negative cycle."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "(For a similar problem, see Cruise from BkOI 2016. Beware though - it's\r\ngeometry!)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 17,
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
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\n#define FOR(i, x, y) for (int i = x; i < y; i++)\r\ntypedef long long ll;\r\nusing namespace std;\r\n\r\nconst ll INF = LLONG_MAX / 2;\r\n\r\nint n, m, x;\r\nll b[101][1001], s[101][1001];\r\nll graph[101][101], profit[101][101], graph2[101][101];\r\n\r\nvoid floyd_warshall(ll adj[101][101]) {\r\n\tFOR(i, 1, n + 1)\r\n\tFOR(j, 1, n + 1)\r\n\tFOR(k, 1, n + 1)\r\n\tadj[j][k] = min(adj[j][k], adj[j][i] + adj[i][k]);\r\n}\r\n\r\nint main() {\r\n\tiostream::sync_with_stdio(false);\r\n\tcin.tie(0);\r\n\tcin >> n >> m >> x;\r\n\tFOR(i, 1, n + 1) {\r\n\t\tFOR(j, 1, n + 1) graph[i][j] = INF;\r\n\t\tFOR(j, 1, x + 1) cin >> b[i][j] >> s[i][j];\r\n\t}\r\n\tFOR(i, 0, m) {\r\n\t\tint u, v, w;\r\n\t\tcin >> u >> v >> w;\r\n\t\tgraph[u][v] = w;\r\n\t}\r\n\tfloyd_warshall(graph);\r\n\tFOR(i, 1, n + 1)\r\n\tFOR(j, 1, n + 1)\r\n\tFOR(k, 1, x + 1)\r\n\tif (s[j][k] != -1 && b[i][k] != -1)\r\n\t\tprofit[i][j] = max(profit[i][j], s[j][k] - b[i][k]);\r\n\r\n\tll l = 1, r = 1e9;\r\n\twhile (l <= r) {\r\n\t\tll mid = (l + r) / 2;\r\n\t\tFOR(i, 1, n + 1)\r\n\t\tFOR(j, 1, n + 1)\r\n\t\tgraph2[i][j] = mid * min(graph[i][j], INF / mid) - profit[i][j];\r\n\t\tfloyd_warshall(graph2);\r\n\t\tbool has_nonnegative_cycle = false;\r\n\t\tFOR(i, 1, n + 1) if (graph2[i][i] <= 0) has_nonnegative_cycle = true;\r\n\t\tif (has_nonnegative_cycle) l = mid + 1;\r\n\t\telse r = mid - 1;\r\n\t}\r\n\tcout << r;\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
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
