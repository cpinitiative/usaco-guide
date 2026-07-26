"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    p: "p",
    pre: "pre",
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
      children: ["Split the graph into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N / K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 22
      }, this), " \"layers\" with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 44
      }, this), " nodes each. Notice how this graph\r\nsomewhat resembles a neural network."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/solutions/platinum/baltic-17-toll/graph.png",
        alt: "Graph from the sample"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[a][b][x][y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 5
      }, this), " denote the minimum cost of a path between nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Ka + x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 70
      }, this), " to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "Kb + y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For any triple ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a < b < c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 16
      }, this), ", the following recurrence holds:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[a][c][x][y] = \\min_{z \\in [0, K)} (dp[a][b][x][z] + dp[b][c][z][y])"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is known as the\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Min-plus_matrix_multiplication",
        rel: "nofollow",
        target: "_blank",
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "(\\min,+)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 2
        }, this), " product"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To finish, we can use any algorithm that allows us to quickly answer static\r\nrange queries (ex. divide & conquer). Another approach is to use a sparse table.\r\nInstead of storing each DP state, we can store only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[i][i + 2^j][x][y]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 53
      }, this), " for\r\neach ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 6
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 11
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 16
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 25
      }, this), ". Then we can find the value of\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "dp[\\lfloor A / K \\rfloor][\\lfloor B / K \\rfloor][A \\% K][B \\% K]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), " in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K^2 \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), " time per query with binary jumping. This gives a time\r\ncomplexity of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K^2(N+O)\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 15
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
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
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K^3 \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), " per query. We can reduce this to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(K^2 \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), " per query by only storing the ", _jsxDEV(_components.code, {
        children: "a % k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 57
      }, this), "-th row of ", _jsxDEV(_components.code, {
        children: "ans"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 75
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
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
