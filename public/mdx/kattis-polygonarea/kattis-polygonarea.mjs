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
      children: ["We can use the ", _jsxDEV(_components.a, {
        href: "/CPH.pdf#page=281",
        children: "shoelace theorem"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 16
      }, this), " to find the area of the\r\npolygon."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Recall that the sign of the resulting area determines the direction in which the\r\nvertices are given. For our implementation, the vertices are given clockwise if\r\nthe area is negative, and counterclockwise otherwise."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 5,
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
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "//BeginCodeSnip{C++ Short Template}\n#include <bits/stdc++.h> // see /general/running-code-locally\nusing namespace std;\n\nusing ll = long long;\n\nusing vi = vector<int>;\n#define pb push_back\n#define all(x) begin(x), end(x)\n#define sz(x) (int) (x).size()\n\nusing pi = pair<int,int>;\n#define f first\n#define s second\n#define mp make_pair\n\nvoid setIO(string name = \"\") {\n\tcin.tie(0)->sync_with_stdio(0); // see /general/fast-io\n\tif (sz(name)) {\n\t\tfreopen((name + \".in\").c_str(), \"r\", stdin); // see /general/input-output\n\t\tfreopen((name + \".out\").c_str(), \"w\", stdout);\n\t}\n}\n//EndCodeSnip\n\r\n// From KACTL: https://github.com/kth-competitive-programming/kactl\r\n\r\ntemplate <class T> struct Point {\r\n\ttypedef Point P;\r\n\tT x, y;\r\n\texplicit Point(T x = 0, T y = 0) : x(x), y(y) {}\r\n\tP operator-(P p) const { return P(x - p.x, y - p.y); }\r\n\tT cross(P p) const { return x * p.y - y * p.x; }\r\n\tT cross(P a, P b) const { return (a - *this).cross(b - *this); }\r\n};\r\n\r\ntemplate <class T> T polygonArea2(vector<Point<T>> &v) {\r\n\tT a = v.back().cross(v[0]);\r\n\tfor (int i = 0; i < sz(v) - 1; i++) a += v[i].cross(v[i + 1]);\r\n\treturn a;\r\n}\r\n\r\ntypedef Point<long double> P;\r\n\r\nvoid solve(int n) {\r\n\tvector<P> pts(n);\r\n\tfor (int i = 0; i < n; i++) {\r\n\t\tint a, b;\r\n\t\tcin >> a >> b;\r\n\t\tpts[i] = P(a, b);\r\n\t}\r\n\r\n\t// implementation has 2x polygon area\r\n\tlong double area = polygonArea2(pts) / 2;\r\n\t(area < 0) ? cout << \"CW \" : cout << \"CCW \";\r\n\r\n\tcout << fixed << setprecision(1) << abs(area) << \"\\n\";\r\n}\r\n\r\nint main() {\r\n\tsetIO();\r\n\tfor (;;) {\r\n\t\tint n;\r\n\t\tcin >> n;\r\n\t\tif (!n) break;\r\n\t\tsolve(n);\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 13,
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
