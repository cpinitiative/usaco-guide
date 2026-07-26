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
        href: "https://ioinformatics.org/page/ioi-2011/37",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (Centroid Decomposition)"
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
      id: "user-content-alternative-solution-small-to-large-merging",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-alternative-solution-small-to-large-merging",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Alternative Solution: Small to Large Merging"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We are tasked with finding a path with the minimum number of traversed edges such that the path sum is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 104
      }, this), ".\r\nFirst, we root the tree arbitrarily.\r\nLet ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {lca}(u, v) = w"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 5
      }, this), ".\r\nWe can break ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {path}(u, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 14
      }, this), " into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {path}(u, w)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 40
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {path}(v, w)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 65
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Because ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "w"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 9
      }, this), " must be an ancestor of both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 41
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 49
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {sum}(u, w) = \\text {sum}(u, root) - \\text {sum}(w, root)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 54
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {sum}(v, w) = \\text {sum}(v, root) - \\text {sum}(w, root)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 124
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {sum}(a, b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 196
      }, this), " is the sum of the path between the 2 nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 259
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 267
      }, this), ". We can compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {sum}(i, root)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 287
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 318
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 325
      }, this), " with a simple DFS. We also compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {dist}(i, root)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 367
      }, this), " where is the number of edges between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 428
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "root"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 436
      }, this), " in similar fashion."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We perform small to large merging to find an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {lca}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 46
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 60
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {sum}(u, root) + \\text {sum} (v, root) - 2 \\cdot \\text {sum}(i, root) = s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 74
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {dist}(u, root) + \\text {dist}(v, root) - 2 \\cdot \\text {dist}(i, root) = s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 161
      }, this), " is minimized."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To accomplish this, we can use small to large merging. For each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 65
      }, this), ", we maintain a map of key to value pair of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {sum}(root, j) : \\text {dist}(root, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 112
      }, this), " for  distinct ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {sum}(root, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 173
      }, this), " for all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 204
      }, this), " in the subtree of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 226
      }, this), ". If there are duplicate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {sum}(root, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 254
      }, this), " we take the minimum ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text {dist}(root, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 297
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As we combine the maps of two nodes, we iterate through each key-pair ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(sum_s, dist_s)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 71
      }, this), " of the smaller size map, search for a key-pair ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "sum_l = s - sum_s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 136
      }, this), " in the larger map, and if this exists we obtain ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dist_s + dist_l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 204
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "sum_l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 227
      }, this), ". Our answer would be minimum ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dist_s + dist_l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 264
      }, this), " over all mergings. During this process we also merge all key-value pairs of the smaller map."]
    }, undefined, true, {
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
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The log factors come from small-to-large merging and the map operations."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\n\r\nusing namespace std;\r\n\r\ntypedef long long ll;\r\ntypedef pair<ll, ll> pii;\r\n\r\n#define pb push_back\r\n\r\n#define f first\r\n#define s second\r\n\r\nconst int maxn = 2e5 + 1;\r\nvector<pii> adj[maxn];\r\nmap<ll, ll> info[maxn];\r\nll dist[maxn], sum[maxn];  // define these relative to root\r\nint N, K;\r\nll ret;\r\n\r\nvoid precomp(int u, int p, ll c, int h) {\r\n\tinfo[u][c] = h;\r\n\tsum[u] = c;\r\n\tdist[u] = h;\r\n\tfor (auto n : adj[u]) {\r\n\t\tif (p == n.f) { continue; }\r\n\t\tprecomp(n.f, u, c + n.s, h + 1);\r\n\t}\r\n}\r\n\r\nvoid small_to_large_merge(int u, int p) {\r\n\tll target = K + 2 * sum[u];\r\n\tfor (auto n : adj[u]) {\r\n\t\tif (n.f == p) { continue; }\r\n\t\tsmall_to_large_merge(n.f, u);\r\n\t\tif (info[n.f].size() > info[u].size()) { swap(info[n.f], info[u]); }\r\n\t\tfor (auto i : info[n.f]) {\r\n\t\t\tif (info[u].find(target - i.f) != info[u].end()) {\r\n\t\t\t\tret = min(ret, info[u][target - i.f] + i.s - 2 * dist[u]);\r\n\t\t\t}\r\n\t\t}\r\n\t\tfor (auto i : info[n.f]) {\r\n\t\t\tif (info[u].find(i.f) == info[u].end()) {\r\n\t\t\t\tinfo[u].insert(i);\r\n\t\t\t} else {\r\n\t\t\t\tinfo[u][i.f] = min(info[u][i.f], i.s);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\nint best_path(int n, int k, int edges[][2], int weights[]) {\r\n\tN = n;\r\n\tK = k;\r\n\tret = INT_MAX;\r\n\tfor (int i = 0; i < n - 1; i++) {\r\n\t\tint u = edges[i][0];\r\n\t\tint v = edges[i][1];\r\n\t\tadj[u].pb(pii(v, weights[i]));\r\n\t\tadj[v].pb(pii(u, weights[i]));\r\n\t}\r\n\tprecomp(0, -1, 0, 0);\r\n\tsmall_to_large_merge(0, -1);\r\n\treturn ret == INT_MAX ? -1 : ret;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
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
