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
    p: "p",
    pre: "pre",
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
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The resources below include many clever applications of min cut, including the\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Closure_problem",
        rel: "nofollow",
        target: "_blank",
        children: "Closure Problem"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-min-cut-max-flow-theorem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-min-cut-max-flow-theorem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Min-Cut Max-Flow Theorem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Given a flow network with source ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 34
      }, this), " and sink ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 47
      }, this), ", an ", _jsxDEV(_components.strong, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 57
        }, this), "-", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 61
        }, this), " cut"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 55
      }, this), " is a\r\npartition of the vertices into two sets ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 41
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 49
      }, this), " with ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s \\in S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 58
      }, this), " and\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t \\in T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), ". Its ", _jsxDEV(_components.strong, {
        children: "capacity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 16
      }, this), " is the total capacity of the edges crossing from the\r\nsource side to the sink side:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 21,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\operatorname{cap}(S, T) = \\sum_{e:\\, S \\to T} c(e)."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["(Edges pointing the other way, from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 37
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 44
      }, this), ", contribute nothing.) Cutting all\r\nof these edges disconnects ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 28
      }, this), " from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 31,
        columnNumber: 37
      }, this), ", so intuitively the capacity of a cut is\r\nan upper bound on how much flow can get from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 46
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 53
      }, this), ". Indeed, for ", _jsxDEV(_components.em, {
        children: "any"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 70
      }, this), " flow\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.em, {
        children: "any"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 9
      }, this), " cut ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(S, T)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 19
      }, this), ","]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\operatorname{val}(f) = \\sum_{e:\\, S \\to T} f(e) - \\sum_{e:\\, T \\to S} f(e)\r\n\\le \\sum_{e:\\, S \\to T} c(e) = \\operatorname{cap}(S, T),"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\operatorname{val}(f)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 7
      }, this), " is the total flow from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 54
      }, this), " to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 40,
        columnNumber: 61
      }, this), ". So every flow is\r\nbounded by every cut."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/6_Advanced/Min_Cut/cut.png",
        alt: "500|center"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 43,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here is an illustration of a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s-t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 30
      }, this), " cut: red nodes are in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 58
      }, this), ", and blue nodes are in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 85
      }, this), ". Importantly, there is no need for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 124
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 132
      }, this), " to be connected: the only requirement is that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s \\in S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 182
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t \\in T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 196
      }, this), ". The capacity of this cut is the sum of the capacities underlined in green, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2 + 1 = 3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 282
      }, this), ". The flow across this cut derives from the numbers underlined in yellow, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2 - 1 + 1 = 2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 367
      }, this), ", which we note is equivalent to the actual ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s-t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 426
      }, this), " flow, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\operatorname{val}(f)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 438
      }, this), ". Also note that in this instance, the flow across the cut (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 521
      }, this), ") is less than its capacity (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 553
      }, this), "). However, if we instead choose ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S = \\{s\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 589
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T = V \\setminus \\{s\\}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 605
      }, this), ", the flow across the cut (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 655
      }, this), ") and its capacity (", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 678
      }, this), ") will be equal."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.strong, {
        children: "min-cut max-flow theorem"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 5
      }, this), " states that in general, we can always achieve such equality:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["The maximum value of an ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 27
        }, this), "-", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 31
        }, this), " flow equals the minimum capacity of an\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "s"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 3
        }, this), "-", _jsxDEV(_components.code, {
          className: "language-math",
          children: "t"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 7
        }, this), " cut."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To show tightness, we just need to construct a flow ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 53
      }, this), " and cut ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(S, T)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 65
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\operatorname{val}(f) = \\operatorname{cap}(S, T)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 84
      }, this), ". To do this, we will let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 160
      }, this), " be any maximum flow, then use the fact that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 208
      }, this), " cannot have any remaining augmenting paths to construct a minimum capacity ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(S, T)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 287
      }, this), " cut. In fact, it turns out this cut can be constructed by letting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 362
      }, this), " be the set of nodes reachable from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 401
      }, this), " in the residual graph (and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 432
      }, this), " be the set of all other nodes, i.e. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "V - S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 52,
        columnNumber: 472
      }, this), "). To see why this is the case, consider the following diagram:\r\n", _jsxDEV(_components.img, {
        src: "/content/6_Advanced/Min_Cut/mcmf.png",
        alt: "600|center"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 52,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["By definition, the red edges must be saturated to capacity, otherwise nodes in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 80
      }, this), " would be able to reach nodes in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 55,
        columnNumber: 116
      }, this), ". Similarly, the blue edges must have 0 flow. Therefore, the flow across this cut equals the capacity of this cut, as desired."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-minimum-node-covers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-minimum-node-covers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Minimum Node Covers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---coin-grid",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---coin-grid",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Coin Grid"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This problem asks us to find a ", _jsxDEV(_components.strong, {
        children: "minimum node cover"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 69,
        columnNumber: 32
      }, this), " of a bipartite graph.\r\nConstruct a flow graph with vertices labeled ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\ldots 2N+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 46
      }, this), ", source ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 69
      }, this), ", sink\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "2N+1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 71,
        columnNumber: 1
      }, this), ", and the following edges:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Edges from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0\\to i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 73,
          columnNumber: 14
        }, this), " with capacity ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 73,
          columnNumber: 37
        }, this), " for each ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1\\le i\\le N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 73,
          columnNumber: 50
        }, this), ". Cutting the\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 74,
          columnNumber: 3
        }, this), "-th such edge corresponds to choosing the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 74,
          columnNumber: 48
        }, this), "-th row."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Edges from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N+i\\to 2N+1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 75,
          columnNumber: 14
        }, this), " with capacity ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 75,
          columnNumber: 42
        }, this), " for each ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1\\le i\\le N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 75,
          columnNumber: 55
        }, this), ". Cutting the\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 76,
          columnNumber: 3
        }, this), "-th such edge corresponds to choosing the ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 76,
          columnNumber: 48
        }, this), "-th column."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If there exists a coin in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "(r,c)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 77,
          columnNumber: 29
        }, this), " add an edge from ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r\\to N+c"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 77,
          columnNumber: 54
        }, this), " with capacity\r\n", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\infty"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 78,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 73,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First we find a max flow, which tells us the number of edges with capacity 1 we\r\nneed to cut. To find the min cut itself, BFS from the source once more time.\r\nEdges ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(a,b)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 82,
        columnNumber: 7
      }, this), " connecting vertices that are reachable from the source\r\n(", _jsxDEV(_components.code, {
        children: "lev[a] != -1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 2
      }, this), ") to vertices that aren't (", _jsxDEV(_components.code, {
        children: "lev[b] == -1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 83,
        columnNumber: 43
      }, this), ") are part of the\r\nminimum cut. In this case, each of these edges must be of the form ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(0,i)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 84,
        columnNumber: 68
      }, this), " or\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "(i+N,2N+1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 1
      }, this), " for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1\\le i\\le N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 18
      }, this), ". Each cut edge corresponds to a row or column we\r\nremove coins from."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that edges of the form ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "r\\to N+c"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 29
      }, this), " can't be cut because they have capacity\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\infty"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 89,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "struct Dinic {     // flow template\r\n\tusing F = ll;  // flow type\r\n\tstruct Edge {\r\n\t\tint to;\r\n\t\tF flo, cap;\r\n\t};\r\n\tint N;\r\n\tV<Edge> eds;\r\n\tV<vi> adj;\r\n\tvoid init(int _N) {\r\n\t\tN = _N;\r\n\t\tadj.rsz(N), cur.rsz(N);\r\n\t}\r\n\t/// void reset() { trav(e,eds) e.flo = 0; }\r\n\tvoid ae(int u, int v, F cap, F rcap = 0) {\r\n\t\tassert(min(cap, rcap) >= 0);\r\n\t\tadj[u].pb(sz(eds));\r\n\t\teds.pb({v, 0, cap});\r\n\t\tadj[v].pb(sz(eds));\r\n\t\teds.pb({u, 0, rcap});\r\n\t}\r\n\tvi lev;\r\n\tV<vi::iterator> cur;\r\n\tbool bfs(int s, int t) {  // level = shortest distance from source\r\n\t\tlev = vi(N, -1);\r\n\t\tF0R(i, N) cur[i] = begin(adj[i]);\r\n\t\tqueue<int> q({s});\r\n\t\tlev[s] = 0;\r\n\t\twhile (sz(q)) {\r\n\t\t\tint u = q.ft;\r\n\t\t\tq.pop();\r\n\t\t\ttrav(e, adj[u]) {\r\n\t\t\t\tconst Edge &E = eds[e];\r\n\t\t\t\tint v = E.to;\r\n\t\t\t\tif (lev[v] < 0 && E.flo < E.cap) q.push(v), lev[v] = lev[u] + 1;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn lev[t] >= 0;\r\n\t}\r\n\tF dfs(int v, int t, F flo) {\r\n\t\tif (v == t) return flo;\r\n\t\tfor (; cur[v] != end(adj[v]); cur[v]++) {\r\n\t\t\tEdge &E = eds[*cur[v]];\r\n\t\t\tif (lev[E.to] != lev[v] + 1 || E.flo == E.cap) continue;\r\n\t\t\tF df = dfs(E.to, t, min(flo, E.cap - E.flo));\r\n\t\t\tif (df) {\r\n\t\t\t\tE.flo += df;\r\n\t\t\t\teds[*cur[v] ^ 1].flo -= df;\r\n\t\t\t\treturn df;\r\n\t\t\t}  // saturated >=1 one edge\r\n\t\t}\r\n\t\treturn 0;\r\n\t}\r\n\tF maxFlow(int s, int t) {\r\n\t\tF tot = 0;\r\n\t\twhile (bfs(s, t))\r\n\t\t\twhile (F df = dfs(s, t, numeric_limits<F>::max())) tot += df;\r\n\t\treturn tot;\r\n\t}\r\n};\r\n\r\nint main() {\r\n\tint n;\r\n\tre(n);\r\n\tDinic D;\r\n\tD.init(2 * n + 2);\r\n\tF0R(i, n) {\r\n\t\tD.ae(0, i + 1, 1);\r\n\t\tD.ae(i + 1 + n, 2 * n + 1, 1);\r\n\t\tF0R(j, n) {\r\n\t\t\tchar c;\r\n\t\t\tre(c);\r\n\t\t\tif (c == 'o') D.ae(i + 1, j + 1 + n, MOD);  // some big capacity -> not cut\r\n\t\t}\r\n\t}\r\n\tps(D.maxFlow(0, 2 * n + 1));\r\n\tD.bfs(0, 2 * n + 1);\r\n\tFOR(i, 1, n + 1) if (D.lev[i] < 0) ps(1, i);  // edge from 0 to i is cut\r\n\tFOR(i, 1, n + 1)\r\n\tif (D.lev[i + n] >= 0) ps(2, i);  // edge from i+n to 2*n+1 is cut\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 91,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-minimum-path-covers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-minimum-path-covers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Minimum Path Covers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 175,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-solution---the-wrath-of-kahn",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---the-wrath-of-kahn",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - The Wrath of Kahn"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 192,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Ignore all vertices of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "G"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 24
      }, this), " that can never be part of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 194,
        columnNumber: 54
      }, this), ". Then our goal is to\r\nfind the size of a maximum antichain in the remaining graph, which as mentioned\r\nin CPH is just an instance of minimum path cover."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 194,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "TopoSort<500> T;\r\nint n, m;\r\nbool link[500][500];\r\nvi out[500];\r\nDinic<1005> D;\r\n\r\nint main() {\r\n\tsetIO();\r\n\tre(n, m);\r\n\tF0R(i, m) {\r\n\t\tint x, y;\r\n\t\tre(x, y);\r\n\t\tT.ae(x, y);\r\n\t\tlink[x][y] = 1;\r\n\t}\r\n\tF0R(k, n) F0R(a, n) F0R(b, n) link[a][b] |= link[a][k] & link[k][b];\r\n\tT.sort(n);\r\n\tvi bad;\r\n\tF0R(i, n) if (T.in[i]) bad.pb(i);  // cannot be part of S\r\n\ttrav(a, bad) F0R(i, n) link[a][i] = link[i][a] = 0;\r\n\tF0R(i, n) {\r\n\t\tD.ae(2 * n, i, 1);\r\n\t\tD.ae(i + n, 2 * n + 1, 1);\r\n\t}\r\n\tF0R(i, n) F0R(j, n) if (link[i][j]) D.ae(i, n + j, 1);\r\n\tint chain = n - sz(bad) - D.maxFlow(2 * n + 2, 2 * n, 2 * n + 1);\r\n\tps(chain);\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 198,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 198,
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
      lineNumber: 229,
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
