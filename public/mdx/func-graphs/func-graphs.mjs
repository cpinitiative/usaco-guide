"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In a ", _jsxDEV(_components.strong, {
        children: "functional graph"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 6
      }, this), ", each node has exactly one out-edge. This is also\r\ncommonly referred to as a ", _jsxDEV(_components.strong, {
        children: "successor graph"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 27
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "You can think of every connected component of a functional graph as a rooted tree with all edges directed toward the root plus an additional edge going out of the root."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-floyds-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-floyds-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Floyd's Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 15,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Floyd's Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), ", also commonly referred to as the ", _jsxDEV(_components.strong, {
        children: "Tortoise and Hare\r\nAlgorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 57
      }, this), ", is capable of detecting cycles in a functional graph in\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), " time and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 27
      }, this), " memory (not counting the graph\r\nitself)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-example---cooperative-game",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---cooperative-game",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Cooperative Game"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h3, {
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
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/65825",
        rel: "nofollow",
        target: "_blank",
        children: "Official Tutorial"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Using ", _jsxDEV(_components.strong, {
        children: "Floyd's Algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 7
      }, this), ", we can find some node on the cycle after\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2c\\left\\lceil \\frac{t}{c}\\right\\rceil"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 1
      }, this), " queries. Then we can find the first node\r\nin the cycle after another ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 28
      }, this), " queries."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: "Do you see why this is equivalent to the code mentioned in CPH?"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 187,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 232,
        columnNumber: 1
      }, this), " corresponds to friend ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 232,
        columnNumber: 27
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 232,
        columnNumber: 35
      }, this), " corresponds to friend ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 232,
        columnNumber: 61
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 232,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 1
      }, this), " corresponds to friends ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2\\ldots 9"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 28
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 44
      }, this), " corresponds to friends ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 71
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 273,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 272,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-example---badge",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example---badge",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example - Badge"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 275,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["While the constraints allow for a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 279,
        columnNumber: 35
      }, this), " solution, it's possible to do this in just ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 279,
        columnNumber: 97
      }, this), "!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 279,
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
      lineNumber: 281,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "This code generates the answer independently for each connected component. Note\r\nthat it uses 0-indexing, not 1-indexing."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 439,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Try simulating the algorithm on the following directed graph in CSAcademy's\r\n", _jsxDEV(_components.a, {
        href: "https://csacademy.com/app/graph_editor/",
        rel: "nofollow",
        target: "_blank",
        children: "Graph Editor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 443,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 442,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "0 1\r\n1 2\r\n2 3\r\n3 4\r\n4 2\r\n5 6\r\n6 1\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 445,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 445,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["On the first step, we make the following recursive calls: ", _jsxDEV(_components.code, {
            children: "dfs(0)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 455,
            columnNumber: 61
          }, this), " -> ", _jsxDEV(_components.code, {
            children: "dfs(1)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 455,
            columnNumber: 73
          }, this), "\r\n-> ", _jsxDEV(_components.code, {
            children: "dfs(2)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 456,
            columnNumber: 6
          }, this), " -> ", _jsxDEV(_components.code, {
            children: "dfs(3)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 456,
            columnNumber: 18
          }, this), " -> ", _jsxDEV(_components.code, {
            children: "dfs(4)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 456,
            columnNumber: 30
          }, this), " -> ", _jsxDEV(_components.code, {
            children: "dfs(2)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 456,
            columnNumber: 42
          }, this), ", at which point we stop since\r\n", _jsxDEV(_components.code, {
            children: "ans[2] = -1"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 457,
            columnNumber: 3
          }, this), ". Since we have reached ", _jsxDEV(_components.code, {
            children: "2"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 457,
            columnNumber: 40
          }, this), " for the second time, we know that ", _jsxDEV(_components.code, {
            children: "2"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 457,
            columnNumber: 78
          }, this), "\r\nis part of a cycle and ", _jsxDEV(_components.code, {
            children: "ans[2] = 2"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 458,
            columnNumber: 26
          }, this), ". Similarly, ", _jsxDEV(_components.code, {
            children: "ans[3] = 3"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 458,
            columnNumber: 51
          }, this), " and ", _jsxDEV(_components.code, {
            children: "ans[4] = 4"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 458,
            columnNumber: 68
          }, this), "\r\nsince they are part of the cycle. On the other hand, ", _jsxDEV(_components.code, {
            children: "ans[0] = ans[1] = 2"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 459,
            columnNumber: 56
          }, this), "\r\nsince neither of them are part of the cycle."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 455,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 455,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Later, we make the following recursive calls when we start at vertex ", _jsxDEV(_components.code, {
            children: "5"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 462,
            columnNumber: 72
          }, this), ":\r\n", _jsxDEV(_components.code, {
            children: "dfs(5)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 463,
            columnNumber: 3
          }, this), " -> ", _jsxDEV(_components.code, {
            children: "dfs(6)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 463,
            columnNumber: 15
          }, this), " -> ", _jsxDEV(_components.code, {
            children: "dfs(1)"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 463,
            columnNumber: 27
          }, this), ". We already know that ", _jsxDEV(_components.code, {
            children: "ans[1] = 2"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 463,
            columnNumber: 58
          }, this), ", so\r\n", _jsxDEV(_components.code, {
            children: "ans[5] = ans[6] = 2"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 464,
            columnNumber: 3
          }, this), " as well."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 462,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 462,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 455,
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
      lineNumber: 466,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "floyd(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 468,
        columnNumber: 1
      }, this), " generates answers for all vertices in the connected component containing\r\n", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 469,
        columnNumber: 1
      }, this), ".\r\nNote that this requires reverse adjacency lists.\r\nIn the code, these are stored in the variable ", _jsxDEV(_components.code, {
        children: "radj"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 471,
        columnNumber: 47
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 468,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["It's also possible to use ", _jsxDEV(_components.code, {
        children: "floyd(x)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 696,
        columnNumber: 27
      }, this), " to generate answers for all vertices in the connected component\r\ncontaining ", _jsxDEV(_components.code, {
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 697,
        columnNumber: 12
      }, this), " without using adjacency lists."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 696,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-count-cycles",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-count-cycles",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Count Cycles"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 926,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The following code counts the number of cycles in such a graph. The\r\n\"stack\" contains nodes that can reach the current node. If the current node\r\npoints to a node ", _jsxDEV(_components.code, {
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 18
      }, this), " on the stack (", _jsxDEV(_components.code, {
        children: "on_stack[v]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 930,
        columnNumber: 36
      }, this), " is true), then we know that a\r\ncycle has been created. However, if the current node points to a node ", _jsxDEV(_components.code, {
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 931,
        columnNumber: 71
      }, this), " that\r\nhas been previously visited but is not on the stack, then we know that the\r\ncurrent chain of nodes points into a cycle that has already been considered."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 928,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-k-th-successor",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-k-th-successor",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        className: "language-math",
        children: "K"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1033,
        columnNumber: 4
      }, this), "-th Successor"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1033,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As described briefly in CPH 16.3, the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1035,
        columnNumber: 39
      }, this), "-th successor of a certain node in a functional graph can be found in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\log k)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1035,
        columnNumber: 112
      }, this), " time\r\nusing ", _jsxDEV(_components.strong, {
        children: "binary jumping"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1036,
        columnNumber: 7
      }, this), ", given ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n \\log u)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1036,
        columnNumber: 33
      }, this), " time of preprocessing where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1036,
        columnNumber: 85
      }, this), " is the maximum length of each jump. See the Platinum ", _jsxDEV(_components.a, {
        href: "/plat/binary-jump",
        children: "module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1036,
        columnNumber: 142
      }, this), " for details."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1035,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 1038,
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
      lineNumber: 1044,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Additional problems involving functional graphs can be found in the\r\n", _jsxDEV(_components.a, {
        href: "/gold/dp-trees",
        children: "Tree DP"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1157,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.a, {
        href: "/plat/bin-jump",
        children: "Binary Jumping"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1157,
        columnNumber: 31
      }, this), " modules."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1156,
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
