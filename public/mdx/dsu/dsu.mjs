"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-resources",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resources",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "As the implementation is quite simple, you may prefer to use this in place of\r\nDFS for computing connected components."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 186,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---focus-problem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---focus-problem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Focus Problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 189,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Without union find, we would have to represent the graph with an adjacency list\r\nand use ", _jsxDEV(_components.a, {
        href: "/silver/flood-fill",
        children: "flood fill"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 9
      }, this), " to calculate connected components. This\r\napproach takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NQ)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 16
      }, this), " time, which is too slow, motivating us to use\r\n", _jsxDEV(_components.strong, {
        children: "union find"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 191,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["By representing the graph with the union find data structure that was just\r\nimplemented above, we can use its methods to both ", _jsxDEV(_components.em, {
        children: "unite"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 197,
        columnNumber: 51
      }, this), " vertices and check\r\nif two vertices ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 198,
        columnNumber: 17
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 198,
        columnNumber: 27
      }, this), " are in the same connected component using only\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\alpha(N))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 1
      }, this), " amortized time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 196,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This reduces the overall time complexity to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(Q \\alpha(N))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 201,
        columnNumber: 45
      }, this), ", which\r\nis a substantial improvement and allows us to pass all test cases."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 201,
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
      lineNumber: 204,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 206,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(Q \\alpha(N))"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 206,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 206,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 387,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-standard",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-standard",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Standard"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 389,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "You should already be familiar with the DFS / Binary Search solutions to\r\n\"Wormhole Sort\" and \"Moocast.\""
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 391,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-harder",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-harder",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Harder"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 396,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Don't worry about solving these if this is the first time you've encountered\r\nDSU."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 398,
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
