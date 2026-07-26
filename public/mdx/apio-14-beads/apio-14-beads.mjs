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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\ntypedef long long ll;\r\nusing namespace std;\r\n\r\nint n, a, b;\r\nll w, pw[200001], dp[200001][2][2];\r\nvector<pair<int, ll>> graph[200001];\r\n\r\nvoid dfs(int node, int par) {\r\n\tif (graph[node].size() == 1 && par != -1) return;\r\n\r\n\tll tot = 0, best_mid = INT_MIN, best_unuse_mid = INT_MIN, best_unuse_mid2 = INT_MIN,\r\n\t   best_unuse_nomid = INT_MIN, best_unuse_nomid2 = INT_MIN;\r\n\r\n\tint best_unuse_mid_child, best_unuse_mid_child2, best_unuse_nomid_child,\r\n\t    best_unuse_nomid_child2;\r\n\r\n\tfor (int i = 0; i < graph[node].size(); i++) {\r\n\t\tif (graph[node][i].first != par) {\r\n\t\t\tint child = graph[node][i].first;\r\n\t\t\tll edge = graph[node][i].second;\r\n\r\n\t\t\tpw[child] = edge;\r\n\r\n\t\t\tdfs(child, node);\r\n\r\n\t\t\tll normsc = max(dp[child][0][0], dp[child][1][0]);\r\n\t\t\ttot += normsc;\r\n\t\t\tll midsc = max(dp[child][0][1], dp[child][1][1]) - normsc;\r\n\r\n\t\t\tif (midsc > best_mid) best_mid = midsc;\r\n\r\n\t\t\tll unuse_midsc = dp[child][0][1] + edge - normsc;\r\n\r\n\t\t\tif (unuse_midsc > best_unuse_mid) {\r\n\t\t\t\tbest_unuse_mid2 = best_unuse_mid;\r\n\t\t\t\tbest_unuse_mid_child2 = best_unuse_mid_child;\r\n\t\t\t\tbest_unuse_mid = unuse_midsc;\r\n\t\t\t\tbest_unuse_mid_child = child;\r\n\t\t\t} else if (unuse_midsc > best_unuse_mid2) {\r\n\t\t\t\tbest_unuse_mid2 = unuse_midsc;\r\n\t\t\t\tbest_unuse_mid_child2 = child;\r\n\t\t\t}\r\n\r\n\t\t\tll unuse_nomidsc = dp[child][0][0] + edge - normsc;\r\n\r\n\t\t\tif (unuse_nomidsc > best_unuse_nomid) {\r\n\t\t\t\tbest_unuse_nomid2 = best_unuse_nomid;\r\n\t\t\t\tbest_unuse_nomid_child2 = best_unuse_nomid_child;\r\n\t\t\t\tbest_unuse_nomid = unuse_nomidsc;\r\n\t\t\t\tbest_unuse_nomid_child = child;\r\n\t\t\t} else if (unuse_nomidsc > best_unuse_nomid2) {\r\n\t\t\t\tbest_unuse_nomid2 = unuse_nomidsc;\r\n\t\t\t\tbest_unuse_nomid_child2 = child;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tdp[node][0][0] = tot;\r\n\tdp[node][0][1] = tot + max(0LL, best_mid);\r\n\tdp[node][0][1] = max(dp[node][0][1], tot + best_unuse_nomid + best_unuse_nomid2);\r\n\r\n\tif (best_unuse_mid_child != best_unuse_nomid_child) {\r\n\t\tdp[node][0][1] = max(dp[node][0][1], tot + best_unuse_nomid + best_unuse_mid);\r\n\t} else {\r\n\t\tdp[node][0][1] = max(dp[node][0][1], tot + best_unuse_nomid2 + best_unuse_mid);\r\n\t\tdp[node][0][1] = max(dp[node][0][1], tot + best_unuse_nomid + best_unuse_mid2);\r\n\t}\r\n\r\n\tdp[node][1][0] = tot + pw[node] + best_unuse_nomid;\r\n\tdp[node][1][1] = tot + pw[node] + best_unuse_mid;\r\n}\r\n\r\nint main() {\r\n\tcin >> n;\r\n\tfor (int i = 0; i < n - 1; i++) {\r\n\t\tcin >> a >> b >> w;\r\n\t\tgraph[a].push_back({b, w});\r\n\t\tgraph[b].push_back({a, w});\r\n\t}\r\n\tdfs(1, -1);\r\n\r\n\tcout << max(dp[1][0][1], dp[1][0][0]) << '\\n';\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
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
