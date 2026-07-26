"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-binary-jumping",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-binary-jumping",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Binary Jumping"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Binary lifting consists of calculating the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 44
      }, this), "-th ancestor of each node\r\nfor all relevant values of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 28
      }, this), " and storing them in a table."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["With this table, we can then efficiently answer queries regarding\r\nthe ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 5
      }, this), "-th ancestor of all nodes.\r\nThis is because any ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 21
      }, this), " can be broken down into a sum of powers of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 68
      }, this), "\r\nwith its binary representation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This way, instead of directly computing, say, the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "13"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 51
      }, this), "th ancestor of a node,\r\nwe can go to the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "8"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 18
      }, this), "th, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 30
      }, this), "th, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 37,
        columnNumber: 42
      }, this), "st ancestor of the node.\r\nThis results in a logarithmic complexity for computing the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 38,
        columnNumber: 60
      }, this), "th parent."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's an animation of how we jump if you're still confused:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["To actually compute our binary jumping table, we start with the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^0=1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 65
      }, this), "st\r\nparents of each node, which is their direct parent.\r\nWe then move on and calculate ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^1=2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 31
      }, this), "nd parents, using the fact that\r\nthe ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 5
      }, this), "nd parent can be calculated as the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 43
      }, this), "st parent of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 63
      }, this), "st parent.\r\nUsing similar logic, we move on to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 36
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 43
      }, this), ", and so on.\r\nWe stop when ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2^n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 51,
        columnNumber: 14
      }, this), " is greater than the size of the tree, since at that point\r\nwe're definitely at the root."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 46,
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
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+Q)\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 138,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-lowest-common-ancestor",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lowest-common-ancestor",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Lowest Common Ancestor"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 142,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 159,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To find ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\textrm{lca}(a, b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 9
      }, this), ", we can first lift the lower node of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 67
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 161,
        columnNumber: 75
      }, this), " to\r\nthe same depth as the other. Then, we lift both nodes up decrementally. At the\r\nend, the parent of either node is the LCA of the two."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 161,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 165,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+Q)\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 167,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 167,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 280,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can also use an ", _jsxDEV(_components.a, {
        href: "/gold/tree-euler",
        children: "Euler tour"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 282,
        columnNumber: 20
      }, this), " of the tree to help us\r\ncompute the LCAs as well."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 282,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 285,
        columnNumber: 5
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 285,
        columnNumber: 26
      }, this), " be the time-in and time-out table\r\nfor the nodes in the tree.\r\nThey'll be filled up in the exact same way the Euler tour module does it."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 285,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The cool thing is that while we're filling up ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 289,
        columnNumber: 47
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 289,
        columnNumber: 68
      }, this), ",\r\nwe can also calculate our binary jumping table in the exact same way\r\nwe did in the previous solution!\r\nWe can do this because in a DFS, we're guaranteed to have processed all of\r\na node's parents before the node itself, so all the tables of any node's\r\nancestors will have been filled when we reach the node."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 289,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, to actually calculate the LCA without the depths of the nodes,\r\nwe can use the fact that node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 297,
        columnNumber: 31
      }, this), " is an ancestor of node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 297,
        columnNumber: 58
      }, this), "\r\nif ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{start}[a] \\le \\texttt{start}[b]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 298,
        columnNumber: 4
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{end}[b] \\le \\texttt{end}[a]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 298,
        columnNumber: 50
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 296,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In our LCA function, we first check\r\nif one node is already an ancestor of the other.\r\nIn that case, we return the ancestor.\r\nIf it isn't, then we lift up one of the nodes until its an ancestor of the other\r\nin a method that's basically the same as our previous binary jumping algorithm.\r\nAfter that, our answer is the parent of the node we lift up."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 300,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 307,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+Q)\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 309,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation 3"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 399,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We can also find the LCA of two nodes using Tarjan's Offline LCA algorithm."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 401,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "By taking advantage of the DFS traversal, we\r\ncan precompute the answers to the queries through forming subtrees and calculated the common parent with a similar structure\r\nas Disjoint-Set Union."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 403,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation-3",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-3",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 407,
      columnNumber: 1
    }, this), "\n\n\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-explanation-4",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation-4",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 473,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we have the depth of all the nodes, the distance between two nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 475,
        columnNumber: 74
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 475,
        columnNumber: 82
      }, this), " is\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{depth}[a] + \\texttt{depth}[b] - 2 \\cdot \\texttt{depth}[\\textrm{lca}(a, b)]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 476,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 475,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here's some intuition if you're confused about how this formula works.\r\nTo get from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 479,
        columnNumber: 18
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 479,
        columnNumber: 25
      }, this), ", one way would be to go to the root of the tree\r\nand then to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 480,
        columnNumber: 13
      }, this), ". This gives us a distance of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{depth}[a] + \\texttt{depth}[b]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 480,
        columnNumber: 46
      }, this), ".\r\nHowever, notice that we're passing through all the nodes above the LCA\r\n", _jsxDEV(_components.em, {
        children: "twice"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 482,
        columnNumber: 1
      }, this), ".\r\nThus, we have to subtract off twice the depth of the LCA, giving us our final expression."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 478,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-implementation-4",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-4",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 485,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 487,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+Q)\\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 487,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 487,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-problems-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 603,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-usaco",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-usaco",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "USACO"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 605,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-general",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-general",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "General"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 609,
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
