"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-tutorial",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose we want to support static path queries on a tree of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 66
      }, this), " for the minimum edge between two vertices. Advanced readers may think of techniques like binary lifting, HLD, or even LCT to support operations in logarithmic complexity. A Kruskal Reconstruction Tree (KRT) can answer such queries in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 304
      }, this), " with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 326
      }, this), " construction."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can build a KRT as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["We start with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 17
        }, this), " components each representing each node"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Process each edge in sorted order. For an edge connecting ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(u,v)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 61
        }, this), ", create an auxiliary node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 95
        }, this), " that is the parent of the topmost nodes in the components of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 160
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 168
        }, this), ". Now, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "f"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 25,
          columnNumber: 178
        }, this), " is the new topmost node in the merged component."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that maintaining the relationships of components can be done in amortized logarithmic complexity using path compression similar to a ", _jsxDEV(_components.a, {
        href: "/gold/dsu?lang=cpp",
        children: "DSU"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 139
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We end up with a binary tree of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2N -1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 38
      }, this), ". We can support queries by returning the edge weight of the node corresponding to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{lca}(u, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 128
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For a rough proof of correctness, consider the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["Consider the KRT right before adding the node corresponding to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{lca}(u, v)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 66
        }, this), ". By definition of LCA, ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 110
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 118
        }, this), " are not connected, implying that the minimum weight edge can not be weighted less than ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{lca}(u, v)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 209
        }, this), ". Additionally, because all edges added after the one corresponding to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{lca}(u, v)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 300
        }, this), " are of greater weight, our answer is indeed the edge corresponding to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{lca}(u, v)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 391
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, by using ", _jsxDEV(_components.a, {
        href: "/gold/tree-euler?lang=cpp",
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(1)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 17
        }, this), " LCA methods"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 16
      }, this), ", we can answer our queries with the aforementioned complexity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---qpwoeirut-and-vertices",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---qpwoeirut-and-vertices",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Qpwoeirut and Vertices"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["To solve this task, we can assign edge weights based on their index in the input order. Then, we can construct the Kruskal Tree, only processing edges between nodes that aren't already connected (similar to the Kruskal Tree's namesake, ", _jsxDEV(_components.a, {
        href: "/gold/mst",
        children: "Kruskal's Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 237
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["From here, we need a fast way to query the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{LCA}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 44
      }, this), " of a range of nodes. One way to do this is to maintain the DFS order of the nodes, and take the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\text{LCA}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 153
      }, this), " of the nodes with the earliest and latest traversal within the range. This can be done with any range query data structure, such as a sparse table or segment tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["An optimal time complexity for this problem would be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N+M+Q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 54
      }, this), ", using ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)/\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 82
      }, this), " LCA and RMQ methods. However, we present an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+Q)\\log N + M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 158
      }, this), " solution for simplicity."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nconstexpr int MAX_N = 4e5 + 5;\r\nconstexpr int LG = 20;\r\n\r\nint n, m, q, va[MAX_N], f[MAX_N], nx;\r\nint trace(int v) { return f[v] == v ? v : f[v] = trace(f[v]); }\r\n\r\n/** Implements LCA with binary lifting */\r\nnamespace LCA {\r\nint lift[MAX_N][LG], ch[MAX_N][2], t, tin[MAX_N], tout[MAX_N], tour[2 * MAX_N];\r\n\r\nbool is_ancestor(int u, int v) { return tin[u] <= tin[v] && tout[u] >= tout[v]; }\r\n\r\nint lca(int u, int v) {\r\n\tif (is_ancestor(u, v)) { return u; }\r\n\tif (is_ancestor(v, u)) { return v; }\r\n\r\n\tfor (int i = LG - 1; i >= 0; --i) {\r\n\t\tif (!is_ancestor(lift[u][i], v)) { u = lift[u][i]; }\r\n\t}\r\n\r\n\treturn lift[u][0];\r\n}\r\n\r\nvoid dfs(int v) {\r\n\tif (v == -1) { return; }\r\n\ttour[t] = v;\r\n\ttin[v] = t;\r\n\r\n\tfor (int i = 1; i < LG; i++) { lift[v][i] = lift[lift[v][i - 1]][i - 1]; }\r\n\r\n\tdfs(ch[v][0]);\r\n\tdfs(ch[v][1]);\r\n\ttout[v] = t++;\r\n}\r\n}  // namespace LCA\r\n\r\n/** Point Update / Range Min/Max Segment Tree */\r\nnamespace SGT {\r\nint sg_min[1 << LG + 1], sg_max[1 << LG + 1];\r\n\r\nvoid point_set(int i, int v) {\r\n\tsg_min[i + (1 << LG)] = sg_max[i + (1 << LG)] = v;\r\n\tfor (int j = (i + (1 << LG)) / 2; j; j /= 2) {\r\n\t\tsg_min[j] = min(sg_min[2 * j], sg_min[2 * j + 1]),\r\n\t\tsg_max[j] = max(sg_max[2 * j], sg_max[2 * j + 1]);\r\n\t}\r\n}\r\n\r\n/** @return edge (LCA of nodes w/ lowest and highest traversal time in [l, r]) */\r\nint query(int l, int r) {\r\n\tint lift = MAX_N, rt = -1;\r\n\tfor (l += 1 << LG, r += 1 << LG; l < r; l >>= 1, r >>= 1) {\r\n\t\tif (l & 1) { lift = min(lift, sg_min[l]), rt = max(rt, sg_max[l++]); }\r\n\t\tif (r & 1) { lift = min(lift, sg_min[--r]), rt = max(rt, sg_max[r]); }\r\n\t}\r\n\treturn va[LCA::lca(LCA::tour[lift], LCA::tour[rt])];\r\n}\r\n}  // namespace SGT\r\n\r\nvoid solve() {\r\n\tcin >> n >> m >> q;\r\n\r\n\tiota(f, f + 2 * n, 0);\r\n\tnx = n;\r\n\tmemset(LCA::ch, -1, sizeof(LCA::ch));\r\n\r\n\tfor (int i = 0; i < m; i++) {\r\n\t\tint u, v;\r\n\t\tcin >> u >> v;\r\n\t\t// assign u and v to the top of their component\r\n\t\tu = trace(--u), v = trace(--v);\r\n\r\n\t\t// if the edge is within one component, no further work is needed\r\n\t\t// otherwise, create a new node that is the parent of both components\r\n\r\n\t\tif (u == v) { continue; }\r\n\t\tva[nx] = i, LCA::ch[nx][0] = u, LCA::ch[nx][1] = v;\r\n\t\tf[u] = f[v] = LCA::lift[u][0] = LCA::lift[v][0] = nx++;\r\n\t}\r\n\r\n\tLCA::lift[2 * n - 2][0] = 2 * n - 2;\r\n\tLCA::dfs(2 * n - 2);\r\n\r\n\t// update segment tree for range min/max of dfs-order traversal times\r\n\tfor (int i = 0; i < 2 * n - 1; i++) { SGT::point_set(i, LCA::tin[i]); }\r\n\r\n\twhile (q--) {\r\n\t\tint l, r;\r\n\t\tcin >> l >> r;\r\n\t\tif (l == r) {\r\n\t\t\tcout << \"0 \";\r\n\t\t} else {\r\n\t\t\tcout << SGT::query(l - 1, r) + 1 << \" \";\r\n\t\t}\r\n\t}\r\n\r\n\tcout << \"\\n\";\r\n}\r\n\r\nint main() {\r\n\tint test_num;\r\n\tcin >> test_num;\r\n\tfor (int t = 0; t < test_num; t++) { solve(); }\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 49,
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
      lineNumber: 159,
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
