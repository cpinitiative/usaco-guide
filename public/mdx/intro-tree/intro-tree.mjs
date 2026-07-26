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
    p: "p",
    strong: "strong",
    ul: "ul",
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Trees"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), " are a specific type of graph that is treated very differently from\r\ngeneral graphs. Below are some properties/definitions of trees:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["A graph is a ", _jsxDEV(_components.strong, {
          children: "tree"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 16
        }, this), " iff it is connected and contains ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 58
        }, this), " nodes and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N-1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 72
        }, this), "\r\nedges"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A graph is a ", _jsxDEV(_components.strong, {
          children: "tree"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 16
        }, this), " iff every pair of nodes has exactly one simple path\r\nbetween them"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A graph is a ", _jsxDEV(_components.strong, {
          children: "tree"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 16
        }, this), " iff it is connected and does not contain any cycles"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "General Tree Terminology:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "leaf"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 5
        }, this), " of a tree is any node in the tree with degree ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 60
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["If the tree is rooted, the ", _jsxDEV(_components.strong, {
              children: "root"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 29,
              columnNumber: 32
            }, this), " with a single child is ", _jsxDEV(_components.em, {
              children: "not"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 29,
              columnNumber: 64
            }, this), " typically\r\nconsidered a leaf, but depending on the problem, this is not always the case"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 29,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "star graph"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 31,
          columnNumber: 5
        }, this), " has two common definitions. Try to understand what they\r\nmean - they typically appear in subtasks.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Definition 1: Only one node has degree greater than ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 33,
              columnNumber: 57
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 33,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Definition 2: Only one node has degree greater than ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 34,
              columnNumber: 57
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 34,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "forest"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 5
        }, this), " is a graph such that each ", _jsxDEV(_components.strong, {
          children: "connected component"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 35,
          columnNumber: 42
        }, this), " is a tree"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Rooted Tree Terminology:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "root"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 39,
          columnNumber: 5
        }, this), " of a tree is any node of the tree that is considered to be at the\r\n'top'"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["A ", _jsxDEV(_components.strong, {
          children: "parent"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 5
        }, this), " of a node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 26
        }, this), " is the first node along the path from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 41,
          columnNumber: 68
        }, this), " to the\r\n", _jsxDEV(_components.strong, {
          children: "root"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["The ", _jsxDEV(_components.strong, {
              children: "root"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 43,
              columnNumber: 9
            }, this), " does not have a ", _jsxDEV(_components.strong, {
              children: "parent"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 43,
              columnNumber: 34
            }, this), ". This is typically done in code by\r\nsetting the ", _jsxDEV(_components.strong, {
              children: "parent"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 44,
              columnNumber: 17
            }, this), " of the ", _jsxDEV(_components.strong, {
              children: "root"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 44,
              columnNumber: 35
            }, this), " to be ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "-1"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 44,
              columnNumber: 50
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 43,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 43,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.strong, {
          children: "ancestors"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 7
        }, this), " of a node are its ", _jsxDEV(_components.strong, {
          children: "parent"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 39
        }, this), " and ", _jsxDEV(_components.strong, {
          children: "parent's"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 54
        }, this), " ", _jsxDEV(_components.strong, {
          children: "ancestors"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 67
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "Typically, a node is considered its own ancestor as well (such as in the\r\nsubtree definition)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 46,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 46,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.strong, {
          children: "subtree"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 7
        }, this), " of a node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 29
        }, this), " are the set of nodes that have ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 48,
          columnNumber: 64
        }, this), " as an\r\nancestor\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "A node is typically considered to be in its own subtree"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 50,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Note: This is easily confused with ", _jsxDEV(_components.strong, {
              children: "subgraph"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 51,
              columnNumber: 40
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 51,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.strong, {
          children: "depth"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 7
        }, this), ", or ", _jsxDEV(_components.strong, {
          children: "level"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 21
        }, this), ", of a node is its distance from the root"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-tree-traversal-order",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tree-traversal-order",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tree Traversal Order"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "When we run DFS on a rooted tree, the order in which we process each node can\r\nmatter. There are three common traversal orders:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Preorder"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 59,
          columnNumber: 3
        }, this), ": Process the current node before recursively visiting its\r\nchildren. For a binary tree, this means processing the current node, then the\r\nleft child, then the right child."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 59,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Inorder"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 62,
          columnNumber: 3
        }, this), ": Recursively visit the left child, process the current node, then\r\nrecursively visit the right child. This order is mainly used for binary trees."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 62,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Postorder"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 64,
          columnNumber: 3
        }, this), ": Recursively visit all children before processing the current\r\nnode."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example---subordinates",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---subordinates",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Subordinates"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 73,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "In this problem, we are given the parent of each node of a rooted tree, and we\r\nwant to compute the subtree size for each node. A subtree is composed of a root\r\nnode and the subtrees of the root's children. Thus, the size of a subtree is one\r\nplus the size of the root's childrens' subtrees."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 84,
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
      lineNumber: 223,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-quiz",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-quiz",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Quiz"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 227,
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
