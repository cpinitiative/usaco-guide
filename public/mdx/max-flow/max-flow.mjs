"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
      id: "user-content-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
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
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Edmonds%E2%80%93Karp_algorithm",
        rel: "nofollow",
        target: "_blank",
        children: "Edmonds-Karp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 5
      }, this), "\r\nalgorithm uses a greedy approach to solve the maximum flow problem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The download speed (the flow) can be improved as long as we can find\r\na non-negative capacity augmenting path from the source (the server) to the sink (Kotivalo's computer).\r\nWe use BFS to find this path."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then, we update the weights of the edges along this augmenting path.\r\nEach edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 11
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 16
      }, this), " loses weight equivalent to its capacity in the augmenting path,\r\nwhile each reverse edge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 25
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 30
      }, this), " gains this weight."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It can be\r\n", _jsxDEV(_components.a, {
        href: "https://brilliant.org/wiki/edmonds-karp-algorithm",
        rel: "nofollow",
        target: "_blank",
        children: "proven"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "\r\nthat the total number of flow augmentations(BFS calls) is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(VE)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 59
      }, this), "\r\nand that each BFS call requires ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(E)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 33
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
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
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(VE^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-push-relabel-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-push-relabel-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Push-Relabel Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 102,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Push%E2%80%93relabel_maximum_flow_algorithm",
        rel: "nofollow",
        target: "_blank",
        children: "Push-Relabel Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 5
      }, this), " is an alternative solution to finding the maximum flow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To find the maximum flow, we'll handle a ", _jsxDEV(_components.strong, {
        children: "preflow"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 42
      }, this), ".\r\nThe only difference between this and a normal flow is that the incoming flow can exceed the outgoing flow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 106,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's define the excess flow of node u as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "in_u - out_u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 43
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "in"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 65
      }, this), " is the incoming flow and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "out"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 95
      }, this), " is the outgoing flow."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 109,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The algorithm starts with an initial preflow where the source has an excess flow. At every stage, it picks a node with the excess flow and ", _jsxDEV(_components.strong, {
        children: "pushes"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 140
      }, this), " the excess to its neighbors, if the capacity supports it.\r\nTo push excess flow from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 31
      }, this), " to node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 43
      }, this), ", we define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\Delta = min(excess_u, capacity_{u,v} - flow_{u,v})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 58
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\Delta"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 119
      }, this), " is the maximum supported flow by the\r\nedge ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(u, v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 6
      }, this), ". The process stops when no more excess nodes exist in the flow network."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 111,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Another important feature of the algorithm is the ", _jsxDEV(_components.strong, {
        children: "labeling"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 51
      }, this), " function ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "h"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 73
      }, this), ", also known as the height function, which assigns each node an\r\ninteger. One labeling in valid if satisfies the following conditions: ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "h_{source} = |V|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 71
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "h_{sink} = 0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 91
      }, this), ", and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "h_u \\le h_v + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 111
      }, this), ". If there is an edge from node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 160
      }, this), "\r\nto node ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 9
      }, this), " with positive capacity, i.e. it supports more flow. The height function tells us where to send the excess flow, and where it's needed. It's like water, it can only\r\nflow from top to bottom."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 115,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To summarize: Start with a valid preflow and a valid labeling. In each step, for every excess node, try to push the excess flow to the node's neighbors. After each step check if the flow and the labeling are still valid. If they are and there are no more paths between the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "source"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 120,
        columnNumber: 274
      }, this), " and the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "sink"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 120,
        columnNumber: 291
      }, this), ", it means the maximum flow has been found."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The difference between the Edmonds-Karp (or Ford-Fulkerson) and the Push-Relabel algorithm is that the former keeps a valid flow all the time and improves it while\r\nthere are augmenting paths, while in the Push-Relabel there doesn't exist an augmenting path at any time, and it improves the preflow until it reaches the maximum flow."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 122,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(V^2E)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 228,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-flows",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-flows",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Flows"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 243,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-bipartite-matching",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-bipartite-matching",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Bipartite Matching"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 247,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "It's recommended that you solve the first problem - Download Speed - in the section before trying this one."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 251,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solution-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 253,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A bipartite graph doesn't seem like to have anything in common with a flow network, but we can shift our point of view just by\r\nadding the source connected to the nodes in set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "U"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 49
      }, this), " and the sink connected to the nodes in set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 256,
        columnNumber: 96
      }, this), ". And that's all.\r\nNow we have a flow network where every capacity is equal to 1."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 255,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We transformed our bipartite graph into a network flow so the maximum network flow is equal\r\nto the maximum matching.\r\nNow, we can apply our favorite max flow algorithm to solve the problem!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 259,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["Time Complexity: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(VE^2)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 263,
          columnNumber: 20
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 263,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-solution-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 265,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "However, we can do better than this.\r\nFirst let's define some properties of matching algorithms."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 267,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let's say the set ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 270,
        columnNumber: 19
      }, this), " contains all the edges that the maximum matching consists of."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 270,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We define an ", _jsxDEV(_components.strong, {
        children: "alternating path"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 14
      }, this), " as a path whose edges are in the matching, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 78
      }, this), ", and not in the matching, in an alternating fashion. An alternating path stars with an unmatched node and ends once it cannot append another edge while maintaining an alternating sequence."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 272,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["An ", _jsxDEV(_components.strong, {
        children: "augmenting path"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 274,
        columnNumber: 4
      }, this), " is built upon the alternating path and unmatched nodes at both ends - the nodes are not included in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 274,
        columnNumber: 124
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 274,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The maximum matching ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 276,
        columnNumber: 22
      }, this), " can be further improved if and only if an augmenting path is found in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 276,
        columnNumber: 96
      }, this), ", otherwise ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 276,
        columnNumber: 111
      }, this), " is the maximum matching. It may seem difficult to understand, but the main idea is as follows:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 276,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "The maximum matching can be further improved as long as the alternating sequence can be extended.\r\nFor a better understanding, you can imagine the shoelaces as an alternating path in a bipartite graph - or the sneakers."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 277,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 277,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The algorithm described above is called the ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Hopcroft%E2%80%93Karp_algorithm",
        rel: "nofollow",
        target: "_blank",
        children: "Hopcroft-Karp algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 280,
        columnNumber: 45
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 280,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here's an animation of the algorithm if you're still a bit confused:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 282,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: ["Time Complexity: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(E\\sqrt{V})"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 288,
          columnNumber: 20
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 288,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 288,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-dinics-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-dinics-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Dinic's Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 387,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: "Hopcroft-Karp Bipartite Matching?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 393,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 407,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-breaking-flows",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-breaking-flows",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Breaking Flows"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 417,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "When the constraints are too high ..."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 419,
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
