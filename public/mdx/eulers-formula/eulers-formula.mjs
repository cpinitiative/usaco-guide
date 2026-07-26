"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    pre: "pre",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int N, h[750][750];\r\nll ans;\r\nvector<pair<int, pi>> v;\r\n\r\nint hsh(int a, int b) { return N * a + b; }\r\n\r\nconst int xd[4] = {1, 0, -1, 0}, yd[4] = {0, 1, 0, -1};\r\n\r\ntemplate <int SZ> struct DSU {\r\n\tint par[SZ], sz[SZ], measure[SZ];\r\n\tvi comp[SZ];\r\n\tDSU() { F0R(i, SZ) par[i] = i, sz[i] = 1, measure[i] = 1; }\r\n\tbool valid(int b, int c) { return b >= 0 && b < N && c >= 0 && c < N; }\r\n\tbool ok(int a, int b, int c) {\r\n\t\tif (!valid(b, c)) return 0;\r\n\t\treturn par[hsh(b, c)] == a;\r\n\t}\r\n\tvoid addPoint(int x, pi t) {\r\n\t\tpar[hsh(t.f, t.s)] = x;\r\n\t\tmeasure[x]++;\r\n\t\tF0R(i, 4) {\r\n\t\t\tif (ok(x, t.f + xd[i], t.s + yd[i])) {\r\n\t\t\t\tmeasure[x]--;\r\n\t\t\t\tint j = (i + 1) % 4;\r\n\t\t\t\tif (ok(x, t.f + xd[j], t.s + yd[j]) &&\r\n\t\t\t\t    ok(x, t.f + xd[j] + xd[i], t.s + yd[j] + yd[i]))\r\n\t\t\t\t\tmeasure[x]++;\r\n\t\t\t}\r\n\t\t}\r\n\t\tcomp[x].pb(hsh(t.f, t.s));\r\n\t}\r\n\tvoid unite(pi x, pi y) {  // union-by-rank\r\n\t\tint X = hsh(x.f, x.s), Y = hsh(y.f, y.s);\r\n\t\tif (par[X] == par[Y]) return;\r\n\t\tX = par[X], Y = par[Y];\r\n\t\tif (sz(comp[X]) < sz(comp[Y])) swap(X, Y);\r\n\t\ttrav(t, comp[Y]) addPoint(X, {t / N, t % N});\r\n\t\tcomp[Y].clear();\r\n\t}\r\n};\r\n\r\nDSU<750 * 750> D;\r\nbool ok[750][750];\r\n\r\nvoid solve(int x, int y) {\r\n\tok[x][y] = 1;\r\n\tF0R(i, 4) {\r\n\t\tint X = x + xd[i], Y = y + yd[i];\r\n\t\tif (X < 0 || X >= N || Y < 0 || Y >= N) continue;\r\n\t\tif (!ok[X][Y]) continue;\r\n\t\tD.unite({x, y}, {X, Y});\r\n\t}\r\n}\r\n\r\nint main() {\r\n\tsetIO(\"valleys\");\r\n\tre(N);\r\n\tF0R(i, N) F0R(j, N) {\r\n\t\tre(h[i][j]);\r\n\t\tv.pb({h[i][j], {i, j}});\r\n\t\tD.comp[hsh(i, j)].pb(hsh(i, j));\r\n\t}\r\n\tsort(all(v));\r\n\tF0R(i, sz(v)) {\r\n\t\tsolve(v[i].s.f, v[i].s.s);\r\n\t\tpi p = v[i].s;\r\n\t\tint q = D.par[hsh(p.f, p.s)];\r\n\t\tif (D.measure[q] == 1) ans += sz(D.comp[q]);\r\n\t}\r\n\tcout << ans;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
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
      lineNumber: 92,
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
