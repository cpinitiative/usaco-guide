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
      children: _jsxDEV(_components.a, {
        href: "https://boi.cses.fi/files/boi2017_solutions.zip",
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
      id: "user-content-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this problem, we're given a tree and asked to increment the values of all\r\nedges on the spanning trees of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 32
      }, this), " given subsets of nodes."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is similar to incrementing the values of all edges on given paths, so let's\r\ntry to adapt the solution for that to this problem. (To increment the values of\r\nall edges on a path efficiently,\r\n", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/78564",
        rel: "nofollow",
        target: "_blank",
        children: "we can use a Fenwick tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), ".)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We make the following important observation: ", _jsxDEV(_components.strong, {
        children: "In a DFS, we traverse each edge\r\nexactly twice"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 46
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "How does this help us? First, we do a DFS on the entire tree and note when each\r\nnode is visited."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we sort the chosen nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 29
      }, this), " in the order that they're visited in the DFS,\r\nthen the traversal\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_1 \\rightarrow c_2 \\rightarrow \\dots \\rightarrow c_{s_i} \\rightarrow c_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\r\nvisits each edge on the spanning tree of the chosen nodes exactly twice."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This means we can split each spanning tree into several paths and increment the\r\nvalues of all edges on those paths individually!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finally, we check whether the value of each edge is at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 62
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The complexity of this algorithm is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((S + N) \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 37
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
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
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint n, m, k;\r\nvector<pair<int, int>> graph[100001];\r\nint tin[100001], tout[100001], timer = 0, anc[100001][20], p_edge[100001];\r\nint chosen[50001], bit[100001];\r\n\r\nvoid dfs(int node = 1, int parent = 0) {\r\n\ttin[node] = ++timer;\r\n\tfor (int i = 1; i < 20; i++) anc[node][i] = anc[anc[node][i - 1]][i - 1];\r\n\tfor (pair<int, int> i : graph[node])\r\n\t\tif (i.first != parent) {\r\n\t\t\tanc[i.first][0] = node;\r\n\t\t\tp_edge[i.first] = i.second;\r\n\t\t\tdfs(i.first, node);\r\n\t\t}\r\n\ttout[node] = timer;\r\n}\r\n\r\nbool is_ancestor(int a, int b) { return (tin[a] <= tin[b] && tout[a] >= tout[b]); }\r\n\r\nint lca(int a, int b) {\r\n\tif (is_ancestor(a, b)) return a;\r\n\tfor (int i = 19; ~i; i--) {\r\n\t\tif (anc[a][i] && !is_ancestor(anc[a][i], b)) a = anc[a][i];\r\n\t}\r\n\treturn anc[a][0];\r\n}\r\n\r\nvoid update(int pos, int val) {\r\n\tfor (; pos <= n; pos += pos & (-pos)) bit[pos] += val;\r\n}\r\n\r\nint query(int a, int b) {\r\n\tint ans = 0;\r\n\tfor (; b; b -= b & (-b)) ans += bit[b];\r\n\tfor (a--; a; a -= a & (-a)) ans -= bit[a];\r\n\treturn ans;\r\n}\r\n\r\nint main() {\r\n\tios_base::sync_with_stdio(0);\r\n\tcin.tie(0);\r\n\tcin >> n >> m >> k;\r\n\tfor (int i = 1; i < n; i++) {\r\n\t\tint a, b;\r\n\t\tcin >> a >> b;\r\n\t\tgraph[a].push_back({b, i});\r\n\t\tgraph[b].push_back({a, i});\r\n\t}\r\n\tdfs();\r\n\twhile (m--) {\r\n\t\tint s, l;\r\n\t\tcin >> s;\r\n\t\tfor (int i = 0; i < s; i++) cin >> chosen[i];\r\n\t\tsort(chosen, chosen + s, [](int A, int B) { return tin[A] < tin[B]; });\r\n\t\tchosen[s] = chosen[0];\r\n\t\tfor (int i = 0; i < s; i++) {\r\n\t\t\tint l = lca(chosen[i], chosen[i + 1]);\r\n\t\t\tupdate(tin[chosen[i]], 1);\r\n\t\t\tupdate(tin[chosen[i + 1]], 1);\r\n\t\t\tupdate(tin[l], -2);\r\n\t\t}\r\n\t}\r\n\tvector<int> ans;\r\n\tfor (int i = 2; i <= n; i++)\r\n\t\tif (query(tin[i], tout[i]) >= 2 * k) ans.push_back(p_edge[i]);\r\n\tsort(ans.begin(), ans.end());\r\n\tcout << ans.size() << '\\n';\r\n\tfor (int i : ans) cout << i << ' ';\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 34,
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
