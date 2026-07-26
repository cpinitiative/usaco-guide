"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://github.com/mostafa-saad/MyCompetitiveProgramming/blob/master/Olympiad/COCI/official/2017/contest2_solutions/solutions.pdf",
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
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-initial-analysis",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-initial-analysis",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Initial Analysis"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's first try to transform the terms of the game into something less arbitrary."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since Stjepan can't backtrack because he marks all nodes he visits himself, he\r\ncan only move ", _jsxDEV(_components.em, {
        children: "down"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 15
      }, this), " the tree, increasing his depth as he goes.\r\nGiven this, we can make a series of observations:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Daniel can effectively \"cut off\" an entire subtree by marking a node, because\r\nthen Stjepan can't get through that one node. Note that this node has to be at a level\r\ndeeper than Stjepan's current level."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If we can't prevent Stjepan from reaching a node of depth ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 16,
          columnNumber: 62
        }, this), " (with the root being of\r\ndepth ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 10
        }, this), "), then the game cannot always end in at most ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 59
        }, this), " moves."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Since we've already \"lost\" if Stjepan reaches depth ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 56
        }, this), ", we don't care about anything\r\nbelow depth ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 16
        }, this), ". We can also remove any nodes that don't lead to a depth of at least ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 89
        }, this), ".\r\n", _jsxDEV(_components.strong, {
          children: "Note that we won't consider any of these irrelevant nodes from here."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 4
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "From the first observation, we can see that an optimal strategy would be to mark\r\nat most one node at each depth (excluding the root)."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since marking a node of depth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "d"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 31
      }, this), " makes at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k - d + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 50
      }, this), " nodes off-limit and\r\nwe can mark nodes from depth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 30
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 37
      }, this), ", if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{k \\cdot (k + 1)}{2} \\geq n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 45
      }, this), ",\r\nthe game can always end in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 28
      }, this), " moves."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 25,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["That reduces the maximum value of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 35
      }, this), " we have to consider down to around 30, which\r\nunfortunately is still too large for an exponential time solution. But it is\r\n", _jsxDEV(_components.em, {
        children: "something"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 1
      }, this), "! Let's see if we can cut the bounds down further: 20 would be a good breakpoint."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 29,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-further-analysis",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-further-analysis",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Further Analysis"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To limit the maximum number of steps to a point where bitwise DP is feasible,\r\nwe have to prove that a game can ", _jsxDEV(_components.em, {
        children: "always"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 34
      }, this), " end in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 50
      }, this), " moves if ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k^2 \\geq n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 63
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since each move results in breaking a tree down into a bunch of smaller trees,\r\nwe can do a ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Mathematical_induction",
        rel: "nofollow",
        target: "_blank",
        children: "proof by induction"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 13
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 38,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 14
      }, this), " as the total number of nodes that haven't been made invalid yet\r\nafter ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 7
      }, this), " moves, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 22
      }, this), " as the number of valid nodes Stjepan\r\ncan move to after ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 19
      }, this), " moves (aka the number of valid nodes of depth ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 69
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For example, let's say that we were at a depth of 1 in the following tree:\r\n", _jsxDEV(_components.img, {
        src: "/solutions/gold/coci-16-burza/fork.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we cut off node 2, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 23
      }, this), " would be 3 and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 1
      }, this), " would be 1, since Stjepan can only move to node 3."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Our base case for the induction is the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 51,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_r \\leq (k-r)^2"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is true for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r=0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 18
      }, this), ". Now, we just have to show that given the above,"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_{r+1} \\leq (k-r-1)^2 = (k-r)^2 - 2r + 2k - 1"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we show this, we'll know that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_r \\leq (k-r)^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 34
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r\\lt k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 57
      }, this), ".\r\nSubstituting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r = k - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 61,
        columnNumber: 14
      }, this), ", we get"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_{k-1} \\leq (k - (k - 1))^2 = 1"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 62,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This would guarantee that after ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 33
      }, this), " moves, there is at most one valid node remaining for Stjepan to move to.\r\nSince Daniel would be the first to move on turn ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 49
      }, this), ", he would place his final mark on this single remaining node.\r\nStjepan would then be left with zero valid adjacent nodes to step on, preventing his ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 86
      }, this), "-th move and securing Daniel's win."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To prove the inductive step, let's first define a more concrete strategy:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "At each level, cut off the node with the largest subtree size that hasn't been already\r\ncut off. If there's multiple nodes with this quality, cut off any of them."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 71,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we follow the strategy defined earlier, at each turn we'll always cut off at least ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\frac{n_r}{t_r}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 87
      }, this), "\r\nnodes and also leave ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_r - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 22
      }, this), " nodes behind, since they're now above our current depth.\r\nThis yield the following inequality:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 74,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_{r+1} \\leq n_r - \\frac{n_r}{t_r} - (t_r - 1)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 79,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["While this is a meaningful relationship, the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t_r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 46
      }, this), " terms are a bit nasty.\r\nIt'd be great if we could just have a relation between ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 56
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_{r+1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 66
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 82,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Fortunately, through algebraic manipulation, it is possible to obtain the following inequality:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 85,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_r - \\frac{n_r}{t_r} - (t_r - 1) \\leq n_r - 2\\sqrt{n_r} + 1"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Chaining this with the above inequality, we get"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 89,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_{r+1} \\leq n_r - 2\\sqrt{n_r} + 1"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 90,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since we know that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_r \\leq (k-r)^2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 20
      }, this), " and by extension ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\sqrt{n_r} \\leq k-r"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 56
      }, this), ", we can substitute\r\nthose terms to prove our desired expression:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "n_{r+1} \\leq (k-r)^2-2(k-r) + 1=(k-r-1)^2"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["And we're done! Since we've shown that any case where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k^2 \\geq n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 55
      }, this), " will result in a win, we just\r\nhave to handle the case where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k \\lt 20"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 100,
        columnNumber: 31
      }, this), ", for which\r\n", _jsxDEV(_components.a, {
        href: "/gold/dp-bitmasks",
        children: "bitmask DP"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 101,
        columnNumber: 1
      }, this), " will suffice."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-bitmask-dp",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bitmask-dp",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Bitmask DP"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 103,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that since a tree is a ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Planar_graph",
        rel: "nofollow",
        target: "_blank",
        children: "planar graph"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 29
      }, this), ",\r\nany node we cut off will cover a continuous segment of leaves."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Take the following tree as an example:\r\n", _jsxDEV(_components.img, {
        src: "/solutions/gold/coci-16-burza/tree.png",
        alt: ""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 108,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["No node can cover only, say, 3 and 14. If it can cover those two then it also ", _jsxDEV(_components.em, {
        children: "must"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 79
      }, this), "\r\ncover node 1."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 111,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This leads us to our DP state. Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{max\\_cover}[S]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 36
      }, this), " be the maximum number of\r\nleaves we can cover from the start given we take one node from each depth specified\r\nin the subset."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 114,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For our transition, we try adding on depths to all previous subsets and iterate through\r\nall nodes in those depths."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For example, if removing a node could cover the third leaf to the fifth leaf and our\r\ncurrent previous subset can cover up to the fourth leaf, then putting those two together\r\nyields a configuration that can cover up to the fifth leaf."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 121,
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
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(2^{\\sqrt{n}} \\cdot \\sqrt{n})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 127,
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
