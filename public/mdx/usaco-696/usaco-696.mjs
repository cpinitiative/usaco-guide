"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_promote_platinum_jan17.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial (Java)"
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
      id: "user-content-solution-1-euler-tour",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1-euler-tour",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1: Euler Tour"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Recall from the ", _jsxDEV(_components.a, {
        href: "/gold/tree-euler",
        children: "Euler tour module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 17
      }, this), " that each subtree is represented as a contiguous interval in its Euler tour. With this knowledge, we can compress the tree into an array. Now, the problem is reduced the following: for each node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 250
      }, this), ", we need to determine the number of elements that are less than ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{tour}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 318
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 342
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{tout}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 349
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{tout}[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 375
      }, this), " is the end of the subtree interval for node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 438
      }, this), ". By processing the nodes in decreasing order, this is a problem we can solve in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 522
      }, this), " time with a binary-indexed tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
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
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-2-merging-indexed-sets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2-merging-indexed-sets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2 (Merging Indexed Sets)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 186,
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
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log ^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 190,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 190,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Recall from the module that ", _jsxDEV(_components.code, {
        children: "std::swap(d[a],d[b])"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 246,
        columnNumber: 29
      }, this), " will be too slow. However,\r\nthe following does (overloading ", _jsxDEV(_components.code, {
        children: "std::swap"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 247,
        columnNumber: 33
      }, this), "):"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 246,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-3-hld",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-3-hld",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 3: HLD"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 307,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Sort the cows from largest to smallest proficiency. For each cow, perform a path update that adds one to all cows from itself to the president."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 309,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 311,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 313,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log ^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 313,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 313,
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
