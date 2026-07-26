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
    children: [_jsxDEV(_components.h2, {
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-tldr",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tldr",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "TL;DR"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Euler's formula + a suitable data structure for 2D range queries."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In this problem, we're asked to count the number of contiguous areas of cells on\r\nseveral flat rectangles. Such areas are separated by river segments and\r\nrectangle boundaries."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Where else do we count the number of areas on a flat surface?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["That's right - we use Euler's formula to count the number of faces of a\r\n", _jsxDEV(_components.a, {
        href: "http://discrete.openmathbooks.org/more/mdm/sec_planar.html",
        rel: "nofollow",
        target: "_blank",
        children: "planar graph"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), ". This\r\nsuggests that we should turn our rectangles into planar graphs."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-making-the-planar-graph",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-making-the-planar-graph",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Making the Planar Graph"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can turn a rectangle into a planar graph as so:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Put temporary river segments outside the border of the rectangle."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "For each river segment, we insert its 4 corners into a set of nodes and its 4\r\nsides into a set of edges."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Notice how the resulting graph is planar, so we can apply Euler's formula."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-applying-eulers-formula",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-applying-eulers-formula",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Applying Euler's Formula"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For a planar graph, Euler's formula is given as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F = E - V + 1 + C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 49
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 76
      }, this), "\r\nis the number of faces (including the background face), ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 57
      }, this), " is the number of\r\nedges, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 8
      }, this), " is the number of vertices, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 43
      }, this), " is the number of connected\r\ncomponents."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice how ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 12
      }, this), " in our planar graph is equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 + R + A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 48
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 67
      }, this), " is the\r\nnumber of river segments and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 30
      }, this), " is the answer to the query. This means we must\r\nsubtract ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 10
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "F"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 23
      }, this), " to get ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 34
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since the whole river is a big connected component, we can just check whether\r\nthe river touches the bounding rectangle to determine ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "C"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 55
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finding ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 9
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 14
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 23
      }, this), " is a lot more complicated though."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-finding-e-v-and-r",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-finding-e-v-and-r",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Finding ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 13
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 18
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 27
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "E"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 9
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 14
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 23
      }, this), ", we can use a data structure that can handle 2D range\r\nqueries efficiently."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "However, the coordinates of the grid can get very large, so a simple 2D BIT or\r\nsegment tree won't work here."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To work around this, we can either use a 2D BIT with coordinate compression or a\r\npersistent segment tree. See the sections on\r\n", _jsxDEV(_components.a, {
        href: "/plat/2DRQ#2d-offline-sum-queries",
        children: "offline 2D sum queries"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 1
      }, this), " or\r\n", _jsxDEV(_components.a, {
        href: "/adv/persistent",
        children: "persistent segment trees"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 1
      }, this), " for more details."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
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
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "With a persistent segment tree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include \"rainbow.h\"\r\n#include <bits/stdc++.h>\r\n#define FOR(i, x, y) for (int i = x; i < y; i++)\r\nusing namespace std;\r\n\r\nconst int MAXN = 2e5, MAXSEG = (6e5 + 9) * 19 + 1;\r\n\r\nint cnt = 1, segtree[MAXSEG], left_c[MAXSEG], right_c[MAXSEG];\r\n\r\nstruct Segtree {\r\n\tset<int> data[MAXN + 1];\r\n\tint roots[MAXN + 2];\r\n\r\n\tvoid add(int x, int y) { data[x].insert(y); }\r\n\r\n\tvoid build() {\r\n\t\tFOR(i, 1, MAXN + 1) {\r\n\t\t\troots[i + 1] = roots[i];\r\n\t\t\tfor (int j : data[i]) update(j, roots[i + 1]);\r\n\t\t}\r\n\t}\r\n\r\n\tvoid update(int pos, int &node, int l = 1, int r = MAXN) {\r\n\t\tsegtree[cnt] = segtree[node] + 1;\r\n\t\tleft_c[cnt] = left_c[node];\r\n\t\tright_c[cnt] = right_c[node];\r\n\t\tnode = cnt++;\r\n\r\n\t\tif (l == r) return;\r\n\t\tint mid = (l + r) / 2;\r\n\t\tif (pos > mid) update(pos, right_c[node], mid + 1, r);\r\n\t\telse update(pos, left_c[node], l, mid);\r\n\t}\r\n\r\n\tint query(int l1, int r1, int l2, int r2) {\r\n\t\tif (l2 > r2) return 0;\r\n\t\treturn query(l2, r2, roots[r1 + 1], 1, MAXN) -\r\n\t\t       query(l2, r2, roots[l1], 1, MAXN);\r\n\t}\r\n\tint query(int a, int b, int node, int l, int r) {\r\n\t\tif (a > r || b < l) return 0;\r\n\t\tif (a <= l && b >= r) return segtree[node];\r\n\t\tint mid = (l + r) / 2;\r\n\t\treturn query(a, b, left_c[node], l, mid) +\r\n\t\t       query(a, b, right_c[node], mid + 1, r);\r\n\t}\r\n} vertices, edges_horiz, edges_vert, rivers;\r\n\r\nint mx_r, mn_r, mx_c, mn_c;\r\n\r\nvoid add_river(int x, int y) {\r\n\tvertices.add(x, y);\r\n\tvertices.add(x + 1, y);\r\n\tvertices.add(x, y + 1);\r\n\tvertices.add(x + 1, y + 1);\r\n\tedges_horiz.add(x, y);\r\n\tedges_horiz.add(x + 1, y);\r\n\tedges_vert.add(x, y);\r\n\tedges_vert.add(x, y + 1);\r\n\trivers.add(x, y);\r\n}\r\n\r\nvoid init(int R, int C, int sr, int sc, int M, char *S) {\r\n\tadd_river(sr, sc);\r\n\tmx_r = mn_r = sr;\r\n\tmx_c = mn_c = sc;\r\n\tFOR(i, 0, M) {\r\n\t\tif (S[i] == 'N') sr--;\r\n\t\tif (S[i] == 'E') sc++;\r\n\t\tif (S[i] == 'S') sr++;\r\n\t\tif (S[i] == 'W') sc--;\r\n\t\tadd_river(sr, sc);\r\n\t\tmx_r = max(mx_r, sr);\r\n\t\tmn_r = min(mn_r, sr);\r\n\t\tmx_c = max(mx_c, sc);\r\n\t\tmn_c = min(mn_c, sc);\r\n\t}\r\n\tvertices.build();\r\n\tedges_horiz.build();\r\n\tedges_vert.build();\r\n\trivers.build();\r\n}\r\n\r\nint colour(int ar, int ac, int br, int bc) {\r\n\tint E =\r\n\t    edges_horiz.query(ar + 1, br, ac, bc) + edges_vert.query(ar, br, ac + 1, bc);\r\n\tint V = vertices.query(ar + 1, br, ac + 1, bc);\r\n\tint R = rivers.query(ar, br, ac, bc);\r\n\tint C = (ar >= mn_r || br <= mx_r || ac >= mn_c || bc <= mx_c ? 1 : 2);\r\n\treturn E - V + C - R;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 67,
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
