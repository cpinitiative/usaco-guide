"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/81527",
        rel: "nofollow",
        target: "_blank",
        children: "Announcement With Official Editorial"
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
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Basically the problem statement asks if given a path from a start node to an end\r\nnode on a tree, how far the sloth will travel if it has a set amount of energy,\r\nand each edge on the path has an energy cost."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We know that the sloth will always try to move upwards from the start node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{st}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 76
      }, this), " to\r\nthe least common ancestor of the start and end nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{lca}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 54
      }, this), ", and then\r\nmove downwards from the least common ancestor towards the end node\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dist}(i, j)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 5
      }, this), " be the distance from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 53
      }, this), " to node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 65
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["So if the sloth has energy amount ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "e"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 35
      }, this), ", there are 3 separate cases:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.code, {
            className: "language-math",
            children: "e \\geq \\texttt{dist}(dist(\\texttt{st}, \\texttt{end})"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 20,
            columnNumber: 4
          }, this), ". In this case the result will be the sloth reaching the end."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.code, {
            className: "language-math",
            children: "e < \\texttt{dist(\\texttt{st}, \\texttt{end})}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 22,
            columnNumber: 4
          }, this), " and\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "e < \\texttt{dist(\\texttt{st}, \\texttt{lca})}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 23,
            columnNumber: 2
          }, this), " in which the result will be the\r\nsloth reaching the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "e"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 24,
            columnNumber: 21
          }, this), "th parent of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{st}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 24,
            columnNumber: 37
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.code, {
            className: "language-math",
            children: "e < \\texttt{dist(\\texttt{st}, \\texttt{end})}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 26,
            columnNumber: 4
          }, this), " and\r\n", _jsxDEV(_components.code, {
            className: "language-math",
            children: "e \\geq \\texttt{dist(\\texttt{st}, \\texttt{lca})}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 27,
            columnNumber: 2
          }, this), " in which the result will be\r\nthe sloth reaching the ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "(e - \\texttt{dist(\\texttt{st}, \\texttt{lca}))}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 28,
            columnNumber: 25
          }, this), "th\r\nparent of ", _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\texttt{end}"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 29,
            columnNumber: 12
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "So first, we can can run DFS once to find the depth of every node."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then we can create a matrix ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{anc}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 29
      }, this), " to store the ancestors of each node, where\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{anc[i][j]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this), " is the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 29
      }, this), "th ancestor of node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 54
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "After that, we can use binary lifting to answer each query by finding the least\r\ncommon ancestor of the start and end nodes, and then finding the right node that\r\nthe sloth will reach."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
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
      lineNumber: 40,
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
