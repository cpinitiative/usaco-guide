"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
      children: ["We have to apply ", _jsxDEV(_components.code, {
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 18
      }, this), " reversals. Following a brute force approach leads to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N * M)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 75
      }, this), ". Thus it is not feasible. Instead, we can use ", _jsxDEV(_components.strong, {
        children: "Implicit Treap"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 142
      }, this), " along with ", _jsxDEV(_components.strong, {
        children: "Lazy Propogation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 172
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 5,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-what-is-implicit-in-this-treap",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-what-is-implicit-in-this-treap",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "What is implicit in this Treap?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In a regular treap, each node stores an explicit key that determines its position in the BST order.\r\nIn an implicit treap, there is ", _jsxDEV(_components.strong, {
        children: "no stored key for ordering"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 32
      }, this), " — the position of each element is computed implicitly using subtree sizes."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.code, {
        children: "in-order traversal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 5
      }, this), " (", _jsxDEV(_components.em, {
        children: "DFS"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 27
      }, this), ") represents the current sequence, and the index of any node is determined by how many nodes exist in its left subtree. This allows us to split and merge by position efficiently without maintaining or updating explicit indices (after applying reversal operations)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To reverse a substring from index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "L"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 35
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "R"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 42
      }, this), ", we perform the following steps:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Isolate the Substring:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 4
        }, this), " We use the ", _jsxDEV(_components.code, {
          children: "split"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 42
        }, this), " function to divide our Treap into three separate trees: ", _jsxDEV(_components.code, {
          children: "T1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 106
        }, this), " (elements before index ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "L"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 134
        }, this), "), ", _jsxDEV(_components.code, {
          children: "T2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 140
        }, this), " (elements from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "L"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 160
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "R"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 167
        }, this), "), and ", _jsxDEV(_components.code, {
          children: "T3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 177
        }, this), " (elements after index ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "R"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 204
        }, this), ")."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Lazy Reversal:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 4
        }, this), " Physically reversing every node in ", _jsxDEV(_components.code, {
          children: "T2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 58
        }, this), " would be too slow. Instead, we use a bool, ", _jsxDEV(_components.code, {
          children: "rev"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 106
        }, this), ". We simply toggle this flag at the root of ", _jsxDEV(_components.code, {
          children: "T2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 155
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Reassemble:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 4
        }, this), " We use the ", _jsxDEV(_components.code, {
          children: "merge"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 31
        }, this), " function to stitch ", _jsxDEV(_components.code, {
          children: "T1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 58
        }, this), ", ", _jsxDEV(_components.code, {
          children: "T2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 64
        }, this), ", and ", _jsxDEV(_components.code, {
          children: "T3"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 74
        }, this), " back together."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Whenever we traverse the tree (during ", _jsxDEV(_components.code, {
        children: "split"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 39
      }, this), ", ", _jsxDEV(_components.code, {
        children: "merge"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 48
      }, this), ", ", _jsxDEV(_components.code, {
        children: "print"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 57
      }, this), "), we call the ", _jsxDEV(_components.code, {
        children: "push"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 79
      }, this), " function on the current node. If the ", _jsxDEV(_components.code, {
        children: "rev"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 123
      }, this), " flag is active, ", _jsxDEV(_components.code, {
        children: "push"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 145
      }, this), " physically swaps the left and right child pointers of the node and passes the ", _jsxDEV(_components.code, {
        children: "rev"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 230
      }, this), " flag down to its children. This delays the actual work until a node absolutely needs to be accessed."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finally, a ", _jsxDEV(_components.code, {
        children: "dfs"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 12
      }, this), " pushes all remaining lazy updates downwards and prints the final string."]
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
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N + M) \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
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
