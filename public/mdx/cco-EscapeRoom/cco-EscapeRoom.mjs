"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["Define ", _jsxDEV(_components.code, {
        children: "grid[r][c]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 8
      }, this), " to be the integer in the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 46
      }, this), "-th row of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 64
      }, this), "-th column of\r\nthe input grid. Let ", _jsxDEV(_components.code, {
        children: "done[x]=true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 21
      }, this), " if we can reach any cell ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(r,c)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 61
      }, this), " such that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r\\cdot c=x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        children: "false"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 18
      }, this), " otherwise. If ", _jsxDEV(_components.code, {
        children: "done[x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 40
      }, this), " is ", _jsxDEV(_components.code, {
        children: "true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 53
      }, this), ", then we also know\r\nthat ", _jsxDEV(_components.code, {
        children: "done[grid[r][c]]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 6
      }, this), " is ", _jsxDEV(_components.code, {
        children: "true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 28
      }, this), " for all cells ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(r,c)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 49
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r\\cdot c=x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 67
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["So we essentially have a directed graph with vertices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1\\ldots 10^6"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 55
      }, this), " where there\r\nexists a directed edge from ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 29
      }, this), " to ", _jsxDEV(_components.code, {
        children: "grid[r][c]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 36
      }, this), " whenever ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r\\cdot c=x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 58
      }, this), ". We want\r\nto test whether there exists a path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 42
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N\\cdot M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 49
      }, this), " in this graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Thus, we can simply start DFSing from vertex ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 46
      }, this), " and mark all the vertices that\r\nwe visit in the boolean array ", _jsxDEV(_components.code, {
        children: "done"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 31
      }, this), ". If we set ", _jsxDEV(_components.code, {
        children: "done[N*M]=true"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 49
      }, this), ", then a path\r\nexists, and we can terminate after printing \"yes.\" Note that in the code below,\r\n", _jsxDEV(_components.code, {
        children: "todo[x]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), " denotes the adjacency list of ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 41
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\n\r\nusing namespace std;\r\n\r\nint M, N;\r\nvector<int> todo[1000005];\r\nbool done[1000005];\r\n\r\nvoid dfs(int x) {\r\n\tif (done[x]) { return; }\r\n\tif (x == N * M) {\r\n\t\tcout << \"yes\" << endl;\r\n\t\texit(0);\r\n\t}\r\n\tdone[x] = 1;\r\n\tfor (int &t : todo[x]) { dfs(t); }\r\n}\r\n\r\nint main() {\r\n\tcin.tie(0)->sync_with_stdio(0);\r\n\tcin >> M >> N;\r\n\tfor (int i = 1; i <= M; i++) {\r\n\t\tfor (int j = 1; j <= N; j++) {\r\n\t\t\tint x;\r\n\t\t\tcin >> x;\r\n\t\t\ttodo[i * j].push_back(x);\r\n\t\t}\r\n\t}\r\n\tdfs(1);\r\n\tcout << \"no\" << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 18,
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
