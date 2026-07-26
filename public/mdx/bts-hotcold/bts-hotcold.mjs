"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
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
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 5
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 10
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 19
      }, this), " be the nodes given in each query, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 61
      }, this), " be\r\nthe LCA of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 12
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 20
      }, this), ". Directly updating the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 57
      }, this), "\r\nto ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 4
      }, this), " is difficult to do, so breaking up the path into smaller segments\r\nis necessary. To do that, we use some casework."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["Case 1: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 11
        }, this), " is equal to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 27
        }, this), ", or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 35
        }, this), " is not inside ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 53
        }, this), "'s subtree."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this case, we update the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 39
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 46
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 8
      }, this), ". Note that if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 26
      }, this), " is equal to either ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 49
      }, this), " or ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 56
      }, this), ",\r\nthen this case must be handled slightly differently."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["Case 2: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 11
        }, this), " is equal to either ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 34
        }, this), " or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 41
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let the first ancestor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 27
      }, this), " that is on the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 56
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 63
      }, this), "\r\nbe ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 4
      }, this), ". WLOG, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 19
      }, this), " be equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 35
      }, this), ". Then, we update the path from\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 8
      }, this), " and the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 30
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 37
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["Case 3: The LCA of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 22
        }, this), " with ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 31
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 39
        }, this), " is the same as ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "p"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 58
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Like how we handled case 1, for this case we update the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 67
      }, this), " to\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), " and the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 23
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 30
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 23,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["Case 4: Either the LCA of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 29
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 37
        }, this), " or the LCA of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 55
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 63
        }, this), " lie on the path from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 88
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 26,
          columnNumber: 95
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this case, split the path updates into 3 segments. Let the lower of the two LCAs mentioned\r\nbe ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 4
      }, this), ", and the node which is an ancestor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 46
      }, this), " be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 53
      }, this), ". Then, just update the path from\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 8
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 13
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 20
      }, this), ", and the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 43
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 50
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-handling-path-updates",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-handling-path-updates",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Handling Path Updates"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Note that based on how we did our casework on the paths, that all path updates are between a given\r\nnode and its ancestor. Also, note that the path updates are just adding distances which either increase\r\nor decrease by a fixed amount every time. So, we can sort of do a difference array on a tree, where we DFS\r\ndown the tree and apply the differences while walking back up the tree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 34,
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
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N\\log{N})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
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
