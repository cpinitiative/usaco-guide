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
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://sua.ac/wiki/2022-icpc-nanjing/e/",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial (Chinese)"
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
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-naive-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-naive-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Naive Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We observe that any operation will only affect nodes of the same depth. Thus, instead of solving for all depths at once, we can take the sum of the minimum cost to fill in each depth."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider the set of nodes at depth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 36
      }, this), " relative to the root. Define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[v]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 69
      }, this), " as the minimum cost to fill in all vertices of depth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 139
      }, this), " in the subtree of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 161
      }, this), ", only considering operations selecting vertices at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 216
      }, this), " or lower."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 6
        }, this), " is of depth ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 22
        }, this), " (relative to the root), then we must fill it in with cost ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 84
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[v] =a_0"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Otherwise, we can either select to incur a cost of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_{d-\\text{depth}[v]}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 54
        }, this), " by operating on ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 94
        }, this), ", or not operate on ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 117
        }, this), " and instead solve for each subtree:"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[v] = \\min\\left( a_{d-\\text{depth}[v]},\\sum_{u\\in\\text{Children}(v)} \\text{dp}[u]\\right)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Our answer will be the sum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[0]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 31
      }, this), " for each value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 66
      }, this), ", yielding a solution in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 94
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-virtual-tree-optimization",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-virtual-tree-optimization",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Virtual Tree Optimization"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["One observation we can make is for a long chain ending at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 59
      }, this), ", we can process it quickly by taking"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[v] = \\min \\left( \\min_{x\\in[d-\\text{depth}[v],d]}a_x, \\sum_{u\\in\\text{Children}(v)} \\text{dp}[u] \\right)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We will aim to leverage this fact. Define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 43
      }, this), " as the set of vertices at depth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 81
      }, this), ", and take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 95
      }, this), " to be the ", _jsxDEV(_components.a, {
        href: "https://usaco.guide/plat/VT",
        rel: "nofollow",
        target: "_blank",
        children: "virtual tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 109
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S_d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 156
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We continue in a similar fashion to previously, but we only compute dynamic programming values for nodes in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 109
      }, this), ". The range minimum query can be answered using data structures in logarithmic or linear time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[v] = \\min \\left( \\min_{x\\in[d-\\text{depth}[v],d]}a_x, \\sum_{u\\in\\text{Virtual Children}(v)} \\text{dp}[u] \\right)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 35,
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
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), ": ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\n\r\nconstexpr int MAX_N = 1e5 + 1;\r\nconstexpr int LG = 17;\r\n\r\nint tin[MAX_N], tout[MAX_N], d[MAX_N], lift[MAX_N][LG], timer;\r\nll dp[MAX_N];\r\nvector<int> adj[MAX_N], vadj[MAX_N], at_d[MAX_N];\r\n\r\nvoid dfs(int v, int p) {\r\n\td[v] = v ? d[p] + 1 : 0;\r\n\tat_d[d[v]].push_back(v);\r\n\ttin[v] = timer++;\r\n\r\n\tlift[v][0] = p;\r\n\tfor (int i = 1; i < LG; i++) { lift[v][i] = lift[lift[v][i - 1]][i - 1]; }\r\n\r\n\tfor (int u : adj[v]) {\r\n\t\tif (u == p) { continue; }\r\n\t\tdfs(u, v);\r\n\t}\r\n\r\n\ttout[v] = timer++;\r\n}\r\n\r\nint is_ancestor(int u, int v) { return tin[u] <= tin[v] && tout[v] <= tout[u]; }\r\n\r\nint lca(int u, int v) {\r\n\tif (is_ancestor(u, v)) { return u; }\r\n\tif (is_ancestor(v, u)) { return v; }\r\n\r\n\tfor (int i = LG - 1; i >= 0; i--) {\r\n\t\tif (!is_ancestor(lift[u][i], v)) { u = lift[u][i]; }\r\n\t}\r\n\treturn lift[u][0];\r\n}\r\n\r\nbool sort_tin(const int &a, const int &b) { return tin[a] < tin[b]; }\r\n\r\nvector<int> vtree(vector<int> &key) {\r\n\t// construct virtual tree from set of nodes\r\n\tif (key.empty()) return {};\r\n\r\n\tvector<int> res = key;\r\n\tsort(res.begin(), res.end(), sort_tin);\r\n\r\n\tfor (int i = 1; i < (int)key.size(); i++) {\r\n\t\tres.push_back(lca(key[i - 1], key[i]));\r\n\t}\r\n\r\n\tsort(res.begin(), res.end(), sort_tin);\r\n\tres.erase(unique(res.begin(), res.end()), res.end());\r\n\r\n\tfor (int v : res) { vadj[v].clear(); }\r\n\r\n\tvector<int> stk = {res[0]};\r\n\r\n\tfor (int i = 1; i < (int)res.size(); i++) {\r\n\t\twhile (tin[res[i]] > tout[stk.back()]) { stk.pop_back(); }\r\n\r\n\t\tvadj[stk.back()].push_back(res[i]);\r\n\t\tstk.push_back(res[i]);\r\n\t}\r\n\r\n\treturn res;\r\n}\r\n\r\n// BeginCodeSnip{RMQ Template}\r\ntemplate <class T> class MinSegmentTree {\r\n  private:\r\n\tconst T DEFAULT = numeric_limits<T>().max();\r\n\r\n\tvector<T> segtree;\r\n\tint len;\r\n\r\n  public:\r\n\tMinSegmentTree(int len) : len(len), segtree(len * 2, DEFAULT) {}\r\n\r\n\tvoid set(int ind, T val) {\r\n\t\tind += len;\r\n\t\tsegtree[ind] = val;\r\n\t\tfor (; ind > 1; ind /= 2) {\r\n\t\t\tsegtree[ind / 2] = min(segtree[ind], segtree[ind ^ 1]);\r\n\t\t}\r\n\t}\r\n\r\n\tT range_min(int start, int end) {\r\n\t\tT res = DEFAULT;\r\n\t\tfor (start += len, end += len; start < end; start /= 2, end /= 2) {\r\n\t\t\tif (start % 2 == 1) { res = min(res, segtree[start++]); }\r\n\t\t\tif (end % 2 == 1) { res = min(res, segtree[--end]); }\r\n\t\t}\r\n\t\treturn res;\r\n\t}\r\n};\r\n// EndCodeSnip\r\n\r\nint main() {\r\n\tint test_num;\r\n\tcin >> test_num;\r\n\tfor (int t = 0; t < test_num; t++) {\r\n\t\tint n;\r\n\t\tcin >> n;\r\n\r\n\t\tfor (int i = 0; i <= n; i++) {\r\n\t\t\tadj[i].clear();\r\n\t\t\tat_d[i].clear();\r\n\t\t}\r\n\r\n\t\tMinSegmentTree<int> rmq(n);\r\n\t\tfor (int i = 0; i < n; i++) {\r\n\t\t\tint a;\r\n\t\t\tcin >> a;\r\n\t\t\trmq.set(i, a);\r\n\t\t}\r\n\r\n\t\tfor (int i = 1; i < n; i++) {\r\n\t\t\tint u, v;\r\n\t\t\tcin >> u >> v;\r\n\t\t\tu--, v--;\r\n\t\t\tadj[u].push_back(v);\r\n\t\t\tadj[v].push_back(u);\r\n\t\t}\r\n\r\n\t\tdfs(0, 0);\r\n\r\n\t\tll ans = 0;\r\n\r\n\t\tfor (int dep = 0; dep < n; dep++) {\r\n\t\t\tvector<int> vt = vtree(at_d[dep]);\r\n\t\t\treverse(vt.begin(), vt.end());\r\n\r\n\t\t\tfor (int v : vt) {\r\n\t\t\t\tdp[v] = rmq.range_min(dep - d[v], dep + 1);\r\n\r\n\t\t\t\tif (!vadj[v].empty()) {\r\n\t\t\t\t\tll sum = 0;\r\n\t\t\t\t\tfor (int u : vadj[v]) { sum += dp[u]; }\r\n\t\t\t\t\tdp[v] = min(dp[v], sum);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (!vt.empty()) { ans += dp[vt.back()]; }\r\n\t\t}\r\n\r\n\t\tcout << ans << \"\\n\";\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 43,
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
