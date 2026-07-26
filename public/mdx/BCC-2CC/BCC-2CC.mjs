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
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-2-edge-connected-components",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-2-edge-connected-components",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "2-Edge-Connected Components"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-with-dsu",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-dsu",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With DSU"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 98,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The analysis for the above problem mentions an ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(m\\alpha(n))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 48
      }, this), "\r\nsolution. Although this is not a two-connected component problem, we can in fact\r\nuse DSU to generate two-connected components."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 102,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The DSU operations take ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 25
      }, this), " rather than\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\alpha(n))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 1
      }, this), " because the DSU does not use union by size, but it's\r\neasy to change this."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 112,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "struct TwoEdgeCC {\r\n\tstruct {\r\n\t\tvi e;\r\n\t\tvoid init(int n) { e = vi(n, -1); }\r\n\t\tint get(int x) { return e[x] < 0 ? x : e[x] = get(e[x]); }\r\n\t\tbool unite(int x, int y) {  // set par[y] = x\r\n\t\t\tx = get(x), y = get(y);\r\n\t\t\tif (x == y) return 0;\r\n\t\t\te[x] += e[y];\r\n\t\t\te[y] = x;\r\n\t\t\treturn 1;\r\n\t\t}\r\n\t} DSU;\r\n\tint N;\r\n\tvector<vi> adj;\r\n\tvi depth, par;\r\n\tvpi extra;\r\n\tvoid init(int _N) {\r\n\t\tN = _N;\r\n\t\tDSU.init(N);\r\n\t\tadj.rsz(N), depth.rsz(N), par = vi(N, -1);\r\n\t}\r\n\tvoid dfs(int x) {\r\n\t\ttrav(t, adj[x]) if (t != par[x]) par[t] = x, depth[t] = depth[x] + 1, dfs(t);\r\n\t}\r\n\tvoid ae(int a, int b) {\r\n\t\tif (DSU.unite(a, b)) adj[a].pb(b), adj[b].pb(a);  // edge of forest\r\n\t\telse extra.pb({a, b});                            // extra edge\r\n\t}\r\n\tvoid ad(int a, int b) {\r\n\t\twhile (1) {\r\n\t\t\ta = DSU.get(a), b = DSU.get(b);\r\n\t\t\tif (a == b) return;\r\n\t\t\tif (depth[a] < depth[b]) swap(a, b);\r\n\t\t\tassert(par[a] != -1 && DSU.unite(par[a], a));\r\n\t\t}\r\n\t}\r\n\tvoid gen() {\r\n\t\tF0R(i, N)\r\n\t\tif (par[i] == -1) dfs(i);  // independently for each connected component\r\n\t\tDSU.init(N);\r\n\t\ttrav(t, extra) ad(t.f, t.s);  // add non-spanning edges\r\n\t};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 116,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 162,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "SRM 787 1000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 166,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 166,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-biconnected-components",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-biconnected-components",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Biconnected_component",
        rel: "nofollow",
        target: "_blank",
        children: "Biconnected Components"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 168,
        columnNumber: 4
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 168,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 172,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["An important observation is that if you can't go from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 60
      }, this), " to node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 72
      }, this), " without passing through node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 105
      }, this), ", node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 115
      }, this), " is a critical node (articulation point).\r\nNode ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 6
      }, this), " can split ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 20
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 28
      }, this), " into 2 different components if removed. This makes us think about biconnected components."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 174,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now we're left with two cases. If node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 40
      }, this), " isn't critical, a path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 72
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 79
      }, this), " can avoid  the node. Otherwise, if node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 177,
        columnNumber: 123
      }, this), " is a critical one we\r\nhave to check if is on path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 178,
        columnNumber: 34
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 178,
        columnNumber: 41
      }, this), ". Here is a little tricky, on a simple graph, it's not so easy to check, on the other hand, checking this on a tree can be much easier.\r\nIn order to do this, we transform the graph into a ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Biconnected_component",
        rel: "nofollow",
        target: "_blank",
        children: "block-cut tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 179,
        columnNumber: 52
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 177,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In a block-cut tree, every articulation and biconnected component represents a node. Now that we have turned our graph into a tree how do we check if node the path\r\nfrom ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 6
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 13
      }, this), " passes through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 32
      }, this), "? To do this we use LCA. You can find more about this ", _jsxDEV(_components.a, {
        href: "https://www.geeksforgeeks.org/check-whether-the-given-node-is-in-the-path-between-the-nodes-u-and-v/",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 182,
        columnNumber: 89
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 181,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-articulation-points",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-articulation-points",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Articulation Points"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 345,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 359,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-problems-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 429,
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
