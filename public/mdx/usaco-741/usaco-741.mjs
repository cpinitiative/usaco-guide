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
    children: [_jsxDEV(_components.h2, {
      id: "user-content-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_cownomics_gold_open17.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (with hashing) (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Sort suffixes."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NM^2\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), " solution:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(nullptr);\r\n\r\n\tfreopen(\"cownomics.in\", \"r\", stdin);\r\n\tfreopen(\"cownomics.out\", \"w\", stdout);\r\n\r\n\tint N, M;\r\n\tcin >> N >> M;\r\n\r\n\tvector<string> g(2 * N);\r\n\tfor (auto &s : g) cin >> s;\r\n\r\n\tint ans = INT_MAX;\r\n\r\n\tfor (int i = 0; i < M; i++) {\r\n\t\tvector<int> v(2 * N);\r\n\r\n\t\tiota(v.begin(), v.end(), 0);\r\n\r\n\t\tauto common = [&](int x, int y) {\r\n\t\t\tint ind = i;\r\n\t\t\twhile (ind < M && g[x][ind] == g[y][ind]) ind++;\r\n\t\t\treturn ind;\r\n\t\t};\r\n\r\n\t\tauto cmp = [&](int x, int y) {\r\n\t\t\tint ind = common(x, y);\r\n\t\t\treturn ind < M && g[x][ind] < g[y][ind];\r\n\t\t};\r\n\r\n\t\tsort(v.begin(), v.end(), cmp);\r\n\r\n\t\tint mx = i;\r\n\r\n\t\tfor (int j = 0; j < 2 * N - 1; j++) {\r\n\t\t\tif (v[j] / N != v[j + 1] / N) { mx = max(mx, common(v[j], v[j + 1])); }\r\n\t\t}\r\n\r\n\t\tif (mx == M) break;\r\n\r\n\t\tans = min(ans, mx + 1 - i);\r\n\t}\r\n\r\n\tcout << ans << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NM^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this), " solution:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tios::sync_with_stdio(false);\r\n\tcin.tie(nullptr);\r\n\r\n\tfreopen(\"cownomics.in\", \"r\", stdin);\r\n\tfreopen(\"cownomics.out\", \"w\", stdout);\r\n\r\n\tint N, M;\r\n\tcin >> N >> M;\r\n\r\n\tvector<string> g(2 * N);\r\n\tfor (auto &s : g) cin >> s;\r\n\r\n\tvector<int> suf(2 * N);\r\n\r\n\tiota(suf.begin(), suf.end(), 0);\r\n\r\n\tint ans = INT_MAX;\r\n\r\n\tfor (int i = M - 1; i >= 0; i--) {\r\n\t\tvector<int> tmp[26];\r\n\r\n\t\tfor (int t : suf) { tmp[g[t][i] - 'A'].push_back(t); }\r\n\r\n\t\tsuf.clear();\r\n\r\n\t\tfor (int j = 0; j < 26; j++) {\r\n\t\t\tsuf.insert(suf.end(), tmp[j].begin(), tmp[j].end());\r\n\t\t}\r\n\r\n\t\tauto common = [&](int x, int y) {\r\n\t\t\tint ind = i;\r\n\t\t\twhile (ind < M && g[x][ind] == g[y][ind]) ind++;\r\n\t\t\treturn ind;\r\n\t\t};\r\n\r\n\t\tint mx = i;\r\n\r\n\t\tfor (int j = 0; j < 2 * N - 1; j++) {\r\n\t\t\tif (suf[j] / N != suf[j + 1] / N) {\r\n\t\t\t\tmx = max(mx, common(suf[j], suf[j + 1]));\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif (mx < M) { ans = min(ans, mx + 1 - i); }\r\n\t}\r\n\r\n\tcout << ans << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 121,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Probably possible to pass solutions with worse complexities ..."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 123,
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
