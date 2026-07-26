"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_walk_gold_open19.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-1-prims-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1-prims-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1: Prim's Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For this problem, we want to maximize the minimum of the number of miles two\r\ncows are willing to walk, henceforth referred to as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 53
      }, this), ". Let's consider a\r\n", _jsxDEV(_components.a, {
        href: "/gold/mst",
        children: "Minimum Spanning Tree (MST)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), " of all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 49
      }, this), " cows. By adding the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 73
      }, this), "-th edge to the\r\nMST, it implies that all edges between the rest ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N - i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 49
      }, this), " components have weights\r\nhigher or equal than this added edge, or, in other words, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 59
      }, this), " is equal to the\r\nweight of this added edge."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In case of splitting the cows into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 36
      }, this), " groups, we remove the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K - 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 62
      }, this), "\r\nedges from the MST which have the maximum weight. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 51
      }, this), " is then equal to the\r\nweight of the minimum of those removed edges. If the edges in the MST are sorted\r\nin ascending order, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 21
      }, this), " would be the weight of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N - K + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 52
      }, this), "-th edge of the\r\nMST."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As the typical implementation of Kruskal's Algorithm requires\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2 \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), " time for a dense graph as in our case, we use instead\r\nPrim's Algorithm with linear search for the closest vertex. Each scan only takes\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 1
      }, this), " time, and we only have to do ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 29,
        columnNumber: 47
      }, this), " scans."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
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
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-2-kruskals-algorithm--two-pass-radix-sort",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2-kruskals-algorithm--two-pass-radix-sort",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2: Kruskal's Algorithm & Two-Pass Radix Sort"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 177,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Alternatively, we can also use Kruskal's Algorithm to construct our MST. Note\r\nthat only the step of sorting all edges takes too long time. If we manage to\r\nsort all edges in linear time, we might be able to solve it with Kruskal's\r\nAlgorithm as well."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 179,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To sort these edges, we can apply a two-pass radix sort. In particular, we first\r\nuse counting sort to sort the first 16 bits (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[0, 2^{16})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 185,
        columnNumber: 46
      }, this), ") of the weights. Then,\r\nin the second iteration, we sort the rest 16 bits (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[2^{16}, 2^{32})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 186,
        columnNumber: 52
      }, this), "). After the\r\nsorting process, we apply the unmodified Kruskal's Algorithm on the edges and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 1
      }, this), " is equal to the weight of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N - K + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 35
      }, this), "-th longest edge of the MST."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
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
      lineNumber: 190,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 192,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution-3-math",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-3-math",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 3: Math"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 302,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Since this problem has its roots in optimizing a given weight expression, we are\r\nmotivated to use math."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 304,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, we can use modular arithmetic to find a direct expression for the modular\r\nresidue. The goal is to find an expression for the modular residue involving\r\nonly basic operations that we will be able to optimize with mathematical\r\ntechniques. Using modular arithmetic properties (negative numbers in modular\r\narithmetic), consider the expression ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pmod{2019201997}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 311,
        columnNumber: 38
      }, this), " to reduce the numbers:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 307,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "2019201913x+2019201949y \\equiv - 84 x - 48 y \\pmod {2019201997}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 313,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Since ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x,y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 317,
        columnNumber: 7
      }, this), " are bounded by ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N \\leq 7500,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 317,
        columnNumber: 28
      }, this), " this expression will always give a\r\nnegative value whose absolute value does not exceed the modulus ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2019201997."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 318,
        columnNumber: 65
      }, this), "\r\nThus, we can easily find an expression for the modular residue from here if we\r\njust shift up by the modulus ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2019201997"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 320,
        columnNumber: 30
      }, this), " once:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 317,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "(2019201913x+2019201949y) \\mod 2019201997 = 2019201997 - 84 x - 48 y."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 322,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, it remains to optimize this expression. Formally, we must find a\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 1
      }, this), "-partition of the cows such that"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 326,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\min\\limits_{x,y \\, \\text{in different groups}} (2019201997 - 84 x - 48 y)"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 329,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "is maximized."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 333,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, let's analyze the function's behavior: for large ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x,y,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 335,
        columnNumber: 55
      }, this), " the expression becomes\r\nsmall, and for small ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x,y,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 336,
        columnNumber: 22
      }, this), " the expression becomes large."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 335,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["But remembering the condition that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x,y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 338,
        columnNumber: 36
      }, this), " must be in different groups to\r\ncontribute to the answer, this means that large ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x,y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 339,
        columnNumber: 49
      }, this), " should be together in the\r\nsame group (to greedily avoid making the expression small) and small ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x,y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 340,
        columnNumber: 70
      }, this), "\r\nshould be in different groups (to greedily make the expression large). This\r\nleads to the following greedy strategy:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 338,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Make one group with all the largest cows that can fit and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 344,
        columnNumber: 59
      }, this), " groups with all\r\nthe smallest cows. Of course, the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 345,
        columnNumber: 35
      }, this), " smallest cows are just ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1 \\dots k-1,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 345,
        columnNumber: 64
      }, this), " so\r\nthis means that the other ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n-(k-1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 346,
        columnNumber: 27
      }, this), " cows will be in the large group."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 344,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now that we have pinpointed the optimal grouping, we can find the answer by\r\ngoing back to the question: we want to minimize the expression. To minimize the\r\nexpression, we should greedily choose the largest cows that are in different\r\ngroups (since large ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x,y"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 351,
        columnNumber: 21
      }, this), " make the expression smaller). Clearly, this means that\r\nwe should take cow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "n,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 352,
        columnNumber: 20
      }, this), " the largest cow in the group of large cows, and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k-1,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 352,
        columnNumber: 73
      }, this), "\r\nthe largest cow not in the group of large cows."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 348,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Recall that the problem statement requires ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x < y,"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 355,
        columnNumber: 44
      }, this), " so we have\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x = k - 1, y = n."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 356,
        columnNumber: 1
      }, this), " Our answer is as easy as a substitution of these values into\r\nthe modular residue expression ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2019201997 - 84 x - 48 y:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 357,
        columnNumber: 32
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 355,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "2019201997 - 84 (k-1) - 48 n"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 359,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In retrospect, this solution is equivalent to performing Kruskal's MST algorithm\r\nby hand when we analyze the edge weight expression and use greedy logic to\r\ncreate the optimal grouping. (So the previous solutions will find the exact same\r\ngrouping.)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 363,
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
      lineNumber: 368,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 370,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 370,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 370,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Senpat's implementation:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 372,
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
