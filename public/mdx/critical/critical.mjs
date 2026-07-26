"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-initial-approach",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-initial-approach",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Initial Approach"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["These critical nodes that the problem talks about are commonly known as ", _jsxDEV(_components.strong, {
        children: "dominators"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 35,
        columnNumber: 73
      }, this), ".\r\nLet's define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dom}(u)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 14
      }, this), " as the set of nodes that dominate node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 71
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The dominator of the starting node is itself, and the set of dominators\r\nfor any other node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 20
      }, this), " is the intersection of the set of dominators for all ancestors ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 87
      }, this), " of node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 99
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dom}(u)=\r\n\\begin{cases}\r\n  u\\quad\\text{ if } u \\text{ is the starting point} \\\\\r\n  {u}\\cup \\left(\\bigcap_{p \\in \\texttt{ancestor}(u)} \\texttt{dom}(p)\\right)\\quad\\text{otherwise}\r\n\\end{cases}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
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
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The following code uses the above recurrence.\r\nHowever, it's too slow and uses too much memory.\r\nWe'll try to optimize this moving on!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 22
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-optimizing-with-trees",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optimizing-with-trees",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optimizing With Trees"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 123,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In this approach, we are going to build the ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Dominator_(graph_theory)",
        rel: "nofollow",
        target: "_blank",
        children: "dominator tree"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 45
      }, this), " of the graph."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Before we discuss this though, let's set up some terms we're going to use throughout this module:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 127,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["A node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 129,
          columnNumber: 10
        }, this), " ", _jsxDEV(_components.strong, {
          children: "strictly dominates"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 129,
          columnNumber: 14
        }, this), " another node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 129,
          columnNumber: 50
        }, this), " if ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 129,
          columnNumber: 57
        }, this), " dominates ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 129,
          columnNumber: 71
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u \\ne v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 129,
          columnNumber: 79
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Let the ", _jsxDEV(_components.strong, {
          children: "immediate dominator"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 130,
          columnNumber: 11
        }, this), " of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 130,
          columnNumber: 38
        }, this), ", or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{idom}(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 130,
          columnNumber: 46
        }, this), ", be the unique node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 130,
          columnNumber: 85
        }, this), " such that it strictly dominates node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 130,
          columnNumber: 126
        }, this), " and every other dominator of node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 130,
          columnNumber: 164
        }, this), " strictly dominates node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 130,
          columnNumber: 192
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Let ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "e(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 131,
          columnNumber: 7
        }, this), " be the entry time in node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 131,
          columnNumber: 40
        }, this), " doing a ", _jsxDEV(_components.a, {
          href: "/gold/tree-euler",
          children: "Euler tour"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 131,
          columnNumber: 52
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Let the ", _jsxDEV(_components.strong, {
          children: "semi-dominator"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 132,
          columnNumber: 11
        }, this), " of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 132,
          columnNumber: 33
        }, this), ", or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{sdom}(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 132,
          columnNumber: 41
        }, this), ", be a ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 132,
          columnNumber: 66
        }, this), " such that there's a path from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 132,
          columnNumber: 100
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 132,
          columnNumber: 107
        }, this), "\r\nand ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "e(i) \\ge e(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 133,
          columnNumber: 7
        }, this), " for every intermediate node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 133,
          columnNumber: 51
        }, this), " along the path from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 133,
          columnNumber: 75
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 133,
          columnNumber: 82
        }, this), ", excluding the ends.\r\nIf there's multiple nodes that satisfy this requirement, we take the node ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 134,
          columnNumber: 77
        }, this), " with the smallest ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "e(v)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 134,
          columnNumber: 99
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 132,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Let the ", _jsxDEV(_components.strong, {
          children: "relative dominator"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 135,
          columnNumber: 11
        }, this), " of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 135,
          columnNumber: 37
        }, this), ", or ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{rdom}(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 135,
          columnNumber: 45
        }, this), ", be the vertex ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x \\ne \\texttt{sdom}(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 135,
          columnNumber: 79
        }, this), " on the path from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{sdom}(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 135,
          columnNumber: 121
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 135,
          columnNumber: 143
        }, this), " in the Euler tour tree with the lowest sdom node number.\r\nUnlike with the sdom, ties in this function can be broken arbitrarily."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 129,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A dominator tree is a tree where each node's children are those nodes it immediately dominates. The start node is the root of the tree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 138,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given this definition, we can see that if a node dominates another, then the former is\r\nan ancestor of the latter in the dominator tree.\r\nThus, the answer to the CSES problem is the set of all nodes that lie on the path from the root to node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 105
      }, this), " in the tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 140,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The following graph shows the sdom for every node.\r\nThe full-color edges represent the edges part of the DFS tree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 144,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/assets/dom_tree_sdom.png",
        alt: "Graph2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 147,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-important-properties",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-important-properties",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Important properties"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 149,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Proofs of these properties are located later in the module.\r\nFor all of these properties, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 152,
        columnNumber: 34
      }, this), " be a node that isn't the starting node."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 151,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{sdom}(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 154,
          columnNumber: 4
        }, this), " is a proper ancestor of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 154,
          columnNumber: 47
        }, this), " is the DFS tree."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 154,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{rdom}(u)=u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 155,
          columnNumber: 7
        }, this), ", then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{idom}(u)=\\texttt{sdom}(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 155,
          columnNumber: 34
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 155,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If not, then ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{idom}(u)=\\texttt{idom}(\\texttt{rdom}(u))"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 156,
          columnNumber: 17
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 156,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 154,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-algorithm-overview",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-algorithm-overview",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Algorithm Overview"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 158,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Before we get into the nitty-gritty, here's a brief outline of how exactly we're going to build up this dominator tree."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 160,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Compute the sdom of every node besides the start."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 162,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Compute the ", _jsxDEV(_components.em, {
          children: "rdom"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 163,
          columnNumber: 16
        }, this), " of every node besides the start."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 163,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Visit all the vertices in the DFS tree and calculate their immediate dominator using the second and third properties that were listed above.\r\nNotice that due to how we defined the rdom of a node, a preorder traversal will always visit the rdom of a node before the node itself if the two aren't the same."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 164,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 162,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The first and second steps are awfully vague- let's clear those up now, shall we?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 167,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-computing-textttsdom",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-computing-textttsdom",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Computing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{sdom}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 169,
        columnNumber: 15
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{sdom}(u)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 171,
        columnNumber: 16
      }, this), " as the minimum node in the intersection of the following groups:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 171,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["All the nodes ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 172,
          columnNumber: 18
        }, this), " such that there's an edge from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "y"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 172,
          columnNumber: 53
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 172,
          columnNumber: 60
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "e(y) \\le e(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 172,
          columnNumber: 68
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 172,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["All the values of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\texttt{sdom}(x)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 173,
          columnNumber: 22
        }, this), " where ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 173,
          columnNumber: 47
        }, this), " is any node such that there's an edge from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "u"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 173,
          columnNumber: 94
        }, this), " to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 173,
          columnNumber: 101
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "e(x) > e(u)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 173,
          columnNumber: 109
        }, this), ".\r\nTo be more mathematically precise, we can define this group as\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\{\\texttt{sdom}(x)\\ |\\ (u, x) \\in E\\text{ and }e(x)>e(u)\\}"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 175,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 173,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 172,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://tanujkhattar.wordpress.com/2016/01/11/dominator-tree-of-a-directed-graph/",
        rel: "nofollow",
        target: "_blank",
        children: "proof"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 179,
        columnNumber: 5
      }, this), " of why this works is beyond the scope of this module."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-implementing-textttsdom",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementing-textttsdom",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{sdom}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 18
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 181,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We first perform a preorder DFS traversal of the graph from the source node and keep track of all the entry times of the nodes."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then, we compute the sdom for all nodes by applying the formula mentioned in the previous section.\r\nTo do this, we iterate over the traversal in ", _jsxDEV(_components.em, {
        children: "reverse order"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 46
      }, this), " and maintain the nodes we've gone over in a ", _jsxDEV(_components.a, {
        href: "/gold/dsu",
        children: "DSU"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 106
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 185,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["However, the DSU we use for this algorithm is going to be a little different.\r\nWe unite nodes as usual, but the ", _jsxDEV(_components.code, {
        children: "find"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 189,
        columnNumber: 34
      }, this), " function differs."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Say ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 5
      }, this), " is the root of the component we're calling ", _jsxDEV(_components.code, {
        children: "find"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 191,
        columnNumber: 52
      }, this), " on.\r\nThe node we're calling ", _jsxDEV(_components.code, {
        children: "find"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 24
      }, this), " on happens to be ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 48
      }, this), ", then we return ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 68
      }, this), " as usual.\r\nHowever, if it's some other node, then we return a node with the minimum sdom that lies on the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 106
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 113
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 191,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To process node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 17
      }, this), " we iterate over all nodes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 47
      }, this), " that have an edge directed towards it.\r\nIf ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 4
      }, this), " comes before ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 21
      }, this), " in the preorder traversal, then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 57
      }, this), " is an ancestor of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 79
      }, this), " and would not have been processed till now.\r\nIn that case, ", _jsxDEV(_components.code, {
        children: "find(v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 197,
        columnNumber: 15
      }, this), " would return ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 197,
        columnNumber: 38
      }, this), " itself."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 195,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If not, then ", _jsxDEV(_components.code, {
        children: "find(v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 14
      }, this), " would return a node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 44
      }, this), " lying on the path from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 71
      }, this), " to the root in its DSU component with the smallest sdom."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 199,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If you're still a bit confused by this explanation, pseudocode for it is located\r\non slide 33 of the Princeton slides given at the start of this module."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 201,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-computing-textttrdom",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-computing-textttrdom",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Computing ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{rdom}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 204,
        columnNumber: 15
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 204,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The rdom of a node is the node with the sdom that comes earliest in the traversal.\r\nSince this reduces to finding the minimum of a value along a certain path in a tree,\r\nwe can implement this using an augmentation of ", _jsxDEV(_components.a, {
        href: "/plat/binary-jump",
        children: "binary jumping"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 208,
        columnNumber: 48
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 206,
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
      lineNumber: 210,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+M) \\cdot \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 212,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 212,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-cycles",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-cycles",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Cycles"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 415,
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
      lineNumber: 419,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The problem asks as to find the an intersection node of all cycles, if it exists."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 421,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "First, let's remove the nodes that don't belong to any cycle.\r\nTo todo this, we can recursively remove the nodes without any outgoing edge.\r\nBy \"recursively,\" we mean that after finishing with a node we can check its parents to see if the parents have no outgoing edges as well."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 423,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Now our graph is basically a bunch of cycles.\r\nAssuming that the intersection of all cycles is not empty, we reduce the cycles node by node.\r\nThe last node standing is be the intersection."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 427,
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
      lineNumber: 431,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 433,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 433,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 433,
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
