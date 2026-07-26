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
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given a node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 14
      }, this), ", we know that any path in the tree either passes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 67
      }, this), " or is\r\ncompletely contained in one of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 32
      }, this), "'s children's subtrees. This means that to\r\nsolve the problem on a tree containing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 40
      }, this), ", we can:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Count the number of paths of length ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 40
        }, this), " that pass through ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 62
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Remove ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 11
        }, this), " and its incident edges from the tree."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Recursively solve the problem on the new trees that are formed."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-counting-paths-through-u",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-counting-paths-through-u",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Counting paths through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 27
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can count the number of paths passing through ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 50
      }, this), " in a tree of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 72
      }, this), " in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We process each of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 20
      }, this), "'s children's subtrees in order. Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{cnt}_i[d]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 60
      }, this), "\r\nbe the number of nodes we've visited with depth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 49
      }, this), " after processing the first\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 8
      }, this), "'s children's subtrees. A node with depth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 53
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 60
      }, this), "'s ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 66
      }, this), "-th child's\r\nsubtree will contribute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{cnt}_{i - 1}[k - d]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 25
      }, this), " paths to the answer."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Using two DFSes for each child, we can calculate its contribution and then\r\nupdate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{cnt}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 8
      }, this), " in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 26
      }, this), " time total."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-applying-centroid-decomposition",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-applying-centroid-decomposition",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Applying centroid decomposition"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can combine the previous idea with ", _jsxDEV(_components.a, {
        href: "/plat/centroid",
        children: "centroid decomposition"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 39
      }, this), "\r\nto solve the whole problem in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 31
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 27,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When processing some tree, simply let the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 43
      }, this), " we use be that tree's centroid.\r\nSince the centroid tree has a depth of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 40
      }, this), " and each layer in\r\nthe centroid tree takes amortized ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 35
      }, this), " time to process, the total\r\ncomplexity is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 15
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
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
      lineNumber: 35,
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
